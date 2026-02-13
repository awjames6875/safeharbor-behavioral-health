import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact SafeHarbor Behavioral Health | Schedule Child Therapy Tulsa',
  description: 'Contact SafeHarbor Behavioral Health to schedule child therapy, teen counseling, or learn about our mental health services in Tulsa. Call (918) 553-5746.',
  keywords: 'contact SafeHarbor Tulsa, schedule child therapy appointment, teen counseling contact, mental health services inquiry, therapy consultation Tulsa',
  alternates: {
    canonical: '/contact'
  },
  openGraph: {
    title: 'Contact SafeHarbor Behavioral Health | Schedule Child Therapy',
    description: 'Contact us to schedule child therapy, teen counseling, or learn about our mental health services in Tulsa. We\'re here to help.',
    url: 'https://safeharborbehavioralhealth.com/contact',
    images: [
      {
        url: '/images/contact-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact SafeHarbor Behavioral Health',
      }
    ]
  },
  twitter: {
    title: 'Contact SafeHarbor Behavioral Health | Schedule Child Therapy',
    description: 'Contact us to schedule child therapy, teen counseling, or learn about our mental health services.',
    images: ['/images/contact-twitter-image.jpg']
  }
}

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact SafeHarbor Behavioral Health",
    "description": "Contact SafeHarbor Behavioral Health to schedule child therapy, teen counseling, or learn about our mental health services in Tulsa.",
    "url": "https://safeharborbehavioralhealth.com/contact",
    "mainEntity": {
      "@type": "MedicalBusiness",
      "name": "SafeHarbor Behavioral Health",
      "telephone": "+1-918-553-5746",
      "email": "support@safeharborbehavioralhealth.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2510 East 15th Street",
        "addressLocality": "Tulsa",
        "addressRegion": "OK",
        "postalCode": "74104",
        "addressCountry": "US"
      },
      "openingHours": [
        "Mo-Fr 08:00-18:00",
        "Sa 09:00-14:00"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mental Health Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Individual Therapy"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Group Therapy"
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
          "name": "Contact",
          "item": "https://safeharborbehavioralhealth.com/contact"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema)
        }}
      />
    
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-95 max-w-2xl">
            Ready to take the first step? Reach out to schedule an appointment or learn more about our services.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <ContactForm />
            </div>

            <div>
              <div className="bg-gray-50 rounded-lg p-8 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:918-553-5746" className="text-gray-600 hover:text-primary-600">
                        (918) 553-5746
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:support@safeharborbehavioralhealth.com" className="text-gray-600 hover:text-primary-600">
                        support@safeharborbehavioralhealth.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">Hours</p>
                      <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Enroll?</h3>
                <p className="text-gray-600 mb-3">
                  Start your child&apos;s journey with Safe Harbor today.
                </p>
                <a href="https://SafeHarborEasyEnrollment.com" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition-colors font-semibold mr-3 mb-2">
                  Easy Enrollment
                </a>
                <a href="https://therapyportal.com/p/SafeHarbor74104" target="_blank" rel="noopener noreferrer" className="inline-block bg-navy-700 text-white px-6 py-3 rounded-md hover:bg-navy-800 transition-colors font-semibold mb-2">
                  Therapy Portal
                </a>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Need Immediate Help?</h3>
                <p className="text-gray-600 mb-3">
                  If you're experiencing a mental health crisis, help is available 24/7.
                </p>
                <a href="tel:988" className="inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors font-semibold">
                  Call or Text 988
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}