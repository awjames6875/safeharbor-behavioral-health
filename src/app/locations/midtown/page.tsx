import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Child Therapy Midtown Tulsa | Teen Mental Health Services | SafeHarbor',
  description: 'Child therapy and teen counseling in Midtown Tulsa. Expert mental health treatment for anxiety, depression, ADHD. Medicaid accepted. Call (918) 555-0101.',
  keywords: 'child therapy Midtown Tulsa, teen therapy downtown Tulsa, child psychologist Tulsa, anxiety treatment children, ADHD therapy Tulsa, Medicaid therapist Tulsa',
  alternates: {
    canonical: '/locations/midtown'
  },
  openGraph: {
    title: 'Child Therapy Midtown Tulsa | SafeHarbor Behavioral Health',
    description: 'Expert child therapy and teen counseling in Midtown Tulsa. Specializing in anxiety, depression, ADHD, and behavioral issues. Medicaid accepted.',
    url: 'https://safeharborbh.com/locations/midtown',
    images: [
      {
        url: '/images/midtown-tulsa-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SafeHarbor Behavioral Health Midtown Tulsa Location',
      }
    ]
  },
  twitter: {
    title: 'Child Therapy Midtown Tulsa | SafeHarbor Behavioral Health', 
    description: 'Expert child therapy and teen counseling in Midtown Tulsa. Specializing in anxiety, depression, ADHD.',
    images: ['/images/midtown-tulsa-twitter-image.jpg']
  }
}

export default function MidtownPage() {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "name": "SafeHarbor Behavioral Health - Midtown Tulsa",
    "description": "Child therapy and teen counseling services in Midtown Tulsa, specializing in anxiety, depression, ADHD, and behavioral issues.",
    "url": "https://safeharborbh.com/locations/midtown",
    "telephone": "+1-918-555-0101",
    "faxNumber": "+1-918-555-0201",
    "email": "midtown@safeharborbh.com",
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
    "areaServed": [
      {
        "@type": "City",
        "name": "Tulsa",
        "sameAs": "https://en.wikipedia.org/wiki/Tulsa,_Oklahoma"
      },
      {
        "@type": "City", 
        "name": "Broken Arrow",
        "sameAs": "https://en.wikipedia.org/wiki/Broken_Arrow,_Oklahoma"
      },
      {
        "@type": "City",
        "name": "Jenks", 
        "sameAs": "https://en.wikipedia.org/wiki/Jenks,_Oklahoma"
      }
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
            "description": "Individual therapy for children ages 3-12",
            "serviceType": "Mental Health Treatment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Teen Counseling", 
            "description": "Specialized therapy for teenagers and adolescents",
            "serviceType": "Mental Health Treatment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Family Therapy",
            "description": "Family counseling and therapy sessions",
            "serviceType": "Mental Health Treatment"
          }
        }
      ]
    },
    "medicalSpecialty": [
      "Child Psychology",
      "Adolescent Psychology",
      "Family Therapy",
      "Behavioral Health"
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Insurance", "Medicaid", "SoonerCare"],
    "currenciesAccepted": "USD",
    "openingHours": [
      "Mo-Fr 08:00-18:00",
      "Sa 09:00-14:00"
    ],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Wheelchair Accessible",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification", 
        "name": "Free Parking",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Child-Friendly Environment",
        "value": true
      }
    ],
    "sameAs": [
      "https://www.facebook.com/SafeHarborBH",
      "https://www.linkedin.com/company/safeharbor-behavioral-health",
      "https://www.instagram.com/safeharborbh"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://safeharborbh.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": "https://safeharborbh.com/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Midtown Tulsa",
        "item": "https://safeharborbh.com/locations/midtown"
      }
    ]
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(locationSchema)
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
          <h1 className="text-4xl font-bold mb-4">Midtown Tulsa Location</h1>
          <p className="text-xl opacity-95">1234 Main Street, Tulsa, OK 74103</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our Midtown Office</h2>
              <p className="text-gray-600 mb-4">
                Our Midtown Tulsa location serves as our flagship facility, offering the full range of SafeHarbor services 
                in a convenient, centrally-located setting. With easy access from major highways and ample parking, 
                we're here to serve residents throughout the Tulsa metropolitan area.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Services Available</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Individual Therapy</li>
                    <li>• Group Therapy</li>
                    <li>• Psychiatric Services</li>
                    <li>• Body-Brain Program</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Contact Information</h3>
                  <p className="text-gray-600">Phone: (918) 555-0101</p>
                  <p className="text-gray-600">Fax: (918) 555-0201</p>
                  <p className="text-gray-600">Hours: Mon-Fri 8AM-6PM, Sat 9AM-2PM</p>
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