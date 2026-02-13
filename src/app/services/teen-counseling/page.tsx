import Link from 'next/link'
import ServiceContactForm from '@/components/ServiceContactForm'

export default function TeenCounselingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Teen Counseling</h1>
            <p className="text-xl md:text-2xl opacity-95 mb-8">
              Specialized counseling services for teenagers ages 13-18 navigating adolescence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-cream-100 text-navy-800 px-8 py-3 rounded-md hover:bg-cream-200 transition-colors font-semibold"
              >
                Schedule Today
              </Link>
              <p className="text-lg opacity-90 self-center">
                Medicaid & SoonerCare Accepted • Same-Week Appointments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Teen Counseling Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">What is Teen Counseling?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Teen counseling at SafeHarbor Behavioral Health is specifically designed for adolescents ages 13-18 
                who are navigating the complex challenges of teenage years. Our licensed therapists understand the 
                unique developmental needs of teenagers and provide a safe, non-judgmental space where teens can 
                express themselves authentically and work through their concerns.
              </p>
              <p className="mb-6">
                Adolescence brings unique challenges including identity formation, peer pressure, academic stress, 
                family dynamics, and emotional turbulence. Our teen counseling services use evidence-based approaches 
                tailored specifically for adolescent development, helping teens build resilience, develop healthy 
                coping mechanisms, and navigate this critical period with confidence.
              </p>
              <p className="mb-6">
                We respect teenagers' growing independence while recognizing the importance of family support. 
                Our approach balances individual teen sessions with family involvement to create the most effective 
                treatment environment for lasting positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Who Benefits from Teen Counseling?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Teens Experiencing:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Depression or persistent sadness</li>
                  <li>• Anxiety or panic attacks</li>
                  <li>• Academic pressure and stress</li>
                  <li>• Social anxiety or peer problems</li>
                  <li>• Identity and self-esteem issues</li>
                  <li>• Anger management difficulties</li>
                  <li>• Self-harm thoughts or behaviors</li>
                  <li>• Eating disorders or body image concerns</li>
                  <li>• Sleep problems or changes in appetite</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Life Challenges:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Bullying or cyberbullying</li>
                  <li>• Parents' divorce or separation</li>
                  <li>• Dating relationship issues</li>
                  <li>• Substance use concerns</li>
                  <li>• Trauma or abuse</li>
                  <li>• LGBTQ+ identity exploration</li>
                  <li>• College and career planning stress</li>
                  <li>• Family conflict or communication issues</li>
                  <li>• Grief and loss</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Therapeutic Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Our Teen-Focused Therapeutic Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Cognitive Behavioral Therapy</h3>
                <p className="text-gray-700 text-sm">
                  CBT helps teens identify negative thought patterns and develop healthier ways of thinking 
                  and responding to challenges. Highly effective for anxiety and depression.
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Dialectical Behavior Therapy</h3>
                <p className="text-gray-700 text-sm">
                  DBT skills help teens manage intense emotions, improve relationships, and develop 
                  distress tolerance and mindfulness capabilities.
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Solution-Focused Therapy</h3>
                <p className="text-gray-700 text-sm">
                  This approach focuses on teens' strengths and resources, helping them identify 
                  solutions and achieve their goals more quickly.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-800 mb-4">Teen-Centered Environment</h3>
                <p className="text-gray-700">
                  Our therapy spaces are designed to feel comfortable and welcoming to teenagers. 
                  We respect teen privacy while maintaining appropriate boundaries and safety protocols. 
                  Sessions are collaborative, with teens actively involved in setting their own goals.
                </p>
              </div>
              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-800 mb-4">Family Integration</h3>
                <p className="text-gray-700">
                  When appropriate and with teen consent, we include family members in the treatment 
                  process. This may include family therapy sessions, parent coaching, or communication 
                  skills training to improve family relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">What to Expect in Teen Counseling</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Initial Assessment</h3>
                <p className="text-gray-700">
                  The first session involves understanding your teen's concerns, strengths, and goals. 
                  We'll discuss confidentiality, what to expect from therapy, and begin building 
                  a trusting therapeutic relationship.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Goal Setting</h3>
                <p className="text-gray-700">
                  Your teen will work with their therapist to identify specific, achievable goals 
                  for therapy. This collaborative approach ensures teens feel ownership over their 
                  treatment and are more engaged in the process.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Skill Building Sessions</h3>
                <p className="text-gray-700">
                  Regular sessions focus on learning practical skills such as emotion regulation, 
                  communication techniques, stress management, and problem-solving strategies that 
                  teens can use in their daily lives.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Progress Monitoring</h3>
                <p className="text-gray-700">
                  We regularly check in on progress toward goals and adjust treatment approaches 
                  as needed. Parents receive updates while respecting teen confidentiality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-navy-800 mb-6">Session Duration & Frequency</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Session Length</h3>
                    <p className="text-gray-700">50-60 minutes per individual session</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Frequency</h3>
                    <p className="text-gray-700">Weekly sessions initially, with flexibility based on needs and progress</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Treatment Duration</h3>
                    <p className="text-gray-700">Typically 3-8 months, depending on goals and individual progress</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Scheduling Flexibility</h3>
                    <p className="text-gray-700">After-school and evening appointments available</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy-800 mb-6">Insurance & Coverage</h2>
                <div className="bg-teal-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-teal-600 mb-4">We Accept:</h3>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• Oklahoma Medicaid</li>
                    <li>• SoonerCare</li>
                    <li>• Most major insurance plans</li>
                    <li>• Self-pay options available</li>
                    <li>• Sliding scale fees when needed</li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    Don't let insurance concerns prevent your teen from getting help. Our team will 
                    work with you to find affordable options and maximize your benefits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age-Appropriate Considerations */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Age-Appropriate Therapeutic Considerations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Ages 13-15: Early Adolescence</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Focus on identity development and self-awareness</li>
                  <li>• Managing physical and emotional changes</li>
                  <li>• Peer relationship navigation</li>
                  <li>• Academic pressure and study skills</li>
                  <li>• Family relationship changes</li>
                  <li>• Body image and self-esteem work</li>
                  <li>• Introduction to emotion regulation skills</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Ages 16-18: Later Adolescence</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• College and career planning support</li>
                  <li>• Romantic relationship guidance</li>
                  <li>• Increased independence and responsibility</li>
                  <li>• Advanced decision-making skills</li>
                  <li>• Future planning and goal setting</li>
                  <li>• Substance use prevention and intervention</li>
                  <li>• Transition to adulthood preparation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Conditions We Treat in Teenagers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Mood Disorders</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Major depression</li>
                  <li>• Persistent depressive disorder</li>
                  <li>• Bipolar disorder</li>
                  <li>• Seasonal affective disorder</li>
                  <li>• Adjustment disorders</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Anxiety Disorders</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Generalized anxiety disorder</li>
                  <li>• Social anxiety disorder</li>
                  <li>• Panic disorder</li>
                  <li>• Specific phobias</li>
                  <li>• Obsessive-compulsive disorder</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Behavioral & Other Concerns</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• ADHD and executive function</li>
                  <li>• Eating disorders</li>
                  <li>• Self-harm behaviors</li>
                  <li>• Substance use disorders</li>
                  <li>• Trauma and PTSD</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">What if my teen doesn't want to go to therapy?</h3>
                <p className="text-gray-700">
                  Resistance to therapy is common among teenagers. Our therapists are skilled at building 
                  rapport and helping teens see therapy as a place for their own goals, not just parental 
                  concerns. We focus on what matters to your teen and respect their autonomy within appropriate limits.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Will you tell me everything my teen says in therapy?</h3>
                <p className="text-gray-700">
                  Teenagers have confidentiality rights, but we balance this with parental involvement. 
                  We'll share general progress and any safety concerns, but respect your teen's privacy 
                  about specific session content unless there's a safety risk.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">How can I support my teen through therapy?</h3>
                <p className="text-gray-700">
                  Show interest without being intrusive, validate their decision to seek help, and be 
                  patient with the process. We'll provide guidance on how to best support your teen 
                  at home and may recommend family sessions when beneficial.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">What about confidentiality and safety concerns?</h3>
                <p className="text-gray-700">
                  We maintain strict confidentiality while prioritizing safety. If your teen expresses 
                  thoughts of self-harm, harm to others, or reports abuse, we will involve parents and 
                  appropriate authorities as required by law and professional ethics.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Can my teen's therapist communicate with their school?</h3>
                <p className="text-gray-700">
                  With appropriate written consent from both teen and parent, we can collaborate with 
                  school counselors and teachers to support your teen's academic success and social 
                  well-being. This coordination often enhances treatment outcomes.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">How long does teen therapy typically take?</h3>
                <p className="text-gray-700">
                  Treatment length varies based on individual needs and goals. Some teens benefit from 
                  short-term therapy (3-4 months), while others need longer-term support. We regularly 
                  assess progress and adjust treatment plans accordingly.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Do you offer crisis support for teens?</h3>
                <p className="text-gray-700">
                  Yes, we provide crisis intervention services and can help connect teens and families 
                  to immediate resources when needed. We also teach crisis coping skills and develop 
                  safety plans for teens at risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Outcomes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Success Outcomes & What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Typical Improvements Include:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Reduced symptoms of depression and anxiety</li>
                  <li>• Improved emotional regulation and coping skills</li>
                  <li>• Better communication with family and friends</li>
                  <li>• Enhanced self-esteem and confidence</li>
                  <li>• Improved academic performance and school attendance</li>
                  <li>• Healthier decision-making abilities</li>
                  <li>• Stronger problem-solving skills</li>
                  <li>• Better stress management capabilities</li>
                  <li>• Improved sleep and daily functioning</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Our Success Metrics:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">82%</p>
                    <p className="text-sm text-gray-700">of teens show significant reduction in depression symptoms</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">88%</p>
                    <p className="text-sm text-gray-700">of teens report improved family relationships</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">91%</p>
                    <p className="text-sm text-gray-700">of teens complete their treatment plan successfully</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">75%</p>
                    <p className="text-sm text-gray-700">maintain improvements 12 months post-treatment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <ServiceContactForm 
            serviceName="Teen Counseling"
            serviceTitle="Teen Counseling"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Help Your Teen Navigate Life with Confidence</h2>
            <p className="text-xl mb-8 opacity-95">
              The teenage years don't have to be a struggle. Our experienced teen counselors provide 
              the support, skills, and guidance your teenager needs to thrive during this important 
              time of growth and development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-cream-100 text-navy-800 px-8 py-4 rounded-md hover:bg-cream-200 transition-colors font-semibold text-lg"
              >
                Schedule Teen Counseling
              </Link>
              <Link
                href="tel:918-553-5746"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-navy-800 transition-colors font-semibold text-lg"
              >
                Call (918) 553-5746
              </Link>
            </div>
            <p className="text-lg mt-6 opacity-90">
              Evening appointments available • Medicaid & SoonerCare accepted
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}