'use client'

import { useState } from 'react'
import Link from 'next/link'

const services = [
  {
    title: 'Child Therapy',
    description: 'Specialized care for children ages 3-12. We help kids understand their feelings and build confidence through play-based therapy.',
    icon: '🧸',
    href: '/services/child-therapy',
    gradient: 'from-teal-500 to-teal-600',
    delay: 0
  },
  {
    title: 'Teen Counseling',
    description: 'Support for adolescents navigating anxiety, depression, and life transitions. A safe space to be heard and understood.',
    icon: '🎯',
    href: '/services/teen-counseling',
    gradient: 'from-navy-500 to-navy-600',
    delay: 0.1
  },
  {
    title: 'Family Therapy',
    description: 'Strengthen family bonds and improve communication. We work together to build healthier, happier relationships.',
    icon: '👨‍👩‍👧‍👦',
    href: '/services/family-therapy',
    gradient: 'from-sage-500 to-sage-600',
    delay: 0.2
  },
  {
    title: 'Trauma Treatment',
    description: 'Evidence-based approaches for healing from traumatic experiences. Compassionate care that helps you move forward.',
    icon: '💚',
    href: '/services/trauma-treatment',
    gradient: 'from-teal-600 to-navy-500',
    delay: 0.3
  },
  {
    title: 'Body & Brain',
    description: 'Innovative movement-based therapy combining physical activity with emotional healing. Perfect for active kids.',
    icon: '🧠',
    href: '/programs/body-brain',
    gradient: 'from-teal-500 to-navy-600',
    delay: 0.4
  },
  {
    title: 'Crisis Support',
    description: '24/7 emergency mental health assistance when you need it most. You\'re never alone in a crisis.',
    icon: '🆘',
    href: '/resources/crisis-help',
    gradient: 'from-red-500 to-red-600',
    delay: 0.5
  }
]

export default function AnimatedServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-br from-cream-50 via-white to-teal-50/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <span className="inline-block px-6 py-2.5 bg-teal-100 text-teal-700 text-sm font-bold tracking-wider rounded-full mb-6">
            OUR SERVICES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-slate-800">
            Comprehensive Care <br />
            <span className="gradient-text">
              For Every Need
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
            Evidence-based treatments delivered with compassion and expertise.<br />
            <strong className="font-semibold text-teal-700">Every service accepts Medicaid/SoonerCare.</strong>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group animate-scale-in"
              style={{ animationDelay: `${service.delay}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link href={service.href}>
                <div className={`relative h-full transition-all duration-500 transform ${hoveredIndex === index ? '-translate-y-3 scale-105' : ''
                  }`}>
                  {/* Card Background */}
                  <div className={`bg-white rounded-3xl p-8 h-full shadow-lg border-2 transition-all duration-500 relative overflow-hidden ${hoveredIndex === index
                      ? 'border-teal-400 shadow-2xl glow-teal'
                      : 'border-slate-100 hover:border-teal-200'
                    }`}>

                    {/* Hover Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-5' : ''
                      }`} />

                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-xl transform transition-all duration-500 ${hoveredIndex === index ? 'scale-110 rotate-6' : ''
                        }`}>
                        <span className="text-4xl filter drop-shadow-sm">{service.icon}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className={`text-2xl font-serif font-bold mb-4 transition-colors duration-300 ${hoveredIndex === index ? 'text-teal-700' : 'text-slate-800'
                      }`}>
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* CTA with Arrow */}
                    <div className={`flex items-center font-semibold transition-all duration-300 ${hoveredIndex === index ? 'text-teal-600 gap-3' : 'text-sage-600 gap-2'
                      }`}>
                      <span>Learn More</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${hoveredIndex === index ? 'translate-x-2' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>

                    {/* Floating Badge */}
                    {index === 0 && (
                      <div className="absolute top-6 right-6 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                        POPULAR
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Link
            href="/services"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold text-lg rounded-2xl shadow-xl hover:from-teal-700 hover:to-teal-800 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 btn-ripple"
          >
            View All Services
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}