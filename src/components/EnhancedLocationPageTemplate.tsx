import Link from 'next/link'
import LocalBusinessSchema from '@/components/schema/LocalBusinessSchema'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { LocationData } from '@/data/locations'

interface EnhancedLocationPageTemplateProps {
  location: LocationData;
}

export default function EnhancedLocationPageTemplate({ location }: EnhancedLocationPageTemplateProps) {
  const breadcrumbItems = [
    {
      position: 1,
      name: 'Home',
      item: 'https://safeharborbh.com'
    },
    {
      position: 2,
      name: 'Locations',
      item: 'https://safeharborbh.com/locations'
    },
    {
      position: 3,
      name: location.name,
      item: `https://safeharborbh.com/locations/${location.slug}`
    }
  ];

  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema
        name={location.name}
        description={location.description}
        streetAddress={location.streetAddress}
        addressLocality={location.city}
        addressRegion={location.state}
        postalCode={location.zipCode}
        telephone={location.phone}
        latitude={location.latitude}
        longitude={location.longitude}
        url={`https://safeharborbh.com/locations/${location.slug}`}
        areaServed={location.neighborhoods}
        services={[
          'Individual Child Therapy',
          'Teen Counseling',
          'Family Therapy',
          'Group Therapy',
          'Medication Management',
          'Psychiatric Evaluation',
          'Crisis Intervention',
          'Behavioral Assessments'
        ]}
        openingHours={[
          'Mo-Fr 08:00-18:00',
          'Sa 09:00-14:00'
        ]}
        paymentAccepted={[
          'Cash',
          'Credit Card',
          'Debit Card',
          'Check',
          'Insurance',
          'Medicaid',
          'SoonerCare',
          'Medicare',
          'Blue Cross Blue Shield',
          'Aetna',
          'UnitedHealthcare',
          'Cigna'
        ]}
        amenityFeature={[
          { name: 'Wheelchair Accessible', value: true },
          { name: 'Parking Available', value: true },
          { name: 'Child-Friendly Environment', value: true },
          { name: 'Telehealth Services', value: true },
          { name: 'Same-Week Appointments', value: true },
          { name: 'Bilingual Services', value: true }
        ]}
      />
      
      <FAQSchema faqs={location.faqs} />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
          <div className="container mx-auto px-4">
            <nav className="mb-6 text-sm">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li>›</li>
                <li><Link href="/locations" className="hover:underline">Locations</Link></li>
                <li>›</li>
                <li className="font-medium">{location.city}</li>
              </ol>
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Child Therapy {location.city} | Medicaid Accepted | SafeHarbor Behavioral Health
            </h1>
            <p className="text-xl opacity-95 max-w-3xl mb-6">
              {location.description}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                ✓ Medicaid & SoonerCare Accepted
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                ✓ Same-Week Appointments
              </span>
              <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium">
                ✓ Child & Teen Specialists
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block bg-white text-teal-600 px-8 py-4 rounded-md hover:bg-cream-100 transition-colors font-semibold text-lg"
                data-track="medicaid"
              >
                Schedule Free Consultation
              </Link>
              <a
                href={`tel:${location.phone}`}
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-teal-600 transition-colors font-semibold text-lg"
              >
                Call {location.phone}
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              
              {/* Insurance & Medicaid Section */}
              <div className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-navy-800 mb-6">
                  Insurance & Medicaid Coverage in {location.city}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-teal-600 mb-4">
                      We Accept Your Insurance
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <strong>Oklahoma Medicaid</strong>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <strong>SoonerCare (Oklahoma Medicaid)</strong>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Medicare
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Blue Cross Blue Shield
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        UnitedHealthcare
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Aetna & Cigna
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-600 mb-4">
                      Financial Options
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• No copays for many Medicaid plans</li>
                      <li>• Sliding scale fees available</li>
                      <li>• Payment plans offered</li>
                      <li>• Insurance verification before first visit</li>
                      <li>• Financial counseling available</li>
                    </ul>
                    <p className="text-sm text-gray-600 mt-4">
                      <strong>Don\'t let cost be a barrier.</strong> Call us to discuss your options: {location.phone}
                    </p>
                  </div>
                </div>
              </div>

              {/* Services We Offer */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-800 mb-8">
                  Mental Health Services in {location.city}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-teal-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-navy-800 mb-3">
                      <Link href="/services/child-therapy" className="hover:text-teal-600">
                        Individual Child Therapy
                      </Link>
                    </h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Play therapy and counseling for children ages 5-12 dealing with anxiety, depression, ADHD, and behavioral challenges.
                    </p>
                    <p className="text-xs text-teal-600 font-medium">✓ Medicaid Covered</p>
                  </div>
                  
                  <div className="bg-teal-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-navy-800 mb-3">
                      <Link href="/services/teen-counseling" className="hover:text-teal-600">
                        Teen Counseling
                      </Link>
                    </h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Specialized therapy for teenagers dealing with depression, anxiety, peer pressure, and academic stress.
                    </p>
                    <p className="text-xs text-teal-600 font-medium">✓ SoonerCare Accepted</p>
                  </div>

                  <div className="bg-teal-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-navy-800 mb-3">
                      <Link href="/services/family-therapy" className="hover:text-teal-600">
                        Family Therapy
                      </Link>
                    </h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Family counseling to improve communication, resolve conflicts, and strengthen relationships.
                    </p>
                    <p className="text-xs text-teal-600 font-medium">✓ Insurance Covered</p>
                  </div>

                  <div className="bg-teal-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-navy-800 mb-3">
                      <Link href="/services/crisis-intervention" className="hover:text-teal-600">
                        Crisis Intervention
                      </Link>
                    </h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Immediate support for mental health crises, suicidal thoughts, and emergency situations.
                    </p>
                    <p className="text-xs text-teal-600 font-medium">✓ 24/7 Support Available</p>
                  </div>

                  <div className="bg-teal-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-navy-800 mb-3">
                      <Link href="/services/group-therapy" className="hover:text-teal-600">
                        Group Therapy
                      </Link>
                    </h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Peer support groups for children and teens with similar challenges and experiences.
                    </p>
                    <p className="text-xs text-teal-600 font-medium">✓ Medicaid Accepted</p>
                  </div>

                  <div className="bg-teal-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-navy-800 mb-3">
                      <Link href="/services/medication-management" className="hover:text-teal-600">
                        Medication Management
                      </Link>
                    </h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Psychiatric medication evaluation and ongoing management by board-certified psychiatrists.
                    </p>
                    <p className="text-xs text-teal-600 font-medium">✓ SoonerCare Covered</p>
                  </div>
                </div>
              </div>

              {/* Neighborhoods Served */}
              <div className="mb-12 bg-cream-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-navy-800 mb-6">
                  {location.city} Neighborhoods We Serve
                </h2>
                <p className="text-gray-600 mb-4">
                  Our {location.city} location proudly serves families throughout the area, including:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {location.neighborhoods.map((neighborhood, index) => (
                    <div key={index} className="text-gray-700">
                      • <strong>{neighborhood}</strong>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mt-6">
                  <strong>Medicaid accepted</strong> for all neighborhoods. Transportation assistance available for families in need.
                </p>
              </div>

              {/* Schools We Work With */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-800 mb-6">
                  Schools We Partner With in {location.city}
                </h2>
                <p className="text-gray-600 mb-6">
                  We maintain collaborative relationships with area schools, working closely with counselors and administrators to support student success:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {location.schools.map((school, index) => (
                      <div key={index} className="text-gray-700">
                        • {school}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-teal-600 mt-4">
                  With parent permission, we coordinate with school counselors to ensure comprehensive support for your child.
                </p>
              </div>

              {/* Location & Accessibility */}
              <div className="mb-12 bg-teal-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-navy-800 mb-6">
                  Easy to Find in {location.city}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-teal-700 mb-4">Our Address</h3>
                    <div className="bg-white rounded-lg p-4 border">
                      <p className="text-gray-800 font-medium">{location.name}</p>
                      <p className="text-gray-600">{location.streetAddress}</p>
                      <p className="text-gray-600">{location.city}, {location.state} {location.zipCode}</p>
                      <p className="text-teal-600 font-medium mt-2">{location.phone}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-teal-700 mb-4">Near These Landmarks</h3>
                    <ul className="space-y-2">
                      {location.landmarks.map((landmark, index) => (
                        <li key={index} className="text-gray-700">• {landmark}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-navy-800 mb-2">Accessibility Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                    <div>• Wheelchair accessible entrance</div>
                    <div>• Ample parking available</div>
                    <div>• Public transportation nearby</div>
                    <div>• Child-friendly waiting area</div>
                    <div>• Private therapy rooms</div>
                    <div>• Family restrooms available</div>
                  </div>
                </div>
              </div>

              {/* FAQs Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-navy-800 mb-8">
                  Frequently Asked Questions - {location.city} Families
                </h2>
                <div className="space-y-6">
                  {location.faqs.map((faq, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <h3 className="text-lg font-semibold text-navy-800 mb-3">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                  
                  {/* Add universal FAQs */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-navy-800 mb-3">
                      How quickly can I get an appointment for my child?
                    </h3>
                    <p className="text-gray-700">
                      We offer same-week appointments for most services. For crisis situations, we provide same-day or next-day appointments. 
                      Call {location.phone} and we\'ll work to accommodate your schedule.
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-navy-800 mb-3">
                      What should I bring to my child\'s first appointment?
                    </h3>
                    <p className="text-gray-700">
                      Bring your child\'s insurance card (Medicaid/SoonerCare), photo ID, any previous therapy records, 
                      and a list of current medications. We\'ll handle the insurance verification beforehand.
                    </p>
                  </div>
                </div>
              </div>

              {/* Strong CTA */}
              <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg p-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Support Your Child\'s Mental Health?
                </h2>
                <p className="text-xl mb-6 opacity-95">
                  Join hundreds of {location.city} families who trust SafeHarbor for exceptional mental health care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <Link
                    href="/contact"
                    className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-cream-100 transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
                    data-track="medicaid"
                  >
                    Schedule Free Consultation
                  </Link>
                  <a
                    href={`tel:${location.phone}`}
                    className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-teal-600 transition-all transform hover:scale-105 font-bold text-lg"
                  >
                    Call {location.phone}
                  </a>
                </div>
                <p className="text-sm opacity-90">
                  <strong>Medicaid & SoonerCare Accepted</strong> • Same-Week Appointments • Serving {location.neighborhoods.join(', ')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}