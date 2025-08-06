import Link from 'next/link'

export default function BodyBrainFeature() {
  const benefits = [
    {
      icon: '🏃‍♂️',
      title: 'Movement-Based Healing',
      description: 'Physical activity releases natural mood boosters and reduces stress hormones',
    },
    {
      icon: '🧘‍♀️',
      title: 'Mind-Body Connection',
      description: 'Learn to recognize and regulate emotions through body awareness',
    },
    {
      icon: '🎯',
      title: 'Faster Results',
      description: 'Combining movement with therapy accelerates healing and builds resilience',
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 to-cream-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              The Body & Brain Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our revolutionary approach combines traditional therapy with movement and mindfulness, 
              helping children and teens heal faster and build lasting emotional resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video Placeholder */}
            <div className="relative">
              <div className="bg-navy-800 rounded-lg aspect-video flex items-center justify-center shadow-xl">
                <div className="text-center text-white">
                  <svg className="w-20 h-20 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  <p className="text-lg font-medium">Video Coming Soon</p>
                  <p className="text-sm opacity-75 mt-2">Learn how Body & Brain transforms lives</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-teal-500 text-white rounded-full p-3 shadow-lg">
                <span className="text-2xl font-bold">NEW</span>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-navy-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}

              <Link
                href="/programs/body-brain"
                className="inline-block bg-teal-500 text-white px-8 py-4 rounded-full hover:bg-teal-600 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg mt-8"
              >
                Discover Body & Brain Program
              </Link>
            </div>
          </div>

          {/* Call to Action Box */}
          <div className="mt-16 bg-white rounded-lg shadow-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-navy-800 mb-4">
              Ready to Try a Different Approach?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Body & Brain is perfect for kids who haven't responded well to traditional therapy, 
              have lots of energy, or struggle with anxiety and emotional regulation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-colors font-semibold"
              >
                Schedule a Consultation
              </Link>
              <a
                href="tel:918-555-0100"
                className="inline-block bg-navy-800 text-white px-6 py-3 rounded-md hover:bg-navy-900 transition-colors font-semibold"
              >
                Call (918) 555-0100
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}