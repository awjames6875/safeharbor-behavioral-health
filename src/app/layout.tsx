import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ModernHeader from '@/components/layout/ModernHeader'
import Footer from '@/components/layout/Footer'
import SkipNavigation from '@/components/SkipNavigation'
import StickyHeader from '@/components/layout/StickyHeader'
import SEOTracking from '@/components/SEOTracking'
import FloatingActions from '@/components/FloatingActions'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'SafeHarbor Behavioral Health - Child Therapy Tulsa | Mental Health Services',
    template: '%s | SafeHarbor Behavioral Health'
  },
  description: 'Leading child therapy in Tulsa, OK. SafeHarbor accepts Medicaid/SoonerCare. Comprehensive mental health services for children, teens, and families. Same-week appointments available.',
  keywords: 'child therapy Tulsa Medicaid, teen counseling Tulsa SoonerCare, mental health crisis Tulsa, behavioral health Tulsa Medicaid, anxiety therapy children, ADHD treatment Tulsa, family therapy Oklahoma, psychiatry Tulsa',
  metadataBase: new URL('https://safeharborbh.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'SafeHarbor Behavioral Health - Child Therapy Tulsa',
    description: 'Leading child therapy in Tulsa, OK. Comprehensive mental health services for children, teens, and families.',
    type: 'website',
    locale: 'en_US',
    url: 'https://safeharborbh.com',
    siteName: 'SafeHarbor Behavioral Health',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SafeHarbor Behavioral Health - Child Therapy in Tulsa',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SafeHarbor Behavioral Health - Child Therapy Tulsa',
    description: 'Leading child therapy in Tulsa, OK. Comprehensive mental health services for children, teens, and families.',
    images: ['/images/twitter-image.jpg'],
    creator: '@SafeHarborBH'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "SafeHarbor Behavioral Health",
    "description": "Leading child therapy and mental health services in Tulsa, Oklahoma",
    "url": "https://safeharborbh.com",
    "logo": "https://safeharborbh.com/images/logo.png",
    "image": "https://safeharborbh.com/images/og-image.jpg",
    "telephone": "+1-918-555-0100",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1234 Main Street",
      "addressLocality": "Tulsa",
      "addressRegion": "OK",
      "postalCode": "74103",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.1540",
      "longitude": "-95.9928"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "36.1540",
        "longitude": "-95.9928"
      },
      "geoRadius": "50000"
    },
    "medicalSpecialty": [
      "Child Psychology",
      "Adolescent Psychology", 
      "Family Therapy",
      "Behavioral Health"
    ],
    "serviceType": [
      "Individual Therapy",
      "Group Therapy", 
      "Family Therapy",
      "Medication Management",
      "Psychiatric Evaluation"
    ],
    "paymentAccepted": [
      "Cash",
      "Credit Card", 
      "Debit Card",
      "Check",
      "Insurance",
      "Medicaid",
      "SoonerCare", 
      "Medicare",
      "Blue Cross Blue Shield",
      "Aetna",
      "UnitedHealthcare",
      "Cigna"
    ],
    "currenciesAccepted": "USD",
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-14:00"
    ],
    "sameAs": [
      "https://www.facebook.com/SafeHarborBH",
      "https://www.linkedin.com/company/safeharbor-behavioral-health",
      "https://www.instagram.com/safeharborbh"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="SafeHarbor BH" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="msapplication-tap-highlight" content="no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
      </head>
      <body className={inter.className}>
        <SkipNavigation />
        <div className="min-h-screen flex flex-col">
          <ModernHeader />
          <main id="main-content" className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <FloatingActions />
      </body>
    </html>
  )
}