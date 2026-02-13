import Link from 'next/link'

export default function BrooksidePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Child & Teen Therapy in Brookside | SafeHarbor Behavioral Health
          </h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Serving families in Tulsa's vibrant Brookside district, from Peoria Avenue's shops and restaurants 
            to the quiet residential streets between 31st and 51st Street.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Why Brookside Families Choose Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Why Brookside Families Choose SafeHarbor
              </h2>
              <p className="text-gray-600 mb-4">
                Brookside represents the perfect blend of urban convenience and neighborhood charm. This walkable community, 
                centered along Peoria Avenue from 31st to 51st Street, attracts families who value both tradition and 
                progressive thinking. SafeHarbor Behavioral Health understands the unique culture of Brookside - from the 
                Saturday morning farmers market to First Friday gallery walks, from cozy coffee shops to tree-lined residential 
                streets where children still ride bikes to friends' houses.
              </p>
              <p className="text-gray-600 mb-4">
                Our practice serves families throughout the Brookside area, including those living near the shops on Peoria, 
                the historic homes along 36th Street, and the charming neighborhoods surrounding Brookside Park. We understand 
                that Brookside families often choose this area for its strong sense of community, excellent schools, and 
                family-friendly atmosphere. Our therapists are familiar with the Brookside lifestyle - we know many of our 
                families shop at The Brook restaurant, grab coffee at Shades of Brown, and attend events at the Circle Cinema.
              </p>
              <p className="text-gray-600">
                Parents appreciate our convenient location, just minutes from Brookside's main corridor. Whether you're coming 
                from a home near 41st and Peoria, the neighborhoods around Christ the King Church, or the areas near Marquette 
                School, our team is easily accessible with ample parking. We schedule appointments to work around Brookside 
                traffic patterns and popular community events.
              </p>
            </div>

            {/* Common Mental Health Challenges */}
            <div className="mb-12 bg-cream-100 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Common Mental Health Challenges in Brookside
              </h2>
              <p className="text-gray-600 mb-4">
                While Brookside offers an idyllic setting for raising children, families here face unique stressors. The 
                area's popularity and desirability can create pressure to maintain a certain lifestyle, and the close-knit 
                community, while supportive, can sometimes feel overwhelming for children and teens struggling with mental health.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Social Media and Image Pressure</h3>
                  <p className="text-gray-600">
                    In this Instagram-worthy neighborhood, teens especially feel pressure to present a perfect image. From 
                    Brookside's trendy spots to school social dynamics, we help young people navigate authenticity versus 
                    image management, addressing anxiety and depression linked to social media comparisons.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Academic Competition</h3>
                  <p className="text-gray-600">
                    With many families choosing Brookside for access to top schools like Marquette, Christ the King, and 
                    Edison districts, academic pressure runs high. We address test anxiety, perfectionism, and burnout 
                    common among high-achieving Brookside students preparing for competitive high schools and colleges.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Divorce and Blended Families</h3>
                  <p className="text-gray-600">
                    Even in stable Brookside, families experience transitions. We help children navigate divorce, co-parenting 
                    arrangements, and blended family dynamics while maintaining connections to their Brookside community, 
                    schools, and activities.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Substance Experimentation</h3>
                  <p className="text-gray-600">
                    The social nature of Brookside, with its restaurants and nightlife, can expose teens to substance use 
                    earlier. We provide prevention education and treatment for teens experimenting with alcohol or drugs, 
                    helping families navigate these challenges discreetly and effectively.
                  </p>
                </div>
              </div>
            </div>

            {/* Schools We Work With */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Schools We Partner With in Brookside
              </h2>
              <p className="text-gray-600 mb-6">
                We maintain strong relationships with Brookside area schools and regularly collaborate with counselors 
                to support student success:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Public Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Eliot Elementary (31st & Birmingham)</li>
                    <li>• Lee Elementary (36th & Madison)</li>
                    <li>• Lewis and Clark Elementary</li>
                    <li>• Edison Preparatory School</li>
                    <li>• Will Rogers High School</li>
                    <li>• Edison Middle School</li>
                    <li>• Carnegie Elementary</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Private & Charter Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Marquette Catholic School</li>
                    <li>• Christ the King Catholic School</li>
                    <li>• Monte Cassino School</li>
                    <li>• Council Oak Elementary</li>
                    <li>• Augustine Christian Academy</li>
                    <li>• Riverfield Country Day School</li>
                    <li>• Brookside Montessori</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transportation and Parking */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Getting to SafeHarbor from Brookside
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Convenient Parking</h3>
                  <p className="text-gray-600 mb-3">
                    We offer stress-free parking for Brookside families:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Free parking lot with 40+ spaces</li>
                    <li>• Easy access from Peoria Avenue</li>
                    <li>• No meters or time limits to worry about</li>
                    <li>• Covered walkway from parking to entrance</li>
                    <li>• Well-lit for evening appointments</li>
                    <li>• Handicap accessible spaces near entrance</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Quick Drive from Brookside Neighborhoods</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• From 36th & Peoria (main Brookside): 5-minute drive</li>
                    <li>• From 41st & Peoria: 6-minute drive via Riverside</li>
                    <li>• From 51st & Peoria: 8-minute drive north</li>
                    <li>• From Brookside Park area: 7-minute drive</li>
                    <li>• From Christ the King area: 4-minute drive</li>
                    <li>• From Marquette School: 3-minute drive</li>
                    <li>• From Crow Creek neighborhood: 9-minute drive</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Alternative Routes During Events</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• During Brookside First Fridays: Use Riverside Drive</li>
                    <li>• During St. Patrick's Day Parade: Take Lewis Avenue</li>
                    <li>• During farmers market: Approach from 31st Street</li>
                    <li>• During holiday events: Harvard Avenue alternative</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Easy to Find Near Brookside Landmarks
              </h2>
              <p className="text-gray-600 mb-6">
                Our team is conveniently convenient to familiar Brookside landmarks:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Near These Landmarks:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 10 minutes from The Brook restaurant</li>
                    <li>• Close to Circle Cinema</li>
                    <li>• Near Brookside Park</li>
                    <li>• 5 minutes from St. John Medical Center</li>
                    <li>• Near Riverside Drive trails</li>
                    <li>• Close to Crow Creek neighborhood</li>
                    <li>• Near Whole Foods on Yale</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Popular Spots Nearby:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Shades of Brown Coffee</li>
                    <li>• Brookside By Day restaurant</li>
                    <li>• Reasor's grocery store</li>
                    <li>• QuikTrip on Peoria</li>
                    <li>• Brookside Plaza shopping</li>
                    <li>• Nelson's Buffeteria</li>
                    <li>• Panera Bread (for waiting parents)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Success Story */}
            <div className="mb-12 bg-gradient-to-br from-cream-100 to-cream-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Success Story from Brookside
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-600 italic mb-4">
                  "Our 14-year-old daughter was struggling with anxiety and perfectionism at Marquette School. She was 
                  overwhelmed by academic pressure, social dynamics, and trying to maintain the 'perfect Brookside teen' 
                  image. She'd stopped enjoying things she loved - quit the swim team, avoided friends, and spent hours 
                  on homework trying to be perfect."
                </p>
                <p className="text-gray-600 italic mb-4">
                  "SafeHarbor's team immediately understood the Brookside culture and pressures our daughter faced. They 
                  knew the specific social dynamics at Marquette, understood the competitive academic environment, and 
                  helped her find balance. The Body & Brain program was perfect - she could walk to Brookside Park for 
                  outdoor sessions, which felt less clinical and more natural."
                </p>
                <p className="text-gray-600 italic mb-4">
                  "After four months of therapy, she's like a different kid. She's back on the swim team, hangs out at 
                  Shades of Brown with friends, and even performed at the Brookside holiday festival. Most importantly, 
                  she's learned that she doesn't have to be perfect to be valued. SafeHarbor gave us our daughter back."
                </p>
                <p className="text-teal-600 font-semibold mt-4">
                  - Michelle K., Brookside mother of two
                </p>
              </div>
            </div>

            {/* Staff Members */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Our Brookside Team
              </h2>
              <p className="text-gray-600 mb-6">
                Our therapists understand Brookside because they're part of the community:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Rachel Thompson, PsyD</h3>
                  <p className="text-teal-600 text-sm mb-2">Child & Adolescent Psychologist</p>
                  <p className="text-gray-600 text-sm">
                    Lives near 41st & Peoria. Specializes in anxiety and perfectionism. Regular at Brookside farmers market. 
                    Parent at Christ the King School. 12 years serving Brookside families.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Mark Stevens, LCSW</h3>
                  <p className="text-teal-600 text-sm mb-2">Teen Specialist</p>
                  <p className="text-gray-600 text-sm">
                    Crow Creek resident. Expert in teen depression and substance use prevention. Volunteers with Brookside 
                    youth programs. Familiar with local teen hangouts and social dynamics.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Amanda Foster, MD</h3>
                  <p className="text-teal-600 text-sm mb-2">Child Psychiatrist</p>
                  <p className="text-gray-600 text-sm">
                    Lives on 36th Street. Specializes in ADHD and mood disorders. Active at Circle Cinema family events. 
                    Works with many Marquette and Edison families.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Jessica Martinez, LPC</h3>
                  <p className="text-teal-600 text-sm mb-2">Family Therapist</p>
                  <p className="text-gray-600 text-sm">
                    Brookside resident for 8 years. Bilingual therapist specializing in blended families. Regular at 
                    Brookside By Day. Understands the community's family culture.
                  </p>
                </div>
              </div>
            </div>

            {/* Community Resources */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Brookside Community Resources
              </h2>
              <p className="text-gray-600 mb-6">
                We connect families with these Brookside-specific resources:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Family Activities</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Brookside Saturday Farmers Market</li>
                    <li>• First Friday Art Walk</li>
                    <li>• Circle Cinema family films</li>
                    <li>• Brookside Park playground and trails</li>
                    <li>• St. Patrick's Day parade and festival</li>
                    <li>• Boo Ha Ha Halloween event</li>
                    <li>• Holiday lights and activities</li>
                    <li>• Summer concert series</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Support Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Parent groups at Marquette School</li>
                    <li>• Christ the King family counseling</li>
                    <li>• Brookside Baptist youth programs</li>
                    <li>• All Souls Unitarian family support</li>
                    <li>• Brookside United Methodist programs</li>
                    <li>• Local pediatricians and family doctors</li>
                    <li>• Tutoring centers on Peoria Avenue</li>
                    <li>• Youth sports leagues at area parks</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Frequently Asked Questions - Brookside Families
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you work with students from Marquette and Christ the King?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We have extensive experience with students from both schools. We understand their academic 
                    expectations, social environments, and can coordinate with school counselors when appropriate. 
                    Many of our therapists have children in these schools.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Is parking difficult during Brookside events?
                  </h3>
                  <p className="text-gray-600">
                    No, we have our own private parking lot that's always available to clients, even during major 
                    Brookside events like the St. Patrick's parade or First Fridays. You won't have to worry about 
                    street parking or meters.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Can therapy include outdoor sessions at Brookside Park?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely! Our Body & Brain program often utilizes nearby green spaces like Brookside Park and 
                    the Riverside trails. Many children and teens find outdoor sessions less intimidating and more 
                    engaging than traditional office therapy.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you understand the social pressures in Brookside schools?
                  </h3>
                  <p className="text-gray-600">
                    Yes. We're very familiar with the social dynamics, academic pressures, and lifestyle expectations 
                    common in Brookside schools. Our therapists help students navigate these pressures while maintaining 
                    their authentic selves.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Are evening appointments available for working parents?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we offer appointments until 8 PM on weekdays and Saturday appointments to accommodate busy 
                    Brookside families. We understand many parents work downtown or at the medical centers and need 
                    flexible scheduling.
                  </p>
                </div>
              </div>
            </div>

            {/* Strong CTA */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Your Child's Mental Health Can't Wait
              </h2>
              <p className="text-xl mb-6 opacity-95">
                Join the many Brookside families who trust SafeHarbor for compassionate, effective mental health care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full hover:bg-cream-100 transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
                >
                  Schedule Your First Appointment
                </Link>
                <a
                  href="tel:918-553-5746"
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-teal-600 transition-all transform hover:scale-105 font-bold text-lg"
                >
                  Call Now: (918) 553-5746
                </a>
              </div>
              <p className="mt-6 text-sm opacity-90">
                Proudly serving Brookside, Crow Creek, and surrounding South Tulsa neighborhoods
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}