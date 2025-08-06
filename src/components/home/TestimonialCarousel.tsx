'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    id: 1,
    text: "SafeHarbor changed our family's life. Our son is thriving now thanks to their Body & Brain program and compassionate therapists.",
    author: "Sarah M.",
    role: "Parent",
    rating: 5,
    gradient: "from-purple-400 to-pink-400"
  },
  {
    id: 2,
    text: "The fact that they accept Medicaid made quality mental health care accessible for my daughter. The staff is incredible!",
    author: "James T.",
    role: "Parent",
    rating: 5,
    gradient: "from-blue-400 to-teal-400"
  },
  {
    id: 3,
    text: "My teenager was struggling with anxiety and depression. The team at SafeHarbor gave us hope and real strategies that work.",
    author: "Maria G.",
    role: "Parent",
    rating: 5,
    gradient: "from-green-400 to-emerald-400"
  },
  {
    id: 4,
    text: "24/7 crisis support saved us during our darkest hour. Forever grateful for SafeHarbor's immediate response and ongoing care.",
    author: "David L.",
    role: "Parent",
    rating: 5,
    gradient: "from-orange-400 to-red-400"
  }
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/2 w-full h-full"
        >
          <div className="w-full h-full bg-gradient-to-br from-teal-500 to-blue-500 rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full mb-4"
          >
            TESTIMONIALS
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="text-gray-800">Real Stories,</span>
            <br />
            <span className="gradient-text">Real Impact</span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100, rotateY: -20 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: 20 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentIndex].gradient} opacity-5`} />
                
                {/* Quote Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="absolute top-6 left-6 text-6xl text-gray-200"
                >
                  "
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Stars */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center mb-6"
                  >
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="text-3xl text-yellow-400"
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Testimonial Text */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed italic"
                  >
                    "{testimonials[currentIndex].text}"
                  </motion.p>

                  {/* Author */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[currentIndex].gradient} flex items-center justify-center text-white font-bold text-xl`}>
                        {testimonials[currentIndex].author[0]}
                      </div>
                    </div>
                    <p className="font-bold text-lg text-gray-800">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-gray-500">
                      {testimonials[currentIndex].role}
                    </p>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 20, repeat: Infinity }}
                  className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full blur-2xl"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-teal-500 to-blue-500'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            Join <span className="font-bold text-teal-600">1,000+ families</span> who trust SafeHarbor
          </p>
        </motion.div>
      </div>
    </section>
  )
}