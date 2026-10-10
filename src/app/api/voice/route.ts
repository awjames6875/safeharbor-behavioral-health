import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { SAFEHARBOR_KNOWLEDGE, SYSTEM_PROMPT } from '@/data/voiceAgentKnowledge'

/**
 * Safe Harbor Behavioral Health — Voice Assistant API Route
 *
 * Keeps the Gemini key on the server so it never reaches the browser.
 *
 * IMPORTANT: For production (Vercel), set the following environment variable:
 *   GEMINI_API_KEY — Google Gemini API key
 *
 * Without it this route returns 503 and the chat falls back to demo answers.
 */

interface VoicePayload {
  history?: { role: string; content: string }[]
  text?: string
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Voice assistant not configured' }, { status: 503 })
  }

  try {
    const body: VoicePayload = await request.json()
    const text = (body.text || '').trim()
    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 })
    }
    const history = body.history || []

    const context = `
${SYSTEM_PROMPT}

KNOWLEDGE BASE:
${JSON.stringify(SAFEHARBOR_KNOWLEDGE, null, 2)}

CONVERSATION HISTORY:
${history.map(m => `${m.role}: ${m.content}`).join('\n')}

USER: ${text}

Respond as Safe Harbor's AI assistant. Be concise, warm, and helpful.`

    const model = new GoogleGenerativeAI(apiKey).getGenerativeModel({ model: 'gemini-2.5-flash' })
    const result = await model.generateContent(context)

    return NextResponse.json({ reply: result.response.text() })
  } catch (error) {
    // Log the error only, never the visitor's words
    console.error('Voice API error:', error instanceof Error ? error.message : error)
    return NextResponse.json({ error: 'Voice assistant failed' }, { status: 500 })
  }
}
