import Link from 'next/link'

export default function NorthTulsaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Child & Teen Therapy in North Tulsa | SafeHarbor Behavioral Health
          </h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Serving families in North Tulsa, Turley, and surrounding areas with comprehensive mental health services, 
            from Apache Park to Admiral Boulevard and Gilcrease Elementary to McLain High School.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Why North Tulsa Families Choose Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Why North Tulsa Families Choose SafeHarbor
              </h2>
              <p className="text-gray-600 mb-4">
                North Tulsa represents the heart of Tulsa's rich cultural heritage and community resilience. Home to 
                historic landmarks like Greenwood District, the vibrant legacy of Black Wall Street, and the beautiful 
                Gilcrease Museum, North Tulsa combines deep historical significance with modern community strength. 
                SafeHarbor Behavioral Health understands what makes North Tulsa special - the strong sense of community 
                pride, the importance of cultural identity and family traditions, and the resilience that has defined 
                this area through generations of change and growth.
              </p>
              <p className="text-gray-600 mb-4">
                Our North Tulsa location serves families throughout the area, including historic neighborhoods near 
                Greenwood District, families along Admiral Boulevard, residents of Turley and surrounding communities, 
                and those throughout northern Tulsa County. We're conveniently located with easy access from major 
                corridors like Pine Street, Admiral Boulevard, and Apache Street, making it accessible for families 
                to coordinate therapy with school activities, work schedules, and community involvement.
              </p>
              <p className="text-gray-600">
                Parents appreciate that we understand the North Tulsa experience - the importance of community connections 
                and extended family networks, the value placed on cultural pride and identity, and the strength that 
                comes from belonging to a community with such profound history and character. We know that North Tulsa 
                families often have deep generational roots in the area, and we understand both the advantages and 
                challenges of raising children in a community working to overcome historical inequities while preserving 
                its unique cultural strength.
              </p>
            </div>

            {/* Common Mental Health Challenges */}
            <div className="mb-12 bg-cream-100 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Common Mental Health Challenges in North Tulsa
              </h2>
              <p className="text-gray-600 mb-4">
                While North Tulsa has many community strengths, families in the area face specific challenges that 
                can impact children's mental health. Understanding these challenges within their historical and social 
                context is essential for providing effective, culturally sensitive mental health support.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Historical Trauma and Community Healing</h3>
                  <p className="text-gray-600">
                    The legacy of historical events like the 1921 Tulsa Race Massacre continues to impact families 
                    in North Tulsa. Children may experience intergenerational trauma, struggle with community identity, 
                    or feel anger and sadness about historical injustices. We provide culturally informed therapy 
                    that honors this history while promoting healing and resilience.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Economic Stress and Resource Challenges</h3>
                  <p className="text-gray-600">
                    Many North Tulsa families face economic pressures that can create stress within households. 
                    Parents working multiple jobs, concerns about neighborhood safety, and limited access to resources 
                    can create anxiety in children. We help families develop coping strategies and connect with 
                    community resources and support systems.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Educational Disparities and Academic Pressure</h3>
                  <p className="text-gray-600">
                    Students in North Tulsa may face challenges with educational resources, high student-teacher ratios, 
                    or feeling unprepared for college compared to peers in other districts. This can create stress about 
                    academic achievement, future opportunities, and breaking cycles of limited educational access. 
                    We work with students to build confidence and academic resilience.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Identity and Cultural Navigation</h3>
                  <p className="text-gray-600">
                    Young people in North Tulsa may struggle with questions of cultural identity, navigating between 
                    community expectations and broader societal pressures, or dealing with discrimination and bias. 
                    We help children and teens develop strong, positive cultural identity while building resilience 
                    against external challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* Schools We Work With */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Schools We Partner With in North Tulsa
              </h2>
              <p className="text-gray-600 mb-6">
                We maintain strong collaborative relationships with North Tulsa schools, working closely with 
                counselors, teachers, and administrators to support student success:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Tulsa Public Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• McLain High School</li>
                    <li>• Booker T. Washington High School</li>
                    <li>• Gilcrease Elementary</li>
                    <li>• Hawthorne Elementary</li>
                    <li>• Hughes Elementary</li>
                    <li>• Langston Hughes Academy</li>
                    <li>• Lindbergh Elementary</li>
                    <li>• Mitchell Elementary</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Charter & Alternative Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• KIPP Tulsa</li>
                    <li>• Collegiate Hall Charter School</li>
                    <li>• Tulsa Legacy Charter School</li>
                    <li>• Alternative education programs</li>
                    <li>• Adult education centers</li>
                    <li>• Homeschool cooperatives</li>
                    <li>• Community learning centers</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transportation and Parking */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Getting to SafeHarbor in North Tulsa
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Accessible Location & Parking</h3>
                  <p className="text-gray-600 mb-3">
                    Our North Tulsa location is designed to be accessible and welcoming for all families:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Large parking lot with 50+ spaces available</li>
                    <li>• Easy access from major North Tulsa streets</li>
                    <li>• Handicap accessible parking and building entrance</li>
                    <li>• Covered drop-off area for weather protection</li>
                    <li>• Well-lit, secure parking for all appointment times</li>
                    <li>• Public transportation accessible location</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">From Major North Tulsa Areas</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• From Greenwood District: 5-minute drive via Pine Street</li>
                    <li>• From Apache Park: 4-minute drive via Apache Street</li>
                    <li>• From McLain High School: 6-minute drive via Admiral</li>
                    <li>• From Gilcrease Museum: 8-minute drive via Gilcrease Road</li>
                    <li>• From Turley: 10-minute drive via Highway 11</li>
                    <li>• From downtown Tulsa: 8-minute drive via Highway 75</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Public Transportation Access</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Multiple Tulsa Transit routes serve the area</li>
                    <li>• Walking distance from bus stops on major streets</li>
                    <li>• Easy access from Highway 75 and city bus routes</li>
                    <li>• Safe pedestrian access from surrounding neighborhoods</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Located in Historic North Tulsa
              </h2>
              <p className="text-gray-600 mb-6">
                Our office is positioned near the landmarks and institutions that define North Tulsa's rich heritage:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Historic & Cultural Sites:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Greenwood Cultural Center</li>
                    <li>• John Hope Franklin Reconciliation Park</li>
                    <li>• Gilcrease Museum</li>
                    <li>• Booker T. Washington High School</li>
                    <li>• Vernon AME Church</li>
                    <li>• Historic Apache Park</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Community Resources:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• North Tulsa community centers</li>
                    <li>• Local grocery stores and pharmacies</li>
                    <li>• Community health centers</li>
                    <li>• Faith community organizations</li>
                    <li>• Public library branches</li>
                    <li>• Recreation and sports facilities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Success Story */}
            <div className="mb-12 bg-gradient-to-br from-cream-100 to-cream-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Success Story from North Tulsa
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-600 italic mb-4">
                  "My 14-year-old daughter was struggling with anger and depression after learning about the Tulsa 
                  Race Massacre in school. She felt overwhelmed by the history of our community and didn't understand 
                  how to process feelings of anger about the injustices while still feeling proud of where she came 
                  from. She was getting in trouble at McLain, fighting with family members, and talking about how 
                  nothing would ever change."
                </p>
                <p className="text-gray-600 italic mb-4">
                  "SafeHarbor provided exactly what we needed - therapists who understood both our family's experience 
                  and our community's history. They helped my daughter process her feelings about historical trauma 
                  while also connecting her to the strength and resilience that defines North Tulsa. The therapists 
                  incorporated our cultural values and helped her see herself as part of a powerful legacy of 
                  community builders and survivors."
                </p>
                <p className="text-gray-600 italic">
                  "The transformation was incredible. She started volunteering at the Greenwood Cultural Center, 
                  became involved in community organizations, and her grades improved dramatically. Most importantly, 
                  she learned to channel her passion for justice into positive action. She's now proud of her 
                  heritage and sees herself as part of continuing North Tulsa's story of strength and resilience."
                </p>
                <p className="text-teal-600 font-semibold mt-4">
                  - Denise W., Mother of two, North Tulsa resident for three generations
                </p>
              </div>
            </div>

            {/* Staff Members */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Our North Tulsa Community Team
              </h2>
              <p className="text-gray-600 mb-6">
                Our therapists understand North Tulsa because they're part of the community:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Keisha Johnson, PsyD</h3>
                  <p className="text-teal-600 text-sm mb-2">Cultural Psychology Specialist</p>
                  <p className="text-gray-600 text-sm">
                    North Tulsa resident and Booker T. Washington graduate. Specializes in historical trauma, 
                    cultural identity development, and community resilience. Expert in providing culturally 
                    responsive therapy that honors African American heritage and community strength.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Marcus Williams, LCSW</h3>
                  <p className="text-teal-600 text-sm mb-2">Community Advocacy Therapist</p>
                  <p className="text-gray-600 text-sm">
                    McLain High School graduate who returned to serve his community. Expert in helping teens 
                    navigate identity, overcome educational barriers, and develop leadership skills. Active in 
                    North Tulsa community organizations and youth mentorship programs.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Robert Jackson, MD</h3>
                  <p className="text-teal-600 text-sm mb-2">Community Psychiatrist</p>
                  <p className="text-gray-600 text-sm">
                    Specializes in trauma-informed care, ADHD, and mood disorders. Experienced in working with 
                    families affected by community violence and economic stress. Provides culturally sensitive 
                    medication management and works closely with community resources.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Tanya Davis, LPC</h3>
                  <p className="text-teal-600 text-sm mb-2">Family Empowerment Therapist</p>
                  <p className="text-gray-600 text-sm">
                    Specializes in family systems therapy with focus on building on community and cultural 
                    strengths. Expert in helping families navigate systemic challenges while maintaining strong 
                    family bonds and cultural connections. Fluent in trauma-informed care approaches.
                  </p>
                </div>
              </div>
            </div>

            {/* Community Resources */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                North Tulsa Community Resources
              </h2>
              <p className="text-gray-600 mb-6">
                We connect families with local North Tulsa resources and support systems:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Cultural & Educational</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Greenwood Cultural Center programs</li>
                    <li>• TPS counseling and student support services</li>
                    <li>• Gilcrease Museum education programs</li>
                    <li>• KIPP Tulsa support services</li>
                    <li>• Community tutoring and mentorship programs</li>
                    <li>• Adult education and GED programs</li>
                    <li>• Career training and job placement services</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Support Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• North Tulsa community health centers</li>
                    <li>• Family & Children's Services</li>
                    <li>• Faith community support networks</li>
                    <li>• Food banks and emergency assistance</li>
                    <li>• Youth programs and recreational activities</li>
                    <li>• Mental health support groups</li>
                    <li>• Crisis intervention and emergency services</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Frequently Asked Questions - North Tulsa Families
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you provide culturally responsive therapy?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. Our North Tulsa team includes therapists who understand and honor African American 
                    cultural heritage, community history, and family traditions. We provide therapy that builds on 
                    cultural strengths while addressing the unique challenges facing North Tulsa families.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Can you help children process historical trauma and community history?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we specialize in helping children and teens understand and process difficult community 
                    history, including events like the 1921 Tulsa Race Massacre. We help young people develop 
                    resilience and pride while processing complex emotions about historical and ongoing injustices.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you work with North Tulsa schools?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We have strong relationships with counselors and administrators at TPS schools including 
                    McLain, Booker T. Washington, and KIPP Tulsa. We can coordinate with school teams, attend meetings, 
                    and work collaboratively to support student success both academically and emotionally.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you offer sliding scale fees and accept Medicaid?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we accept most insurance plans including Medicaid and SoonerCare. We also offer sliding 
                    scale fees based on income and can work with families to develop payment plans. We believe 
                    that financial barriers should never prevent families from accessing quality mental health care.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Can you help connect families with community resources?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. Our team is very familiar with North Tulsa community resources, including educational 
                    support, job training programs, food assistance, and emergency services. We often help families 
                    navigate available resources and provide referrals to additional support services.
                  </p>
                </div>
              </div>
            </div>

            {/* Strong CTA */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Strengthen Your Family and Honor Your Heritage
              </h2>
              <p className="text-xl mb-6 opacity-95">
                Join North Tulsa families who trust SafeHarbor for culturally responsive mental health care that builds on our community's strength and resilience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-cream-100 transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
                >
                  Begin Your Journey
                </Link>
                <a
                  href="tel:918-553-5746"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-teal-600 transition-all transform hover:scale-105 font-bold text-lg"
                >
                  Call Now: (918) 553-5746
                </a>
              </div>
              <p className="mt-6 text-sm opacity-90">
                Proudly serving North Tulsa, Turley, and all families in our historic community
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}