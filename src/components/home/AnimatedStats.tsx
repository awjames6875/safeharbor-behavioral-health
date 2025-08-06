'use client'

import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const stats = [
  {
    number: 1000,
    suffix: '+',
    label: 'Families Helped',
    icon: '👨‍👩‍👧‍👦',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    number: 98,
    suffix: '%',
    label: 'Satisfaction Rate',
    icon: '⭐',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    number: 24,
    suffix: '/7',
    label: 'Crisis Support',
    icon: '🚨',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    number: 15,
    suffix: '+',
    label: 'Years of Service',
    icon: '🏆',
    gradient: 'from-blue-500 to-teal-500'
  }
]

export default function AnimatedStats() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A9396] via-[#005F73] to-[#001F2E]">
        <div className="absolute inset-0 bg-black/20" />
        {/* Animated Shapes */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Making a Real <span className="gradient-text-accent">Difference</span>
          </h2>
          <p className="text-xl text-white/80">
            Trusted by thousands of families across Tulsa
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative hover:scale-105 transition-transform"
            >
              <div className="glass rounded-2xl p-6 text-center backdrop-blur-xl border border-white/20">
                {/* Icon */}
                <div className="mb-4 inline-block">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                </div>

                {/* Counter */}
                <div className="text-4xl md:text-5xl font-black text-white mb-2">
                  {inView && (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2.5}
                      separator=","
                      suffix={stat.suffix}
                    />
                  )}
                </div>

                {/* Label */}
                <p className="text-white/70 font-medium">{stat.label}</p>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl opacity-30 animate-pulse`} style={{ animationDelay: `${index * 0.3}s` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}