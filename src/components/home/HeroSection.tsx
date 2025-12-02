'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-gradient-to-br from-cream-50 via-white to-teal-50/30 pt-24 pb-12">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-br from-teal-200/40 to-teal-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-navy-200/40 to-navy-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[30%] right-[15%] w-[400px] h-[400px] bg-gradient-to-br from-sage-200/30 to-sage-400/20 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className={`max-w-2xl transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-teal-200/60 shadow-lg mb-8 animate-scale-in">
              <span className="flex h-2.5 w-2.5 rounded-full bg-teal-500 animate-pulse"></span>
              <span className="text-sm font-semibold text-navy-800 tracking-wide">Accepting New Patients • Medicaid Welcome</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold mb-8 leading-[1.05] text-navy-900">
              Give Your Child <br />
              <span className="relative inline-block mt-2">
                <span className="gradient-text">
                  The Tools to Thrive
                </span>
                <svg className="absolute w-full h-4 -bottom-2 left-0 text-teal-300/60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-6 leading-relaxed font-light max-w-xl">
              What if every child had the skills to navigate their world with <strong className="font-semibold text-slate-800">confidence, kindness, and calm</strong>?
            </p>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
              We're transforming youth wellness in Tulsa with innovative programs that blend movement, therapy, and play — delivered right where your child already is.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl hover:from-teal-700 hover:to-teal-800 shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden btn-ripple"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Journey
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/programs/body-brain"
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-navy-800 transition-all duration-300 bg-white/90 backdrop-blur-sm border-2 border-navy-200 rounded-2xl hover:bg-white hover:border-teal-400 hover:text-teal-700 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Explore Body & Brain
              </Link>
            </div>

            <div className="flex items-center gap-8 text-slate-600 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-3 border-white bg-gradient-to-br from-teal-400 to-navy-400 flex items-center justify-center text-xs font-bold text-white shadow-md">
                    {i === 1 && '👨‍👩‍👧'}
                    {i === 2 && '👨‍👩‍👦'}
                    {i === 3 && '👩‍👧‍👦'}
                    {i === 4 && '👨‍👧‍👦'}
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex text-yellow-400 text-lg mb-1">★★★★★</div>
                <span className="text-sm font-semibold text-slate-700">Trusted by 500+ Families</span>
                <span className="text-xs text-slate-500">Transforming lives in Tulsa</span>
              </div>
            </div>
          </div>

          {/* Visual Content with Real Image */}
          <div className={`relative hidden lg:block transition-all duration-1000 delay-300 transform ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative z-10">
              {/* Main Image Container with Glass Effect */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60 aspect-[4/5] max-w-lg mx-auto transform hover:scale-[1.02] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/5 to-navy-900/5 mix-blend-overlay z-10"></div>
                <Image
                  src="/images/hero-family.png"
                  alt="Diverse family smiling together in a warm, welcoming therapy office - representing hope and healing at SafeHarbor Behavioral Health"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Floating Glass Card */}
                <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl shadow-2xl z-20 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white shadow-lg">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-navy-900 text-lg">Evidence-Based Care</h3>
                      <p className="text-sm text-slate-600">Proven results for lasting change</p>
                    </div>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 mb-2">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full w-[92%] shadow-sm"></div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-600 font-medium">
                    <span>Client Satisfaction</span>
                    <span className="text-teal-700 font-bold">92%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 -right-10 w-32 h-32 bg-gradient-to-br from-teal-300 to-teal-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-float"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-navy-300 to-navy-400 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}