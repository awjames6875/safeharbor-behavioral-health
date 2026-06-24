import { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import { GlowingEffect } from '@/components/ui/glowing-effect'
import TrustBar from '@/components/home/TrustBar'
import AnimatedServicesGrid from '@/components/home/AnimatedServicesGrid'
import AnimatedStats from '@/components/home/AnimatedStats'
import TestimonialCarousel from '@/components/home/TestimonialCarousel'
import BodyBrainFeature from '@/components/home/BodyBrainFeature'
import BlogFeature from '@/components/home/BlogFeature'
import InsuranceSection from '@/components/home/InsuranceSection'
import ContactSection from '@/components/home/ContactSection'

export const metadata: Metadata = {
  title: 'Behavioral Health Tulsa | All Ages | Same-Week Appointments | SafeHarbor',
  description: 'Safe Harbor Behavioral Health serves children, teens, and adults in Tulsa, OK. Medicaid, Blue Cross Blue Shield, and Aetna accepted. Same-week appointments. Telehealth available statewide. Call (918) 553-5746.',
  keywords: 'behavioral health Tulsa, mental health Tulsa Oklahoma, Medicaid mental health Tulsa, adult therapy Tulsa, child therapy Tulsa, teen therapy Tulsa, telehealth Oklahoma Medicaid, same week mental health Tulsa, BCBS therapy Tulsa, Aetna therapy Tulsa, Safe Harbor Behavioral Health, Adam James Tulsa, reentry mental health Oklahoma',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Behavioral Health Tulsa | All Ages | Same-Week Appointments | SafeHarbor',
    description: 'Safe Harbor Behavioral Health serves children, teens, and adults in Tulsa, OK. Medicaid, BCBS, and Aetna accepted. Same-week appointments. Telehealth statewide.',
    url: 'https://safeharborbehavioralhealth.com',
    images: [
      {
        url: '/images/home-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SafeHarbor Behavioral Health - Tulsa Oklahoma - All Ages Welcome',
      }
    ]
  },
  twitter: {
    title: 'Behavioral Health Tulsa | All Ages | Same-Week Appointments | SafeHarbor',
    description: 'Safe Harbor Behavioral Health serves children, teens, and adults in Tulsa, OK. Medicaid, BCBS, and Aetna accepted. Same-week appointments.',
    images: ['/images/home-twitter-image.jpg']
  }
}

export default function HomePage() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Safe Harbor Behavioral Health",
        "url": "https://www.safeharborbehavioralhealth.com",
        "telephone": "+19185535746",
        "founder": {
          "@type": "Person",
          "name": "Adam James"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2510 East 15th Street",
          "addressLocality": "Tulsa",
          "addressRegion": "OK",
          "postalCode": "74104",
          "addressCountry": "US"
        },
        "description": "Safe Harbor Behavioral Health provides mental health services for children, teens, and adults in Tulsa, Oklahoma. Medicaid, Blue Cross Blue Shield, and Aetna accepted. Same-week appointments available. Telehealth available statewide.",
        "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
        "priceRange": "Medicaid Accepted",
        "areaServed": "Oklahoma"
      },
      {
        "@type": "WebPage",
        "name": "Behavioral Health Tulsa | All Ages | Same-Week Appointments | SafeHarbor",
        "description": "Safe Harbor Behavioral Health serves children, teens, and adults in Tulsa, OK. Medicaid, Blue Cross Blue Shield, and Aetna accepted. Same-week appointments. Telehealth statewide.",
        "url": "https://safeharborbehavioralhealth.com",
        "mainEntity": {
          "@type": "MedicalBusiness",
          "name": "SafeHarbor Behavioral Health",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Behavioral Health Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Individual Therapy for Children",
                  "description": "One-on-one therapy sessions for children ages 3-12"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Teen Therapy Services",
                  "description": "Specialized therapy for teenagers and adolescents"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Adult Behavioral Health",
                  "description": "Mental health support for adults including recovery and reentry populations"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Telehealth Therapy Oklahoma",
                  "description": "Secure Zoom therapy sessions available statewide in Oklahoma"
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
            }
          ]
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homePageSchema)
        }}
      />
      <HeroSection />

      {/* Three-Path CTA */}
      <section className="bg-navy-50 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">How Can We Help?</h2>
          <p className="text-navy-700 text-lg mb-10">Choose your path. We&apos;ll take it from there. Same-week appointments available.</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">

            {/* Parents */}
            <div className="relative rounded-[1.25rem] border-[0.75px] border-slate-200 p-2">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
              <a href="/parents" className="relative block bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow group h-full">
                <div className="text-4xl mb-4">👨‍👩‍👧</div>
                <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-teal-600 transition-colors">I&apos;m a Parent</h3>
                <p className="text-navy-700">Support for children and teens through our Body &amp; Brain program and licensed counselors.</p>
              </a>
            </div>

            {/* Adults / Recovery */}
            <div className="relative rounded-[1.25rem] border-[0.75px] border-slate-200 p-2">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
              <a href="/services/adult-mental-health" className="relative block bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow group h-full">
                <div className="text-4xl mb-4">🙋</div>
                <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-teal-600 transition-colors">I Need Help</h3>
                <p className="text-navy-700">Adult emotional wellness support. Medicaid, BCBS, and Aetna accepted. Zoom sessions statewide. Same-week appointments.</p>
              </a>
            </div>

            {/* Partners */}
            <div className="relative rounded-[1.25rem] border-[0.75px] border-slate-200 p-2">
              <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} borderWidth={3} />
              <a href="/partners" className="relative block bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow group h-full">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-teal-600 transition-colors">I&apos;m an Organization</h3>
                <p className="text-navy-700">Partner with us to bring behavioral health directly to your facility. We fund your program.</p>
              </a>
            </div>

          </div>

          {/* Urgency bar */}
          <div className="mt-10 inline-flex items-center gap-3 bg-teal-600 text-white px-6 py-3 rounded-full text-sm font-semibold">
            <span>📅</span>
            <span>Same-week appointments available — Call (918) 553-5746</span>
          </div>
        </div>
      </section>

      <TrustBar />
      <AnimatedServicesGrid />
      <AnimatedStats />
      <BodyBrainFeature />
      <TestimonialCarousel />
      <BlogFeature />
      <InsuranceSection />
      <ContactSection />
    </>
  )
}