import { NextRequest } from 'next/server'
import { POST as contactPost } from '../contact/route'

export async function POST(request: NextRequest) {
  return contactPost(request)
}
