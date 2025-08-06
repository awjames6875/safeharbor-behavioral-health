'use client'

import Link from 'next/link'

export default function FloatingBookNowButton() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-4 rounded-full shadow-2xl hover:from-teal-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200 group"
      aria-label="Schedule appointment"
    >
      <div className="flex items-center space-x-2">
        <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span className="font-semibold hidden sm:inline">Book Now</span>
      </div>
      
      {/* Pulse effect */}
      <div className="absolute inset-0 rounded-full bg-teal-500 opacity-75 animate-ping"></div>
    </Link>
  )
}