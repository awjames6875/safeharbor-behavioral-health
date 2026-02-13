import Link from 'next/link'

export default function CherryStreetPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Child & Teen Therapy on Cherry Street | SafeHarbor Behavioral Health
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
                Why Cherry Street Families Choose SafeHarbor
              </h2>
              <p className="text-gray-600 mb-4">
                Cherry Street represents the perfect intersection of historic Tulsa charm and modern convenience. 
                From the bustling shops and restaurants along 15th and Cherry to the medical facilities and schools 
                that anchor this corridor, families in this area value accessibility, quality, and community connection. 
                SafeHarbor Behavioral Health has chosen our Cherry Street location specifically to serve families who 
                appreciate the walkability and central location that this district provides.
              </p>
              <p className="text-gray-600 mb-4">
                Our office serves families throughout the Cherry Street corridor, including those living in nearby 
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

            {/* Transportation and Parking */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Getting to SafeHarbor on Cherry Street
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Convenient Parking Solutions</h3>
                  <p className="text-gray-600 mb-3">
                    We understand parking can be challenging on busy Cherry Street, so we've made it easy:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Private parking lot with 35 dedicated client spaces</li>
                    <li>• Additional street parking on surrounding side streets</li>
                    <li>• Valet parking available during peak hours</li>
                    <li>• Handicap accessible parking and building access</li>
                    <li>• Short-term parking for brief appointments</li>
                    <li>• Evening parking easier to find after business hours</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">From Cherry Street Landmarks</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• From Saint Francis Hospital: 2-minute drive via 19th Street</li>
                    <li>• From Cascia Hall: 5-minute drive via 15th Street</li>
                    <li>• From Cherry Street shopping: Walking distance or 2-minute drive</li>
                    <li>• From Bishop Kelley: 8-minute drive via Harvard Avenue</li>
                    <li>• From Medical District offices: 3-5 minute drive or walk</li>
                    <li>• From Cherry Street Farmers Market: 1 block away</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Public Transportation & Walking</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Multiple Tulsa Transit bus routes along Cherry Street</li>
                    <li>• Safe sidewalks throughout the medical district</li>
                    <li>• Well-lit walking paths for evening appointments</li>
                    <li>• Pedestrian-friendly crosswalks at major intersections</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Centrally Located on Cherry Street
              </h2>
              <p className="text-gray-600 mb-6">
                Our Cherry Street location puts us at the center of one of Tulsa's most convenient corridors, 
                near the places families visit regularly:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Major Landmarks Nearby:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Saint Francis Hospital (2 blocks)</li>
                    <li>• Cascia Hall Preparatory School (5 minutes)</li>
                    <li>• Cherry Street shopping district</li>
                    <li>• 15th & Cherry intersection</li>
                    <li>• Medical District offices</li>
                    <li>• Hillcrest Medical Center (nearby)</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Convenient Amenities:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Starbucks on 15th & Cherry</li>
                    <li>• Walgreens pharmacy</li>
                    <li>• Several restaurants for family meals</li>
                    <li>• QuikTrip for quick stops</li>
                    <li>• Banks and ATMs</li>
                    <li>• Cherry Street Farmers Market (Saturdays)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Success Story */}
            <div className="mb-12 bg-gradient-to-br from-cream-100 to-cream-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Success Story from Cherry Street
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-600 italic mb-4">
                  "Our son attends Cascia Hall and has several ongoing medical issues that require regular appointments 
                  at Saint Francis. Between school, medical appointments, therapy for his chronic condition, and trying 
                  to maintain some normalcy, he was constantly anxious and overwhelmed. The driving between appointments, 
                  the pressure to keep up academically despite missing school, and the stress of medical procedures was 
                  affecting our whole family."
                </p>
                <p className="text-gray-600 italic mb-4">
                  "Finding SafeHarbor on Cherry Street was a game-changer. Not only could we combine therapy with our 
                  medical appointments, but the therapists understood medical trauma and the unique stress of managing 
                  chronic illness as a teenager. They worked with Cascia Hall counselors to develop an academic plan 
                  that reduced pressure while keeping him on track."
                </p>
                <p className="text-gray-600 italic">
                  "The location made such a difference - instead of driving all over town, we could park once and walk 
                  to multiple appointments. Our son started seeing therapy not as another burden on his schedule, but 
                  as a supportive resource. He's now managing his medical care with confidence and maintaining good 
                  grades without the constant anxiety he had before."
                </p>
                <p className="text-teal-600 font-semibold mt-4">
                  - Patricia M., Mother of one, Cascia Hall parent
                </p>
              </div>
            </div>

            {/* Staff Members */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Our Cherry Street Medical District Team
              </h2>
              <p className="text-gray-600 mb-6">
                Our therapists understand the unique needs of families in the medical district and school corridor:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Maria Rodriguez, PhD</h3>
                  <p className="text-teal-600 text-sm mb-2">Pediatric Health Psychologist</p>
                  <p className="text-gray-600 text-sm">
                    Specializes in medical trauma and chronic illness adjustment. Collaborates regularly with Saint Francis 
                    pediatric team. Fluent in Spanish. Expert in helping children cope with medical procedures and conditions.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">David Chen, LCSW</h3>
                  <p className="text-teal-600 text-sm mb-2">Academic Stress Specialist</p>
                  <p className="text-gray-600 text-sm">
                    Former Cascia Hall counselor. Expert in high-achieving student anxiety and college prep stress. 
                    Maintains relationships with area school counselors. Specializes in perfectionism and academic burnout.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Jennifer Walsh, MD</h3>
                  <p className="text-teal-600 text-sm mb-2">Child Psychiatrist</p>
                  <p className="text-gray-600 text-sm">
                    Works closely with medical teams at area hospitals. Specializes in anxiety disorders and medication 
                    management for children with complex medical needs. Available for urgent consultations.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Christina Lee, LPC</h3>
                  <p className="text-teal-600 text-sm mb-2">Family Systems Therapist</p>
                  <p className="text-gray-600 text-sm">
                    Specializes in helping families navigate chronic illness, medical trauma, and the stress of managing 
                    complex schedules. Provides family therapy and parent support groups.
                  </p>
                </div>
              </div>
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
                Join families throughout the medical district and school corridor who trust SafeHarbor for integrated mental health care.
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