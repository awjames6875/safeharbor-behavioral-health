import Link from 'next/link'

export default function WestTulsaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Child & Teen Therapy in West Tulsa | SafeHarbor Behavioral Health
          </h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Serving families in West Tulsa, Red Fork, and surrounding areas with comprehensive mental health services, 
            from Tulsa Zoo to 41st and Southwest Boulevard and from Berryhill Elementary to Webster High School.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Why West Tulsa Families Choose Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Why West Tulsa Families Choose SafeHarbor
              </h2>
              <p className="text-gray-600 mb-4">
                West Tulsa embodies the authentic spirit of working-class Oklahoma, where community bonds run deep 
                and families take care of each other. From the historic neighborhoods of Red Fork to the recreational 
                opportunities at the Tulsa Zoo and Mohawk Park, West Tulsa combines blue-collar pride with natural 
                beauty and family values. SafeHarbor Behavioral Health understands what makes West Tulsa special - 
                the strong sense of neighborhood community, the importance of hard work and family loyalty, and the 
                resilience that defines families who choose to build their lives in this authentic, unpretentious 
                part of Tulsa.
              </p>
              <p className="text-gray-600 mb-4">
                We proudly serve families throughout the area, including historic neighborhoods like 
                Red Fork, families along Southwest Boulevard and 41st Street, residents of newer developments, and 
                those in surrounding communities throughout western Tulsa County. We're conveniently accessible with 
                easy access from major west-side routes and Highway 75, making it accessible for families to coordinate 
                therapy with work schedules, school activities, and the community involvement that characterizes 
                West Tulsa living.
              </p>
              <p className="text-gray-600">
                Parents appreciate that we understand the West Tulsa experience - the value placed on family loyalty 
                and community support, the importance of practical solutions and straightforward communication, and 
                the pride that comes from being part of neighborhoods where people look out for each other. We know 
                that West Tulsa families often have multigenerational roots in the area, and we understand both the 
                strengths and challenges of raising children in working-class communities that value authenticity 
                over appearances.
              </p>
            </div>

            {/* Common Mental Health Challenges */}
            <div className="mb-12 bg-cream-100 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Common Mental Health Challenges in West Tulsa
              </h2>
              <p className="text-gray-600 mb-4">
                While West Tulsa has strong community bonds and family values, families in the area may face specific 
                challenges that can impact children's mental health. Understanding these challenges within the context 
                of working-class life and community culture is essential for providing effective, relevant mental 
                health support.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Economic Stress and Job Insecurity</h3>
                  <p className="text-gray-600">
                    Many West Tulsa families work in industries that can be economically volatile, including 
                    manufacturing, construction, and service jobs. Economic uncertainty, parents working multiple 
                    jobs, or job loss can create significant family stress that children absorb, leading to anxiety 
                    about family stability and their own future prospects.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Mental Health Stigma and Help-Seeking</h3>
                  <p className="text-gray-600">
                    Working-class communities sometimes view mental health treatment with skepticism or see 
                    seeking help as weakness. Children and teens may struggle with emotional issues but resist 
                    therapy due to family or community attitudes. We work to reduce stigma and provide practical, 
                    straightforward mental health support that respects family values.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Educational and Opportunity Gaps</h3>
                  <p className="text-gray-600">
                    Some West Tulsa students may feel that they have fewer educational or career opportunities 
                    compared to peers in more affluent areas. This can create feelings of hopelessness, low 
                    academic motivation, or anxiety about breaking cycles of limited educational and economic 
                    mobility within families.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Substance Use and Family Dysfunction</h3>
                  <p className="text-gray-600">
                    Economic stress and limited resources can sometimes contribute to substance use issues or 
                    family dysfunction. Children may witness or experience domestic violence, substance abuse, 
                    or other traumatic family situations. We provide trauma-informed care that helps families 
                    heal and build healthier patterns.
                  </p>
                </div>
              </div>
            </div>

            {/* Schools We Work With */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Schools We Partner With in West Tulsa
              </h2>
              <p className="text-gray-600 mb-6">
                We maintain strong collaborative relationships with West Tulsa schools, working closely with 
                counselors, teachers, and administrators to support student success:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Tulsa Public Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Webster High School</li>
                    <li>• Daniel Webster High School</li>
                    <li>• West Middle School</li>
                    <li>• Berryhill Elementary</li>
                    <li>• Bunche Elementary</li>
                    <li>• Disney Elementary</li>
                    <li>• Penn Elementary</li>
                    <li>• Salk Elementary</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Area Schools & Programs</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Berryhill Public Schools</li>
                    <li>• Sand Springs Public Schools (nearby)</li>
                    <li>• Alternative education programs</li>
                    <li>• Adult education and GED centers</li>
                    <li>• Vocational and technical training programs</li>
                    <li>• Homeschool support groups</li>
                    <li>• Community learning centers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Serve West Tulsa Families */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                How We Serve West Tulsa Families
              </h2>
              <p className="text-gray-600 mb-4">
                Safe Harbor Behavioral Health serves West Tulsa families from our Tulsa
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
                West Tulsa Community Resources
              </h2>
              <p className="text-gray-600 mb-6">
                We connect families with local West Tulsa resources and support systems:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Education & Youth Programs</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• TPS counseling and student support services</li>
                    <li>• After-school programs at community centers</li>
                    <li>• Tulsa Zoo education and volunteer programs</li>
                    <li>• Boys & Girls Club of Greater Tulsa</li>
                    <li>• Youth sports leagues in West Tulsa</li>
                    <li>• Local church youth ministries</li>
                    <li>• Vocational training and apprenticeship programs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Support Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• West Tulsa community health centers</li>
                    <li>• Family & Children's Services</li>
                    <li>• Food banks and emergency assistance programs</li>
                    <li>• Job training and employment resources</li>
                    <li>• Substance abuse treatment programs</li>
                    <li>• Domestic violence support services</li>
                    <li>• Crisis intervention and emergency services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Frequently Asked Questions - West Tulsa Families
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Is therapy really going to help, or is it just talk?
                  </h3>
                  <p className="text-gray-600">
                    We understand skepticism about therapy - it's common in working-class communities. Our approach 
                    is practical and results-focused. We don't just talk; we teach real skills for managing problems, 
                    improving family relationships, and handling life's challenges. Many of our clients see concrete 
                    improvements in behavior and family functioning within weeks.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Can we afford therapy with our financial situation?
                  </h3>
                  <p className="text-gray-600">
                    We accept most insurance plans including Medicaid and SoonerCare, and offer sliding scale fees 
                    based on income. We understand the financial pressures West Tulsa families face and work hard 
                    to make therapy affordable. Don't let money concerns prevent your family from getting help - 
                    call us to discuss options.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you work with West Tulsa schools when there are problems?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We have strong relationships with TPS counselors and administrators at Webster, West Middle 
                    School, and elementary schools throughout West Tulsa. We can attend school meetings, coordinate 
                    with teachers, and work as a team to address both academic and behavioral concerns.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Can you help with serious problems like substance use and family violence?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. Our team includes specialists in trauma, substance abuse, and family crisis intervention. 
                    We provide confidential, non-judgmental support and can help connect families with additional 
                    resources when needed. We understand these issues affect many families and there's no shame in 
                    getting help.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Are your therapists going to judge our family or try to change our values?
                  </h3>
                  <p className="text-gray-600">
                    Not at all. Our West Tulsa team understands and respects working-class values like family loyalty, 
                    hard work, and personal responsibility. We work with your family's existing strengths and values 
                    to solve problems, not to change who you are. Many of our therapists come from similar backgrounds 
                    and understand the West Tulsa way of life.
                  </p>
                </div>
              </div>
            </div>

            {/* Strong CTA */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Strengthen Your Family with Practical, Real-World Solutions
              </h2>
              <p className="text-xl mb-6 opacity-95">
                Join West Tulsa families who trust SafeHarbor for straightforward mental health support that respects working-class values and gets results.
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
                Proudly serving West Tulsa, Red Fork, and all hardworking families in our community
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}