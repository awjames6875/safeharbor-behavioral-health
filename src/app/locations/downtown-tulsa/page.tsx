import Link from 'next/link'

export default function DowntownTulsaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Child & Teen Therapy in Downtown Tulsa | SafeHarbor Behavioral Health
          </h1>
          <p className="text-xl opacity-95 max-w-3xl">
            Convenient mental health services for families in the heart of Tulsa, just minutes from the BOK Center, 
            Blue Dome District, and Brady Arts District.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Why Downtown Families Choose Us */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Why Downtown Tulsa Families Choose SafeHarbor
              </h2>
              <p className="text-gray-600 mb-4">
                Living in Downtown Tulsa offers unique opportunities and challenges for families. The vibrant urban environment 
                of areas like the Pearl District, Owen Park, and the Tulsa Arts District provides cultural enrichment, but can 
                also present stressors that impact children's mental health. At SafeHarbor Behavioral Health, we understand the 
                specific needs of downtown families, from busy professionals working in the Williams Tower or BOK Financial 
                headquarters to families enjoying the amenities of downtown living.
              </p>
              <p className="text-gray-600 mb-4">
                We proudly serve families from all downtown neighborhoods, including residents of Tribune Lofts, 
                Metro at Brady, and the growing residential communities near Guthrie Green. We're easily accessible from major 
                employers like ONE Gas, Public Service Company of Oklahoma, and the numerous law firms and businesses along 
                Boston Avenue and Main Street.
              </p>
              <p className="text-gray-600">
                Parents appreciate our flexible scheduling that accommodates the downtown professional lifestyle, with early 
                morning and evening appointments available. We're just a short walk or drive from anywhere in downtown, making 
                it easy to fit therapy into your family's busy schedule.
              </p>
            </div>

            {/* Common Mental Health Challenges */}
            <div className="mb-12 bg-cream-100 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Common Mental Health Challenges in Downtown Tulsa
              </h2>
              <p className="text-gray-600 mb-4">
                Downtown Tulsa's urban environment presents unique mental health considerations for children and teens. The 
                fast-paced lifestyle, with parents commuting to offices in the Central Business District or working long hours 
                at companies downtown, can create stress within families. Children living in high-rise apartments or lofts may 
                experience different social dynamics than their suburban peers.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Urban Stress and Overstimulation</h3>
                  <p className="text-gray-600">
                    The constant activity of downtown life - from events at the BOK Center to festivals in the Brady District - 
                    can be overwhelming for sensitive children. We help kids develop coping strategies for urban overstimulation 
                    and find calm amidst city life.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Social Isolation in Urban Settings</h3>
                  <p className="text-gray-600">
                    Despite being surrounded by people, downtown children may struggle with forming neighborhood friendships. 
                    Unlike traditional neighborhoods with cul-de-sacs and yards, downtown living requires intentional social 
                    connection. We help children build social skills and confidence.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Academic Pressure</h3>
                  <p className="text-gray-600">
                    Many downtown families have high academic expectations, with children attending competitive schools or 
                    participating in numerous enrichment activities. We address anxiety, perfectionism, and burnout common 
                    among high-achieving downtown youth.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Limited Outdoor Play Space</h3>
                  <p className="text-gray-600">
                    While downtown offers parks like Guthrie Green and John Hope Franklin Reconciliation Park, children may 
                    have less access to unstructured outdoor play. Our Body & Brain program addresses this through movement-based 
                    therapy that helps urban kids stay active and regulated.
                  </p>
                </div>
              </div>
            </div>

            {/* Schools We Work With */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Schools We Partner With in Downtown Tulsa
              </h2>
              <p className="text-gray-600 mb-6">
                We maintain strong relationships with downtown area schools and regularly collaborate with counselors, teachers, 
                and administrators to support student success:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Public Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Emerson Elementary School (near Pearl District)</li>
                    <li>• Eugene Field Elementary (serving Brady Heights)</li>
                    <li>• Central High School</li>
                    <li>• Carver Middle School</li>
                    <li>• Tulsa School of Arts and Sciences</li>
                    <li>• KIPP Tulsa</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Private & Charter Schools</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Holland Hall (Lower School)</li>
                    <li>• Christ the King Catholic School</li>
                    <li>• Tulsa Legacy Charter School</li>
                    <li>• Collegiate Hall</li>
                    <li>• Philbrook Museum School programs</li>
                    <li>• Downtown homeschool co-ops</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Transportation and Parking */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Getting to SafeHarbor from Downtown Tulsa
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Parking Options</h3>
                  <p className="text-gray-600 mb-3">
                    We offer convenient parking options for downtown families:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Free 2-hour street parking along Boston Avenue and Cincinnati Avenue</li>
                    <li>• Dedicated client parking lot with 30 spaces (entrance on 4th Street)</li>
                    <li>• Covered parking available in adjacent garage (validated for clients)</li>
                    <li>• Handicap accessible parking directly in front of building</li>
                    <li>• Valet service available for families with mobility challenges</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">Public Transportation</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Tulsa Transit Route 100 (Downtown Circulator) stops one block away</li>
                    <li>• Routes 112, 117, and 119 all within walking distance</li>
                    <li>• Bike racks available for families using Tulsa Townies bike share</li>
                    <li>• Walking distance from most downtown residences (10-15 minutes)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-3">From Major Downtown Locations</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• From BOK Center: 5-minute drive via Denver Avenue</li>
                    <li>• From Blue Dome District: 3-minute drive or 10-minute walk</li>
                    <li>• From Brady Arts District: 7-minute walk via Boston Avenue</li>
                    <li>• From Pearl District: 8-minute drive via 6th Street</li>
                    <li>• From OSU-Tulsa campus: 10-minute drive via 244</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Easy to Find - Near Downtown Landmarks You Know
              </h2>
              <p className="text-gray-600 mb-6">
                Our team is centrally located and easy to find. We're situated in the heart of downtown, making us 
                convenient for families throughout the area:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">We're Next To:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 2 blocks from BOK Center</li>
                    <li>• Across from OneOK Field</li>
                    <li>• Next to Hyatt Regency Tulsa</li>
                    <li>• 1 block from Cox Business Convention Center</li>
                    <li>• Walking distance to Guthrie Green</li>
                    <li>• Near the Tulsa PAC</li>
                  </ul>
                </div>
                <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-3">Popular Spots Nearby:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Topeca Coffee (perfect for parent wait time)</li>
                    <li>• Tulsa City-County Library (Central Library)</li>
                    <li>• QuikTrip on Denver Avenue</li>
                    <li>• Whole Foods Market (5-minute drive)</li>
                    <li>• Mother Road Market</li>
                    <li>• Center of the Universe monument</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Success Story */}
            <div className="mb-12 bg-gradient-to-br from-cream-100 to-cream-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Success Story from Downtown Tulsa
              </h2>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-600 italic mb-4">
                  "When we moved to our loft in the Blue Dome District, our 10-year-old son struggled with the transition from 
                  suburban life. He missed his old neighborhood friends and felt overwhelmed by the city sounds and activity. 
                  SafeHarbor's Body & Brain program was perfect for him - it gave him an outlet for his energy while teaching 
                  him mindfulness techniques to handle urban overstimulation."
                </p>
                <p className="text-gray-600 italic mb-4">
                  "The therapists understood our downtown lifestyle and worked with our schedule. They even incorporated walks 
                  to Guthrie Green into therapy sessions, helping our son see the city as less threatening and more exciting. 
                  After six months, he's thriving - he's made friends at Eugene Field Elementary, joined the downtown youth 
                  soccer league, and actually loves living downtown now."
                </p>
                <p className="text-gray-600 italic">
                  "What really impressed us was how the SafeHarbor team knew our neighborhood. They recommended downtown 
                  resources we didn't know about, connected us with other downtown families, and helped us find activities 
                  that suited city living. They truly understand what it's like raising kids in downtown Tulsa."
                </p>
                <p className="text-teal-600 font-semibold mt-4">
                  - Sarah M., Mother of two, Blue Dome District resident
                </p>
              </div>
            </div>

            {/* Staff Members */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Our Downtown Tulsa Team
              </h2>
              <p className="text-gray-600 mb-6">
                Our therapists understand downtown Tulsa because many of them live and work in the area:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Michael Chen, PsyD</h3>
                  <p className="text-teal-600 text-sm mb-2">Child Psychologist</p>
                  <p className="text-gray-600 text-sm">
                    Lives in the Pearl District. Specializes in urban stress and adjustment disorders. Regular at Guthrie Green 
                    family events. 10+ years serving downtown families.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Jennifer Martinez, LCSW</h3>
                  <p className="text-teal-600 text-sm mb-2">Teen Specialist</p>
                  <p className="text-gray-600 text-sm">
                    Brady Arts District resident. Expert in teen anxiety and social media issues. Volunteers at Tulsa PAC youth 
                    programs. Bilingual (English/Spanish).
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Robert Thompson, LPC</h3>
                  <p className="text-teal-600 text-sm mb-2">Body & Brain Program Lead</p>
                  <p className="text-gray-600 text-sm">
                    Lives near Riverside Drive. Uses downtown's urban landscape for movement therapy. Partners with Tulsa Parks 
                    for outdoor sessions.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">Dr. Ashley Williams, MD</h3>
                  <p className="text-teal-600 text-sm mb-2">Child Psychiatrist</p>
                  <p className="text-gray-600 text-sm">
                    Works at OSU Medical Center, lives downtown. Specializes in ADHD and mood disorders common in urban youth. 
                    Active in downtown parent groups.
                  </p>
                </div>
              </div>
            </div>

            {/* Community Resources */}
            <div className="mb-12 bg-teal-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Downtown Tulsa Community Resources
              </h2>
              <p className="text-gray-600 mb-6">
                We connect families with these downtown-specific resources:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Family Activities</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Guthrie Green family programming (yoga, movies, concerts)</li>
                    <li>• Tulsa PAC family series</li>
                    <li>• First Friday Art Crawl kid-friendly venues</li>
                    <li>• AHHA Tulsa children's art programs</li>
                    <li>• Downtown YMCA youth programs</li>
                    <li>• Woody Guthrie Center education programs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-teal-700 mb-3">Support Services</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Downtown Tulsa Community Foundation</li>
                    <li>• Family & Children's Services (downtown office)</li>
                    <li>• Tulsa Day Center family resources</li>
                    <li>• Central Library parenting resources</li>
                    <li>• Downtown churches with youth programs</li>
                    <li>• Urban family support groups</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-navy-800 mb-6">
                Frequently Asked Questions - Downtown Tulsa Families
              </h2>
              
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Is there parking available during downtown events?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We have reserved client parking that's always available, even during major events at BOK Center or 
                    OneOK Field. We also offer validated parking in our partner garage, ensuring you never have to worry about 
                    event parking prices or availability.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you see children from downtown private schools?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely! We work with students from Holland Hall, Christ the King, and other private schools. We understand 
                    the unique pressures these students face and coordinate with school counselors when appropriate.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Can therapy sessions include outdoor activities downtown?
                  </h3>
                  <p className="text-gray-600">
                    Yes! Our Body & Brain program often utilizes downtown's green spaces like Guthrie Green, John Hope Franklin 
                    Park, and even the River Parks trail system. We believe in using Tulsa's urban environment therapeutically.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Are you accessible by public transportation?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we're on several Tulsa Transit routes including the Downtown Circulator. We're also walking distance 
                    from most downtown residences and have secure bike storage for families who cycle.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-semibold text-navy-800 mb-2">
                    Do you offer teletherapy for downtown families?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we offer teletherapy options perfect for busy downtown professionals who might need to fit a session 
                    into their lunch break or for teens who can connect from home after school.
                  </p>
                </div>
              </div>
            </div>

            {/* Strong CTA */}
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Support Your Child's Mental Health?
              </h2>
              <p className="text-xl mb-6 opacity-95">
                Join hundreds of downtown Tulsa families who trust SafeHarbor for their children's emotional well-being.
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
                Serving families from Brady Arts District, Blue Dome, Pearl District, and all downtown neighborhoods
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}