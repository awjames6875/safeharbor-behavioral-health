import Link from 'next/link'

export default function UnionDistrictPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Child & Teen Therapy in Union District | SafeHarbor Behavioral Health
          </h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Serving families in Union Public Schools district and surrounding areas with comprehensive mental health services, 
            from Union High School to Grove Elementary and all the exceptional schools in between.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Why Union District Families Choose Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Why Union District Families Choose SafeHarbor
              </h2>
              <p className="text-gray-600 mb-4">
                The Union District represents educational excellence and community pride at its finest. Home to one 
                of Oklahoma's most prestigious school districts, Union Public Schools consistently ranks among the 
                state's top performers, attracting families who prioritize academic achievement, extracurricular 
                excellence, and comprehensive student development. SafeHarbor Behavioral Health understands what 
                makes the Union District special - the unwavering commitment to educational excellence, the community-wide 
                support for student achievement, and the high expectations that define the Redskin way of life.
              </p>
              <p className="text-gray-600 mb-4">
                Our Union District location serves families throughout the area, including neighborhoods near Union 
                High School, families in the 61st and Yale corridor, residents of developments throughout the district 
                boundaries, and those in south Tulsa areas served by Union schools. We're strategically positioned 
                with excellent access from major routes like Yale Avenue, 61st Street, and 71st Street, making it 
                convenient for families to coordinate therapy with the demanding schedules of high-achieving Union 
                students involved in academics, athletics, fine arts, and leadership activities.
              </p>
              <p className="text-gray-600">
                Parents appreciate that we understand the Union District culture - the "Redskin Pride" that emphasizes 
                excellence in all endeavors, the comprehensive approach to student development that includes academics, 
                athletics, and character building, and the community expectation that students will achieve at the 
                highest levels. We know that Union families often choose the district specifically for its educational 
                reputation, and we understand both the incredible opportunities and the significant pressures that 
                come with being part of such an elite educational community.
              </p>
            </div>

            {/* Common Mental Health Challenges */}
            <div className="mb-12 bg-cream-100 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Common Mental Health Challenges in Union District
              </h2>
              <p className="text-gray-600 mb-4">
                While Union District offers unparalleled educational opportunities and resources, the district's 
                culture of excellence can create intense pressures for students and families. The competitive 
                academic environment, high achievement expectations, and comprehensive involvement in multiple 
                activities can impact student mental health in ways that require specialized understanding and support.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Extreme Academic Pressure and Competition</h3>
                  <p className="text-gray-600">
                    Union District's reputation for academic excellence creates an environment where students feel 
                    intense pressure to maintain perfect grades, take the most challenging courses, and excel in 
                    standardized testing. The competition for class rank, National Merit recognition, and admission 
                    to elite colleges can lead to severe anxiety, perfectionism, and academic burnout.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Overscheduling and Time Management Overwhelm</h3>
                  <p className="text-gray-600">
                    Union students are expected to excel not just academically, but also in athletics, fine arts, 
                    leadership positions, community service, and extracurricular activities. The pressure to be 
                    "well-rounded" for college applications can result in overscheduling, chronic stress, sleep 
                    deprivation, and difficulty maintaining work-life balance.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Social Hierarchy and Status Anxiety</h3>
                  <p className="text-gray-600">
                    In a high-achieving district like Union, social status is often tied to academic performance, 
                    athletic success, or extracurricular achievements. Students may struggle with social comparison, 
                    fear of not measuring up to peers, or anxiety about maintaining their position within competitive 
                    social and academic hierarchies.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">College Preparation and Future Anxiety</h3>
                  <p className="text-gray-600">
                    With Union's track record of sending graduates to top universities, students often feel enormous 
                    pressure to maintain the district's reputation for college success. The stress of SAT/ACT preparation, 
                    college applications, scholarship competitions, and living up to family and community expectations 
                    can create overwhelming anxiety about the future.
                  </p>
                </div>
              </div>
            </div>

            {/* Schools We Work With */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Schools We Partner With in Union District
              </h2>
              <p className="text-gray-600 mb-6">
                We maintain close partnerships with Union Public Schools at all levels, working directly with 
                counselors, teachers, and administrators throughout the district:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Union High Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Union High School</li>
                    <li>• Union 6th/7th Grade Center</li>
                    <li>• Union 8th/9th Grade Center</li>
                    <li>• Union Tuttle Middle School</li>
                    <li>• Union Alternative School</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Union Elementary Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Grove Elementary</li>
                    <li>• Boevers Elementary</li>
                    <li>• Darnaby Elementary</li>
                    <li>• Jarman Elementary</li>
                    <li>• Moore Elementary</li>
                    <li>• Peters Elementary</li>
                    <li>• Rosa Parks Elementary</li>
                    <li>• Clark Elementary</li>
                    <li>• Andersen Elementary</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transportation and Parking */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Getting to SafeHarbor in Union District
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Premium Access & Parking</h3>
                  <p className="text-gray-600 mb-3">
                    Our Union District location is designed for busy, high-achieving families:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Large parking lot with 60+ premium spaces</li>
                    <li>• Easy access from major Union District corridors</li>
                    <li>• Handicap accessible parking and building entrance</li>
                    <li>• Covered drop-off area for quick transitions</li>
                    <li>• Well-lit, secure parking for evening appointments</li>
                    <li>• Designed for efficiency to respect busy schedules</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">From Major Union District Areas</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• From Union High School: 3-minute drive via 61st Street</li>
                    <li>• From Union 8th/9th Grade Center: 4-minute drive</li>
                    <li>• From 61st & Yale area: 2-minute drive</li>
                    <li>• From 71st & Yale corridor: 5-minute drive</li>
                    <li>• From Union elementary schools: 5-8 minute drive</li>
                    <li>• From Union athletic facilities: 6-minute drive</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Major Corridor Access</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Direct access from Yale Avenue (primary north-south route)</li>
                    <li>• Quick access from 61st Street and 71st Street</li>
                    <li>• Easy routes from Memorial Drive and 51st Street</li>
                    <li>• Convenient from Riverside Drive for families near the river</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Located in the Heart of Union Excellence
              </h2>
              <p className="text-gray-600 mb-6">
                Our office is positioned near the landmarks and institutions that define Union District pride:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Union District Landmarks:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Union High School campus</li>
                    <li>• Union Athletic Complex</li>
                    <li>• Union Performing Arts Center</li>
                    <li>• Multiple Union elementary and middle schools</li>
                    <li>• Union community facilities</li>
                    <li>• District administrative offices</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Premium Amenities:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Upscale shopping centers and boutiques</li>
                    <li>• Fine dining and family restaurants</li>
                    <li>• Premium grocery stores (Whole Foods, Reasor's)</li>
                    <li>• Starbucks and premium coffee shops</li>
                    <li>• High-end services and professional offices</li>
                    <li>• Medical and dental practices along Yale</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Success Story */}
            <div className="mb-12 bg-gradient-to-br from-cream-100 to-cream-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Success Story from Union District
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-600 italic mb-4">
                  "Our daughter was the quintessential Union overachiever - valedictorian track, National Merit 
                  semifinalist, varsity soccer captain, student body president, and applying to Ivy League schools. 
                  But by her senior year, she was having panic attacks daily, barely sleeping, and had developed 
                  an eating disorder. She was terrified that any imperfection would ruin her chances at her dream 
                  colleges and let down the entire Union community that had invested so much in her success."
                </p>
                <p className="text-gray-600 italic mb-4">
                  "SafeHarbor understood the unique pressures that come with being a high-profile Union student. 
                  They didn't suggest she lower her standards or quit activities - that wasn't realistic given her 
                  goals and our family's expectations. Instead, they taught her sustainable strategies for managing 
                  perfectionism, handling stress, and maintaining perspective during the college application process."
                </p>
                <p className="text-gray-600 italic">
                  "The transformation was incredible. She learned that excellence didn't require perfection, developed 
                  healthy eating and sleeping habits, and actually improved her performance by managing her anxiety. 
                  She got into her first-choice Ivy League school, but more importantly, she learned life skills for 
                  success beyond high school. SafeHarbor helped her realize that being a Union Redskin means striving 
                  for excellence while maintaining your health and happiness."
                </p>
                <p className="text-teal-600 font-semibold mt-4">
                  - Katherine H., Mother of two, Union District resident since 2012
                </p>
              </div>
            </div>

            {/* Staff Members */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Our Union District Elite Team
              </h2>
              <p className="text-gray-600 mb-6">
                Our therapists understand Union District excellence because they're part of the Redskin family:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Elizabeth Harvard, PhD</h3>
                  <p className="text-teal-600 text-sm mb-2">Gifted Education Psychology Specialist</p>
                  <p className="text-gray-600 text-sm">
                    Union High School graduate, current UPS parent. Specializes in gifted student psychology, 
                    perfectionism, and academic anxiety. Former Union counselor who intimately understands the 
                    district's culture, expectations, and the unique pressures facing high-achieving Union students.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Jonathan Stevens, LCSW</h3>
                  <p className="text-teal-600 text-sm mb-2">Elite Performance Specialist</p>
                  <p className="text-gray-600 text-sm">
                    Expert in helping high-achieving teens manage competitive stress, time management, and college 
                    preparation anxiety. Familiar with Union's comprehensive programs and works closely with coaches, 
                    sponsors, and counselors. Specializes in sustainable high performance and burnout prevention.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Alexander Reed, MD</h3>
                  <p className="text-teal-600 text-sm mb-2">Child & Adolescent Psychiatrist</p>
                  <p className="text-gray-600 text-sm">
                    Specializes in anxiety disorders, ADHD, and mood disorders in academically gifted students. 
                    Expert in medication management for high-achieving teens. Collaborates closely with Union 
                    counselors and works with families to optimize both academic performance and mental health.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Victoria Champion, LPC</h3>
                  <p className="text-teal-600 text-sm mb-2">High-Achieving Family Systems Specialist</p>
                  <p className="text-gray-600 text-sm">
                    Helps elite families maintain healthy relationships while pursuing excellence. Expert in family 
                    communication, managing achievement pressure, and helping parents support their children's success 
                    without compromising mental health. Understands Union family dynamics and expectations.
                  </p>
                </div>
              </div>
            </div>

            {/* Community Resources */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Union District Excellence Resources
              </h2>
              <p className="text-gray-600 mb-6">
                We connect families with the premium resources available throughout Union District:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Academic & Enrichment Excellence</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Union District counseling and gifted services</li>
                    <li>• College and career planning resources</li>
                    <li>• National Merit and scholarship preparation</li>
                    <li>• Advanced Placement and dual enrollment support</li>
                    <li>• Elite tutoring and test prep services</li>
                    <li>• Academic competition and enrichment programs</li>
                    <li>• Leadership development and internship opportunities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Elite Activities & Support</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Union athletics and championship programs</li>
                    <li>• Fine arts and performing arts excellence</li>
                    <li>• Student leadership and government opportunities</li>
                    <li>• Community service and volunteer programs</li>
                    <li>• Parent organizations and booster clubs</li>
                    <li>• Alumni mentorship and networking</li>
                    <li>• Mental health support groups for high achievers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Frequently Asked Questions - Union District Families
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you understand the unique pressures of Union District excellence?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. Our team includes Union graduates and current UPS parents who intimately understand 
                    the district's culture of excellence, competitive environment, and high expectations. We specialize 
                    in helping high-achieving students manage pressure while maintaining their competitive edge and 
                    pursuing their ambitious goals.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Can you help with college preparation stress and perfectionism?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We specialize in helping Union students navigate the intense college preparation process, 
                    including SAT/ACT anxiety, college application stress, scholarship competition pressure, and 
                    maintaining perspective during the admissions process. We help students pursue elite colleges 
                    while protecting their mental health.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you work directly with Union District counselors and staff?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we have excellent working relationships with Union counselors, administrators, and teachers 
                    at all levels. We can coordinate academic accommodations, attend meetings when requested, and 
                    work as part of your student's support team to ensure success both academically and emotionally.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Are you flexible enough to work with extremely busy Union student schedules?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely! We understand how demanding Union student schedules can be with advanced academics, 
                    athletics, fine arts, and leadership commitments. We offer early morning, evening, and weekend 
                    appointments, and can work around competition seasons, performance schedules, and college visits.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Can you help families maintain Union excellence while improving mental health?
                  </h3>
                  <p className="text-gray-600">
                    That's our specialty! We don't ask Union students to lower their standards or abandon their goals. 
                    Instead, we teach sustainable high-performance strategies, stress management techniques, and healthy 
                    perfectionism that actually improves performance while protecting mental health. Excellence and 
                    wellness can coexist.
                  </p>
                </div>
              </div>
            </div>

            {/* Strong CTA */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Achieve Union Excellence While Protecting Mental Health
              </h2>
              <p className="text-xl mb-6 opacity-95">
                Join Union District families who trust SafeHarbor for elite mental health support that understands Redskin pride and championship expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-cream-100 transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
                >
                  Schedule Your Elite Consultation
                </Link>
                <a
                  href="tel:918-555-0100"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-teal-600 transition-all transform hover:scale-105 font-bold text-lg"
                >
                  Call Now: (918) 555-0100
                </a>
              </div>
              <p className="mt-6 text-sm opacity-90">
                Proudly serving Union District's elite families - where excellence meets wellness
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}