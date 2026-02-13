import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Individual Therapy Tulsa | Child & Teen Counseling | SafeHarbor',
  description: 'Expert individual therapy in Tulsa for children and teens ages 3–17. activity-based and trauma-informed approaches. Medicaid accepted. Call (918) 553-5746.',
  keywords: 'individual therapy Tulsa, child therapy sessions, teen counseling Oklahoma, CBT therapy Tulsa, DBT therapy, EMDR therapy, anxiety therapy Tulsa, depression counseling',
  alternates: {
    canonical: '/services/individual-therapy'
  },
  openGraph: {
    title: 'Individual Therapy Tulsa | Child & Teen Counseling | SafeHarbor',
    description: 'Expert individual therapy using activity-based and trauma-informed approaches. Personalized treatment for children and teens ages 3–17 in Tulsa.',
    url: 'https://safeharborbehavioralhealth.com/services/individual-therapy',
    images: [
      {
        url: '/images/individual-therapy-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Individual Therapy Services at SafeHarbor Behavioral Health',
      }
    ]
  },
  twitter: {
    title: 'Individual Therapy Tulsa | SafeHarbor Behavioral Health',
    description: 'Expert individual therapy using evidence-based approaches for children and teens ages 3–17.',
    images: ['/images/individual-therapy-twitter-image.jpg']
  }
}

export default function IndividualTherapyPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Individual Therapy",
    "description": "Personalized one-on-one counseling sessions to address unique mental health needs, develop coping strategies, and work toward personal goals using evidence-based approaches.",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "SafeHarbor Behavioral Health",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2510 East 15th Street",
        "addressLocality": "Tulsa",
        "addressRegion": "OK",
        "postalCode": "74104",
        "addressCountry": "US"
      },
      "telephone": "+1-918-553-5746",
      "url": "https://safeharborbehavioralhealth.com"
    },
    "serviceType": "Mental Health Treatment",
    "areaServed": {
      "@type": "State",
      "name": "Oklahoma"
    },
    "audience": {
      "@type": "PeopleAudience",
      "audienceType": "Children and Teens ages 3-17"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Therapeutic Approaches",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cognitive Behavioral Therapy (CBT)",
            "description": "Evidence-based therapy to identify and change negative thought patterns and behaviors"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dialectical Behavior Therapy (DBT)",
            "description": "Skills-based therapy for emotional regulation and interpersonal effectiveness"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "EMDR",
            "description": "Eye Movement Desensitization and Reprocessing for trauma and distressing memories"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mindfulness-Based Therapy",
            "description": "Present-moment awareness techniques to reduce stress and improve mental wellness"
          }
        }
      ]
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "availableLanguage": "English",
      "servicePhone": "+1-918-553-5746",
      "serviceUrl": "https://safeharborbehavioralhealth.com/contact"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://safeharborbehavioralhealth.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://safeharborbehavioralhealth.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Individual Therapy",
        "item": "https://safeharborbehavioralhealth.com/services/individual-therapy"
      }
    ]
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Individual Therapy</h1>
          <p className="text-xl opacity-95 max-w-2xl">
            Personalized, one-on-one counseling to help you overcome challenges and achieve your mental health goals.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Individual Therapy?</h2>
              <p className="text-gray-600 mb-4">
                Individual therapy, also known as psychotherapy or counseling, is a collaborative process between you and a licensed mental health professional. 
                In a safe, caring, and confidential environment, you'll work together to identify and change thought and behavior patterns that may be 
                preventing you from feeling your best.
              </p>
              <p className="text-gray-600 mb-6">
                Our therapists use evidence-based approaches tailored to your specific needs, helping you develop coping strategies, 
                improve relationships, and achieve personal growth.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Therapeutic Approaches We Use</h3>
              <div className="space-y-3 mb-8">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Cognitive Behavioral Therapy (CBT)</h4>
                  <p className="text-gray-600">Identify and change negative thought patterns and behaviors.</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Dialectical Behavior Therapy (DBT)</h4>
                  <p className="text-gray-600">Learn skills for emotional regulation and interpersonal effectiveness.</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-900">EMDR</h4>
                  <p className="text-gray-600">Process and heal from trauma and distressing memories.</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Mindfulness-Based Therapy</h4>
                  <p className="text-gray-600">Develop present-moment awareness and reduce stress.</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-2 text-gray-600 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Initial assessment to understand your needs and goals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Collaborative treatment planning</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Regular 50-minute sessions (frequency based on your needs)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Homework and skill-building exercises between sessions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Regular progress monitoring and treatment adjustments</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Common Issues We Address</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Depression & Mood Disorders</li>
                  <li>• Anxiety & Panic Attacks</li>
                  <li>• Trauma & PTSD</li>
                  <li>• Relationship Issues</li>
                  <li>• Grief & Loss</li>
                  <li>• Self-Esteem Issues</li>
                  <li>• Life Transitions</li>
                  <li>• Stress Management</li>
                  <li>• Work-Life Balance</li>
                  <li>• Identity & Self-Discovery</li>
                </ul>
              </div>

              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Start?</h3>
                <p className="text-gray-600 mb-4">
                  Take the first step toward better mental health. Our compassionate therapists are here to support you.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors font-semibold"
                >
                  Schedule Your First Session
                </Link>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Most insurance plans accepted
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}