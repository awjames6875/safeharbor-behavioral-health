import Link from 'next/link'

export default function ServicesGrid() {
  const services = [
    {
      title: 'Child Therapy',
      ages: 'Ages 5-12',
      description: 'Play therapy, behavioral support, and emotional regulation for children facing challenges.',
      icon: '🧸',
      href: '/services/child-therapy',
      color: 'bg-teal-50 border-teal-200 hover:border-teal-400',
    },
    {
      title: 'Teen Counseling',
      ages: 'Ages 13-18',
      description: 'Support for anxiety, depression, identity, and the unique challenges of adolescence.',
      icon: '🎒',
      href: '/services/teen-counseling',
      color: 'bg-navy-50 border-navy-200 hover:border-navy-400',
    },
    {
      title: 'Family Therapy',
      ages: 'All Ages',
      description: 'Strengthen bonds, improve communication, and heal together as a family unit.',
      icon: '👨‍👩‍👧‍👦',
      href: '/services/family-therapy',
      color: 'bg-cream-100 border-cream-300 hover:border-cream-400',
    },
    {
      title: 'Trauma Treatment',
      ages: 'Specialized Care',
      description: 'Evidence-based trauma therapy including EMDR and trauma-focused CBT.',
      icon: '💚',
      href: '/services/trauma-treatment',
      color: 'bg-teal-50 border-teal-200 hover:border-teal-400',
    },
    {
      title: 'Body & Brain Program',
      ages: 'Innovative Approach',
      description: 'Our unique program combining movement, mindfulness, and therapy for whole-person healing.',
      icon: '🧠',
      href: '/programs/body-brain',
      color: 'bg-navy-50 border-navy-200 hover:border-navy-400',
    },
    {
      title: 'School Support Services',
      ages: 'Academic Success',
      description: 'IEP advocacy, behavioral plans, and collaboration with schools for student success.',
      icon: '📚',
      href: '/services/school-support',
      color: 'bg-cream-100 border-cream-300 hover:border-cream-400',
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Comprehensive Mental Health Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Specialized care for children, teens, and families in the Tulsa area
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`block border-2 rounded-lg p-6 transition-all transform hover:scale-105 hover:shadow-lg ${service.color}`}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl flex-shrink-0">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-navy-800 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm font-semibold text-teal-600 mb-2">
                    {service.ages}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 text-teal-600 font-semibold flex items-center text-sm">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}