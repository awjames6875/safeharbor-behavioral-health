import { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import AnimatedServicesGrid from '@/components/home/AnimatedServicesGrid'
import AnimatedStats from '@/components/home/AnimatedStats'
import TestimonialCarousel from '@/components/home/TestimonialCarousel'
import BodyBrainFeature from '@/components/home/BodyBrainFeature'
import BlogFeature from '@/components/home/BlogFeature'
import InsuranceSection from '@/components/home/InsuranceSection'
import ContactSection from '@/components/home/ContactSection'

export const metadata: Metadata = {
  title: 'Child Therapy Tulsa | Teen Mental Health Services | SafeHarbor',
  description: 'Leading child therapy in Tulsa, OK. Expert treatment for anxiety, depression, ADHD, and behavioral issues in children and teens. Call (918) 555-0100 to schedule.',
  keywords: 'child therapy Tulsa, teen therapy Tulsa, child psychologist Oklahoma, anxiety treatment children, ADHD therapy Tulsa, depression treatment teens, behavioral therapy',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Child Therapy Tulsa | Teen Mental Health Services',
    description: 'Leading child therapy in Tulsa, OK. Expert treatment for anxiety, depression, ADHD, and behavioral issues in children and teens.',
    url: 'https://safeharborbh.com',
    images: [
      {
        url: '/images/home-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SafeHarbor Behavioral Health - Child Therapy Specialists in Tulsa',
      }
    ]
  },
  twitter: {
    title: 'Child Therapy Tulsa | Teen Mental Health Services',
    description: 'Leading child therapy in Tulsa, OK. Expert treatment for anxiety, depression, ADHD, and behavioral issues in children and teens.',
    images: ['/images/home-twitter-image.jpg']
  }
}

export default function HomePage() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Child Therapy Tulsa | Teen Mental Health Services",
    "description": "Leading child therapy in Tulsa, OK. Expert treatment for anxiety, depression, ADHD, and behavioral issues in children and teens.",
    "url": "https://safeharborbh.com",
    "mainEntity": {
      "@type": "MedicalBusiness",
      "name": "SafeHarbor Behavioral Health",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mental Health Services",
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
          "item": "https://safeharborbh.com"
        }
      ]
    }
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

      {/* Two-Path CTA */}
      <section className="bg-navy-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">How Can We Help?</h2>
          <p className="text-navy-700 text-lg mb-10">Choose your path. We&apos;ll take it from there.</p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="/parents"
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-navy-50 group"
            >
              <div className="text-4xl mb-4">👨‍👩‍👧</div>
              <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-teal-600 transition-colors">I&apos;m a Parent</h3>
              <p className="text-navy-700">Learn about our Body &amp; Brain program for kids ages 3–8.</p>
            </a>
            <a
              href="/partners"
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-navy-50 group"
            >
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-teal-600 transition-colors">I&apos;m a Daycare / Gym Owner</h3>
              <p className="text-navy-700">Partner with us and bring behavioral health to your facility.</p>
            </a>
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