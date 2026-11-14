import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Safe Harbor | Trauma-Informed Child Wellness in Tulsa',
  description: 'Helped by people who\'ve been there. Safe Harbor brings people from pain to possibility. No one is broken. Ages 5 and up in Tulsa. ODMHSAS certified.',
  keywords: 'about Safe Harbor, Tulsa mental health center, child therapy mission, behavioral health team, compassionate care Tulsa, evidence-based therapy Oklahoma',
  alternates: {
    canonical: '/about'
  },
  openGraph: {
    title: 'About Safe Harbor Behavioral Health | Child Therapy Tulsa',
    description: 'Helped by people who\'ve been there. Safe Harbor brings people from pain to possibility, because no one is broken.',
    url: 'https://www.safeharborbehavioralhealth.com/about',
    images: [
      {
        url: '/images/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Safe Harbor Behavioral Health Team - About Us',
      }
    ]
  },
  twitter: {
    title: 'About Safe Harbor Behavioral Health | Child Therapy Tulsa',
    description: 'Helped by people who\'ve been there. From pain to possibility, because no one is broken.',
    images: ['/images/about-twitter-image.jpg']
  }
}

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About Safe Harbor Behavioral Health",
    "description": "Safe Harbor Behavioral Health brings people from pain to possibility, helped by people who've been there. No one is broken, so no one needs to be fixed.",
    "url": "https://www.safeharborbehavioralhealth.com/about",
    "mainEntity": {
      "@type": "MedicalBusiness",
      "name": "Safe Harbor Behavioral Health",
      "foundingDate": "2018",
      "description": "Leading provider of child and teen mental health services in Tulsa, Oklahoma",
      "slogan": "Helped by people who've been there.",
      "mission": "Safe Harbor exists to bring people from pain to possibility, guided by people who've walked through the same storms. No one is broken, so no one needs to be fixed.",
      "values": [
        "No one is broken - You were made whole. Pain is real, but it isn't who you are.",
        "We've been there - Many of us have lived through addiction, prison and loss. We don't judge your story. We understand it.",
        "We clean glasses, we don't fix people - You do the changing. We give you the tools and walk with you.",
        "You belong here - Kids, teens, adults, families. Whatever you're carrying, there's room for you."
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
              "description": "Individual therapy for children ages 5-12"
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
          "item": "https://www.safeharborbehavioralhealth.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://www.safeharborbehavioralhealth.com/about"
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
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white pt-44 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">About Safe Harbor</h1>
            <p className="text-xl opacity-95 max-w-2xl">
              Helped by people who&apos;ve been there.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="text-lg text-gray-600 mb-8 space-y-4">
                <p className="text-xl font-semibold text-gray-900">
                  At Safe Harbor, we believe no one is broken. So we don&apos;t try to fix anyone.
                </p>
                <p>
                  Every person was created whole, complete and good, made in God&apos;s image. Pain, addiction, prison,
                  mistakes and the things life teaches us can blur how we see ourselves. That doesn&apos;t change who you
                  are. It only changes what you can see.
                </p>
                <p>
                  We know, because many of us have been there. Our team includes people who have fought addiction, served
                  time, and rebuilt their lives from the ground up. When you sit down with us, you&apos;re not talking to
                  someone reading from a textbook. You&apos;re talking to someone who understands, because they&apos;ve
                  walked that road and found their way back.
                </p>
                <p>
                  Therapy is how we clean the glasses. We help you find your blind spots, and we give you the tools to
                  clear away whatever is standing between you and who you really are.
                </p>
                <p>
                  We don&apos;t make you into someone new. We help you come back to who you were before the pain.
                </p>
                <p className="text-xl font-semibold text-gray-900">
                  From pain to possibility. That is why we&apos;re here.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💙</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No one is broken</h3>
                  <p className="text-gray-600">You were made whole. Pain is real, but it isn&apos;t who you are.</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">We&apos;ve been there</h3>
                  <p className="text-gray-600">Many of us have lived through addiction, prison and loss. We don&apos;t judge your story. We understand it.</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">👓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">We clean glasses</h3>
                  <p className="text-gray-600">We don&apos;t fix people. You do the changing. We give you the tools and walk with you.</p>
                </div>
                <div className="text-center">
                  <div className="bg-primary-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏠</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">You belong here</h3>
                  <p className="text-gray-600">Kids, teens, adults, families. Whatever you&apos;re carrying, there&apos;s room for you.</p>
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