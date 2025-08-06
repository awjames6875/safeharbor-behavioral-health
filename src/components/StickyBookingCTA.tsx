'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function StickyBookingCTA() {
  const [showCTA, setShowCTA] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      setShowCTA(scrollPercentage > 30)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!showCTA) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-teal-500 to-navy-800 text-white shadow-2xl transform transition-transform duration-300">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between px-6 py-3">
        <Link
          href="/contact"
          className="bg-cream-100 text-navy-800 px-6 py-2 rounded-md hover:bg-cream-200 transition-colors font-semibold flex items-center space-x-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Book Now</span>
        </Link>
        
        <div className="text-center">
          <Link href="tel:918-391-3606" className="text-xl font-bold hover:text-cream-100 transition-colors">
            (918) 391-3606
          </Link>
          <p className="text-sm opacity-90">Same-Week Appointments</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-md border border-white/20">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold">We Accept Medicaid</span>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-4 py-3 space-y-3">
        <div className="flex items-center justify-between">
          <Link
            href="/contact"
            className="bg-cream-100 text-navy-800 px-4 py-2 rounded-md hover:bg-cream-200 transition-colors font-semibold text-sm flex items-center space-x-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Book Now</span>
          </Link>
          
          <Link href="tel:918-391-3606" className="text-lg font-bold hover:text-cream-100 transition-colors">
            (918) 391-3606
          </Link>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm px-3 py-2 rounded-md border border-white/20 text-center">
          <div className="flex items-center justify-center space-x-2">
            <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold">We Accept Medicaid • Same-Week Appointments</span>
          </div>
        </div>
      </div>
    </div>
  )
}