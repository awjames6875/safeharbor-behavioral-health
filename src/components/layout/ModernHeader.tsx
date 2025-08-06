'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from './Navigation'

export default function ModernHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Crisis Banner */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-2 px-4"
      >
        <div className="container mx-auto flex justify-between items-center text-sm">
          <span className="font-semibold flex items-center">
            <span className="animate-pulse mr-2">🚨</span>
            Crisis Help Available 24/7
          </span>
          <motion.a
            href="tel:988"
            className="hover:underline font-bold flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call or Text 988
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-dark shadow-2xl' 
            : 'bg-white shadow-md'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-white font-bold text-xl">SH</span>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full opacity-30 blur-xl"
                />
              </motion.div>
              <div>
                <h1 className={`text-xl font-bold ${isScrolled ? 'text-white' : 'gradient-text'}`}>
                  SafeHarbor
                </h1>
                <p className={`text-xs ${isScrolled ? 'text-white/70' : 'text-teal-600'}`}>
                  Behavioral Health
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <Navigation scrolled={isScrolled} />
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Medicaid Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="hidden lg:flex"
              >
                <div className={`inline-flex items-center ${isScrolled ? 'glass' : 'bg-green-50'} px-4 py-2 rounded-full`}>
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-green-500 rounded-full mr-2"
                  />
                  <span className={`text-sm font-semibold ${isScrolled ? 'text-white' : 'text-green-700'}`}>
                    We Accept Medicaid
                  </span>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="hidden md:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-[#EE6C4D] to-[#F38375] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Schedule Now</span>
                  <motion.svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2"
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="relative w-6 h-6">
                  <motion.span
                    className={`absolute block h-0.5 w-6 ${isScrolled ? 'bg-white' : 'bg-gray-900'} transform transition-all`}
                    animate={isMenuOpen ? { rotate: 45, y: 11 } : { rotate: 0, y: 0 }}
                  />
                  <motion.span
                    className={`absolute block h-0.5 w-6 ${isScrolled ? 'bg-white' : 'bg-gray-900'} transform transition-all top-[11px]`}
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  />
                  <motion.span
                    className={`absolute block h-0.5 w-6 ${isScrolled ? 'bg-white' : 'bg-gray-900'} transform transition-all top-[22px]`}
                    animate={isMenuOpen ? { rotate: -45, y: -11 } : { rotate: 0, y: 0 }}
                  />
                </div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden py-4 border-t border-gray-200"
              >
                <Navigation mobile onItemClick={() => setIsMenuOpen(false)} />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4"
                >
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-gradient-to-r from-[#EE6C4D] to-[#F38375] text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Schedule Appointment
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-600 z-[60] origin-left"
        style={{
          scaleX: 0,
          transformOrigin: 'left'
        }}
        animate={{
          scaleX: isScrolled ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  )
}