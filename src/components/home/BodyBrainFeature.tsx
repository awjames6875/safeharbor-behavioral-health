'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BodyBrainFeature() {
  return (
    <section className="section-padding bg-cream-50 overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Content Side */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="inline-block px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-6">
              Exclusive to SafeHarbor
            </div>

            <h2 className="text-3xl md:text-5xl font-serif text-navy-900 mb-6 leading-tight">
              Healing Through <span className="text-teal-600 italic">Movement</span>
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              For many children, sitting still and talking isn't enough. Our <strong>Body & Brain</strong> program
              combines evidence-based therapy with physical movement to help kids regulate emotions,
              reduce anxiety, and build confidence from the inside out.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 text-teal-600">
                  ⚡
                </div>
                <div>
                  <h3 className="text-xl font-serif text-navy-900 mb-1">Release Pent-Up Energy</h3>
                  <p className="text-slate-600">channeling hyperactivity into focused, positive movement.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 text-teal-600">
                  🧠
                </div>
                <div>
                  <h3 className="text-xl font-serif text-navy-900 mb-1">Brain-Body Connection</h3>
                  <p className="text-slate-600">Strengthening the neural pathways for better emotional regulation.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 text-teal-600">
                  🛡️
                </div>
                <div>
                  <h3 className="text-xl font-serif text-navy-900 mb-1">Build Resilience</h3>
                  <p className="text-slate-600">Developing physical and mental tools to handle life's stressors.</p>
                </div>
              </div>
            </div>

            <Link
              href="/programs/body-brain"
              className="btn-primary"
            >
              Discover the Body & Brain Program
            </Link>
          </div>

          {/* Image Side */}
          <div className="flex-1 order-1 lg:order-2 w-full">
            <div className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform lg:rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/body-brain-activity.png"
                alt="Child participating in Body & Brain movement therapy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="text-3xl font-serif mb-2">"He's a different kid."</p>
                <p className="text-teal-200 font-medium">– Sarah, Mother of 8-year-old</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}