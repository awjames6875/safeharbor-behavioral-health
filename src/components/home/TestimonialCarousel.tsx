'use client'

import React from 'react'
import { CircularTestimonials } from '../ui/circular-testimonials'

const testimonials = [
  {
    quote: "The Body & Brain program meets kids right where they are — at daycare. No extra drives, no waiting rooms. My son doesn't even realize he's learning coping skills. He just thinks he's having fun.",
    name: "Safe Harbor Parent",
    designation: "Body & Brain Program",
    src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=1376&auto=format&fit=crop"
  },
  {
    quote: "As a daycare owner, partnering with Safe Harbor was the best decision we made. Parents see the difference in their kids, and our staff feel empowered knowing they're part of something bigger.",
    name: "Daycare Partner",
    designation: "Community Partner",
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1376&auto=format&fit=crop"
  },
  {
    quote: "Oklahoma kids deserve better access to mental health support. Safe Harbor brings preventive care directly into the communities that need it most — no barriers, no stigma.",
    name: "Community Advocate",
    designation: "Tulsa, Oklahoma",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1376&auto=format&fit=crop"
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