'use client'

import { motion, Variants } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ModernHeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 20px 40px rgba(238, 108, 77, 0.3)',
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A9396] via-[#005F73] to-[#001F2E] animate-gradient" />
      
      {/* Animated Wave Pattern */}
      <div className="absolute inset-0">
        <svg className="absolute bottom-0 w-full h-64 animate-wave opacity-20" viewBox="0 0 1440 320">
          <path fill="white" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            animate={{
              x: [0, Math.random() * 400 - 200],
              y: [0, -1000],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            style={{
              left: `${Math.random() * 100}%`,
              bottom: -10
            }}
          />
        ))}
      </div>

      {/* Glassmorphic Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-24 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="text-white space-y-8"
          >
            {/* Animated Badge */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="inline-flex items-center glass px-4 py-2 rounded-full"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2" />
              <span className="text-sm font-medium">Now Accepting New Patients</span>
            </motion.div>

            {/* Main Headline with Gradient */}
            <motion.h1
              variants={textVariants}
              className="text-5xl md:text-7xl font-black leading-tight"
            >
              <span className="block">Transform Your</span>
              <span className="block bg-gradient-to-r from-[#EE6C4D] via-[#F38375] to-[#FFB5A7] bg-clip-text text-transparent">
                Child's Future
              </span>
              <span className="block">With Compassionate Care</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={textVariants}
              className="text-xl md:text-2xl text-white/90 leading-relaxed"
            >
              Tulsa's premier mental health center specializing in children, teens, and families. 
              <span className="font-bold text-[#FFB5A7]"> We accept Medicaid/SoonerCare.</span>
            </motion.p>

            {/* Features List */}
            <motion.div
              variants={textVariants}
              className="space-y-3"
            >
              {[
                'Same-week appointments available',
                'Evidence-based therapy approaches',
                'Innovative Body & Brain program',
                '24/7 crisis support line'
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, delay: i * 0.2 }}
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-teal-400 flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                  <span className="text-white/90">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={buttonVariants}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#EE6C4D] to-[#F38375] text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-coral transition-all duration-300 btn-ripple"
                >
                  <span>Schedule Consultation</span>
                  <motion.svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 glass-dark border-2 border-white/20 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={textVariants}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm text-white/70">Trusted by</p>
                <p className="font-bold text-white">1,000+ Families</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 backdrop-blur-xl border border-white/20 shadow-2xl">
              {/* Animated Stats */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '24/7', label: 'Crisis Support' },
                  { number: '98%', label: 'Satisfaction Rate' },
                  { number: '15+', label: 'Years Experience' },
                  { number: '5★', label: 'Google Rating' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 rounded-xl bg-white/5 backdrop-blur"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      className="text-3xl font-black bg-gradient-to-r from-[#FFB5A7] to-[#EE6C4D] bg-clip-text text-transparent"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-white/70 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Animated Medicaid Badge */}
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 20px rgba(16, 185, 129, 0.3)',
                    '0 0 40px rgba(16, 185, 129, 0.6)',
                    '0 0 20px rgba(16, 185, 129, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur border border-green-400/30"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-300 font-bold text-lg">We Accept Medicaid</p>
                    <p className="text-white/70 text-sm mt-1">SoonerCare & Most Insurance</p>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-teal-400 flex items-center justify-center"
                  >
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-50 blur-xl"
            />
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 opacity-50 blur-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/50 text-center"
        >
          <p className="text-sm mb-2">Scroll to explore</p>
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}