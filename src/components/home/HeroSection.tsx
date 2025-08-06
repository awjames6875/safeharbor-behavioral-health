'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-navy-800 to-navy-900 text-white overflow-hidden">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className={`absolute bottom-0 w-full h-full ${mounted ? 'animate-wave' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="0.3"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
        <svg
          className={`absolute bottom-0 w-full h-full ${mounted ? 'animate-wave-slow' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            fillOpacity="0.2"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Where Movement Meets Mental Health
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-teal-100">
            Tulsa's Leading Child & Teen Therapy Center - We Accept Medicaid
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-teal-500 text-white px-8 py-4 rounded-full hover:bg-teal-600 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
            >
              Get Help Now
            </Link>
            <Link
              href="/programs/body-brain"
              className="inline-block bg-transparent border-2 border-teal-400 text-teal-100 px-8 py-4 rounded-full hover:bg-teal-500 hover:text-white hover:border-teal-500 transition-all transform hover:scale-105 font-semibold text-lg"
            >
              Learn About Body & Brain
            </Link>
          </div>

          {/* Emergency Notice */}
          <div className="mt-12 inline-block bg-red-600 bg-opacity-90 rounded-lg px-6 py-3 animate-pulse">
            <p className="text-sm font-semibold">In Crisis? Call or Text 988 Now</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-25%) translateY(-10px);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }

        @keyframes wave-slow {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(25%) translateY(-15px);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }

        .animate-wave {
          animation: wave 8s ease-in-out infinite;
        }

        .animate-wave-slow {
          animation: wave-slow 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}