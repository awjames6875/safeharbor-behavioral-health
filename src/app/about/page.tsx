import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About SafeHarbor Behavioral Health | Child Therapy Tulsa | Our Mission',
  description: 'Learn about SafeHarbor Behavioral Health, Tulsa\'s leading child and teen therapy center. Our mission, values, and commitment to evidence-based mental health treatment.',
  keywords: 'about SafeHarbor, Tulsa mental health center, child therapy mission, behavioral health team, compassionate care Tulsa, evidence-based therapy Oklahoma',
  alternates: {
    canonical: '/about'
  },
  openGraph: {
    title: 'About SafeHarbor Behavioral Health | Child Therapy Tulsa',
    description: 'Learn about SafeHarbor\'s mission to provide compassionate, evidence-based mental health care to children, teens, and families in Tulsa.',
    url: 'https://safeharborbehavioralhealth.com/about',
    images: [
      {
        url: '/images/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SafeHarbor Behavioral Health Team - About Us',
      }
    ]
  },
  twitter: {
    title: 'About SafeHarbor Behavioral Health | Child Therapy Tulsa',
    description: 'Learn about our mission to provide compassionate, evidence-based mental health care in Tulsa.',
    images: ['/images/about-twitter-image.jpg']
  }
}

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About SafeHarbor Behavioral Health",
    "description": "Learn about SafeHarbor Behavioral Health's mission to provide compassionate, evidence-based mental health care to children, teens, and families in Tulsa.",
    "url": "https://safeharborbehavioralhealth.com/about",
    "mainEntity": {
      "@type": "MedicalBusiness",
      "name": "SafeHarbor Behavioral Health",
      "foundingDate": "2018",
      "description": "Leading provider of child and teen mental health services in Tulsa, Oklahoma",
      "mission": "To provide a safe, supportive environment where individuals can heal, grow, and thrive through compassionate, evidence-based mental health care",
      "values": [
        "Compassion - We treat every client with empathy, respect, and understanding",
        "Excellence - We maintain the highest standards of clinical care and professionalism",
        "Partnership - We work collaboratively with clients to achieve their goals"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mental Health Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Child Therapy",
              "description": "Individual therapy for children ages 3-12"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Teen Counseling",
              "description": "Specialized therapy for teenagers and adolescents"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Family Therapy",
              "description": "Family counseling and therapy sessions"
            }
          }
        ]
      }
    },
    "breadcrumb": {
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
          "name": "About",
          "item": "https://safeharborbehavioralhealth.com/about"
        }
      ]
    }
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">About SafeHarbor</h1>
            <p className="text-xl opacity-95 max-w-2xl">
              Dedicated to providing compassionate, evidence-based mental health care to the Tulsa community.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                At SafeHarbor Behavioral Health, we believe everyone deserves access to high-quality mental health care.
                Our mission is to provide a safe, supportive environment where individuals can heal, grow, and thrive.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="text-center">
                  <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💙</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassion</h3>
                  <p className="text-gray-600">We treat every client with empathy, respect, and understanding.</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                  <p className="text-gray-600">We maintain the highest standards of clinical care and professionalism.</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Partnership</h3>
                  <p className="text-gray-600">We work collaboratively with clients to achieve their goals.</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Approach</h3>
                <p className="text-gray-600 mb-4">
                  We take an integrative approach to mental health treatment, combining evidence-based therapies with
                  innovative programs like our Body-Brain Integration initiative. Our team of experienced professionals
                  works together to provide comprehensive care tailored to each individual's unique needs.
                </p>
                <p className="text-gray-600">
                  Whether you're dealing with anxiety, depression, trauma, or other mental health challenges, we're here
                  to support you on your journey to wellness. Our goal is not just to treat symptoms, but to help you
                  build the skills and resilience needed for long-term mental health.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Founder Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Founder</h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 relative">
                    <div className="aspect-square lg:aspect-auto lg:h-full">
                      <img
                        src="/images/adam-james.png"
                        alt="Adam James - Founder of Safe Harbor Behavioral Health"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Adam James</h3>
                    <p className="text-primary-600 font-medium mb-6">Founder & CEO</p>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      Adam James builds companies that help people see themselves differently. Three years after being
                      homeless, his companies were generating 7 figures annually. Today, he leads Safe Harbor
                      Behavioral Health with a mission born from personal transformation.
                    </p>
                    <blockquote className="border-l-4 border-primary-500 pl-6 py-2 mb-8">
                      <p className="text-xl text-gray-700 italic">
                        "I don't fix people. I just clean their glasses so they can see themselves differently.
                        That's all I do—I remind people who they are."
                      </p>
                    </blockquote>
                    <a
                      href="/adam-james"
                      className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors w-fit"
                    >
                      Read Adam's Full Story
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}