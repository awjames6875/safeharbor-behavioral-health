'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function StickyHeader() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isSticky) return null

  return (
    <div className="fixed top-0 left-0 right-0 bg-teal-600 text-white py-2 px-4 shadow-lg z-50 animate-slide-down">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="font-bold text-lg">
            SafeHarbor
          </Link>
          <div className="hidden sm:flex items-center space-x-1 text-sm">
            <span className="bg-green-500 w-2 h-2 rounded-full"></span>
            <span>Medicaid Accepted</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <a
            href="tel:918-391-3606"
            className="bg-white text-teal-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'phone_call', {
                  event_category: 'engagement',
                  event_label: 'sticky_header_call',
                  value: 1
                })
              }
            }}
          >
            📞 (918) 391-3606
          </a>
          
          <Link
            href="/resources/crisis-help"
            className="bg-red-500 text-white px-3 py-2 rounded-full font-semibold text-sm hover:bg-red-600 transition-colors"
          >
            🚨 Crisis
          </Link>
        </div>
      </div>
    </div>
  )
}