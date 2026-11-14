import Link from 'next/link'

export const metadata = { alternates: { canonical: '/locations/jenks' } }

export default function JenksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Child & Teen Therapy in Jenks | Safe Harbor Behavioral Health
          </h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Serving families in Jenks, Glenpool, and surrounding areas with comprehensive mental health services, 
            from the Arkansas River to Main Street and Jenks Elementary to Jenks High School.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Why Jenks Families Choose Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Why Jenks Families Choose Safe Harbor
              </h2>
              <p className="text-gray-600 mb-4">
                Jenks represents the epitome of Oklahoma educational excellence and community pride. Known statewide 
                for its outstanding academic programs, championship athletics, and the beautiful Arkansas Riverfront, 
                Jenks attracts families who value both achievement and quality of life. Safe Harbor Behavioral Health 
                understands what makes Jenks special - the commitment to educational excellence at Jenks Public Schools, 
                the strong sense of community identity, and the balance between high expectations and supportive 
                family environments that characterizes this remarkable district.
              </p>
              <p className="text-gray-600 mb-4">
                We proudly serve families throughout the district and surrounding areas, including established 
                neighborhoods near downtown Jenks, new developments along the Arkansas River, families in Glenpool, 
                and those in south Tulsa County. We're conveniently accessible with easy access from Highway 75, 101st 
                Street, and Elm Street, making it simple for families to coordinate therapy with the busy schedules 
                of Jenks students involved in academics, athletics, fine arts, and the many extracurricular activities 
                that make Jenks education so comprehensive.
              </p>
              <p className="text-gray-600">
                Parents appreciate that we understand the Jenks culture - the "Trojan Way" that emphasizes character, 
                excellence, and community involvement. We know that Jenks families often relocate specifically for 
                the schools, understand the pressure that comes with being part of a nationally recognized district, 
                and recognize both the opportunities and challenges of raising children in a high-achieving academic 
                environment. Our team includes Jenks graduates and current JPS parents who truly understand what it 
                means to be a Trojan.
              </p>
            </div>

            {/* Common Mental Health Challenges */}
            <div className="mb-12 bg-cream-100 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Common Mental Health Challenges in Jenks
              </h2>
              <p className="text-gray-600 mb-4">
                While Jenks offers exceptional opportunities for student growth and achievement, the district's high 
                standards and competitive environment can create unique pressures. The community's reputation for 
                excellence, combined with the intensive academic and extracurricular programs, can impact student 
                mental health in ways that require specialized understanding and support.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Academic Excellence Pressure</h3>
                  <p className="text-gray-600">
                    Jenks Public Schools consistently rank among the nation's top districts, creating immense pressure 
                    for students to maintain exceptional performance. The rigorous AP programs, competitive class rankings, 
                    and college preparation expectations can lead to perfectionism, test anxiety, and academic burnout, 
                    even among highly capable students.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Overscheduling and Time Management Stress</h3>
                  <p className="text-gray-600">
                    Jenks students often participate in multiple demanding activities - advanced academics, competitive 
                    athletics, award-winning fine arts programs, community service, and leadership roles. The pressure 
                    to excel in multiple areas simultaneously can lead to chronic stress, sleep deprivation, and 
                    difficulty maintaining work-life balance.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Social Comparison and Status Anxiety</h3>
                  <p className="text-gray-600">
                    In a high-achieving community like Jenks, students may struggle with constant comparison to peers 
                    who also excel academically and socially. The pressure to maintain status within competitive friend 
                    groups, gain admission to prestigious colleges, and live up to the "Jenks standard" can create 
                    significant anxiety and self-worth issues.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">College Preparation Anxiety</h3>
                  <p className="text-gray-600">
                    With Jenks' reputation for sending graduates to top universities, students often feel intense 
                    pressure to secure admission to highly competitive colleges. The stress of standardized testing, 
                    college applications, scholarship competitions, and maintaining perfect academic records can be 
                    overwhelming, particularly for students who tie their self-worth to academic achievement.
                  </p>
                </div>
              </div>
            </div>

            {/* Schools We Work With */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Schools We Partner With in Jenks
              </h2>
              <p className="text-gray-600 mb-6">
                We maintain close collaborative relationships with Jenks Public Schools and area institutions, 
                working directly with counselors, teachers, and administrators to provide comprehensive support:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Jenks Public Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Jenks High School</li>
                    <li>• Jenks Freshman Academy</li>
                    <li>• Jenks East Elementary</li>
                    <li>• Jenks Elementary</li>
                    <li>• Jenks Southeast Elementary</li>
                    <li>• Jenks West Elementary</li>
                    <li>• Jenks Middle School</li>
                    <li>• Jenks 6th Grade Center</li>
                    <li>• East Intermediate High School</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Area Schools & Programs</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Glenpool Public Schools</li>
                    <li>• Berryhill Public Schools</li>
                    <li>• Keystone Public Schools</li>
                    <li>• Private schools in south Tulsa</li>
                    <li>• Homeschool cooperatives</li>
                    <li>• Specialized arts and academic programs</li>
                    <li>• Online and hybrid learning programs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Serve Jenks Families */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                How We Serve Jenks Families
              </h2>
              <p className="text-gray-600 mb-4">
                Safe Harbor Behavioral Health serves Jenks families from our Tulsa
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
                Jenks Community Resources
              </h2>
              <p className="text-gray-600 mb-6">
                We connect families with local Jenks resources and support systems:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Educational & Enrichment</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• JPS counseling and student support services</li>
                    <li>• Oklahoma Aquarium education programs</li>
                    <li>• Jenks Community Center classes and activities</li>
                    <li>• Arkansas River educational programs</li>
                    <li>• Local tutoring and test prep centers</li>
                    <li>• College planning and scholarship resources</li>
                    <li>• Academic competition and enrichment programs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Recreation & Support</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Jenks athletics and fine arts programs</li>
                    <li>• River Parks trail system</li>
                    <li>• Faith community youth ministries</li>
                    <li>• Parent organizations and booster clubs</li>
                    <li>• Jenks Historical Society youth programs</li>
                    <li>• Community volunteer opportunities</li>
                    <li>• Crisis support through area emergency services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Frequently Asked Questions - Jenks Families
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you work directly with Jenks Public Schools counselors?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We have excellent working relationships with JPS counselors and administrators at all levels. 
                    We can coordinate academic accommodations, attend IEP or 504 meetings, and work collaboratively 
                    with school staff to ensure consistent support for student success both academically and emotionally.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Can you help with college preparation anxiety and perfectionism?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. We specialize in helping high-achieving Jenks students manage the intense pressure 
                    of college preparation. We work on perfectionism, test anxiety, time management, and maintaining 
                    perspective during the competitive college application process while still supporting their 
                    academic goals.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you understand the demands of Jenks athletics and fine arts programs?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we're very familiar with the high-level commitments required for Jenks athletics, band, 
                    choir, theater, and other fine arts programs. We help students manage the stress of balancing 
                    these demanding activities with rigorous academics, and we can work around performance and 
                    competition schedules.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Are you available for crisis support during high-stress periods like testing or college applications?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we understand that certain times of the school year are particularly stressful for Jenks 
                    students. We offer increased availability during AP testing, college application deadlines, 
                    and other high-pressure periods. We can provide urgent consultations and additional support 
                    when students are struggling.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you work with families who are new to the Jenks district?
                  </h3>
                  <p className="text-gray-600">
                    Definitely! Many families move to Jenks specifically for the schools, and the transition can be 
                    challenging. We help new families understand the district culture, support students in adjusting 
                    to Jenks' academic rigor, and assist with social integration into the tight-knit Trojan community.
                  </p>
                </div>
              </div>
            </div>

            {/* Strong CTA */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Help Your Trojan Excel Academically and Emotionally
              </h2>
              <p className="text-xl mb-6 opacity-95">
                Join Jenks families who trust Safe Harbor for mental health support that understands our commitment to excellence and Trojan pride.
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
                Proudly serving Jenks, Glenpool, and all south Tulsa County communities
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
