import Link from 'next/link'

export default function BixbyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Child & Teen Therapy in Bixby | SafeHarbor Behavioral Health
          </h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Serving families in Bixby, Leonard, and surrounding areas with comprehensive mental health services, 
            from Charley Young Park to Memorial Drive and Bixby Elementary to Bixby High School.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Why Bixby Families Choose Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Why Bixby Families Choose SafeHarbor
              </h2>
              <p className="text-gray-600 mb-4">
                Bixby embodies the perfect balance of small-town charm and modern suburban living. Known for its 
                exceptional schools, safe neighborhoods, and strong sense of community, Bixby has become one of 
                Oklahoma's most desirable places to raise a family. SafeHarbor Behavioral Health understands what 
                draws families to Bixby - the commitment to educational excellence at Bixby Public Schools, the 
                beautiful parks and recreational facilities, the family-friendly atmosphere, and the community pride 
                that makes residents proud to call themselves Spartans.
              </p>
              <p className="text-gray-600 mb-4">
                Our Bixby location serves families throughout the city and surrounding areas, including established 
                neighborhoods near downtown Bixby, new developments along 151st Street, families in Leonard and 
                Glenpool areas, and those throughout south Tulsa County. We're conveniently located with easy access 
                from Highway 75, Memorial Drive, and 111th Street, making it simple for families to incorporate 
                therapy into their busy schedules filled with school activities, sports at the Bixby Sports Complex, 
                and community events.
              </p>
              <p className="text-gray-600">
                Parents appreciate that we understand the Bixby lifestyle - the emphasis on family values, community 
                involvement, and educational achievement. We know that Bixby families often choose to live here for 
                the schools and quality of life, and we understand both the benefits and pressures that come with 
                being part of a high-achieving, close-knit community. Our team includes Bixby residents and BPS 
                parents who truly understand what it means to be a Spartan family.
              </p>
            </div>

            {/* Common Mental Health Challenges */}
            <div className="mb-12 bg-cream-100 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Common Mental Health Challenges in Bixby
              </h2>
              <p className="text-gray-600 mb-4">
                While Bixby offers an excellent environment for raising children, the community's high standards 
                and rapid growth can create specific challenges. The pressure to excel academically and socially, 
                combined with the expectations that come with living in a successful suburban community, can impact 
                children's mental health in ways that families might not immediately recognize.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Academic and Social Performance Pressure</h3>
                  <p className="text-gray-600">
                    Bixby Public Schools maintain high academic standards, and the community takes pride in student 
                    achievements. However, this can create pressure for students to excel not just academically, but 
                    also in athletics, fine arts, and leadership roles. The expectation to be well-rounded and 
                    successful can lead to anxiety, perfectionism, and fear of disappointing parents and teachers.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Rapid Growth and Community Changes</h3>
                  <p className="text-gray-600">
                    As Bixby continues to experience rapid population growth, children may struggle with changes in 
                    their schools, neighborhoods, and social dynamics. New developments, changing school boundaries, 
                    and the evolution from small town to larger suburban community can create adjustment difficulties 
                    for children who value stability and familiarity.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Social Media and Image Management</h3>
                  <p className="text-gray-600">
                    In a community where appearance and success matter, teens may feel pressure to maintain a perfect 
                    image on social media. The desire to showcase the "ideal Bixby lifestyle" can lead to anxiety, 
                    depression, and difficulty accepting normal struggles or imperfections. We help teens develop 
                    authentic self-worth beyond external validation.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Competitive Environment Stress</h3>
                  <p className="text-gray-600">
                    Whether in academics, athletics, or social situations, Bixby students often find themselves in 
                    competitive environments. While competition can be motivating, it can also create stress, 
                    self-doubt, and unhealthy comparison with peers. We help students develop resilience and maintain 
                    perspective in competitive situations.
                  </p>
                </div>
              </div>
            </div>

            {/* Schools We Work With */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Schools We Partner With in Bixby
              </h2>
              <p className="text-gray-600 mb-6">
                We maintain strong collaborative relationships with Bixby Public Schools and area institutions, 
                working closely with counselors, teachers, and administrators to support student success:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Bixby Public Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Bixby High School</li>
                    <li>• Bixby North Elementary</li>
                    <li>• Bixby East Elementary</li>
                    <li>• Bixby West Elementary</li>
                    <li>• Northeast Elementary</li>
                    <li>• Oak Elementary</li>
                    <li>• Bixby Intermediate School North</li>
                    <li>• Bixby Intermediate School South</li>
                    <li>• Central Middle School</li>
                    <li>• West Middle School</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Area Schools & Programs</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Glenpool Public Schools</li>
                    <li>• Leonard Public Schools</li>
                    <li>• Mounds Public Schools</li>
                    <li>• Victory Christian School</li>
                    <li>• Private schools in south Tulsa</li>
                    <li>• Homeschool cooperatives</li>
                    <li>• Alternative education programs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transportation and Parking */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Getting to SafeHarbor in Bixby
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Convenient Location & Parking</h3>
                  <p className="text-gray-600 mb-3">
                    Our Bixby location is designed for busy families with multiple commitments:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Large parking lot with 40+ spaces available</li>
                    <li>• Easy access from major Bixby roads and highways</li>
                    <li>• Handicap accessible parking and building entrance</li>
                    <li>• Covered drop-off area for inclement weather</li>
                    <li>• Well-lit, secure parking for all appointment times</li>
                    <li>• Quick access to minimize time away from family activities</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">From Major Bixby Areas</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• From Bixby High School: 6-minute drive via Memorial Drive</li>
                    <li>• From downtown Bixby: 4-minute drive via 111th Street</li>
                    <li>• From Charley Young Park: 5-minute drive via Memorial</li>
                    <li>• From new developments near 151st Street: 8-minute drive</li>
                    <li>• From Leonard area: 10-minute drive via Highway 64</li>
                    <li>• From Glenpool: 12-minute drive via Highway 75</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Highway and Regional Access</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 3 minutes from Highway 75 (main north-south route)</li>
                    <li>• Easy access via Memorial Drive corridor</li>
                    <li>• Quick route from 111th Street and 121st Street</li>
                    <li>• Convenient from Highway 64 (Leonard direction)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Easy to Find Near Bixby Landmarks
              </h2>
              <p className="text-gray-600 mb-6">
                Our office is strategically located near the places Bixby families visit regularly:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">We're Close To:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Bixby Sports Complex</li>
                    <li>• Charley Young Recreation Center</li>
                    <li>• Bixby Community Center</li>
                    <li>• Downtown Bixby Green Corn Festival grounds</li>
                    <li>• Multiple BPS school campuses</li>
                    <li>• Bixby Historical Museum</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Convenient Amenities:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Walmart Supercenter and shopping centers</li>
                    <li>• Multiple restaurants and dining options</li>
                    <li>• Reasor's and Homeland grocery stores</li>
                    <li>• Starbucks and local coffee shops</li>
                    <li>• CVS, Walgreens, and other pharmacies</li>
                    <li>• Banking and professional services on Memorial</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Success Story */}
            <div className="mb-12 bg-gradient-to-br from-cream-100 to-cream-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Success Story from Bixby
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-600 italic mb-4">
                  "We moved to Bixby when our son was in 7th grade, specifically for the schools and community. 
                  While he was a good student, he struggled to make friends and fit in with classmates who had grown 
                  up together. He became increasingly withdrawn, stopped participating in activities he used to enjoy, 
                  and his grades began to slip. As new residents, we felt lost trying to navigate both his social 
                  struggles and the high expectations of BPS."
                </p>
                <p className="text-gray-600 italic mb-4">
                  "SafeHarbor was recommended by our pediatrician, and we're so grateful we found them. The therapists 
                  immediately understood the challenges of being a new family in Bixby's tight-knit community. They 
                  worked with our son on social skills and confidence, but also helped us as parents understand the 
                  community culture and find ways to get more involved."
                </p>
                <p className="text-gray-600 italic">
                  "The turning point came when the therapist suggested he try the robotics team, knowing his interest 
                  in technology. He found his people there and slowly began to branch out. Now he's thriving at Bixby 
                  High School, has a solid group of friends, and even volunteers with the Green Corn Festival. 
                  SafeHarbor didn't just treat his symptoms - they helped our whole family become part of the Bixby 
                  community in an authentic way."
                </p>
                <p className="text-teal-600 font-semibold mt-4">
                  - Jennifer W., Mother of three, Bixby resident since 2020
                </p>
              </div>
            </div>

            {/* Staff Members */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Our Bixby Spartan Team
              </h2>
              <p className="text-gray-600 mb-6">
                Our therapists understand Bixby because they're part of the Spartan community:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Laura Henderson, PsyD</h3>
                  <p className="text-teal-600 text-sm mb-2">Child Development Specialist</p>
                  <p className="text-gray-600 text-sm">
                    Bixby resident for 10 years, BPS parent. Specializes in adjustment disorders and social anxiety 
                    in children and teens. Former school psychologist who understands the academic and social 
                    pressures within the Bixby community.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Tyler Johnson, LCSW</h3>
                  <p className="text-teal-600 text-sm mb-2">Adolescent Relationship Specialist</p>
                  <p className="text-gray-600 text-sm">
                    Bixby High School graduate who returned to serve his community. Expert in teen identity development, 
                    peer relationships, and helping students navigate the social dynamics specific to BPS environments. 
                    Active in Spartan athletic programs as a volunteer coach.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Rachel Parks, MD</h3>
                  <p className="text-teal-600 text-sm mb-2">Child Psychiatrist</p>
                  <p className="text-gray-600 text-sm">
                    Specializes in anxiety disorders, ADHD, and mood disorders in school-age children. Works closely 
                    with BPS counselors and special education teams. Available for comprehensive evaluations and 
                    medication management when needed.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Monica Davis, LPC</h3>
                  <p className="text-teal-600 text-sm mb-2">Family Integration Therapist</p>
                  <p className="text-gray-600 text-sm">
                    Specializes in helping new families integrate into the Bixby community successfully. Expert in 
                    family systems therapy and helping families balance achievement expectations with mental health. 
                    Active in multiple Bixby parent organizations.
                  </p>
                </div>
              </div>
            </div>

            {/* Community Resources */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Bixby Community Resources
              </h2>
              <p className="text-gray-600 mb-6">
                We connect families with local Bixby resources and support systems:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Recreation & Activities</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Bixby Sports Complex leagues and programs</li>
                    <li>• Charley Young Recreation Center activities</li>
                    <li>• Bixby Community Center classes</li>
                    <li>• Green Corn Festival volunteer opportunities</li>
                    <li>• Youth sports leagues and teams</li>
                    <li>• Local church youth ministries</li>
                    <li>• Scouting programs and outdoor activities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Support Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• BPS counseling and student support services</li>
                    <li>• Bixby Community Foundation resources</li>
                    <li>• Family & Children's Services (south county office)</li>
                    <li>• Faith community support networks</li>
                    <li>• Parent organizations and booster clubs</li>
                    <li>• Bixby Historical Society programs</li>
                    <li>• Crisis support through local emergency services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Frequently Asked Questions - Bixby Families
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you work with Bixby Public Schools?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We have established partnerships with BPS counselors, administrators, and special education 
                    teams. We can coordinate academic accommodations, attend IEP meetings when requested, and work 
                    collaboratively with school staff to ensure comprehensive support for student success.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Can you help families who are new to Bixby adjust to the community?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely! We work with many families who relocate to Bixby. We understand the challenges of 
                    integrating into established social circles and community culture. We help both children and 
                    parents navigate the transition and find meaningful ways to become part of the Spartan community.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you understand the academic and social pressures specific to Bixby schools?
                  </h3>
                  <p className="text-gray-600">
                    Yes, our team includes BPS graduates and current BPS parents who understand the district's culture, 
                    expectations, and social dynamics. We know what it means to be a Spartan and can help students 
                    navigate the specific challenges while still thriving in Bixby's achievement-oriented environment.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Are you flexible with scheduling around sports and activities?
                  </h3>
                  <p className="text-gray-600">
                    Definitely! We understand how busy Bixby families are with school activities, sports, and community 
                    involvement. We offer early morning, evening, and weekend appointments, and we can work around 
                    game schedules, tournament seasons, and other commitments.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you provide family therapy for communication and stress management?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we offer family therapy specifically designed to help families maintain healthy relationships 
                    while pursuing excellence. We address issues like overscheduling, perfectionism, and communication 
                    patterns, helping families stay connected despite busy lifestyles and high expectations.
                  </p>
                </div>
              </div>
            </div>

            {/* Strong CTA */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Help Your Spartan Thrive in School and Life
              </h2>
              <p className="text-xl mb-6 opacity-95">
                Join Bixby families who trust SafeHarbor for mental health support that understands our community values and Spartan pride.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-cream-100 transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
                >
                  Schedule Your Appointment
                </Link>
                <a
                  href="tel:918-553-5746"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-teal-600 transition-all transform hover:scale-105 font-bold text-lg"
                >
                  Call Now: (918) 553-5746
                </a>
              </div>
              <p className="mt-6 text-sm opacity-90">
                Proudly serving Bixby, Leonard, Glenpool, and all south Tulsa County communities
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}