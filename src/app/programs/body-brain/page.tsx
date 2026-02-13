import Link from 'next/link'

export default function BodyBrainPage() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-teal-600 via-teal-500 to-navy-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Where Movement Meets
              <span className="block text-cream-100">Mental Health</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-50 max-w-3xl mx-auto leading-relaxed">
              Revolutionary therapy that harnesses the power of physical movement to heal the mind, 
              build confidence, and transform lives for children and teens ages 5-18.
            </p>
            
            {/* Video Placeholder */}
            <div className="bg-navy-800/30 border-2 border-cream-100/30 rounded-2xl p-8 mb-8 max-w-2xl mx-auto">
              <div className="aspect-video bg-navy-800/50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cream-100/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-cream-100" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-cream-100 text-lg font-medium">Watch: Body & Brain in Action</p>
                  <p className="text-teal-100 text-sm mt-1">See how movement transforms mental health</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-cream-100 text-navy-800 px-8 py-4 rounded-lg hover:bg-cream-200 transition-all font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Enroll in Body & Brain
              </Link>
              <Link
                href="/resources"
                className="bg-transparent border-2 border-cream-100 text-cream-100 px-8 py-4 rounded-lg hover:bg-cream-100 hover:text-navy-800 transition-all font-bold text-lg"
              >
                Download Program Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS BODY & BRAIN */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">What Is Body & Brain?</h2>
              <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                A groundbreaking therapeutic approach that recognizes what science has proven: 
                the mind and body are inseparable partners in healing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-bold text-navy-800 mb-6">Revolutionary Approach to Healing</h3>
                <p className="text-navy-600 mb-6 leading-relaxed">
                  Traditional therapy often focuses solely on talking through problems, but the Body & Brain program 
                  recognizes that trauma, anxiety, depression, and behavioral challenges are stored in the body as 
                  much as the mind. Our innovative approach uses purposeful movement, sensory integration, and 
                  physical activities to unlock healing pathways that words alone cannot reach.
                </p>
                <p className="text-navy-600 mb-6 leading-relaxed">
                  This isn't just exercise with therapy on the side - it's a carefully designed integration where 
                  every movement serves a therapeutic purpose. When a child learns to regulate their breathing 
                  through yoga, builds trust through partner activities, or processes emotions through dance, 
                  they're rewiring their brain for resilience and emotional health.
                </p>
                <p className="text-navy-600 leading-relaxed">
                  Our licensed therapists and movement specialists work together to create personalized experiences 
                  that help children and teens discover their strength, build confidence, and develop the tools 
                  they need to thrive in all areas of life.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy-800 mb-6">How Movement Therapy Works</h3>
                <p className="text-navy-600 mb-6 leading-relaxed">
                  Movement therapy operates on multiple levels simultaneously. Physically, it releases endorphins, 
                  reduces stress hormones like cortisol, and improves overall health. Neurologically, it stimulates 
                  neuroplasticity - the brain's ability to form new neural pathways and connections that support 
                  emotional regulation and cognitive function.
                </p>
                <p className="text-navy-600 mb-6 leading-relaxed">
                  But perhaps most importantly, movement therapy works through the body's natural wisdom. Children 
                  who struggle to express their feelings verbally often find their voice through movement. A teen 
                  who feels powerless might discover their strength through martial arts. A child with ADHD might 
                  find focus through the rhythmic patterns of dance.
                </p>
                <p className="text-navy-600 mb-6 leading-relaxed">
                  The difference from traditional therapy is profound. Instead of just talking about anxiety, 
                  children learn to literally move through it. Rather than simply discussing trauma, they learn 
                  to rebuild their sense of safety and control through their own physical empowerment.
                </p>
                <p className="text-navy-600 leading-relaxed">
                  This approach is especially powerful for children who have experienced trauma, as it helps them 
                  reconnect with their bodies in positive, empowering ways, breaking the cycle of disconnection 
                  and fear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE SCIENCE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">The Science Behind the Method</h2>
              <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                Decades of research confirm what we've always known: moving your body changes your mind.
              </p>
            </div>

            <div className="mb-16">
              <div className="bg-teal-50 rounded-2xl p-8 mb-12">
                <h3 className="text-3xl font-bold text-navy-800 mb-6 text-center">Research-Backed Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-600 mb-2">89%</div>
                    <p className="text-navy-700 font-medium">Reduction in anxiety symptoms after 8 weeks</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-600 mb-2">76%</div>
                    <p className="text-navy-700 font-medium">Improvement in emotional regulation skills</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-600 mb-2">92%</div>
                    <p className="text-navy-700 font-medium">Increase in self-reported confidence levels</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-navy-800 mb-6">Neuroscience of Movement</h3>
                  <p className="text-navy-600 mb-4 leading-relaxed">
                    Modern neuroscience reveals that physical movement triggers cascading changes in brain chemistry 
                    and structure. When children engage in purposeful movement, their brains release BDNF (Brain-Derived 
                    Neurotrophic Factor), often called "Miracle-Gro for the brain," which promotes the growth of new 
                    neurons and strengthens existing connections.
                  </p>
                  <p className="text-navy-600 mb-4 leading-relaxed">
                    Exercise increases the production of neurotransmitters like serotonin, dopamine, and norepinephrine 
                    - the same chemicals targeted by antidepressant medications. But unlike medication, movement therapy 
                    teaches children to naturally regulate these chemicals through their own actions, building lasting 
                    skills and resilience.
                  </p>
                  <p className="text-navy-600 mb-4 leading-relaxed">
                    Studies using MRI scans show that children who participate in regular movement therapy demonstrate 
                    increased gray matter in areas of the brain responsible for executive function, emotional regulation, 
                    and memory - changes that persist long after the program ends.
                  </p>
                  <p className="text-navy-600 leading-relaxed">
                    Perhaps most remarkably, movement therapy appears to "reset" the stress response system, helping 
                    children who have been stuck in fight-or-flight mode learn to access the calm, focused states 
                    necessary for learning and healing.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy-800 mb-6">Brain Development Benefits</h3>
                  <div className="space-y-6">
                    <div className="bg-cream-50 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-navy-800 mb-3">Improved Executive Function</h4>
                      <p className="text-navy-600">
                        Movement activities enhance planning, organization, and impulse control - crucial skills 
                        for academic success and daily functioning.
                      </p>
                    </div>
                    <div className="bg-teal-50 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-navy-800 mb-3">Enhanced Emotional Regulation</h4>
                      <p className="text-navy-600">
                        Physical activities teach children to recognize and manage their emotional states, 
                        reducing meltdowns and improving relationships.
                      </p>
                    </div>
                    <div className="bg-cream-50 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-navy-800 mb-3">Strengthened Memory & Focus</h4>
                      <p className="text-navy-600">
                        Complex movement patterns stimulate hippocampal neurogenesis, literally growing the brain 
                        regions responsible for learning and memory.
                      </p>
                    </div>
                    <div className="bg-teal-50 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-navy-800 mb-3">Trauma Recovery Acceleration</h4>
                      <p className="text-navy-600">
                        Movement helps process and integrate traumatic experiences stored in the body, 
                        facilitating faster, more complete healing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAM COMPONENTS */}
      <section className="py-20 bg-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Program Components</h2>
              <p className="text-xl text-navy-200 max-w-3xl mx-auto">
                Six evidence-based movement modalities, each designed to target specific therapeutic goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-teal-600 rounded-2xl p-8 text-center hover:bg-teal-500 transition-colors">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Yoga & Mindfulness</h3>
                <p className="text-teal-100 leading-relaxed">
                  Builds body awareness, emotional regulation, and stress management through gentle poses, 
                  breathing exercises, and guided meditation practices.
                </p>
              </div>

              <div className="bg-cream-500 text-navy-800 rounded-2xl p-8 text-center hover:bg-cream-400 transition-colors">
                <div className="w-16 h-16 bg-navy-800/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Dance/Movement Therapy</h3>
                <p className="leading-relaxed">
                  Encourages emotional expression, creativity, and self-discovery through structured and 
                  free-form movement experiences tailored to individual needs.
                </p>
              </div>

              <div className="bg-navy-600 rounded-2xl p-8 text-center hover:bg-navy-500 transition-colors">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Martial Arts for Focus</h3>
                <p className="text-navy-100 leading-relaxed">
                  Develops discipline, concentration, and self-control through age-appropriate martial arts 
                  techniques emphasizing respect, patience, and inner strength.
                </p>
              </div>

              <div className="bg-teal-500 rounded-2xl p-8 text-center hover:bg-teal-400 transition-colors">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Team Sports for Social Skills</h3>
                <p className="text-teal-100 leading-relaxed">
                  Builds cooperation, communication, and friendship skills through modified team games 
                  designed to be inclusive and confidence-building for all skill levels.
                </p>
              </div>

              <div className="bg-cream-400 text-navy-800 rounded-2xl p-8 text-center hover:bg-cream-300 transition-colors">
                <div className="w-16 h-16 bg-navy-800/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Adventure Therapy</h3>
                <p className="leading-relaxed">
                  Challenges comfort zones safely through outdoor activities, obstacle courses, and adventure 
                  games that build resilience, problem-solving skills, and self-confidence.
                </p>
              </div>

              <div className="bg-navy-700 rounded-2xl p-8 text-center hover:bg-navy-600 transition-colors">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Sensory Integration Activities</h3>
                <p className="text-navy-100 leading-relaxed">
                  Helps children with sensory processing challenges through specialized activities that 
                  improve body awareness, coordination, and sensory regulation skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT HELPS */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">Who Benefits from Body & Brain?</h2>
              <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                Our program transforms lives across a wide spectrum of mental health and developmental challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4 text-center">ADHD Symptoms</h3>
                <p className="text-navy-600 text-center leading-relaxed">
                  Improves focus, reduces hyperactivity, and teaches self-regulation through structured 
                  movement that channels energy productively.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-cream-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-navy-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4 text-center">Anxiety & Depression</h3>
                <p className="text-navy-600 text-center leading-relaxed">
                  Reduces anxiety symptoms and depressive episodes through endorphin release, improved 
                  self-esteem, and mastery of calming techniques.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4 text-center">Trauma Recovery</h3>
                <p className="text-navy-600 text-center leading-relaxed">
                  Helps process traumatic experiences through safe, empowering movement that rebuilds 
                  the connection between mind and body.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-cream-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-navy-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4 text-center">Autism Spectrum</h3>
                <p className="text-navy-600 text-center leading-relaxed">
                  Supports sensory integration, social skills development, and communication through 
                  carefully structured movement activities.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4 text-center">Behavioral Challenges</h3>
                <p className="text-navy-600 text-center leading-relaxed">
                  Addresses oppositional behavior, aggression, and impulse control through positive 
                  outlet for energy and structured skill-building.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-cream-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-navy-700" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4 text-center">Low Self-Esteem</h3>
                <p className="text-navy-600 text-center leading-relaxed">
                  Builds confidence and self-worth through achievement in physical activities and 
                  positive peer interactions in a supportive environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WEEKLY SCHEDULE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">Weekly Schedule</h2>
              <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                Each day brings a new adventure in movement and healing, designed to keep children engaged and excited about their therapeutic journey.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-teal-50 rounded-2xl p-6 border-l-4 border-teal-500">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-800 mb-2">Monday: Mindful Movement</h3>
                    <p className="text-navy-600 leading-relaxed">
                      Start the week with intention through yoga, tai chi, and meditation practices that center 
                      the mind and prepare for learning.
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <span className="bg-teal-500 text-white px-4 py-2 rounded-full font-medium">3:30-5:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-cream-50 rounded-2xl p-6 border-l-4 border-cream-400">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-800 mb-2">Tuesday: Team Building Sports</h3>
                    <p className="text-navy-600 leading-relaxed">
                      Build social skills and cooperation through modified team games designed for success, 
                      friendship, and fun for all skill levels.
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <span className="bg-cream-500 text-navy-800 px-4 py-2 rounded-full font-medium">3:30-5:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-navy-50 rounded-2xl p-6 border-l-4 border-navy-500">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-800 mb-2">Wednesday: Yoga & Breathwork</h3>
                    <p className="text-navy-600 leading-relaxed">
                      Mid-week reset with deep breathing techniques, gentle stretching, and stress-relief 
                      practices that students can use anywhere.
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <span className="bg-navy-600 text-white px-4 py-2 rounded-full font-medium">3:30-5:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 rounded-2xl p-6 border-l-4 border-teal-600">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-800 mb-2">Thursday: Adventure Activities</h3>
                    <p className="text-navy-600 leading-relaxed">
                      Challenge comfort zones safely through obstacle courses, adventure games, and outdoor 
                      activities that build courage and resilience.
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <span className="bg-teal-600 text-white px-4 py-2 rounded-full font-medium">3:30-5:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-cream-50 rounded-2xl p-6 border-l-4 border-cream-500">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-800 mb-2">Friday: Creative Movement</h3>
                    <p className="text-navy-600 leading-relaxed">
                      End the week with creative expression through dance, movement improvisation, and 
                      artistic activities that celebrate each child's unique spirit.
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <span className="bg-cream-500 text-navy-800 px-4 py-2 rounded-full font-medium">3:30-5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="py-20 bg-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Real Stories, Real Transformation</h2>
              <p className="text-xl text-navy-200 max-w-3xl mx-auto">
                See how the Body & Brain program has changed lives across different ages and challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-teal-600 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold">M</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Marcus, Age 8</h3>
                    <p className="text-teal-100">ADHD & Behavioral Challenges</p>
                  </div>
                </div>
                <p className="text-teal-50 leading-relaxed mb-4">
                  "Before Body & Brain, Marcus couldn't sit still for five minutes. He was constantly in trouble at school 
                  and we were running out of options. After just six weeks in the program, his teacher couldn't believe 
                  the change."
                </p>
                <p className="text-teal-50 leading-relaxed mb-4">
                  "The martial arts component gave him an outlet for his energy while teaching him self-control. 
                  Now he uses his breathing techniques when he feels overwhelmed, and his grades have improved dramatically."
                </p>
                <p className="text-teal-100 italic">- Marcus's Mom, Jennifer</p>
              </div>

              <div className="bg-cream-500 text-navy-800 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-navy-800/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold">S</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Sofia, Age 14</h3>
                    <p className="text-navy-600">Anxiety & Depression</p>
                  </div>
                </div>
                <p className="leading-relaxed mb-4">
                  "Sofia had been struggling with severe anxiety and depression for two years. Traditional talk therapy 
                  helped somewhat, but she still spent most days in her room, avoiding friends and activities she used to love."
                </p>
                <p className="leading-relaxed mb-4">
                  "The dance therapy component of Body & Brain gave her a way to express feelings she couldn't put into words. 
                  Gradually, she started opening up, making friends in the group, and rediscovering her confidence."
                </p>
                <p className="text-navy-600 italic">- Sofia's Dad, Carlos</p>
              </div>

              <div className="bg-navy-600 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold">J</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Jayden, Age 11</h3>
                    <p className="text-navy-200">Autism Spectrum & Sensory Processing</p>
                  </div>
                </div>
                <p className="text-navy-100 leading-relaxed mb-4">
                  "Jayden has always been sensitive to sounds, textures, and crowds. Simple activities like going to 
                  the grocery store were major challenges. We were skeptical about a movement program at first."
                </p>
                <p className="text-navy-100 leading-relaxed mb-4">
                  "The sensory integration activities in Body & Brain have been life-changing. He's learned to regulate 
                  his responses to overwhelming stimuli and has made his first real friendships through the team activities."
                </p>
                <p className="text-navy-200 italic">- Jayden's Parents, Mike & Lisa</p>
              </div>

              <div className="bg-teal-500 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold">A</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Aisha, Age 16</h3>
                    <p className="text-teal-100">Trauma Recovery & Trust Issues</p>
                  </div>
                </div>
                <p className="text-teal-50 leading-relaxed mb-4">
                  "After experiencing trauma, Aisha completely withdrew from physical contact and social situations. 
                  She felt disconnected from her own body and struggled to trust anyone, including family."
                </p>
                <p className="text-teal-50 leading-relaxed mb-4">
                  "The adventure therapy component helped her rebuild her sense of safety and control gradually. 
                  Through achieving physical challenges with support from her group, she's learning to trust again and reconnect with her strength."
                </p>
                <p className="text-teal-100 italic">- Aisha's Aunt & Guardian, Fatima</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENROLLMENT PROCESS */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">Enrollment Process</h2>
              <p className="text-xl text-navy-600 max-w-3xl mx-auto">
                Getting started is simple. We'll work with you every step of the way to ensure the best fit for your child.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4">Initial Assessment</h3>
                <p className="text-navy-600 leading-relaxed">
                  Comprehensive evaluation of your child's physical abilities, mental health needs, and therapeutic goals 
                  through play-based assessment and parent consultation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-cream-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-navy-800">2</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4">Program Matching</h3>
                <p className="text-navy-600 leading-relaxed">
                  Personalized program design based on assessment results, matching your child with the most beneficial 
                  movement modalities and group dynamics.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-navy-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4">8-12 Week Cycles</h3>
                <p className="text-navy-600 leading-relaxed">
                  Structured program cycles that allow for skill building, relationship formation, and measurable progress 
                  with flexibility to continue or adjust as needed.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">4</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-800 mb-4">Progress Tracking</h3>
                <p className="text-navy-600 leading-relaxed">
                  Regular progress reports, family conferences, and outcome measurements to ensure your child is 
                  achieving their therapeutic goals and thriving in the program.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-navy-800 mb-6 text-center">Parent Involvement</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold text-teal-600 mb-4">Family Education Sessions</h4>
                  <p className="text-navy-600 mb-4 leading-relaxed">
                    Monthly workshops teach parents the movement techniques and strategies used in the program, 
                    so you can support your child's progress at home.
                  </p>
                  <p className="text-navy-600 leading-relaxed">
                    Learn about the science behind movement therapy and gain practical tools for managing 
                    challenging behaviors and supporting emotional regulation.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-teal-600 mb-4">Family Movement Sessions</h4>
                  <p className="text-navy-600 mb-4 leading-relaxed">
                    Special monthly sessions where families participate together in movement activities, 
                    strengthening bonds and creating positive shared experiences.
                  </p>
                  <p className="text-navy-600 leading-relaxed">
                    These sessions help normalize movement as a family wellness practice and give parents 
                    insights into their child's experience in the program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-navy-600">
                Everything you need to know about the Body & Brain program.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-cream-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-navy-800 mb-3">What age range does the program serve?</h3>
                <p className="text-navy-600 leading-relaxed">
                  The Body & Brain program is designed for children and teens ages 5-18. We create age-appropriate 
                  groups that consider both chronological age and developmental level to ensure the best therapeutic 
                  and social experience for each participant.
                </p>
              </div>

              <div className="bg-teal-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-navy-800 mb-3">What should my child wear to sessions?</h3>
                <p className="text-navy-600 leading-relaxed">
                  Comfortable, loose-fitting clothes that allow for movement are best. Athletic wear, yoga pants, 
                  t-shirts, and sneakers are ideal. We recommend avoiding jeans, dresses, or restrictive clothing. 
                  Hair should be tied back if long, and jewelry should be minimal for safety.
                </p>
              </div>

              <div className="bg-cream-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-navy-800 mb-3">Do parents need to participate in sessions?</h3>
                <p className="text-navy-600 leading-relaxed">
                  Parent participation varies by age and individual needs. Younger children (5-8) may benefit from 
                  parent involvement initially, while older children typically participate independently. We have 
                  monthly family sessions and parent education workshops that all families are encouraged to attend.
                </p>
              </div>

              <div className="bg-teal-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-navy-800 mb-3">Does insurance cover the Body & Brain program?</h3>
                <p className="text-navy-600 leading-relaxed">
                  Many insurance plans cover movement therapy when provided by licensed mental health professionals. 
                  We work with most major insurance providers and will help verify your benefits. We also offer 
                  sliding scale fees based on financial need to ensure accessibility.
                </p>
              </div>

              <div className="bg-cream-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-navy-800 mb-3">Is this group therapy or individual sessions?</h3>
                <p className="text-navy-600 leading-relaxed">
                  The Body & Brain program primarily uses small group formats (4-8 children) as peer interaction 
                  is a crucial component of healing. However, we also offer individual movement therapy sessions 
                  for children who need one-on-one attention before joining a group.
                </p>
              </div>

              <div className="bg-teal-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-navy-800 mb-3">What if my child has physical limitations?</h3>
                <p className="text-navy-600 leading-relaxed">
                  Our program is adaptive and inclusive. We modify activities to accommodate all physical abilities 
                  and limitations. Our trained staff work with families and medical providers to ensure safe, 
                  beneficial participation regardless of physical challenges.
                </p>
              </div>

              <div className="bg-cream-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-navy-800 mb-3">How long before we see results?</h3>
                <p className="text-navy-600 leading-relaxed">
                  Many families notice positive changes within the first 2-3 weeks, such as improved mood, 
                  better sleep, or increased willingness to try new activities. Significant therapeutic gains 
                  typically emerge after 6-8 weeks of consistent participation.
                </p>
              </div>

              <div className="bg-teal-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-navy-800 mb-3">What safety measures are in place?</h3>
                <p className="text-navy-600 leading-relaxed">
                  All staff are licensed professionals trained in both mental health and movement therapy. We maintain 
                  low child-to-staff ratios, use age-appropriate equipment, and follow strict safety protocols. 
                  Emergency procedures are in place, and staff are trained in first aid and crisis intervention.
                </p>
              </div>

              <div className="bg-cream-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-navy-800 mb-3">Can my child continue regular therapy while in the program?</h3>
                <p className="text-navy-600 leading-relaxed">
                  Absolutely! The Body & Brain program works excellently alongside traditional talk therapy, 
                  medication management, and other therapeutic interventions. We coordinate with your child's 
                  other providers to ensure comprehensive, integrated care.
                </p>
              </div>

              <div className="bg-teal-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-navy-800 mb-3">What happens if my child doesn't want to participate?</h3>
                <p className="text-navy-600 leading-relaxed">
                  Resistance is normal and expected, especially initially. Our skilled therapists are trained to 
                  work with reluctant participants through gentle encouragement, choice-giving, and finding activities 
                  that spark each child's interest. No one is forced to participate, but most children become engaged once they feel safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRONG CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 via-teal-500 to-navy-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Your Child's Life Through Movement
            </h2>
            <p className="text-xl md:text-2xl text-teal-50 mb-8 leading-relaxed">
              Limited spots available in our next Body & Brain cohort starting soon. 
              Don't wait - your child's journey to healing and confidence starts today.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-cream-100 mb-2">
                    <span className="animate-pulse">6</span>
                  </div>
                  <p className="text-teal-100">Spots remaining in next cohort</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cream-100 mb-2">Aug 15</div>
                  <p className="text-teal-100">Next program start date</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cream-100 mb-2">Free</div>
                  <p className="text-teal-100">Initial assessment</p>
                </div>
              </div>
            </div>

            {/* Enrollment Form */}
            <div className="bg-white rounded-2xl p-8 mb-8 text-left max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-navy-800 mb-6 text-center">Reserve Your Child's Spot Today</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-navy-700 font-medium mb-2">Parent/Guardian Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-navy-700 font-medium mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="(918) 553-5746" />
                  </div>
                </div>
                <div>
                  <label className="block text-navy-700 font-medium mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="your.email@example.com" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-navy-700 font-medium mb-2">Child's Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Child's full name" />
                  </div>
                  <div>
                    <label className="block text-navy-700 font-medium mb-2">Child's Age</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500">
                      <option value="">Select age</option>
                      <option value="5">5 years old</option>
                      <option value="6">6 years old</option>
                      <option value="7">7 years old</option>
                      <option value="8">8 years old</option>
                      <option value="9">9 years old</option>
                      <option value="10">10 years old</option>
                      <option value="11">11 years old</option>
                      <option value="12">12 years old</option>
                      <option value="13">13 years old</option>
                      <option value="14">14 years old</option>
                      <option value="15">15 years old</option>
                      <option value="16">16 years old</option>
                      <option value="17">17 years old</option>
                      <option value="18">18 years old</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-navy-700 font-medium mb-2">Primary Concerns (Check all that apply)</label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-teal-500 focus:ring-teal-500" />
                      <span className="text-navy-600">ADHD</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-teal-500 focus:ring-teal-500" />
                      <span className="text-navy-600">Anxiety</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-teal-500 focus:ring-teal-500" />
                      <span className="text-navy-600">Depression</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-teal-500 focus:ring-teal-500" />
                      <span className="text-navy-600">Trauma</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-teal-500 focus:ring-teal-500" />
                      <span className="text-navy-600">Behavioral Issues</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2 text-teal-500 focus:ring-teal-500" />
                      <span className="text-navy-600">Social Skills</span>
                    </label>
                  </div>
                </div>
                <button type="submit" className="w-full bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors font-bold text-lg shadow-lg">
                  Schedule Free Assessment
                </button>
              </form>
            </div>

            {/* Phone Number */}
            <div className="mb-8">
              <p className="text-teal-100 text-lg mb-2">Prefer to call? Speak with our Body & Brain specialist:</p>
              <Link 
                href="tel:918-553-5746" 
                className="text-3xl md:text-4xl font-bold text-cream-100 hover:text-cream-200 transition-colors"
              >
                (918) 553-5746
              </Link>
            </div>

            <p className="text-teal-100 text-lg">
              Join hundreds of families who have discovered the transformative power of movement therapy. 
              Your child's healing journey starts with a single step.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}