'use client'

import React from 'react'
import { CircularTestimonials } from '../ui/circular-testimonials'

const testimonials = [
  {
    quote: "SafeHarbor changed our family's life. Our son is thriving now thanks to their Body & Brain program and compassionate therapists. It's truly a different approach that works.",
    name: "Safe Harbor Parent",
    designation: "Parent of 8-year-old",
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1376&auto=format&fit=crop"
  },
  {
    quote: "The fact that they accept Medicaid made quality mental health care accessible for my daughter. The staff is incredible and treats us with such dignity and respect.",
    name: "Daycare Parent",
    designation: "Parent of 14-year-old",
    src: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=1376&auto=format&fit=crop"
  },
  {
    quote: "My teenager was struggling with anxiety and depression. The team at SafeHarbor gave us hope and real strategies that work at home and school.",
    name: "Tulsa Parent",
    designation: "Parent of 16-year-old",
    src: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=1376&auto=format&fit=crop"
  },
  {
    quote: "24/7 crisis support saved us during our darkest hour. Forever grateful for SafeHarbor's immediate response and ongoing care for our family.",
    name: "Safe Harbor Family",
    designation: "Parent of 12-year-old",
    src: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1376&auto=format&fit=crop"
  }
]

export default function TestimonialCarousel() {
  return (
    <section className="section-padding bg-navy-900 overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-teal-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-900 rounded-full blur-[80px]" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
            Hear from our <span className="text-teal-400 italic">Families</span>
          </h2>
          <p className="text-teal-100/80 text-lg max-w-2xl mx-auto">
            Real stories of healing, growth, and hope from the SafeHarbor community.
          </p>
        </div>

        <div className="flex justify-center">
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "#ffffff",
              designation: "#2dd4bf",
              testimony: "#e2e8f0",
              arrowBackground: "#112a45",
              arrowForeground: "#2dd4bf",
              arrowHoverBackground: "#0d9488",
            }}
            fontSizes={{
              name: "1.5rem",
              designation: "1rem",
              quote: "1.25rem",
            }}
          />
        </div>
      </div>
    </section>
  )
}