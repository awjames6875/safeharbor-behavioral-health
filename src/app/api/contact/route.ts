import { NextRequest, NextResponse } from 'next/server'

/**
 * Safe Harbor Behavioral Health — Contact / Intake API Route
 *
 * Creates a contact in GoHighLevel (GHL) when a website form is submitted.
 *
 * IMPORTANT: For production (Vercel), set the following environment variable:
 *   GHL_API_TOKEN — Bearer token for the GHL API
 *
 * Set this in the Vercel dashboard under Settings → Environment Variables.
 * Do NOT commit the token to source control.
 */

const GHL_LOCATION_ID = 'Ylw7ztfJITaaL834r1L0'
const GHL_API_BASE = 'https://services.leadconnectorhq.com'

interface ContactPayload {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  childName?: string
  childAge?: string
  insurance?: string
  message?: string
  source?: string
  // Additional fields from various forms
  preferredLocation?: string
  serviceInterest?: string
  urgency?: string
  preferredContact?: string
  preferredTime?: string
}

function getApiToken(): string | undefined {
  return (
    process.env.GHL_API_TOKEN ||
    process.env.GHL_PRIVATE_INTEGRATION_TOKEN ||
    process.env.LEADCONNECTOR_API_TOKEN
  )
}

function buildFirstLastName(body: ContactPayload): { firstName: string; lastName: string } {
  const firstName = (body.firstName || '').trim()
  const lastName = (body.lastName || '').trim()
  return { firstName, lastName }
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json()

    if (!body.email && !body.phone) {
      return NextResponse.json(
        { error: 'Email or phone is required' },
        { status: 400 }
      )
    }

    const apiToken = getApiToken()
    const webhookUrl = process.env.GHL_WEBHOOK_URL
    const { firstName, lastName } = buildFirstLastName(body)

    // Build custom fields for GHL (child info, insurance, etc.)
    const customFields = [
      { id: 'child_name', value: body.childName || '' },
      { id: 'child_age', value: body.childAge || '' },
      { id: 'insurance_type', value: body.insurance || '' },
      { id: 'preferred_location', value: body.preferredLocation || '' },
      { id: 'service_interest', value: body.serviceInterest || '' },
      { id: 'urgency', value: body.urgency || '' },
      { id: 'preferred_contact', value: body.preferredContact || '' },
      { id: 'preferred_time', value: body.preferredTime || '' },
    ].filter((field) => field.value)

    // Build the GHL contact payload.
    const ghlPayload: Record<string, unknown> = {
      locationId: GHL_LOCATION_ID,
      firstName,
      lastName,
      email: body.email || '',
      phone: body.phone || '',
      tags: ['website-signup'],
      source: body.source || 'website-contact-form',
      customFields,
    }

    if (body.message) {
      ghlPayload.notes = body.message
    }

    // Optional webhook passthrough for workflows/forms inside GHL.
    if (webhookUrl) {
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...ghlPayload,
          message: body.message || '',
        }),
      })

      if (!webhookResponse.ok) {
        const webhookError = await webhookResponse.text()
        console.error('GHL webhook error:', webhookResponse.status, webhookError)
      }
    }

    // If API token is missing but webhook exists, treat as accepted.
    if (!apiToken && webhookUrl) {
      return NextResponse.json({
        success: true,
        message: 'Contact submitted via webhook',
      })
    }

    if (!apiToken) {
      console.error('GHL token env var is not set')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    const ghlResponse = await fetch(`${GHL_API_BASE}/contacts/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
        Version: '2021-07-28',
      },
      body: JSON.stringify(ghlPayload),
    })

    // GHL can return duplicate-contact style errors when email/phone already exists.
    if (!ghlResponse.ok) {
      const errorText = await ghlResponse.text()
      const duplicate = ghlResponse.status === 409 || /already exists|duplicate/i.test(errorText)
      if (!duplicate) {
        console.error('GHL API error:', ghlResponse.status, errorText)
        return NextResponse.json(
          { error: 'Failed to submit contact information' },
          { status: 502 }
        )
      }
    }

    let contactId: string | undefined
    try {
      const ghlData = await ghlResponse.json()
      contactId = ghlData?.contact?.id
    } catch {
      // Non-JSON responses are acceptable for duplicate/edge responses.
    }

    // Trigger AI voice call via Twilio (Phase 1 — scripted greeting)
    const twilioSid = process.env.TWILIO_ACCOUNT_SID
    const twilioAuth = process.env.TWILIO_AUTH_TOKEN
    const twilioFrom = process.env.TWILIO_PHONE_NUMBER || '+15396667913'
    
    if (twilioSid && twilioAuth && body.phone && body.urgency !== 'crisis') {
      const parentName = firstName || 'there'
      const twiml = `<Response><Say voice="Polly.Joanna">Hi ${parentName}! This is Harbor from Safe Harbor Behavioral Health. We just received your inquiry and wanted to reach out right away. We help children ages 3 to 12 build emotional wellness through programs like our Body and Brain program delivered right at your child's school or daycare. A member of our team will follow up with you very shortly to answer your questions and help you get started. We're here for you and your family. Have a wonderful day!</Say></Response>`
      
      // Clean phone number
      let callTo = body.phone.replace(/[^+\d]/g, '')
      if (!callTo.startsWith('+')) callTo = '+1' + callTo
      
      const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Calls.json`
      const twilioBody = new URLSearchParams({
        To: callTo,
        From: twilioFrom,
        Twiml: twiml,
      })
      
      // Fire and forget — don't block the form response
      fetch(twilioUrl, {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + Buffer.from(`${twilioSid}:${twilioAuth}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: twilioBody.toString(),
      })
      .then(res => res.json())
      .then(data => console.log('Twilio call initiated:', data.sid))
      .catch(err => console.error('Twilio call error:', err))
    }

    // Send Telegram notification to Adam
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN
    const telegramChatId = process.env.TELEGRAM_CHAT_ID || '8537172734'
    if (telegramToken) {
      const urgencyEmoji = body.urgency === 'crisis' ? '🚨' : body.urgency === 'urgent' ? '⚡' : '📋'
      const msg = `${urgencyEmoji} *New Safe Harbor Inquiry*\n\n` +
        `👤 ${firstName} ${lastName}\n` +
        `📱 ${body.phone || 'no phone'}\n` +
        `📧 ${body.email || 'no email'}\n` +
        `👶 Child: ${body.childName || 'not provided'} (age ${body.childAge || '?'})\n` +
        `🏥 Service: ${body.serviceInterest || 'general'}\n` +
        `📍 Location: ${body.preferredLocation || 'any'}\n` +
        `💳 Insurance: ${body.insurance || 'not specified'}\n` +
        `⏰ Urgency: ${body.urgency || 'routine'}\n` +
        (body.message ? `\n💬 "${body.message.slice(0, 200)}"` : '')
      
      fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: msg,
          parse_mode: 'Markdown',
        }),
      }).catch(err => console.error('Telegram notify error:', err))
    }

    return NextResponse.json({
      success: true,
      message: 'Contact submitted successfully',
      contactId,
    })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
