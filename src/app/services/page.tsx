import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mental Health Services Tulsa | Child Therapy, Teen Counseling | SafeHarbor',
  description:
    'Comprehensive mental health services in Tulsa. Individual therapy, group therapy, medication management, and psychiatric evaluation for children, teens, and families.',
  keywords:
    'mental health services Tulsa, child therapy services, teen counseling Tulsa, individual therapy Oklahoma, group therapy Tulsa, psychiatric services, medication management',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Mental Health Services Tulsa | SafeHarbor Behavioral Health',
    description:
      'Comprehensive mental health services including individual therapy, group therapy, medication management, and psychiatric evaluation for children, teens, and families.',
    url: 'https://safeharborbehavioralhealth.com/services',
    images: [
      {
        url: '/images/services-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SafeHarbor Behavioral Health Mental Health Services',
      },
    ],
  },
  twitter: {
    title: 'Mental Health Services Tulsa | SafeHarbor Behavioral Health',
    description:
      'Comprehensive mental health services for children, teens, and families in Tulsa, Oklahoma.',
    images: ['/images/services-twitter-image.jpg'],
  },
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Individual Therapy',
      description: 'One-on-one support for children and teens with personalized treatment goals.',
      icon: '👤',
      href: '/services/individual-therapy',
      serviceType: 'Mental Health Treatment',
    },
    {
      title: 'Group Therapy',
      description: 'Structured group sessions that build skills, connection, and confidence.',
      icon: '👥',
      href: '/services/group-therapy',
      serviceType: 'Mental Health Treatment',
    },
    {
      title: 'Medication Management',
      description: 'Medication evaluation and follow-up visits to support treatment progress.',
      icon: '💊',
      href: '/services/medication-management',
      serviceType: 'Psychiatric Care',
    },
    {
      title: 'Psychiatric Evaluation',
      description: 'Comprehensive evaluations to clarify diagnosis and care recommendations.',
      icon: '🔍',
      href: '/services/psychiatric-evaluation',
      serviceType: 'Psychiatric Assessment',
    },
    {
      title: 'Child Therapy',
      description: 'Age-appropriate support for children with emotional and behavioral challenges.',
      icon: '🧸',
      href: '/services/child-therapy',
      serviceType: 'Child Mental Health',
    },
    {
      title: 'Teen Counseling',
      description: 'Adolescent-focused care for stress, mood, school, and life transitions.',
      icon: '🧑',
      href: '/services/teen-counseling',
      serviceType: 'Adolescent Mental Health',
    },
    {
      title: 'Family Therapy',
      description: 'Family-centered sessions that strengthen communication and home stability.',
      icon: '🏠',
      href: '/services/family-therapy',
      serviceType: 'Family Treatment',
    },
    {
      title: 'Trauma Treatment',
      description: 'Trauma-informed care to help children and teens process difficult experiences.',
      icon: '🛡️',
      href: '/services/trauma-treatment',
      serviceType: 'Trauma Support',
    },
    {
      title: 'School Support',
      description: 'Coordination and practical strategies to improve success in school settings.',
      icon: '🏫',
      href: '/services/school-support',
      serviceType: 'School-Based Support',
    },
    {
      title: 'Parent Coaching',
      description: 'Practical parent guidance to improve routines, behavior support, and communication.',
      icon: '👨‍👩‍👧',
      href: '/services/parent-coaching',
      serviceType: 'Parent Support',
    },
    {
      title: 'Behavioral Assessments',
      description: 'Structured assessments to identify strengths, needs, and next-step planning.',
      icon: '📋',
      href: '/services/behavioral-assessments',
      serviceType: 'Behavioral Assessment',
    },
    {
      title: 'Crisis Intervention',
      description: 'Rapid support, stabilization planning, and clear next-step care coordination.',
      icon: '🚨',
      href: '/services/crisis-intervention',
      serviceType: 'Crisis Care',
    },
    {
      title: 'Substance Abuse',
      description: 'Youth and teen substance abuse support with early intervention and family care.',
      icon: '🌱',
      href: '/services/substance-abuse',
      serviceType: 'Substance Abuse Support',
    },
  ]

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Mental Health Services Tulsa | SafeHarbor Behavioral Health',
    description:
      'Comprehensive mental health services including individual therapy, group therapy, medication management, and psychiatric evaluation for children, teens, and families.',
    url: 'https://safeharborbehavioralhealth.com/services',
    mainEntity: {
      '@type': 'MedicalBusiness',
      name: 'SafeHarbor Behavioral Health',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Mental Health Services',
        itemListElement: services.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            description: service.description,
            serviceType: service.serviceType,
            audience: {
              '@type': 'PeopleAudience',
              audienceType: 'Children, Teens, Families',
            },
            areaServed: {
              '@type': 'State',
              name: 'Oklahoma',
            },
          },
        })),
      },
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://safeharborbehavioralhealth.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://safeharborbehavioralhealth.com/services',
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />

      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white pt-44 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl opacity-95 max-w-2xl">
              Comprehensive mental health services tailored to children, teens, and families.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div key={service.href} className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
                  >
                    Learn More
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-primary-50 rounded-lg p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">We Treat a Wide Range of Conditions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Depression',
                  'Anxiety Disorders',
                  'Bipolar Disorder',
                  'PTSD & Trauma',
                  'ADHD',
                  'OCD',
                  'Eating Disorders',
                  'Substance Use Disorders',
                  'Personality Disorders',
                  'Schizophrenia',
                  'Grief & Loss',
                  'Relationship Issues',
                ].map((condition) => (
                  <div key={condition} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{condition}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8 space-x-4">
                <a
                  href="https://SafeHarborEasyEnrollment.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-600 text-white px-8 py-3 rounded-md hover:bg-teal-700 transition-colors font-semibold"
                >
                  Enroll Today
                </a>
                <Link
                  href="/contact"
                  className="inline-block bg-primary-600 text-white px-8 py-3 rounded-md hover:bg-primary-700 transition-colors font-semibold"
                >
                  Contact Us
                </Link>
              </div>
              <div className="text-center mt-4">
                <a
                  href="https://therapyportal.com/p/SafeHarbor74104"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline font-medium"
                >
                  Current families: Access your Therapy Portal →
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
