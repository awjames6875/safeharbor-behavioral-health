'use client'

import { useState } from 'react'
import Link from 'next/link'

const services = [
  {
    title: 'Child Therapy',
    description: 'Specialized care for children ages 3-12 with behavioral and emotional challenges',
    icon: '🧸',
    href: '/services/child-therapy',
    gradient: 'from-purple-500 to-pink-500',
    delay: 0
  },
  {
    title: 'Teen Counseling',
    description: 'Support for adolescents navigating anxiety, depression, and life transitions',
    icon: '🎯',
    href: '/services/teen-counseling',
    gradient: 'from-blue-500 to-teal-500',
    delay: 0.1
  },
  {
    title: 'Family Therapy',
    description: 'Strengthen family bonds and improve communication dynamics',
    icon: '👨‍👩‍👧‍👦',
    href: '/services/family-therapy',
    gradient: 'from-green-500 to-emerald-500',
    delay: 0.2
  },
  {
    title: 'Trauma Treatment',
    description: 'Evidence-based approaches for healing from traumatic experiences',
    icon: '💚',
    href: '/services/trauma-treatment',
    gradient: 'from-orange-500 to-red-500',
    delay: 0.3
  },
  {
    title: 'Body & Brain',
    description: 'Innovative movement-based therapy for ADHD and sensory processing',
    icon: '🧠',
    href: '/programs/body-brain',
    gradient: 'from-indigo-500 to-purple-500',
    delay: 0.4
  },
  {
    title: 'Crisis Support',
    description: '24/7 emergency mental health assistance when you need it most',
    icon: '🆘',
    href: '/resources/crisis-help',
    gradient: 'from-red-500 to-pink-500',
    delay: 0.5
  }
]

export default function AnimatedServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A9396' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-sm font-semibold rounded-full mb-4">
            OUR SERVICES
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="gradient-text">Comprehensive Care</span>
            <br />
            <span className="text-gray-800">For Every Need</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Evidence-based treatments delivered with compassion and expertise. 
            Every service accepts Medicaid/SoonerCare.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link href={service.href}>
                <div className="relative h-full hover:-translate-y-2 transition-all duration-300">
                  {/* Card Background with Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${service.gradient.split(' ')[1]} 0%, ${service.gradient.split(' ')[3]} 100%)`,
                      padding: '2px'
                    }}
                  >
                    <div className="bg-white rounded-2xl h-full" />
                  </div>

                  {/* Main Card */}
                  <div className={`relative bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${hoveredIndex === index ? 'border-transparent' : 'border-gray-100'}`}>
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                    
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <span className="text-3xl">{service.icon}</span>
                      </div>
                      {hoveredIndex === index && (
                        <div className={`absolute -inset-2 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-20 blur-xl transition-opacity duration-300`} />
                      )}
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:gradient-text transition-all">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-2">
                      {service.description}
                    </p>

                    {/* CTA with Arrow */}
                    <div className="flex items-center text-teal-600 font-semibold group">
                      <span className="mr-2">Learn More</span>
                      <svg
                        className={`w-5 h-5 ${hoveredIndex === index ? 'translate-x-1' : ''} transition-transform`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>

                    {/* Floating Badge */}
                    {index === 0 && (
                      <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        MOST POPULAR
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0A9396] to-[#005F73] text-white font-bold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}