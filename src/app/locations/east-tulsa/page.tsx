import Link from 'next/link'

export default function EastTulsaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Child & Teen Therapy in East Tulsa | SafeHarbor Behavioral Health
          </h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Serving families in East Tulsa, Catoosa, and surrounding areas with comprehensive mental health services, 
            from Gathering Place to 21st and Garnett and from Sequoyah Elementary to Memorial High School.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Why East Tulsa Families Choose Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Why East Tulsa Families Choose SafeHarbor
              </h2>
              <p className="text-gray-600 mb-4">
                East Tulsa represents the dynamic growth and cultural diversity that makes Tulsa unique. From the 
                stunning Arkansas River waterfront and the world-class Gathering Place to the diverse neighborhoods 
                along 21st Street and beyond, East Tulsa combines urban amenities with suburban comfort and cultural 
                richness. SafeHarbor Behavioral Health understands what makes East Tulsa special - the vibrant 
                multicultural community, the blend of established neighborhoods and new developments, and the balance 
                between city conveniences and community connection that characterizes this growing area.
              </p>
              <p className="text-gray-600 mb-4">
                Our East Tulsa location serves families throughout the area, including neighborhoods near the Arkansas 
                River, families along major corridors like 21st Street and Garnett Road, residents of newer developments 
                near 31st and Mingo, and those in surrounding communities like Catoosa and eastern Tulsa County. We're 
                strategically positioned with easy access from major east-west routes and Highway 169, making it 
                convenient for families to coordinate therapy with work, school activities, and the recreational 
                opportunities that East Tulsa offers.
              </p>
              <p className="text-gray-600">
                Parents appreciate that we understand the East Tulsa experience - the appreciation for cultural 
                diversity and inclusive community values, the importance of both individual achievement and community 
                connection, and the unique opportunities that come from living in one of Tulsa's most dynamic and 
                fastest-growing areas. We know that East Tulsa families often choose the area for its accessibility, 
                diversity, and family-friendly amenities, and we understand the blend of opportunities and challenges 
                that come with raising children in such a vibrant, evolving community.
              </p>
            </div>

            {/* Common Mental Health Challenges */}
            <div className="mb-12 bg-cream-100 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Common Mental Health Challenges in East Tulsa
              </h2>
              <p className="text-gray-600 mb-4">
                While East Tulsa offers many advantages including diversity, growth, and opportunities, families in 
                the area may face specific challenges that can impact children's mental health. The rapid changes, 
                cultural navigation, and varying socioeconomic conditions within the area can create unique stressors 
                for young people and families.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Cultural Identity and Navigation</h3>
                  <p className="text-gray-600">
                    East Tulsa's multicultural environment, while enriching, can create challenges for children 
                    navigating multiple cultural identities, languages, and expectations. Young people may struggle 
                    with balancing family traditions and American culture, feeling caught between different worlds, 
                    or facing discrimination based on cultural background or immigration status.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Rapid Community Change and Displacement</h3>
                  <p className="text-gray-600">
                    As East Tulsa continues to develop and gentrify, some families may experience displacement, 
                    changing neighborhood dynamics, or concern about losing community character. Children may struggle 
                    with frequent moves, changing schools, or feeling disconnected from evolving neighborhoods and 
                    friend groups.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Economic Disparity and Stress</h3>
                  <p className="text-gray-600">
                    East Tulsa includes areas with varying economic conditions, from affluent river developments to 
                    working-class neighborhoods. Children may experience stress related to economic inequality, feel 
                    pressure about social class differences, or worry about family financial stability in a rapidly 
                    changing economic landscape.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Language and Educational Barriers</h3>
                  <p className="text-gray-600">
                    Some East Tulsa students may face challenges with English as a second language, feel academically 
                    behind peers, or experience stress about meeting educational expectations while managing cultural 
                    and language transitions. We provide culturally sensitive support that honors linguistic diversity 
                    while building academic confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* Schools We Work With */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Schools We Partner With in East Tulsa
              </h2>
              <p className="text-gray-600 mb-6">
                We maintain strong collaborative relationships with East Tulsa schools, working closely with 
                counselors, teachers, and administrators to support student success:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Tulsa Public Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Memorial High School</li>
                    <li>• East Central High School</li>
                    <li>• Sequoyah Elementary</li>
                    <li>• Cherokee Elementary</li>
                    <li>• Eisenhower Elementary</li>
                    <li>• Johnson Elementary</li>
                    <li>• Key Elementary</li>
                    <li>• Wayman Tisdale Fine Arts Academy</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Area Schools & Programs</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Catoosa Public Schools</li>
                    <li>• Victory Christian School</li>
                    <li>• Metro Christian Academy</li>
                    <li>• Private daycare and preschool programs</li>
                    <li>• English as a Second Language (ESL) programs</li>
                    <li>• Adult education and GED centers</li>
                    <li>• Community college preparatory programs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transportation and Parking */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Getting to SafeHarbor in East Tulsa
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Convenient Access & Parking</h3>
                  <p className="text-gray-600 mb-3">
                    Our East Tulsa location is designed to be accessible for diverse families with varying needs:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Large parking lot with 55+ spaces available</li>
                    <li>• Easy access from major East Tulsa corridors</li>
                    <li>• Handicap accessible parking and building entrance</li>
                    <li>• Covered drop-off area for weather protection</li>
                    <li>• Well-lit, secure parking for all appointment times</li>
                    <li>• Public transportation accessible location</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">From Major East Tulsa Areas</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• From Gathering Place: 8-minute drive via Riverside Drive</li>
                    <li>• From 21st & Garnett area: 5-minute drive via 21st Street</li>
                    <li>• From 31st & Mingo area: 6-minute drive via Mingo Road</li>
                    <li>• From Memorial High School: 4-minute drive via Memorial Drive</li>
                    <li>• From Catoosa: 12-minute drive via Highway 66</li>
                    <li>• From Tulsa Hills: 10-minute drive via 21st Street</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Major Highway and Transit Access</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Easy access from Highway 169 (north-south corridor)</li>
                    <li>• Quick routes from 21st Street and 31st Street</li>
                    <li>• Convenient from Highway 66 (east-west route)</li>
                    <li>• Multiple Tulsa Transit bus routes serve the area</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Located in Growing East Tulsa
              </h2>
              <p className="text-gray-600 mb-6">
                Our office is positioned near the landmarks and destinations that make East Tulsa distinctive:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Major Attractions & Destinations:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Gathering Place (A'DAM FORUM)</li>
                    <li>• Arkansas River and RiverParks trails</li>
                    <li>• Tulsa Hills Shopping Center</li>
                    <li>• Multiple TPS school campuses</li>
                    <li>• East Tulsa community centers</li>
                    <li>• Cultural centers and places of worship</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Convenient Amenities:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Walmart, Target, and diverse shopping options</li>
                    <li>• Wide variety of ethnic restaurants and markets</li>
                    <li>• Multiple grocery stores and pharmacies</li>
                    <li>• Coffee shops and community gathering places</li>
                    <li>• Healthcare facilities and clinics</li>
                    <li>• Banking and professional services along major streets</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Success Story */}
            <div className="mb-12 bg-gradient-to-br from-cream-100 to-cream-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Success Story from East Tulsa
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-600 italic mb-4">
                  "Our 16-year-old son was struggling with his identity as a first-generation American. His father 
                  and I immigrated from Guatemala, and our son felt caught between two worlds - wanting to honor 
                  our cultural traditions while also fitting in with his peers at Memorial High School. He was 
                  experiencing anxiety, dropping grades, and becoming increasingly withdrawn from both his family 
                  and his friends."
                </p>
                <p className="text-gray-600 italic mb-4">
                  "SafeHarbor provided exactly what our family needed. The therapists understood the unique challenges 
                  of navigating multiple cultures, and they had staff who could communicate in Spanish when needed. 
                  They helped our son see his bilingual, bicultural identity as a strength rather than a burden. 
                  They also helped our whole family learn to communicate better about our different experiences and 
                  expectations."
                </p>
                <p className="text-gray-600 italic">
                  "The change was remarkable. Our son started embracing both parts of his identity - he began 
                  volunteering as a translator for other immigrant families while also participating more in school 
                  activities. He's now proud of his heritage and confident about his future. He's planning to study 
                  international business in college so he can use his cultural knowledge and language skills. 
                  SafeHarbor helped our whole family navigate the challenges of the American dream while staying 
                  connected to who we are."
                </p>
                <p className="text-teal-600 font-semibold mt-4">
                  - Maria R., Mother of three, East Tulsa resident since 2015
                </p>
              </div>
            </div>

            {/* Staff Members */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Our East Tulsa Multicultural Team
              </h2>
              <p className="text-gray-600 mb-6">
                Our therapists understand East Tulsa's diversity because they reflect it:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Carmen Velazquez, PhD</h3>
                  <p className="text-teal-600 text-sm mb-2">Multicultural Psychology Specialist</p>
                  <p className="text-gray-600 text-sm">
                    Bilingual (Spanish/English) therapist specializing in immigration adjustment, cultural identity, 
                    and intergenerational family dynamics. Expert in helping first and second-generation immigrants 
                    navigate cultural challenges while maintaining family connections and cultural pride.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Ahmad Hassan, LCSW</h3>
                  <p className="text-teal-600 text-sm mb-2">Cultural Identity Specialist</p>
                  <p className="text-gray-600 text-sm">
                    East Tulsa resident who understands the experiences of diverse cultural communities. Expert in 
                    helping teens navigate multiple cultural identities, address discrimination, and build resilience. 
                    Specializes in working with refugee and immigrant families.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Jennifer Park, MD</h3>
                  <p className="text-teal-600 text-sm mb-2">Child Psychiatrist</p>
                  <p className="text-gray-600 text-sm">
                    Specializes in anxiety, depression, and ADHD in culturally diverse populations. Experienced 
                    in providing culturally sensitive medication management and working with interpreters when needed. 
                    Collaborates closely with community health centers and cultural organizations.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Lisa Cherokee, LPC</h3>
                  <p className="text-teal-600 text-sm mb-2">Native American Family Therapist</p>
                  <p className="text-gray-600 text-sm">
                    Cherokee Nation member specializing in Native American mental health, historical trauma, and 
                    cultural identity. Expert in providing culturally responsive therapy that honors indigenous 
                    values and healing traditions while addressing contemporary mental health needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Community Resources */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                East Tulsa Community Resources
              </h2>
              <p className="text-gray-600 mb-6">
                We connect families with local East Tulsa resources and support systems:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Cultural & Educational</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• TPS ESL and multicultural support services</li>
                    <li>• Gathering Place educational programming</li>
                    <li>• Cultural centers and community organizations</li>
                    <li>• Adult education and English language programs</li>
                    <li>• Community college satellite programs</li>
                    <li>• Ethnic community centers and cultural associations</li>
                    <li>• Translation and interpretation services</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Support Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• East Tulsa community health centers</li>
                    <li>• Family & Children's Services</li>
                    <li>• Immigration legal aid organizations</li>
                    <li>• Faith community support networks (diverse denominations)</li>
                    <li>• Food banks and emergency assistance programs</li>
                    <li>• Job training and employment services</li>
                    <li>• Crisis support and emergency services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Frequently Asked Questions - East Tulsa Families
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you provide therapy in languages other than English?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We have bilingual therapists who can provide therapy in Spanish, and we can arrange for 
                    professional interpreters for other languages when needed. We believe language should never be 
                    a barrier to accessing quality mental health care.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Can you help with cultural identity and immigration-related stress?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. Our team specializes in helping individuals and families navigate cultural identity 
                    issues, immigration stress, intergenerational conflicts, and the challenges of maintaining 
                    cultural traditions while adapting to American life. We provide culturally responsive therapy 
                    that honors diverse backgrounds.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you work with East Tulsa schools and understand diverse student needs?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We work closely with TPS schools in East Tulsa and understand the diverse academic and 
                    cultural needs of students in the area. We can coordinate with ESL programs, multicultural 
                    support services, and school counselors to provide comprehensive support for students from 
                    all backgrounds.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you accept various insurance plans and offer affordable options?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we accept most insurance plans including Medicaid and SoonerCare. We also offer sliding 
                    scale fees based on income and can work with families to develop payment plans. We understand 
                    the economic challenges many immigrant and working families face and strive to make care accessible.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Can you help connect families with community resources and support services?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. Our team is very familiar with East Tulsa's diverse community resources, including 
                    cultural organizations, immigration services, job training programs, and emergency assistance. 
                    We often help families navigate available resources and connect with culturally appropriate 
                    support services.
                  </p>
                </div>
              </div>
            </div>

            {/* Strong CTA */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Celebrate Your Heritage While Building Your Future
              </h2>
              <p className="text-xl mb-6 opacity-95">
                Join East Tulsa families who trust SafeHarbor for culturally responsive mental health care that honors diversity and builds on community strengths.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-cream-100 transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
                >
                  Schedule Your Consultation
                </Link>
                <a
                  href="tel:918-555-0100"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-teal-600 transition-all transform hover:scale-105 font-bold text-lg"
                >
                  Call Now: (918) 555-0100
                </a>
              </div>
              <p className="mt-6 text-sm opacity-90">
                Proudly serving East Tulsa's diverse communities from the Arkansas River to Catoosa and beyond
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}