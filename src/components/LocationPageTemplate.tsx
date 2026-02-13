import Link from 'next/link'

interface LocationData {
  name: string
  heroDescription: string
  whyChooseUs: string[]
  mentalHealthChallenges: {
    title: string
    description: string
  }[]
  schools: {
    public: string[]
    private: string[]
  }
  transportation: {
    parking: string[]
    fromAreas: string[]
    fromSchools: string[]
  }
  landmarks: {
    nearTo: string[]
    amenities: string[]
  }
  successStory: {
    quote: string[]
    author: string
  }
  staff: {
    name: string
    title: string
    specialty: string
  }[]
  resources: {
    activities: string[]
    support: string[]
  }
  faqs: {
    question: string
    answer: string
  }[]
  ctaNeighborhoods: string
}

export default function LocationPageTemplate({ data }: { data: LocationData }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Child & Teen Therapy in {data.name} | SafeHarbor Behavioral Health
          </h1>
          <p className="text-xl opacity-95 max-w-3xl">
            {data.heroDescription}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Why Choose Us Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Why {data.name} Families Choose SafeHarbor
              </h2>
              {data.whyChooseUs.map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Mental Health Challenges */}
            <div className="mb-12 bg-cream-100 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Common Mental Health Challenges in {data.name}
              </h2>
              <div className="space-y-4">
                {data.mentalHealthChallenges.map((challenge, index) => (
                  <div key={index} className="bg-white rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-teal-700 mb-3">{challenge.title}</h3>
                    <p className="text-gray-600">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Schools */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Schools We Partner With in {data.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Public Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    {data.schools.public.map((school, index) => (
                      <li key={index}>• {school}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Private & Charter Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    {data.schools.private.map((school, index) => (
                      <li key={index}>• {school}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Getting to SafeHarbor from {data.name}
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Parking & Accessibility</h3>
                  <ul className="space-y-2 text-gray-600">
                    {data.transportation.parking.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">From {data.name} Areas</h3>
                  <ul className="space-y-2 text-gray-600">
                    {data.transportation.fromAreas.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Landmarks */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Easy to Find Near {data.name} Landmarks
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">We're Close To:</h3>
                  <ul className="space-y-2 text-gray-600">
                    {data.landmarks.nearTo.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Nearby Amenities:</h3>
                  <ul className="space-y-2 text-gray-600">
                    {data.landmarks.amenities.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Success Story */}
            <div className="mb-12 bg-gradient-to-br from-cream-100 to-cream-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Success Story from {data.name}
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-md">
                {data.successStory.quote.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 italic mb-4">
                    "{paragraph}"
                  </p>
                ))}
                <p className="text-teal-600 font-semibold mt-4">
                  - {data.successStory.author}
                </p>
              </div>
            </div>

            {/* Staff */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Our {data.name} Team
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.staff.map((member, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-navy-800 mb-2">{member.name}</h3>
                    <p className="text-teal-600 text-sm mb-2">{member.title}</p>
                    <p className="text-gray-600 text-sm">{member.specialty}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Resources */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                {data.name} Community Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Youth Activities</h3>
                  <ul className="space-y-2 text-gray-600">
                    {data.resources.activities.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Support Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    {data.resources.support.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Frequently Asked Questions - {data.name} Families
              </h2>
              <div className="space-y-4">
                {data.faqs.map((faq, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                    <h3 className="font-semibold text-navy-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Support Your Child's Mental Health?
              </h2>
              <p className="text-xl mb-6 opacity-95">
                Join hundreds of {data.name} families who trust SafeHarbor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-cream-100 transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
                >
                  Schedule Your First Appointment
                </Link>
                <a
                  href="tel:918-553-5746"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-teal-600 transition-all transform hover:scale-105 font-bold text-lg"
                >
                  Call Now: (918) 553-5746
                </a>
              </div>
              <p className="mt-6 text-sm opacity-90">
                {data.ctaNeighborhoods}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}