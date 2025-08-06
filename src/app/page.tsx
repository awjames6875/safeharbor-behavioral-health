import { Metadata } from 'next'
import ModernHeroSection from '@/components/home/ModernHeroSection'
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
      <ModernHeroSection />
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