import { Metadata } from 'next'
import Link from 'next/link'
import { locations } from '@/data/locations'

export const metadata: Metadata = {
  title: 'Our Locations | Child Therapy Tulsa, Broken Arrow, Owasso | SafeHarbor',
  description: 'Find SafeHarbor Behavioral Health locations throughout Tulsa area. Child therapy services in Midtown Tulsa, South Tulsa, Broken Arrow, Owasso, Jenks, and more.',
  keywords: 'child therapy locations Tulsa, teen therapy Broken Arrow, mental health services Owasso, Jenks child therapy, behavioral health clinics Tulsa area',
  alternates: {
    canonical: '/locations'
  },
  openGraph: {
    title: 'SafeHarbor Locations | Child Therapy Throughout Tulsa Area',
    description: 'Convenient SafeHarbor locations throughout Tulsa metro. Find child therapy services near you in Midtown, South Tulsa, Broken Arrow, and more.',
    url: 'https://safeharborbehavioralhealth.com/locations',
    images: [
      {
        url: '/images/locations-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SafeHarbor Behavioral Health Locations Throughout Tulsa',
      }
    ]
  },
  twitter: {
    title: 'SafeHarbor Locations | Child Therapy Throughout Tulsa Area',
    description: 'Convenient SafeHarbor locations throughout Tulsa metro. Find child therapy services near you.',
    images: ['/images/locations-twitter-image.jpg']
  }
}

export default function LocationsPage() {
  const hours = 'Mon-Fri: 8AM-6PM, Sat: 9AM-2PM'

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Locations</h1>
          <p className="text-xl opacity-95 max-w-2xl">
            Convenient locations throughout the Tulsa area to serve you better.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <div key={location.slug} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{location.name.replace('SafeHarbor Behavioral Health - ', '')}</h2>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{location.streetAddress}, {location.city}, {location.state} {location.zipCode}</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${location.phone.replace(/[^0-9]/g, '')}`} className="hover:text-primary-600">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-primary-600 mr-2 mt-0.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{hours}</span>
                    </div>
                  </div>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 mt-4"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}