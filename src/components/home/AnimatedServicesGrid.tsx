'use client'

import React from 'react'
import Link from 'next/link'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const services = [
  {
    title: "Child Therapy",
    description: "Specialized support for children ages 3-12 navigating anxiety, behavioral challenges, and emotional growth.",
    icon: "🧸",
    link: "/services/child-therapy"
  },
  {
    title: "Teen Counseling",
    description: "A safe space for adolescents to explore their identity, build resilience, and manage academic or social pressures.",
    icon: "🎧",
    link: "/services/teen-counseling"
  },
  {
    title: "Family Support",
    description: "Strengthening family bonds through collaborative sessions that improve communication and understanding.",
    icon: "👨‍👩‍👧‍👦",
    link: "/services/family-therapy"
  },
  {
    title: "Body & Brain",
    description: "Our innovative movement-based program connecting physical wellness with emotional regulation.",
    icon: "🧘",
    link: "/programs/body-brain"
  },
  {
    title: "ADHD & Focus",
    description: "Practical strategies and behavioral interventions to help children thrive at school and home.",
    icon: "🎯",
    link: "/services/adhd-treatment"
  },
  {
    title: "Trauma Recovery",
    description: "Compassionate, trauma-informed care helping children process difficult experiences and find healing.",
    icon: "❤️",
    link: "/services/trauma-therapy"
  }
]

export default function AnimatedServicesGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-navy-900 mb-6">
            Comprehensive Care for Every Step
          </h2>
          <p className="text-lg text-slate-600">
            We offer a full spectrum of behavioral health services designed to meet young people where they are and help them grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <li key={index} className="min-h-[14rem] list-none">
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-slate-200 p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <Link
                  href={service.link}
                  className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl border-[0.75px] border-slate-100 bg-white p-6 shadow-sm group hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-navy-900 mb-3 group-hover:text-teal-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-teal-600 font-medium text-sm">
                      Learn More
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </li>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
