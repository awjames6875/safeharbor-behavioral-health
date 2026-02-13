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

export async function POST(request: NextRequest) {
  try {
    const body: ContactPayload = await request.json()

    const apiToken = process.env.GHL_API_TOKEN
    if (!apiToken) {
      console.error('GHL_API_TOKEN environment variable is not set')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Split parentName into first/last if firstName not provided separately
    let firstName = body.firstName || ''
    let lastName = body.lastName || ''
    if (!firstName && body.firstName === undefined) {
      // Some forms send a combined name — not applicable here but safe fallback
    }

    // Build custom fields for GHL (child info, insurance, etc.)
    const customFields: Record<string, string> = {}
    if (body.childName) customFields['child_name'] = body.childName
    if (body.childAge) customFields['child_age'] = body.childAge
    if (body.insurance) customFields['insurance_type'] = body.insurance
    if (body.preferredLocation) customFields['preferred_location'] = body.preferredLocation
    if (body.serviceInterest) customFields['service_interest'] = body.serviceInterest
    if (body.urgency) customFields['urgency'] = body.urgency
    if (body.preferredContact) customFields['preferred_contact'] = body.preferredContact
    if (body.preferredTime) customFields['preferred_time'] = body.preferredTime

    // Build the GHL contact payload
    const ghlPayload: Record<string, unknown> = {
      locationId: GHL_LOCATION_ID,
      firstName,
      lastName,
      email: body.email || '',
      phone: body.phone || '',
      tags: ['website-signup'],
      source: body.source || 'website-contact-form',
    }

    // Add notes with message/concerns if provided
    if (body.message) {
      ghlPayload.notes = body.message
    }

    // POST to GHL Contacts API
    const ghlResponse = await fetch(`${GHL_API_BASE}/contacts/`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify(ghlPayload),
    })

    if (!ghlResponse.ok) {
      const errorText = await ghlResponse.text()
      console.error('GHL API error:', ghlResponse.status, errorText)
      return NextResponse.json(
        { error: 'Failed to submit contact information' },
        { status: 502 }
      )
    }

    const ghlData = await ghlResponse.json()

    return NextResponse.json({
      success: true,
      message: 'Contact created successfully',
      contactId: ghlData?.contact?.id,
    })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
