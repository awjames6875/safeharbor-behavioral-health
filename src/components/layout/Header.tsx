'use client'

import Link from 'next/link'
import { useState } from 'react'
import Navigation from './Navigation'
import { MedicaidBadge } from '@/components/TrustBadges'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <span className="font-semibold">Crisis Help Available 24/7</span>
          <a href="tel:988" className="hover:underline font-bold">
            Call or Text 988
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">SH</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-navy-800">SafeHarbor</h1>
              <p className="text-xs text-teal-600">Behavioral Health</p>
            </div>
          </Link>

          <nav className="hidden lg:block">
            <Navigation />
          </nav>

          <div className="flex items-center space-x-4">
            <MedicaidBadge className="hidden lg:flex" />
            <Link
              href="/contact"
              className="hidden md:inline-block bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors"
            >
              Schedule Appointment
            </Link>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <Navigation mobile onItemClick={() => setIsMenuOpen(false)} />
            <Link
              href="/contact"
              className="block w-full text-center bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Schedule Appointment
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}