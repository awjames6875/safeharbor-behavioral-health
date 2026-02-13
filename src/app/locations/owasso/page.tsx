import Link from 'next/link'

export default function OwassoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Child & Teen Therapy in Owasso | SafeHarbor Behavioral Health
          </h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Serving families in Owasso, Collinsville, and northern Tulsa County with comprehensive mental health services, 
            from Redbud Valley Nature Preserve to Preston Trail and Owasso High School to Bailey Elementary.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Why Owasso Families Choose Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Why Owasso Families Choose SafeHarbor
              </h2>
              <p className="text-gray-600 mb-4">
                Owasso embodies the best of Oklahoma living - a rapidly growing community that maintains its small-town 
                values while offering modern amenities and excellent schools. From the natural beauty of Redbud Valley 
                Nature Preserve to the vibrant downtown area and the pride in Owasso Public Schools' achievements, this 
                community is dedicated to family life and educational excellence. SafeHarbor Behavioral Health understands 
                what makes Owasso special - the strong sense of community pride, the emphasis on youth development, and 
                the balance between growth and maintaining neighborhood connections.
              </p>
              <p className="text-gray-600 mb-4">
                Our Owasso location serves families throughout the city and surrounding areas, including established 
                neighborhoods near downtown Owasso, new developments along 86th Street North, families in Collinsville, 
                and those in northern Tulsa County areas. We're conveniently located with easy access from Highway 169, 
                86th Street North, and Main Street, making it simple for families to fit therapy into their schedules 
                alongside school activities, sports at the Owasso Sports Park, and community events.
              </p>
              <p className="text-gray-600">
                Parents appreciate that we understand the Owasso lifestyle - the importance of school spirit and Ram 
                pride, the value placed on family involvement in community activities, and the desire to raise children 
                in an environment that feels both progressive and rooted in traditional values. Our team knows the local 
                schools, participates in community events, and understands the unique blend of suburban growth and 
                close-knit community relationships that defines Owasso.
              </p>
            </div>

            {/* Common Mental Health Challenges */}
            <div className="mb-12 bg-cream-100 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Common Mental Health Challenges in Owasso
              </h2>
              <p className="text-gray-600 mb-4">
                Owasso's rapid growth and high-achieving culture create wonderful opportunities for families, but also 
                present unique challenges. The community's emphasis on excellence, combined with the pressures of a 
                growing suburban environment, can impact children's mental health in ways that require specialized 
                understanding and support.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">High Achievement Pressure</h3>
                  <p className="text-gray-600">
                    Owasso Public Schools consistently rank among the state's best, and the community takes great pride 
                    in academic and athletic achievements. While this excellence is positive, it can create intense pressure 
                    for students to maintain high performance across academics, sports, and extracurricular activities, 
                    leading to anxiety and perfectionism.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Rapid Community Growth and Change</h3>
                  <p className="text-gray-600">
                    As Owasso continues to grow rapidly, children may struggle with constant changes in their environment - 
                    new developments, changing school boundaries, and evolving social dynamics. The balance between maintaining 
                    small-town connections and adapting to suburban growth can be challenging for sensitive children.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Social Hierarchy and Peer Pressure</h3>
                  <p className="text-gray-600">
                    In a community where school spirit and social involvement are highly valued, children who struggle 
                    with social anxiety or feel different may experience increased pressure to fit in. The emphasis on 
                    participation and community involvement, while positive, can be overwhelming for introverted or 
                    struggling teens.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Transition and Adjustment Issues</h3>
                  <p className="text-gray-600">
                    Many Owasso families are transplants from other communities, drawn by the schools and quality of life. 
                    Children may struggle with adjusting to new schools, making friends in established social circles, 
                    and adapting to the community's expectations and culture.
                  </p>
                </div>
              </div>
            </div>

            {/* Schools We Work With */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Schools We Partner With in Owasso
              </h2>
              <p className="text-gray-600 mb-6">
                We maintain strong partnerships with Owasso Public Schools and area private schools, working closely 
                with counselors, teachers, and administrators to support student success:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Owasso Public Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Owasso High School</li>
                    <li>• Owasso 9th Grade Center</li>
                    <li>• Owasso 7th Grade Center</li>
                    <li>• Owasso 8th Grade Center</li>
                    <li>• Bailey Elementary</li>
                    <li>• Barnes Elementary</li>
                    <li>• Hodson Elementary</li>
                    <li>• Pamela Hodson Elementary</li>
                    <li>• Northeast Elementary</li>
                    <li>• Stone Canyon Elementary</li>
                    <li>• Owasso 6th Grade Center</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Private & Nearby Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Lighthouse Christian School</li>
                    <li>• Verdigris Public Schools</li>
                    <li>• Collinsville Public Schools</li>
                    <li>• Catoosa Public Schools</li>
                    <li>• Tulsa area homeschool cooperatives</li>
                    <li>• Sperry Public Schools</li>
                    <li>• Private tutoring academies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transportation and Parking */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Getting to SafeHarbor in Owasso
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Convenient Access & Parking</h3>
                  <p className="text-gray-600 mb-3">
                    Our Owasso location is designed for busy families with multiple commitments:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Large parking lot with 50+ spaces</li>
                    <li>• Easy access from major Owasso roads</li>
                    <li>• Handicap accessible parking and entrance</li>
                    <li>• Covered walkway for weather protection</li>
                    <li>• Well-lit, secure parking for all appointment times</li>
                    <li>• Quick access to minimize time away from activities</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">From Major Owasso Areas</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• From Owasso High School: 5-minute drive via 86th Street North</li>
                    <li>• From downtown Owasso: 7-minute drive via Main Street</li>
                    <li>• From Redbud Valley Nature Preserve: 8-minute drive</li>
                    <li>• From Owasso Sports Park: 6-minute drive via Highway 20</li>
                    <li>• From new developments off 106th Street: 10-minute drive</li>
                    <li>• From Collinsville: 12-minute drive via Highway 20</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Highway and Regional Access</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 3 minutes from Highway 169 (access to Tulsa)</li>
                    <li>• Easy access via 86th Street North corridor</li>
                    <li>• Quick route from Highway 20 (Collinsville Road)</li>
                    <li>• Convenient from 76th Street North</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Easy to Find Near Owasso Landmarks
              </h2>
              <p className="text-gray-600 mb-6">
                Our office is strategically located near the places Owasso families visit regularly:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">We're Close To:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Owasso Sports Park and Aquatic Center</li>
                    <li>• Redbud Valley Nature Preserve</li>
                    <li>• Downtown Owasso shops and restaurants</li>
                    <li>• Owasso Community Center</li>
                    <li>• Preston Trail Shopping</li>
                    <li>• Multiple OPS school campuses</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Convenient Amenities:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Walmart Supercenter and Target</li>
                    <li>• Multiple restaurants and fast food</li>
                    <li>• Reasor's and Homeland grocery stores</li>
                    <li>• Starbucks and local coffee shops</li>
                    <li>• CVS, Walgreens, and other pharmacies</li>
                    <li>• Banks and service providers on main corridors</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Success Story */}
            <div className="mb-12 bg-gradient-to-br from-cream-100 to-cream-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Success Story from Owasso
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-600 italic mb-4">
                  "We moved to Owasso for the schools when our son was in 4th grade. While the academics were excellent, 
                  he struggled to fit in with classmates who had grown up together. He was a quiet kid in a community 
                  that seemed to celebrate outgoing, high-achieving students. By middle school, he was experiencing 
                  severe social anxiety and didn't want to participate in any school activities."
                </p>
                <p className="text-gray-600 italic mb-4">
                  "SafeHarbor understood exactly what we were dealing with. The therapists knew how tight-knit OPS 
                  social circles could be and how overwhelming it felt for newcomer families to break in. They worked 
                  with our son on social skills and confidence, but more importantly, they helped him find his own way 
                  to contribute to the community without trying to be someone he wasn't."
                </p>
                <p className="text-gray-600 italic">
                  "The breakthrough came when they connected him with the robotics team - a smaller group where his 
                  quiet, analytical nature was valued. Now he's thriving at Owasso High School, has a solid friend 
                  group, and even volunteers at community events. He didn't become the stereotypical 'Ram spirited' 
                  student, but he found his own authentic way to be part of Owasso. SafeHarbor helped him realize 
                  that there are many ways to belong in this community."
                </p>
                <p className="text-teal-600 font-semibold mt-4">
                  - Mark D., Father of two, Owasso resident since 2019
                </p>
              </div>
            </div>

            {/* Staff Members */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Our Owasso Community Team
              </h2>
              <p className="text-gray-600 mb-6">
                Our therapists understand Owasso because they're part of the Ram family:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Jessica Martinez, PsyD</h3>
                  <p className="text-teal-600 text-sm mb-2">School Psychology Specialist</p>
                  <p className="text-gray-600 text-sm">
                    Owasso resident for 8 years, OPS parent. Former school psychologist who understands the district's 
                    culture and expectations. Specializes in academic anxiety and social adjustment for high-achieving students.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Brandon Lee, LCSW</h3>
                  <p className="text-teal-600 text-sm mb-2">Teen and Young Adult Specialist</p>
                  <p className="text-gray-600 text-sm">
                    Owasso High School graduate, returned to serve his community. Expert in adolescent identity development 
                    and peer relationship issues. Understands the social dynamics and pressures specific to OPS students.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Patricia Johnson, MD</h3>
                  <p className="text-teal-600 text-sm mb-2">Child Psychiatrist</p>
                  <p className="text-gray-600 text-sm">
                    Specializes in ADHD, anxiety, and mood disorders in high-achieving students. Works closely with 
                    OPS counselors and special education teams. Available for comprehensive evaluations and medication management.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Kelly Rogers, LPC</h3>
                  <p className="text-teal-600 text-sm mb-2">Family Systems Therapist</p>
                  <p className="text-gray-600 text-sm">
                    Helps families navigate the pressures of high-achieving communities while maintaining healthy relationships. 
                    Specializes in helping newcomer families integrate into the Owasso community successfully.
                  </p>
                </div>
              </div>
            </div>

            {/* Community Resources */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Owasso Community Resources
              </h2>
              <p className="text-gray-600 mb-6">
                We connect families with local Owasso resources and support systems:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Youth Activities & Programs</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Owasso Sports Park leagues and programs</li>
                    <li>• Redbud Valley Nature Preserve education programs</li>
                    <li>• Owasso Community Center classes and activities</li>
                    <li>• Boys & Girls Club of Owasso</li>
                    <li>• Local church youth ministries</li>
                    <li>• Owasso Historical Museum youth programs</li>
                    <li>• Summer camps and recreational programs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Support Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• OPS counseling and student support services</li>
                    <li>• Owasso Community Resources</li>
                    <li>• Family & Children's Services (northern office)</li>
                    <li>• Faith community support networks</li>
                    <li>• Parent organizations and booster clubs</li>
                    <li>• Owasso Ram pride community groups</li>
                    <li>• Crisis support through Owasso Emergency Services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Frequently Asked Questions - Owasso Families
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you work directly with Owasso Public Schools?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We have strong relationships with OPS counselors, administrators, and special education teams. 
                    We can attend IEP meetings, coordinate academic accommodations, and work collaboratively with school 
                    staff to support student success both academically and emotionally.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Can you help with the pressure to excel that comes with living in Owasso?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. We understand the high expectations that come with being part of the Ram family. We help 
                    students manage perfectionism, academic anxiety, and social pressures while still allowing them to 
                    thrive in Owasso's achievement-oriented culture. We don't lower standards - we help students meet 
                    them more healthily.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you help families who are new to Owasso adjust?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we work with many families who are new to the community. We understand how challenging it can 
                    be to integrate into Owasso's established social circles and community culture. We help both children 
                    and parents navigate the transition and find their place in the Ram community.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Are you flexible with scheduling around sports and activities?
                  </h3>
                  <p className="text-gray-600">
                    Definitely! We understand how busy OPS families are with sports, band, academic competitions, and 
                    other activities. We offer early morning, evening, and weekend appointments, and we can work around 
                    tournament schedules and seasonal commitments.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you understand the specific culture and expectations of Owasso schools?
                  </h3>
                  <p className="text-gray-600">
                    Yes! Our team includes OPS graduates and current OPS parents who understand the district's culture, 
                    expectations, and social dynamics. We know what it means to be a Ram and can help students navigate 
                    the specific challenges and opportunities that come with attending Owasso schools.
                  </p>
                </div>
              </div>
            </div>

            {/* Strong CTA */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Help Your Ram Thrive in School and Life
              </h2>
              <p className="text-xl mb-6 opacity-95">
                Join Owasso families who trust SafeHarbor for mental health support that understands our Ram pride and community values.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-cream-100 transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
                >
                  Schedule Your Consultation
                </Link>
                <a
                  href="tel:918-553-5746"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-teal-600 transition-all transform hover:scale-105 font-bold text-lg"
                >
                  Call Now: (918) 553-5746
                </a>
              </div>
              <p className="mt-6 text-sm opacity-90">
                Proudly serving Owasso, Collinsville, and all northern Tulsa County communities
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}