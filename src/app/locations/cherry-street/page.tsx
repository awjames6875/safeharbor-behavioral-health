import Link from 'next/link'

export const metadata = { alternates: { canonical: '/locations/cherry-street' } }

export default function CherryStreetPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Child & Teen Therapy on Cherry Street | Safe Harbor Behavioral Health
          </h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Convenient mental health services in the heart of Cherry Street, serving families from 15th & Cherry 
            to the Medical District, including Cascia Hall and nearby neighborhoods.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Why Cherry Street Families Choose Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Why Cherry Street Families Choose Safe Harbor
              </h2>
              <p className="text-gray-600 mb-4">
                Cherry Street represents the perfect intersection of historic Tulsa charm and modern convenience. 
                From the bustling shops and restaurants along 15th and Cherry to the medical facilities and schools 
                that anchor this corridor, families in this area value accessibility, quality, and community connection. 
                Safe Harbor Behavioral Health has chosen our Cherry Street location specifically to serve families who 
                appreciate the walkability and central location that this district provides.
              </p>
              <p className="text-gray-600 mb-4">
                Our team serves families throughout the Cherry Street corridor, including those living in nearby 
                neighborhoods like Terwilliger Heights, families with children at Cascia Hall, and those working 
                in the medical district. Whether you're coming from Saint Francis Hospital, stopping by after 
                shopping at Cherry Street Farmers Market, or coordinating with other appointments along this busy 
                corridor, our location makes mental health care convenient for your family's lifestyle.
              </p>
              <p className="text-gray-600">
                Parents appreciate our understanding of the Cherry Street area's unique blend of residential and 
                commercial activity. We know that families here value efficiency and quality - you want excellent 
                care that fits into your busy schedules, and you appreciate providers who understand the pace and 
                priorities of this vibrant district.
              </p>
            </div>

            {/* Common Mental Health Challenges */}
            <div className="mb-12 bg-cream-100 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Common Mental Health Challenges Along Cherry Street
              </h2>
              <p className="text-gray-600 mb-4">
                The Cherry Street area's central location and busy atmosphere create both opportunities and challenges 
                for families. The convenient access to medical care, schools, and services comes with the stress of 
                traffic, busy schedules, and the pressure that often accompanies families juggling multiple commitments 
                in a high-activity area.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Overscheduling and Time Pressure</h3>
                  <p className="text-gray-600">
                    Families along Cherry Street often have packed schedules with school at Cascia Hall, medical 
                    appointments at Saint Francis, activities, and work. This constant rushing can create anxiety 
                    and stress in children who never feel they have downtime.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Medical Anxiety</h3>
                  <p className="text-gray-600">
                    Being in close proximity to medical facilities can heighten anxiety for some children, especially 
                    those with medical conditions or previous traumatic medical experiences. We help children process 
                    medical trauma and develop coping strategies for ongoing medical care.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Academic Pressure and Achievement Stress</h3>
                  <p className="text-gray-600">
                    The area's proximity to high-performing schools like Cascia Hall creates an atmosphere of academic 
                    achievement that can be overwhelming. We work with students experiencing perfectionism, test anxiety, 
                    and the stress of college preparation.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Urban Overstimulation</h3>
                  <p className="text-gray-600">
                    The busy traffic, constant activity, and urban environment of Cherry Street can be overwhelming 
                    for sensitive children. Our Body & Brain program helps kids develop regulation skills for managing 
                    sensory overload in busy environments.
                  </p>
                </div>
              </div>
            </div>

            {/* Schools We Work With */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Schools We Partner With in the Cherry Street Area
              </h2>
              <p className="text-gray-600 mb-6">
                Our Cherry Street location allows us to maintain close relationships with area schools and provide 
                coordinated care for students:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Primary School Partners</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Cascia Hall Preparatory School</li>
                    <li>• Bishop Kelley High School</li>
                    <li>• Edison Preparatory School</li>
                    <li>• Will Rogers High School</li>
                    <li>• Nathan Hale High School</li>
                    <li>• Edison Middle School</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Elementary & Alternative Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Marquette Catholic School</li>
                    <li>• St. Pius X Catholic School</li>
                    <li>• All Saints Catholic School</li>
                    <li>• Lee Elementary School</li>
                    <li>• Grimes Elementary School</li>
                    <li>• Various homeschool cooperatives</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Serve Cherry Street Families */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                How We Serve Cherry Street Families
              </h2>
              <p className="text-gray-600 mb-4">
                Safe Harbor Behavioral Health serves Cherry Street families from our Tulsa
                office at 2510 East 15th Street, Suite 207, and through telehealth
                available statewide across Oklahoma.
              </p>
              <p className="text-gray-600">
                Call{' '}
                <a href="tel:+19185535746" className="text-teal-600 font-semibold hover:underline">
                  (918) 553-5746
                </a>{' '}
                to ask about same-week appointments. If you are in crisis, call or text{' '}
                <a href="tel:988" className="text-teal-600 font-semibold hover:underline">
                  988
                </a>{' '}
                at any time.
              </p>
            </div>

            {/* Community Resources */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Cherry Street Community Resources
              </h2>
              <p className="text-gray-600 mb-6">
                We connect families with resources specific to the Cherry Street corridor:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Medical & Health Resources</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Saint Francis Hospital pediatric services</li>
                    <li>• Medical district specialist practices</li>
                    <li>• Physical therapy and rehabilitation services</li>
                    <li>• Pediatric specialty clinics</li>
                    <li>• Mental health support groups at Saint Francis</li>
                    <li>• Chronic illness support resources</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Educational & Community</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Cascia Hall counseling and support services</li>
                    <li>• Bishop Kelley student resources</li>
                    <li>• Cherry Street Farmers Market community</li>
                    <li>• Local tutoring and academic support</li>
                    <li>• Faith-based youth programs</li>
                    <li>• Parent support groups at area schools</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Frequently Asked Questions - Cherry Street Families
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Can you coordinate with our child's medical team at Saint Francis?
                  </h3>
                  <p className="text-gray-600">
                    Yes! Our team includes a pediatric health psychologist who regularly collaborates with medical teams. 
                    We can coordinate care plans, attend medical appointments when helpful, and provide specialized therapy 
                    for medical trauma and chronic illness adjustment.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you work with Cascia Hall's counseling department?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. We have established relationships with Cascia Hall counselors and can coordinate academic 
                    accommodations, communicate about student progress, and work together to support high-achieving students 
                    experiencing stress or anxiety.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Is parking really available on busy Cherry Street?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We have a private lot with 35 spaces reserved for clients, plus additional street parking options. 
                    We also offer valet service during peak hours and can provide specific parking instructions based on 
                    your appointment time.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Can we schedule therapy around medical appointments?
                  </h3>
                  <p className="text-gray-600">
                    Definitely. We offer flexible scheduling and understand that families in our area often coordinate 
                    multiple appointments. We can schedule back-to-back or same-day services, and we maintain close 
                    communication with medical providers when appropriate.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you offer crisis support for medical emergencies?
                  </h3>
                  <p className="text-gray-600">
                    Yes, our team is available for urgent consultations related to medical crises, diagnosis adjustments, 
                    or acute mental health needs. We coordinate closely with hospital social workers and medical teams 
                    during crisis situations.
                  </p>
                </div>
              </div>
            </div>

            {/* Strong CTA */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Convenient, Compassionate Care in the Heart of Cherry Street
              </h2>
              <p className="text-xl mb-6 opacity-95">
                Join families throughout the medical district and school corridor who trust Safe Harbor for integrated mental health care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-cream-100 transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
                >
                  Schedule Today
                </Link>
                <a
                  href="tel:918-553-5746"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-teal-600 transition-all transform hover:scale-105 font-bold text-lg"
                >
                  Call Now: (918) 553-5746
                </a>
              </div>
              <p className="mt-6 text-sm opacity-90">
                Conveniently located in the Cherry Street medical district - easy coordination with your other healthcare providers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
