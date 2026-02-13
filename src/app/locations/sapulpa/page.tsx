import Link from 'next/link'

export default function SapulpaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Child & Teen Therapy in Sapulpa | SafeHarbor Behavioral Health
          </h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Serving families in Sapulpa, Kellyville, and surrounding areas with comprehensive mental health services, 
            from Liberty Park to Main Street and Freedom Elementary to Sapulpa High School.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Why Sapulpa Families Choose Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Why Sapulpa Families Choose SafeHarbor
              </h2>
              <p className="text-gray-600 mb-4">
                Sapulpa embodies the perfect blend of historical charm and modern community values. Known as the 
                "Crossroads of America" due to its strategic location and rich Route 66 heritage, Sapulpa offers 
                families a unique combination of small-town warmth, educational excellence, and economic opportunity. 
                SafeHarbor Behavioral Health understands what makes Sapulpa special - the deep appreciation for 
                community history and traditions, the strong commitment to family values, and the balance between 
                honoring the past while building for the future that characterizes Sapulpa families.
              </p>
              <p className="text-gray-600 mb-4">
                We proudly serve families throughout the city and surrounding areas, including established 
                neighborhoods near downtown Sapulpa, families along Historic Route 66, residents of Kellyville and 
                surrounding rural Creek County areas, and those throughout the region who appreciate Sapulpa's unique 
                character. We're conveniently accessible with easy access from Highway 97, Main Street, and Highway 66, 
                making it simple for families to coordinate therapy with school activities, work schedules, and the 
                community events that are central to Sapulpa life.
              </p>
              <p className="text-gray-600">
                Parents appreciate that we understand the Sapulpa lifestyle - the importance of community connections 
                and neighborhood relationships, the value placed on hard work and family responsibility, and the pride 
                in being part of a community with such rich history and strong character. We know that Sapulpa families 
                often choose to stay here for generations, and we understand both the benefits and challenges of raising 
                children in a close-knit community where everyone knows everyone. Our team includes long-time Sapulpa 
                residents who truly understand what it means to be a Chieftain.
              </p>
            </div>

            {/* Common Mental Health Challenges */}
            <div className="mb-12 bg-cream-100 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Common Mental Health Challenges in Sapulpa
              </h2>
              <p className="text-gray-600 mb-4">
                While Sapulpa offers many advantages for families, including strong community bonds and a supportive 
                environment, certain challenges can impact children's mental health. The balance between maintaining 
                traditional values and adapting to modern pressures, combined with economic and social changes in 
                rural communities, can create specific stressors for young people.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Economic Transition and Family Stress</h3>
                  <p className="text-gray-600">
                    As traditional industries in the region have changed, many Sapulpa families face economic 
                    uncertainty or transitions. Parents working multiple jobs, concerns about job security, and 
                    financial stress can create anxiety in children who worry about family stability and their 
                    own future opportunities in a changing economy.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Limited Educational and Career Resources</h3>
                  <p className="text-gray-600">
                    While Sapulpa High School provides a solid education, teens may sometimes feel limited by 
                    fewer advanced placement options, college preparation resources, or exposure to diverse career 
                    paths compared to larger districts. This can create anxiety about college readiness and 
                    competitiveness for scholarships and opportunities.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Small Town Social Pressures and Identity Issues</h3>
                  <p className="text-gray-600">
                    In close-knit communities, children and teens may struggle with feeling different, questioning 
                    traditional values, or wanting to explore identities that don't fit community expectations. 
                    The fear of judgment or gossip can prevent young people from expressing themselves authentically 
                    or seeking help when they need it.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Substance Use and Mental Health Stigma</h3>
                  <p className="text-gray-600">
                    Rural communities can face challenges with substance use among teens, sometimes compounded by 
                    stigma around mental health treatment. We work to reduce stigma, provide education and prevention 
                    services, and help families address these challenges openly and effectively without shame.
                  </p>
                </div>
              </div>
            </div>

            {/* Schools We Work With */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Schools We Partner With in Sapulpa
              </h2>
              <p className="text-gray-600 mb-6">
                We maintain strong collaborative relationships with Sapulpa Public Schools and area institutions, 
                working closely with counselors, teachers, and administrators to support student success:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Sapulpa Public Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Sapulpa High School</li>
                    <li>• Sapulpa Middle School</li>
                    <li>• Freedom Elementary</li>
                    <li>• Holmes Elementary</li>
                    <li>• Jefferson Elementary</li>
                    <li>• Madison Elementary</li>
                    <li>• Noel Elementary</li>
                    <li>• Parks Elementary</li>
                    <li>• Coolidge Elementary</li>
                    <li>• Washington Elementary</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Area Schools & Programs</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Kellyville Public Schools</li>
                    <li>• Oilton Public Schools</li>
                    <li>• Bristow Public Schools</li>
                    <li>• Creek County rural schools</li>
                    <li>• Homeschool cooperatives</li>
                    <li>• Alternative education programs</li>
                    <li>• Adult education and career training</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transportation and Parking */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Getting to SafeHarbor in Sapulpa
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Convenient Access & Parking</h3>
                  <p className="text-gray-600 mb-3">
                    Our services are designed to be accessible for families throughout Creek County:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Large parking lot with 40+ spaces available</li>
                    <li>• Easy access from major Sapulpa highways</li>
                    <li>• Handicap accessible parking and building entrance</li>
                    <li>• Covered drop-off area for weather protection</li>
                    <li>• Well-lit, secure parking for all appointment times</li>
                    <li>• Central location for combining with other errands</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">From Major Sapulpa Areas</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• From Sapulpa High School: 4-minute drive via Main Street</li>
                    <li>• From downtown Sapulpa: 2-minute drive via Highway 66</li>
                    <li>• From Liberty Park: 3-minute drive via Dewey Avenue</li>
                    <li>• From Historic Route 66 areas: Walking distance or 1-minute drive</li>
                    <li>• From Kellyville: 10-minute drive via Highway 66</li>
                    <li>• From rural Creek County areas: 15-20 minutes via county roads</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Highway and Regional Access</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Direct access from Historic Route 66</li>
                    <li>• Easy route from Highway 97 (north-south corridor)</li>
                    <li>• Quick access via Highway 33 from eastern areas</li>
                    <li>• Convenient from Highway 16 (southern Creek County)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Located in Historic Sapulpa
              </h2>
              <p className="text-gray-600 mb-6">
                Our team is strategically positioned near the landmarks and places that define Sapulpa:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Close to Historic Sites:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Historic Route 66 corridor</li>
                    <li>• Sapulpa Historical Museum</li>
                    <li>• Downtown Sapulpa shopping district</li>
                    <li>• Liberty Park and Recreation Center</li>
                    <li>• Sapulpa Community Center</li>
                    <li>• Multiple SPS school campuses</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Convenient Amenities:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Walmart and local shopping centers</li>
                    <li>• Various restaurants and local diners</li>
                    <li>• Homeland grocery and local markets</li>
                    <li>• Coffee shops and local cafes</li>
                    <li>• CVS, Walgreens, and pharmacy services</li>
                    <li>• Banking and professional services on Main Street</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Success Story */}
            <div className="mb-12 bg-gradient-to-br from-cream-100 to-cream-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Success Story from Sapulpa
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-600 italic mb-4">
                  "Our daughter was struggling with severe anxiety and depression during her junior year at Sapulpa 
                  High School. She felt trapped between wanting to leave Sapulpa for college and feeling guilty about 
                  abandoning family and community. She was also dealing with some questioning of her identity that 
                  she felt she couldn't talk about with anyone in our small town. As parents, we felt lost and worried 
                  about saying or doing the wrong thing."
                </p>
                <p className="text-gray-600 italic mb-4">
                  "SafeHarbor was a godsend. The therapists understood both our daughter's individual needs and the 
                  unique dynamics of living in a small town like Sapulpa. They helped her work through her anxiety 
                  and depression, but also helped our whole family learn how to have honest conversations about 
                  difficult topics. They never judged our community or suggested our daughter needed to reject her 
                  roots - instead, they helped her find ways to be authentic while still honoring her family and hometown."
                </p>
                <p className="text-gray-600 italic">
                  "Now she's thriving at college but comes home regularly and maintains strong relationships with 
                  family and friends. She's learned that she can love Sapulpa and also grow beyond it. The family 
                  therapy sessions helped us become closer and more open with each other. SafeHarbor helped us navigate 
                  challenging times while keeping our family bonds strong."
                </p>
                <p className="text-teal-600 font-semibold mt-4">
                  - Susan K., Mother of two, lifelong Sapulpa resident
                </p>
              </div>
            </div>

            {/* Staff Members */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Our Sapulpa Chieftain Team
              </h2>
              <p className="text-gray-600 mb-6">
                Our therapists understand Sapulpa because they're part of the Chieftain community:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Mary Ellen Thompson, PsyD</h3>
                  <p className="text-teal-600 text-sm mb-2">Rural Community Psychology Specialist</p>
                  <p className="text-gray-600 text-sm">
                    Sapulpa resident for 20+ years, SPS parent and grandparent. Specializes in anxiety, depression, 
                    and identity issues in small-town youth. Former school counselor who understands the unique 
                    challenges and strengths of rural Creek County communities.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Daniel Creek, LCSW</h3>
                  <p className="text-teal-600 text-sm mb-2">Adolescent and Family Specialist</p>
                  <p className="text-gray-600 text-sm">
                    Sapulpa High School graduate who returned to serve his community. Expert in teen identity development, 
                    family communication, and helping young people navigate the balance between tradition and personal growth. 
                    Active in local church and community organizations.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Jennifer Walsh, MD</h3>
                  <p className="text-teal-600 text-sm mb-2">Community Psychiatrist</p>
                  <p className="text-gray-600 text-sm">
                    Specializes in mood disorders, ADHD, and anxiety in children and teens. Experienced in working 
                    with rural families and understanding the unique pressures of small-town life. Available for 
                    comprehensive evaluations and medication management when needed.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Lisa Running Bear, LPC</h3>
                  <p className="text-teal-600 text-sm mb-2">Cultural and Family Therapist</p>
                  <p className="text-gray-600 text-sm">
                    Creek Nation member specializing in cultural identity, family systems, and helping young people 
                    navigate multiple cultural influences. Expert in addressing mental health stigma and helping 
                    families access resources while respecting cultural values and traditions.
                  </p>
                </div>
              </div>
            </div>

            {/* Community Resources */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Sapulpa Community Resources
              </h2>
              <p className="text-gray-600 mb-6">
                We connect families with local Sapulpa and Creek County resources:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Recreation & Activities</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Liberty Park programs and facilities</li>
                    <li>• Sapulpa Community Center activities</li>
                    <li>• Sapulpa Historical Museum programs</li>
                    <li>• Route 66 heritage and tourism activities</li>
                    <li>• Youth sports leagues and teams</li>
                    <li>• Local church youth ministries</li>
                    <li>• 4-H clubs and agricultural programs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Support Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• SPS counseling and student support services</li>
                    <li>• Creek County Health Department services</li>
                    <li>• Family & Children's Services (Creek County office)</li>
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
                Frequently Asked Questions - Sapulpa Families
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you work with Sapulpa Public Schools?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We have strong partnerships with SPS counselors, administrators, and support staff. 
                    We can coordinate with school teams, attend meetings when appropriate, and work collaboratively 
                    to ensure students receive comprehensive support both academically and emotionally.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you understand the challenges of small-town living?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. Our team includes long-time Sapulpa residents who understand the unique dynamics 
                    of small-town life - both the benefits and challenges. We know how to help families navigate 
                    issues like privacy concerns, social pressures, and community expectations while respecting 
                    the values that make Sapulpa special.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibent text-navy-800 mb-2">
                    Can you help with substance use and mental health stigma?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we're experienced in addressing both substance use issues and the stigma that can surround 
                    mental health treatment in smaller communities. We provide confidential, non-judgmental care 
                    and work to educate families and reduce stigma while respecting community values and relationships.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you serve families from rural Creek County areas?
                  </h3>
                  <p className="text-gray-600">
                    Definitely! We serve families from Kellyville, Oilton, Bristow, and rural areas throughout 
                    Creek County. We understand the challenges of rural living and offer flexible scheduling 
                    and telehealth options when travel is difficult.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you offer sliding scale fees for families facing financial challenges?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we understand that many families in our area face economic pressures. We accept most 
                    insurance plans and offer sliding scale fees based on income. We also work with families 
                    to develop payment plans when needed. Financial concerns should never prevent families 
                    from getting mental health support.
                  </p>
                </div>
              </div>
            </div>

            {/* Strong CTA */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Support Your Chieftain's Mental Health and Future
              </h2>
              <p className="text-xl mb-6 opacity-95">
                Join Sapulpa families who trust SafeHarbor for mental health care that honors our community values and traditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-cream-100 transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
                >
                  Get Started Today
                </Link>
                <a
                  href="tel:918-553-5746"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-teal-600 transition-all transform hover:scale-105 font-bold text-lg"
                >
                  Call Now: (918) 553-5746
                </a>
              </div>
              <p className="mt-6 text-sm opacity-90">
                Proudly serving Sapulpa, Kellyville, and all Creek County communities along Historic Route 66
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}