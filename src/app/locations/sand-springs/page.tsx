import Link from 'next/link'

export default function SandSpringsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Child & Teen Therapy in Sand Springs | SafeHarbor Behavioral Health
          </h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Serving families in Sand Springs, Mannford, and surrounding areas with comprehensive mental health services, 
            from Keystone Ancient Forest to Case Community Park and Angus Valley Elementary to Charles Page High School.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Why Sand Springs Families Choose Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Why Sand Springs Families Choose SafeHarbor
              </h2>
              <p className="text-gray-600 mb-4">
                Sand Springs represents the heart of authentic Oklahoma living - a community where natural beauty 
                meets small-town values and modern opportunities. Known for the stunning Keystone Ancient Forest, 
                excellent recreational facilities, and the strong tradition of Sandite pride, Sand Springs offers 
                families a unique blend of outdoor adventure and community connection. SafeHarbor Behavioral Health 
                understands what makes Sand Springs special - the deep appreciation for nature and outdoor activities, 
                the strong sense of community identity, and the balance between maintaining local traditions while 
                embracing growth and progress.
              </p>
              <p className="text-gray-600 mb-4">
                Our Sand Springs location serves families throughout the city and surrounding areas, including 
                established neighborhoods near downtown Sand Springs, families along the Arkansas River, residents 
                of Mannford and surrounding rural areas, and those throughout western Tulsa County. We're conveniently 
                located with easy access from Highway 97, 41st Street, and Highway 412, making it simple for families 
                to coordinate therapy with school activities, outdoor recreation, and the active lifestyle that 
                characterizes Sand Springs living.
              </p>
              <p className="text-gray-600">
                Parents appreciate that we understand the Sand Springs lifestyle - the love of outdoor activities 
                and nature, the importance of community involvement and school spirit, and the value placed on 
                raising children with strong character and work ethic. We know that Sand Springs families often 
                choose to live here for the schools, the outdoor opportunities, and the sense of belonging to a 
                community that genuinely cares about its young people. Our team includes Sand Springs residents 
                who understand what it truly means to be a Sandite.
              </p>
            </div>

            {/* Common Mental Health Challenges */}
            <div className="mb-12 bg-cream-100 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Common Mental Health Challenges in Sand Springs
              </h2>
              <p className="text-gray-600 mb-4">
                While Sand Springs offers many advantages for families, including access to nature and a strong 
                community foundation, certain challenges can impact children's mental health. The balance between 
                small-town expectations and modern pressures, combined with economic and social changes in the 
                community, can create specific stressors for young people.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Economic Stress and Family Pressure</h3>
                  <p className="text-gray-600">
                    Many Sand Springs families work in industries that can be economically volatile, creating stress 
                    within households that children often absorb. Parents working multiple jobs or dealing with 
                    economic uncertainty can inadvertently create anxiety in children who worry about family stability 
                    and their own future prospects.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Limited Resources and Opportunities</h3>
                  <p className="text-gray-600">
                    While Sand Springs has many strengths, teens may sometimes feel limited by fewer extracurricular 
                    options or college preparation resources compared to larger districts. This can create frustration, 
                    feelings of being "behind," or anxiety about competing with students from more resource-rich 
                    communities for college admissions and scholarships.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Rural Isolation and Transportation Challenges</h3>
                  <p className="text-gray-600">
                    Some Sand Springs area families live in more rural settings, which can create challenges with 
                    social connection, accessing activities, and transportation to services. Children may struggle 
                    with feeling isolated or disconnected from peer groups, particularly if family transportation 
                    is limited.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Substance Use and Peer Pressure</h3>
                  <p className="text-gray-600">
                    Rural and semi-rural communities can sometimes face challenges with substance use among teens, 
                    often related to boredom, limited activities, or social pressures. We provide education, prevention, 
                    and treatment services to help families address these challenges proactively and effectively.
                  </p>
                </div>
              </div>
            </div>

            {/* Schools We Work With */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Schools We Partner With in Sand Springs
              </h2>
              <p className="text-gray-600 mb-6">
                We maintain strong collaborative relationships with Sand Springs Public Schools and area institutions, 
                working closely with counselors, teachers, and administrators to support student success:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Sand Springs Public Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Charles Page High School</li>
                    <li>• Sand Springs Middle School</li>
                    <li>• Angus Valley Elementary</li>
                    <li>• Clyde Boyd Middle School</li>
                    <li>• Dennis Elementary</li>
                    <li>• Garfield Elementary</li>
                    <li>• Highland Park Elementary</li>
                    <li>• Page Elementary</li>
                    <li>• Pratt Elementary</li>
                    <li>• Skyline Elementary</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Area Schools & Programs</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Mannford Public Schools</li>
                    <li>• Keystone Public Schools</li>
                    <li>• Cleveland Public Schools</li>
                    <li>• Homeschool cooperatives in rural areas</li>
                    <li>• Alternative education programs</li>
                    <li>• Adult education and GED programs</li>
                    <li>• Vocational and technical training programs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transportation and Parking */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Getting to SafeHarbor in Sand Springs
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Easy Access & Parking</h3>
                  <p className="text-gray-600 mb-3">
                    Our Sand Springs location is designed to be accessible for families throughout the area:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Large parking lot with 45+ spaces available</li>
                    <li>• Easy access from major Sand Springs highways</li>
                    <li>• Handicap accessible parking and building entrance</li>
                    <li>• Covered drop-off area for weather protection</li>
                    <li>• Well-lit, secure parking for all appointment times</li>
                    <li>• Convenient location to combine with other errands</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">From Major Sand Springs Areas</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• From Charles Page High School: 5-minute drive via 41st Street</li>
                    <li>• From downtown Sand Springs: 3-minute drive via Highway 97</li>
                    <li>• From Case Community Park: 4-minute drive via 17th Street</li>
                    <li>• From Keystone Ancient Forest: 8-minute drive via Highway 97</li>
                    <li>• From Mannford: 12-minute drive via Highway 51</li>
                    <li>• From west Tulsa areas: 15-minute drive via 41st Street</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Highway and Regional Access</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Direct access from Highway 97 (main Sand Springs corridor)</li>
                    <li>• Easy route from Highway 412 (Cimarron Turnpike)</li>
                    <li>• Quick access via 41st Street from Tulsa areas</li>
                    <li>• Convenient from Highway 51 (Mannford direction)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Located Near Sand Springs Landmarks
              </h2>
              <p className="text-gray-600 mb-6">
                Our office is strategically positioned near the places Sand Springs families visit regularly:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Close to Major Destinations:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Case Community Park and Sports Complex</li>
                    <li>• Sand Springs Cultural and Arts Center</li>
                    <li>• Downtown Sand Springs shopping district</li>
                    <li>• Keystone Ancient Forest Preserve</li>
                    <li>• Arkansas River and fishing areas</li>
                    <li>• Multiple SSPS school campuses</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Convenient Amenities:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Walmart Supercenter and local shopping</li>
                    <li>• Various restaurants and dining options</li>
                    <li>• Homeland grocery and local markets</li>
                    <li>• Coffee shops and local cafes</li>
                    <li>• CVS, Walgreens, and pharmacy services</li>
                    <li>• Banking and professional services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Success Story */}
            <div className="mb-12 bg-gradient-to-br from-cream-100 to-cream-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Success Story from Sand Springs
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-600 italic mb-4">
                  "Our 16-year-old son was struggling with depression and had started experimenting with substances. 
                  As a single parent working two jobs, I felt overwhelmed and didn't know where to turn. The school 
                  counselor had been helpful, but my son needed more intensive support than they could provide. I was 
                  worried about the cost and whether we could find quality mental health care in Sand Springs."
                </p>
                <p className="text-gray-600 italic mb-4">
                  "SafeHarbor was recommended by a friend, and I'm so grateful we found them. They understood our 
                  financial situation and worked with us on payment options. More importantly, the therapists really 
                  got the challenges of being a teenager in Sand Springs - the limited opportunities, the social 
                  pressures, and the economic stress many families face. They didn't judge our situation; they just 
                  focused on helping my son."
                </p>
                <p className="text-gray-600 italic">
                  "The combination of individual therapy and family sessions made all the difference. My son learned 
                  healthy coping strategies, and I learned how to support him better while managing my own stress. 
                  He's now clean, back on track at Charles Page, and even has a part-time job. Most importantly, 
                  we've rebuilt our relationship and communication. SafeHarbor gave us hope when we needed it most."
                </p>
                <p className="text-teal-600 font-semibold mt-4">
                  - Maria T., Single mother of two, Sand Springs resident since 2017
                </p>
              </div>
            </div>

            {/* Staff Members */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Our Sand Springs Sandite Team
              </h2>
              <p className="text-gray-600 mb-6">
                Our therapists understand Sand Springs because they're part of the Sandite community:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. James Wilson, PsyD</h3>
                  <p className="text-teal-600 text-sm mb-2">Rural Community Psychology Specialist</p>
                  <p className="text-gray-600 text-sm">
                    Sand Springs resident for 15 years, SSPS parent. Specializes in depression, anxiety, and substance 
                    use issues common in rural and semi-rural communities. Former military counselor who understands 
                    working-class family dynamics and economic stress.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Casey Reynolds, LCSW</h3>
                  <p className="text-teal-600 text-sm mb-2">Adolescent Substance Abuse Specialist</p>
                  <p className="text-gray-600 text-sm">
                    Charles Page High School graduate who understands local teen culture and challenges. Expert in 
                    substance abuse prevention and treatment, family systems therapy, and helping teens develop 
                    healthy coping strategies in environments with limited resources.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Patricia Brown, MD</h3>
                  <p className="text-teal-600 text-sm mb-2">Community Psychiatrist</p>
                  <p className="text-gray-600 text-sm">
                    Specializes in mood disorders, ADHD, and trauma in children and teens. Experienced in working 
                    with families facing economic challenges. Provides medication management and collaborates closely 
                    with SSPS counselors and community resources.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Robert Martinez, LPC</h3>
                  <p className="text-teal-600 text-sm mb-2">Family Support Therapist</p>
                  <p className="text-gray-600 text-sm">
                    Bilingual therapist specializing in family crisis intervention and economic stress management. 
                    Helps families navigate community resources, develop resilience, and maintain stability during 
                    challenging times. Active in Sand Springs community organizations.
                  </p>
                </div>
              </div>
            </div>

            {/* Community Resources */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Sand Springs Community Resources
              </h2>
              <p className="text-gray-600 mb-6">
                We connect families with local Sand Springs resources and support systems:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Recreation & Activities</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Case Community Park programs and leagues</li>
                    <li>• Sand Springs Cultural and Arts Center activities</li>
                    <li>• Keystone Ancient Forest educational programs</li>
                    <li>• Arkansas River Parks and outdoor activities</li>
                    <li>• Youth sports leagues and teams</li>
                    <li>• Local church youth ministries</li>
                    <li>• 4-H clubs and agricultural programs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Support Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• SSPS counseling and student support services</li>
                    <li>• Sand Springs Community Services</li>
                    <li>• Family & Children's Services (west county office)</li>
                    <li>• Faith community support networks</li>
                    <li>• Food banks and emergency assistance</li>
                    <li>• Job training and employment resources</li>
                    <li>• Crisis support through local emergency services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Frequently Asked Questions - Sand Springs Families
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you work with Sand Springs Public Schools?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We have strong relationships with SSPS counselors, administrators, and support staff. 
                    We can coordinate with school teams, attend meetings when appropriate, and work collaboratively 
                    to ensure students receive comprehensive support both academically and emotionally.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you offer payment options for families facing financial challenges?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. We understand that many Sand Springs families face economic pressures, and we work 
                    hard to make mental health care accessible. We accept most insurance plans, offer sliding scale 
                    fees based on income, and can discuss payment plans when needed. Don't let financial concerns 
                    prevent you from getting help.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Can you help with substance use issues?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we have specialists trained in adolescent substance abuse prevention and treatment. We provide 
                    both individual and family therapy, help with intervention strategies, and can coordinate with 
                    other community resources. We understand the unique challenges rural communities face with substance use.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you serve families from rural areas around Sand Springs?
                  </h3>
                  <p className="text-gray-600">
                    Definitely! We serve families from Mannford, Keystone, Cleveland, and rural areas throughout 
                    western Tulsa County. We understand the unique challenges of rural living, including transportation 
                    difficulties, and we offer flexible scheduling and telehealth options when appropriate.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Can you help connect families with community resources?
                  </h3>
                  <p className="text-gray-600">
                    Yes, our staff is very familiar with Sand Springs community resources, including food assistance, 
                    job training programs, educational support, and emergency services. We often help families navigate 
                    available resources and can provide referrals to additional support services when needed.
                  </p>
                </div>
              </div>
            </div>

            {/* Strong CTA */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Support Your Sandite's Mental Health and Well-being
              </h2>
              <p className="text-xl mb-6 opacity-95">
                Join Sand Springs families who trust SafeHarbor for accessible, compassionate mental health care that understands our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-cream-100 transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
                >
                  Get Started Today
                </Link>
                <a
                  href="tel:918-555-0100"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-teal-600 transition-all transform hover:scale-105 font-bold text-lg"
                >
                  Call Now: (918) 555-0100
                </a>
              </div>
              <p className="mt-6 text-sm opacity-90">
                Proudly serving Sand Springs, Mannford, Keystone, and all western Tulsa County communities
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}