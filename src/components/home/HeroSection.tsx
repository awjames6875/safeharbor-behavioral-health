'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  // 3D Tilt Effect Setup
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 })

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10])

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  function onMouseLeave() {
    x.set(0)
    y.set(0)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative bg-cream-50 overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-[90vh] flex items-center">

      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -right-10 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 -left-20 w-72 h-72 bg-navy-100/50 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* Text Content (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left relative z-20"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm border border-teal-100 rounded-full mb-6 shadow-sm"
            >
              <span className="text-teal-600 font-bold text-sm tracking-wide uppercase">
                Compassionate Care in Tulsa
              </span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-serif text-navy-900 leading-tight mb-6 perspective-text">
              Where Movement <br /> Meets <span className="text-teal-600 italic relative inline-block">
                Mental Peace
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A safe harbor for your family. specialized therapy for children & teens,
              connecting mind and body for lasting healing.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-14">
              <Link href="/contact" className="group">
                <div className="relative bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-teal-500/30 overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-teal-500/40">
                  <span className="relative z-10">Start Your Journey</span>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-shine" />
                </div>
              </Link>
              <Link href="/programs/body-brain">
                <div className="px-8 py-4 rounded-xl font-semibold text-lg text-navy-900 border-2 border-navy-900/10 hover:border-navy-900 hover:bg-navy-50 transition-all">
                  Discover Body & Brain
                </div>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm font-semibold text-navy-800/70">
              {['Medicaid Accepted', 'Same-Week Appts', '24/7 Crisis Support'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <span className="text-teal-500 text-lg">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3D Image Interaction (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 relative w-full perspective-container"
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{ perspective: 1000 }}
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative aspect-[4/5] max-w-lg mx-auto"
            >
              {/* Main Image Card */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl border-[12px] border-white overflow-hidden transform-gpu">
                <Image
                  src="/images/hero-family.png"
                  alt="Happy family"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent pointer-events-none" />
              </div>

              {/* Floating Elements (Parallax) */}
              <motion.div
                style={{ transform: "translateZ(60px)" }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-[280px]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center text-3xl">
                    🌟
                  </div>
                  <div>
                    <p className="font-bold text-navy-900 text-lg">Top Rated Care</p>
                    <p className="text-sm text-slate-500">Trusted by 1000+ Tulsa Families</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                style={{ transform: "translateZ(40px)" }}
                className="absolute -top-6 -right-6 bg-navy-900 text-white px-6 py-3 rounded-xl shadow-lg"
              >
                <p className="font-bold">✨ Accepting New Patients</p>
              </motion.div>

            </motion.div>

            {/* Floor Shadow */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 blur-xl rounded-full opacity-60 pointer-events-none" />

          </motion.div>

        </div>
      </div>
    </section>
  )
}