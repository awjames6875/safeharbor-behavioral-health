'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import Navigation from './Navigation'
import { MedicaidBadge } from '@/components/TrustBadges'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      {/* Crisis Banner */}
      <div className="bg-navy-900 text-white py-2 px-4 text-center text-sm font-medium tracking-wide">
        <div className="container mx-auto flex justify-center md:justify-between items-center">
          <span className="hidden md:inline opacity-90">Compassionate care for your family</span>
          <div className="flex items-center gap-2">
            <span>In Crisis?</span>
            <a href="tel:988" className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors font-bold">
              Call or Text 988
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 transform group-hover:scale-105 transition-transform duration-300">
              <img src="/logo.jpg" alt="SafeHarbor Logo" className="w-full h-full object-contain rounded-full shadow-md" />
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-navy-900 tracking-tight">SafeHarbor</h1>
              <p className="text-xs text-teal-700 font-medium tracking-wide uppercase">Behavioral Health</p>
            </div>
          </Link>

          <nav className="hidden lg:block">
            <Navigation />
          </nav>

          <div className="flex items-center space-x-4">
            <MedicaidBadge className="hidden lg:flex opacity-90 hover:opacity-100 transition-opacity" />
            <Link
              href="/contact"
              className="hidden md:inline-block bg-teal-600 text-white px-6 py-2.5 rounded-full hover:bg-teal-700 transition-all shadow-md hover:shadow-lg font-medium tracking-wide transform hover:-translate-y-0.5"
            >
              Schedule Appointment
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-teal-600 transition-colors"
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
          <div className="lg:hidden py-4 border-t border-slate-100 bg-white absolute left-0 right-0 px-4 shadow-lg animate-slide-down">
            <Navigation mobile onItemClick={() => setIsMenuOpen(false)} />
            <Link
              href="/contact"
              className="block w-full text-center bg-teal-600 text-white px-4 py-3 rounded-xl hover:bg-teal-700 transition-colors mt-4 font-medium shadow-md"
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