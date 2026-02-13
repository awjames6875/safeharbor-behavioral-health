import Link from 'next/link'

export default function SouthTulsaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Child & Teen Therapy in South Tulsa | SafeHarbor Behavioral Health
          </h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Serving families throughout South Tulsa with comprehensive mental health services, 
            from Woodland Hills Mall to Riverside Drive and Edison Elementary to Edison Preparatory School.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Why South Tulsa Families Choose Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Why South Tulsa Families Choose SafeHarbor
              </h2>
              <p className="text-gray-600 mb-4">
                South Tulsa represents the heart of suburban family life in the Tulsa metro area. From the shopping 
                and dining at Woodland Hills Mall to the beautiful homes along the Arkansas River, and from the 
                excellent schools to the convenient access to everything Tulsa has to offer, South Tulsa attracts 
                families who value quality education, safe neighborhoods, and an active lifestyle. SafeHarbor 
                Behavioral Health understands what makes South Tulsa special - the commitment to family values, 
                the emphasis on educational excellence, and the balance between suburban convenience and community connection.
              </p>
              <p className="text-gray-600 mb-4">
                We proudly serve families throughout the area, including established neighborhoods 
                near Yale Avenue and 71st Street, families along the river corridor, residents of newer developments 
                near 101st and Memorial, and those throughout central and southern Tulsa County. We're strategically 
                located with easy access from major corridors like Yale Avenue, Memorial Drive, and 71st Street, 
                making it simple for families to coordinate therapy with school activities, shopping, dining, and 
                the busy suburban lifestyle that characterizes South Tulsa.
              </p>
              <p className="text-gray-600">
                Parents appreciate that we understand the South Tulsa lifestyle - the emphasis on academic achievement 
                and extracurricular involvement, the importance of maintaining busy family schedules, and the desire 
                to provide children with every opportunity for success. We know that South Tulsa families often choose 
                their location for school districts and family amenities, and we understand both the benefits and 
                pressures that come with living in a high-achieving, resource-rich suburban environment.
              </p>
            </div>

            {/* Common Mental Health Challenges */}
            <div className="mb-12 bg-cream-100 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Common Mental Health Challenges in South Tulsa
              </h2>
              <p className="text-gray-600 mb-4">
                While South Tulsa offers excellent opportunities and resources for families, the area's emphasis on 
                achievement and success can create specific pressures. The competitive suburban environment, combined 
                with high expectations and busy lifestyles, can impact children's mental health in ways that require 
                specialized understanding and support.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Academic and Achievement Pressure</h3>
                  <p className="text-gray-600">
                    South Tulsa schools are known for high academic standards and competitive environments. Students 
                    often feel pressure to excel academically while also participating in multiple extracurricular 
                    activities, sports, and leadership roles. This can lead to perfectionism, anxiety, and burnout, 
                    even among highly capable students.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Overscheduling and Family Stress</h3>
                  <p className="text-gray-600">
                    South Tulsa families often maintain packed schedules with school activities, sports teams, music 
                    lessons, tutoring, and social events. While these opportunities are valuable, the constant activity 
                    can create stress for both children and parents, leading to exhaustion, family tension, and 
                    difficulty finding downtime for connection and relaxation.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Social Competition and Materialism</h3>
                  <p className="text-gray-600">
                    The affluent South Tulsa environment can create pressure around social status, appearance, and 
                    material possessions. Children and teens may struggle with comparison to peers, anxiety about 
                    fitting in, or developing unhealthy relationships with social media and consumer culture. We help 
                    families develop authentic values and healthy perspectives on success and self-worth.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">College Preparation Anxiety</h3>
                  <p className="text-gray-600">
                    With many South Tulsa students planning for competitive colleges, the pressure around standardized 
                    testing, college applications, and scholarship competitions can be intense. Students may develop 
                    test anxiety, perfectionism, or depression if their achievements don't meet their own or family 
                    expectations.
                  </p>
                </div>
              </div>
            </div>

            {/* Schools We Work With */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Schools We Partner With in South Tulsa
              </h2>
              <p className="text-gray-600 mb-6">
                We maintain strong collaborative relationships with South Tulsa schools, working closely with 
                counselors, teachers, and administrators to support student success:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Tulsa Public Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Edison Preparatory School</li>
                    <li>• Hale High School</li>
                    <li>• Memorial High School</li>
                    <li>• Wright Elementary</li>
                    <li>• Edison Elementary</li>
                    <li>• Zarrow International School</li>
                    <li>• Reed Elementary</li>
                    <li>• Monroe Middle School</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Private & Charter Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Holland Hall School</li>
                    <li>• Monte Cassino School</li>
                    <li>• Riverfield Country Day School</li>
                    <li>• Bishop Kelley High School</li>
                    <li>• Cascia Hall Preparatory School</li>
                    <li>• Various homeschool cooperatives</li>
                    <li>• Private tutoring academies</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transportation and Parking */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Getting to SafeHarbor in South Tulsa
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Convenient Access & Parking</h3>
                  <p className="text-gray-600 mb-3">
                    Our services are designed for busy suburban families:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Large parking lot with 60+ spaces available</li>
                    <li>• Easy access from major South Tulsa corridors</li>
                    <li>• Handicap accessible parking and building entrance</li>
                    <li>• Covered drop-off area for weather protection</li>
                    <li>• Well-lit, secure parking for evening appointments</li>
                    <li>• Convenient location for combining with errands and activities</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">From Major South Tulsa Areas</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• From Woodland Hills Mall: 5-minute drive via Yale Avenue</li>
                    <li>• From 71st & Yale area: 3-minute drive</li>
                    <li>• From River Parks: 8-minute drive via Riverside Drive</li>
                    <li>• From 91st & Memorial area: 7-minute drive via Memorial Drive</li>
                    <li>• From 101st Street corridor: 10-minute drive</li>
                    <li>• From LaFortune Park area: 6-minute drive via 51st Street</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Major Corridor Access</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Direct access from Yale Avenue (major north-south route)</li>
                    <li>• Easy access from Memorial Drive</li>
                    <li>• Quick routes from 71st Street and 81st Street</li>
                    <li>• Convenient from Riverside Drive</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Located in the Heart of South Tulsa
              </h2>
              <p className="text-gray-600 mb-6">
                Our team is strategically positioned near the landmarks and destinations South Tulsa families visit regularly:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Close to Major Destinations:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Woodland Hills Mall</li>
                    <li>• LaFortune Park and Golf Course</li>
                    <li>• South Hills Country Club</li>
                    <li>• River Parks and Arkansas River</li>
                    <li>• Multiple TPS and private school campuses</li>
                    <li>• Saint Francis Hospital South</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Convenient Amenities:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Target, Walmart, and Whole Foods</li>
                    <li>• Numerous restaurants and dining options</li>
                    <li>• Reasor's and other grocery stores</li>
                    <li>• Multiple Starbucks and coffee shops</li>
                    <li>• CVS, Walgreens, and pharmacy services</li>
                    <li>• Banking and professional services along Yale</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Success Story */}
            <div className="mb-12 bg-gradient-to-br from-cream-100 to-cream-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Success Story from South Tulsa
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-600 italic mb-4">
                  "Our 15-year-old son was the picture of South Tulsa success - honor roll student at Edison Prep, 
                  varsity tennis player, student government, volunteer work, and preparing for early college admission. 
                  But underneath all the achievements, he was struggling with severe anxiety and perfectionism. He 
                  was having panic attacks before tests, couldn't sleep, and was putting enormous pressure on himself 
                  to maintain his 'perfect' image."
                </p>
                <p className="text-gray-600 italic mb-4">
                  "SafeHarbor immediately understood the unique pressures of high-achieving South Tulsa students. 
                  They didn't suggest he lower his standards or quit activities - instead, they taught him healthy 
                  ways to manage perfectionism and maintain perspective. They worked with his school counselor and 
                  tennis coach to create strategies that supported his goals while protecting his mental health."
                </p>
                <p className="text-gray-600 italic">
                  "The transformation was remarkable. He learned that excellence didn't require perfection, developed 
                  healthy study and training habits, and actually improved his performance by reducing his anxiety. 
                  He's now thriving in college, but more importantly, he has the tools to manage stress and maintain 
                  balance. SafeHarbor helped him realize that success is about more than achievements - it's about 
                  being healthy and happy while pursuing your goals."
                </p>
                <p className="text-teal-600 font-semibold mt-4">
                  - Rachel P., Mother of two, South Tulsa resident since 2016
                </p>
              </div>
            </div>

            {/* Staff Members */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Our South Tulsa Team
              </h2>
              <p className="text-gray-600 mb-6">
                Our therapists understand South Tulsa because they live and work in the community:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Sarah Mitchell, PhD</h3>
                  <p className="text-teal-600 text-sm mb-2">Educational Psychology Specialist</p>
                  <p className="text-gray-600 text-sm">
                    South Tulsa resident for 12 years, TPS parent. Specializes in gifted student psychology, academic 
                    anxiety, and perfectionism. Former TPS school psychologist who understands the district's culture 
                    and the unique pressures facing high-achieving suburban students.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Michael Rodriguez, LCSW</h3>
                  <p className="text-teal-600 text-sm mb-2">Adolescent Stress Management Specialist</p>
                  <p className="text-gray-600 text-sm">
                    Expert in helping high-achieving teens manage perfectionism, social pressures, and college 
                    preparation stress. Familiar with South Tulsa schools and extracurricular programs. Specializes 
                    in helping students balance multiple demanding commitments.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Amanda Chen, MD</h3>
                  <p className="text-teal-600 text-sm mb-2">Child & Adolescent Psychiatrist</p>
                  <p className="text-gray-600 text-sm">
                    Specializes in anxiety disorders, ADHD, and mood disorders in academically gifted students. 
                    Experienced in medication management for high-achieving teens. Collaborates closely with 
                    school counselors and coaches to provide comprehensive support.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Jessica Thompson, LPC</h3>
                  <p className="text-teal-600 text-sm mb-2">Family Systems Therapist</p>
                  <p className="text-gray-600 text-sm">
                    Helps high-achieving families maintain healthy relationships while pursuing excellence. Specializes 
                    in family communication, managing overscheduled lifestyles, and helping parents support their 
                    children's success without creating additional pressure.
                  </p>
                </div>
              </div>
            </div>

            {/* Community Resources */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                South Tulsa Community Resources
              </h2>
              <p className="text-gray-600 mb-6">
                We connect families with local South Tulsa resources and support systems:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Educational & Enrichment</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• TPS counseling and student support services</li>
                    <li>• Private school counseling departments</li>
                    <li>• Tutoring centers and test prep services</li>
                    <li>• College planning and scholarship resources</li>
                    <li>• Academic competition and enrichment programs</li>
                    <li>• South Tulsa library branch programs</li>
                    <li>• YMCA youth development programs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Recreation & Support</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• LaFortune Park programs and activities</li>
                    <li>• River Parks trail system and recreation</li>
                    <li>• Youth sports leagues and clubs</li>
                    <li>• Faith community youth ministries</li>
                    <li>• Parent organizations and school booster clubs</li>
                    <li>• Mental health support groups</li>
                    <li>• Crisis support through area hospitals and services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Frequently Asked Questions - South Tulsa Families
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you work with both public and private schools in South Tulsa?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We have established relationships with counselors and administrators at TPS schools like 
                    Edison Prep and Memorial, as well as private schools like Holland Hall and Cascia Hall. We can 
                    coordinate academic accommodations, attend meetings, and work collaboratively with school teams.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Can you help with college preparation anxiety and perfectionism?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. We specialize in helping high-achieving South Tulsa students manage the intense pressure 
                    of college preparation. We work on perfectionism, test anxiety, time management, and maintaining 
                    perspective during the competitive application process while still supporting their academic goals.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Are you flexible with scheduling around busy South Tulsa lifestyles?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We understand how packed South Tulsa family schedules can be with school, sports, activities, 
                    and social commitments. We offer early morning, evening, and weekend appointments, and we can 
                    work around tournament schedules, performance seasons, and other commitments.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you provide family therapy for overscheduled families?
                  </h3>
                  <p className="text-gray-600">
                    Definitely. We offer family therapy specifically designed to help families manage busy lifestyles, 
                    communicate about priorities, and create healthy boundaries. We help families maintain their values 
                    and connections while pursuing success and achievement.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you understand the social pressures of affluent South Tulsa communities?
                  </h3>
                  <p className="text-gray-600">
                    Yes, our team is very familiar with the unique social dynamics, expectations, and pressures that 
                    come with living in affluent suburban communities. We help children and teens develop authentic 
                    self-worth, healthy relationships with material success, and resilience against social comparison.
                  </p>
                </div>
              </div>
            </div>

            {/* Strong CTA */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Help Your Child Thrive in South Tulsa and Beyond
              </h2>
              <p className="text-xl mb-6 opacity-95">
                Join South Tulsa families who trust SafeHarbor for mental health support that understands the unique opportunities and pressures of our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-cream-100 transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
                >
                  Schedule Your Appointment
                </Link>
                <a
                  href="tel:918-555-0102"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-teal-600 transition-all transform hover:scale-105 font-bold text-lg"
                >
                  Call Now: (918) 555-0102
                </a>
              </div>
              <p className="mt-6 text-sm opacity-90">
                Conveniently convenient to Woodland Hills Mall, serving all of South Tulsa
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}