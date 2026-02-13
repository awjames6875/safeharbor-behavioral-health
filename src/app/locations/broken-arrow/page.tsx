import Link from 'next/link'

export default function BrokenArrowPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Child & Teen Therapy in Broken Arrow | SafeHarbor Behavioral Health
          </h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Serving families in Broken Arrow, Coweta, and surrounding communities with comprehensive mental health services, 
            from Central Park to Rose District and Tiger Elementary to Broken Arrow High School.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Why Broken Arrow Families Choose Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Why Broken Arrow Families Choose SafeHarbor
              </h2>
              <p className="text-gray-600 mb-4">
                Broken Arrow is known for its family-friendly atmosphere, excellent schools, and strong community values. 
                From the beautiful Rose District with its shops and restaurants to the extensive park system and top-rated 
                Broken Arrow Public Schools, this community prioritizes family well-being and educational excellence. 
                SafeHarbor Behavioral Health understands what makes Broken Arrow special - the emphasis on community 
                involvement, school spirit, and raising children in a safe, supportive environment.
              </p>
              <p className="text-gray-600 mb-4">
                Our Broken Arrow location serves families throughout the city, including those in established neighborhoods 
                near Central Park, new developments around Aspen Creek, families near the Rose District, and those in 
                surrounding areas like Coweta and South Broken Arrow. We're conveniently located with easy access from 
                Highway 51, 71st Street, and Aspen Avenue, making it simple for families to incorporate therapy into their 
                busy schedules of school activities, sports, and community events.
              </p>
              <p className="text-gray-600">
                Parents appreciate that we understand the Broken Arrow lifestyle - the importance of school involvement, 
                the value placed on character development and community service, and the desire to maintain the small-town 
                feel within a growing city. Our team knows the local schools, participates in community events, and 
                understands the unique blend of suburban convenience and close-knit community that defines Broken Arrow.
              </p>
            </div>

            {/* Common Mental Health Challenges */}
            <div className="mb-12 bg-cream-100 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Common Mental Health Challenges in Broken Arrow
              </h2>
              <p className="text-gray-600 mb-4">
                While Broken Arrow offers many advantages for families, the community's high expectations and rapid growth 
                can create specific challenges. The pressure to excel academically and socially, combined with the busy 
                pace of suburban life, can impact children's mental health in ways that families might not immediately recognize.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Academic and Athletic Pressure</h3>
                  <p className="text-gray-600">
                    Broken Arrow Public Schools are known for excellence, and the community takes pride in academic and 
                    athletic achievements. However, this can create intense pressure for students to perform at high levels 
                    in multiple areas, leading to anxiety, perfectionism, and burnout.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Rapid Growth and Change</h3>
                  <p className="text-gray-600">
                    As Broken Arrow continues to grow rapidly, children may struggle with changes in their schools, 
                    neighborhoods, and friend groups. New developments, changing demographics, and school redistricting 
                    can create anxiety and adjustment difficulties.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Social Media and Peer Pressure</h3>
                  <p className="text-gray-600">
                    Suburban teens often face unique social media pressures around lifestyle, achievements, and appearance. 
                    The desire to maintain Broken Arrow's positive image can sometimes prevent teens from seeking help 
                    when they're struggling.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Overscheduling and Family Stress</h3>
                  <p className="text-gray-600">
                    Many Broken Arrow families are highly involved in school activities, sports, church, and community 
                    organizations. While involvement is positive, overscheduling can lead to family stress, exhaustion, 
                    and children who struggle to find downtime and develop independent coping skills.
                  </p>
                </div>
              </div>
            </div>

            {/* Schools We Work With */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Schools We Partner With in Broken Arrow
              </h2>
              <p className="text-gray-600 mb-6">
                We maintain strong partnerships with Broken Arrow Public Schools and area private schools, working 
                closely with counselors, teachers, and administrators:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Broken Arrow Public Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Broken Arrow High School</li>
                    <li>• Broken Arrow Freshman Academy</li>
                    <li>• Arrow Springs Elementary</li>
                    <li>• Aspen Creek Elementary</li>
                    <li>• Country Lane Elementary</li>
                    <li>• Creekwood Elementary</li>
                    <li>• Highland Park Elementary</li>
                    <li>• Lynn Lane Elementary</li>
                    <li>• Oneta Ridge Elementary</li>
                    <li>• Park Lane Elementary</li>
                    <li>• Sequoyah Middle School</li>
                    <li>• Centennial Middle School</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Private & Charter Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Indian Springs Elementary</li>
                    <li>• Regent Preparatory School</li>
                    <li>• Victory Christian School</li>
                    <li>• Faith Christian Academy</li>
                    <li>• Metro Christian Academy</li>
                    <li>• Homeschool cooperatives</li>
                    <li>• Coweta Public Schools (nearby)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transportation and Parking */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Getting to SafeHarbor in Broken Arrow
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Convenient Parking & Access</h3>
                  <p className="text-gray-600 mb-3">
                    Our Broken Arrow location offers hassle-free access for busy families:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Large parking lot with 60+ spaces</li>
                    <li>• Easy access from major roads (no neighborhood traffic)</li>
                    <li>• Handicap accessible parking and entrance</li>
                    <li>• Covered drop-off area for inclement weather</li>
                    <li>• Well-lit parking for evening activities</li>
                    <li>• Quick in-and-out access for busy schedules</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">From Major Broken Arrow Areas</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• From Rose District: 8-minute drive via Elm Place</li>
                    <li>• From Central Park: 5-minute drive via Aspen Avenue</li>
                    <li>• From BA High School: 6-minute drive via Kenosha</li>
                    <li>• From 71st & Yale area: 10-minute drive via 71st Street</li>
                    <li>• From South Broken Arrow: 12-minute drive via 111th Street</li>
                    <li>• From Coweta: 15-minute drive via Highway 51</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Major Highway Access</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 2 minutes from Highway 51 (access to Coweta, Wagoner)</li>
                    <li>• 5 minutes from Highway 169 (access to Tulsa)</li>
                    <li>• Easy access from 71st Street corridor</li>
                    <li>• Quick route from Muskogee Turnpike</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Easy to Find Near Broken Arrow Landmarks
              </h2>
              <p className="text-gray-600 mb-6">
                Our office is conveniently located near the places Broken Arrow families visit regularly:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">We're Close To:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Rose District shopping and dining</li>
                    <li>• Central Park and Sports Complex</li>
                    <li>• Broken Arrow Performing Arts Center</li>
                    <li>• Nienhuis Park</li>
                    <li>• BA Senior Center</li>
                    <li>• Multiple BAPS schools</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Convenient Amenities:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Target and Walmart nearby</li>
                    <li>• Multiple restaurants in Rose District</li>
                    <li>• Reasor's and Homeland grocery stores</li>
                    <li>• Starbucks and local coffee shops</li>
                    <li>• CVS and Walgreens pharmacies</li>
                    <li>• Banks and service providers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Success Story */}
            <div className="mb-12 bg-gradient-to-br from-cream-100 to-cream-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Success Story from Broken Arrow
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-600 italic mb-4">
                  "Our 14-year-old daughter was the 'perfect' Broken Arrow student - honor roll, varsity volleyball, 
                  student council, church youth group, and volunteer work. But at home, she was having panic attacks 
                  and barely sleeping. She was terrified of disappointing anyone and felt like she couldn't live up 
                  to the expectations of being a 'BA kid.'"
                </p>
                <p className="text-gray-600 italic mb-4">
                  "SafeHarbor immediately understood the pressure cooker environment that high-achieving BA students 
                  face. They didn't tell her to quit activities - instead, they taught her how to set boundaries, 
                  manage perfectionism, and communicate with us about her stress levels. The Body & Brain program 
                  gave her physical outlets for anxiety that fit into her already busy schedule."
                </p>
                <p className="text-gray-600 italic">
                  "What impressed us most was how the therapists knew our community. They understood the BAPS culture, 
                  the social dynamics at the high school, and even recommended stress management strategies that worked 
                  with her volleyball schedule. Our daughter is still achieving at high levels, but now she's doing it 
                  from a place of joy rather than fear. She's learned that being a successful BA student doesn't mean 
                  being perfect."
                </p>
                <p className="text-teal-600 font-semibold mt-4">
                  - Karen R., Mother of three, Broken Arrow resident since 2015
                </p>
              </div>
            </div>

            {/* Staff Members */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Our Broken Arrow Community Team
              </h2>
              <p className="text-gray-600 mb-6">
                Our therapists understand Broken Arrow because they're part of the community:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Amanda Foster, PhD</h3>
                  <p className="text-teal-600 text-sm mb-2">Licensed Psychologist</p>
                  <p className="text-gray-600 text-sm">
                    Broken Arrow resident for 12 years, BAPS parent. Specializes in perfectionism and academic anxiety. 
                    Volunteers at BA Performing Arts Center. Knows the unique pressures of Broken Arrow students.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Michael Thompson, LCSW</h3>
                  <p className="text-teal-600 text-sm mb-2">Adolescent Specialist</p>
                  <p className="text-gray-600 text-sm">
                    Former BAPS counselor, current BA resident. Expert in teen depression, anxiety, and social media issues. 
                    Coaches youth sports in the community. Understands BA teen social dynamics.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Sarah Williams, LPC</h3>
                  <p className="text-teal-600 text-sm mb-2">Family Therapist</p>
                  <p className="text-gray-600 text-sm">
                    Specializes in family dynamics and communication. Helps families balance achievement with well-being. 
                    Active in BA community organizations. Expert in managing overscheduled families.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Robert Kim, MD</h3>
                  <p className="text-teal-600 text-sm mb-2">Child Psychiatrist</p>
                  <p className="text-gray-600 text-sm">
                    Available for medication evaluation and management. Specializes in ADHD, anxiety, and mood disorders. 
                    Works closely with BA school counselors and local pediatricians.
                  </p>
                </div>
              </div>
            </div>

            {/* Community Resources */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Broken Arrow Community Resources
              </h2>
              <p className="text-gray-600 mb-6">
                We connect families with local Broken Arrow resources and support systems:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Youth Activities & Programs</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• BA Parks & Recreation youth programs</li>
                    <li>• Central Park Sports Complex activities</li>
                    <li>• Broken Arrow Performing Arts Center productions</li>
                    <li>• BA Community Center classes</li>
                    <li>• Youth sports leagues (soccer, baseball, etc.)</li>
                    <li>• Faith community youth groups</li>
                    <li>• Volunteer opportunities through BA Neighbors</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Support Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• BAPS counseling and support services</li>
                    <li>• BA Senior Center intergenerational programs</li>
                    <li>• Family & Children's Services (BA office)</li>
                    <li>• Faith community support networks</li>
                    <li>• Parent organizations at area schools</li>
                    <li>• BA Mental Health Coalition</li>
                    <li>• Crisis support through BA Emergency Services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Frequently Asked Questions - Broken Arrow Families
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you work with Broken Arrow Public Schools?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We have established relationships with BAPS counselors and administrators. We can coordinate 
                    academic accommodations, attend IEP meetings when requested, and work with school teams to support 
                    student success both academically and emotionally.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Can you help with the pressure to excel in BA's competitive environment?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. We specialize in helping high-achieving students manage perfectionism, academic anxiety, 
                    and the pressure to excel in multiple areas. We help families find balance between achievement and 
                    mental health, and we understand BA's unique culture of excellence.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Are your appointment times flexible for busy sports and activity schedules?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We understand how busy BA families are with school, sports, and activities. We offer early 
                    morning, evening, and weekend appointments. We can also work around tournament schedules and 
                    activity seasons when needed.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you provide family therapy for communication and boundary issues?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we offer family therapy specifically designed to help families communicate about expectations, 
                    manage overscheduling, and create healthy boundaries. We help families maintain their values while 
                    reducing stress and improving relationships.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Is the location easy to find from anywhere in Broken Arrow?
                  </h3>
                  <p className="text-gray-600">
                    Very easy! We're centrally located with great access from Highway 51, 71st Street, and all major 
                    BA areas. Parents often combine appointments with errands in the Rose District or activities at 
                    Central Park. Our building is clearly marked with excellent parking.
                  </p>
                </div>
              </div>
            </div>

            {/* Strong CTA */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Help Your Child Thrive in Broken Arrow
              </h2>
              <p className="text-xl mb-6 opacity-95">
                Join hundreds of Broken Arrow families who trust SafeHarbor for mental health support that understands our community.
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
                Proudly serving all of Broken Arrow, Coweta, and surrounding communities
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}