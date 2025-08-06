import Link from 'next/link'
import ServiceContactForm from '@/components/ServiceContactForm'

export default function SchoolSupportPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">School Support Services</h1>
            <p className="text-xl md:text-2xl opacity-95 mb-8">
              Comprehensive mental health support to help students succeed academically and socially
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

      {/* What is School Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">What are School Support Services?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                School Support Services at SafeHarbor Behavioral Health provide comprehensive mental health 
                support designed to help students overcome barriers to academic success. We understand that 
                emotional and behavioral challenges can significantly impact a student's ability to learn, 
                socialize, and thrive in the school environment.
              </p>
              <p className="mb-6">
                Our licensed therapists work collaboratively with students, families, and school personnel 
                to address mental health concerns that interfere with educational progress. We provide both 
                direct therapeutic services and consultation to help create supportive educational environments 
                where all students can succeed.
              </p>
              <p className="mb-6">
                Our school support approach recognizes that academic success is closely connected to emotional 
                well-being. By addressing underlying mental health concerns and developing coping strategies, 
                we help students build the resilience and skills needed for both academic achievement and 
                lifelong success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Who Benefits from School Support Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Students Experiencing:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Declining academic performance</li>
                  <li>• School avoidance or refusal</li>
                  <li>• Anxiety about school or tests</li>
                  <li>• Difficulty with social relationships</li>
                  <li>• Behavioral problems at school</li>
                  <li>• Attention and concentration issues</li>
                  <li>• Depression affecting motivation</li>
                  <li>• Trauma impacting school functioning</li>
                  <li>• Transitions between schools</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Academic Challenges:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Frequent absences or tardiness</li>
                  <li>• Difficulty completing assignments</li>
                  <li>• Test anxiety and performance fears</li>
                  <li>• Perfectionism and academic pressure</li>
                  <li>• Learning differences adjustment</li>
                  <li>• Bullying or peer conflicts</li>
                  <li>• Teacher-student relationship issues</li>
                  <li>• College or career planning anxiety</li>
                  <li>• IEP or 504 plan support needs</li>
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Our School-Focused Therapeutic Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Individual Therapy</h3>
                <p className="text-gray-700 text-sm">
                  One-on-one sessions focused on addressing specific mental health concerns that 
                  impact school performance, using evidence-based interventions.
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">School Collaboration</h3>
                <p className="text-gray-700 text-sm">
                  Direct consultation with teachers, counselors, and administrators to develop 
                  strategies that support student success in the classroom.
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Family Coordination</h3>
                <p className="text-gray-700 text-sm">
                  Working with parents and caregivers to ensure consistency between home and 
                  school support strategies and interventions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-800 mb-4">Evidence-Based Interventions</h3>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Cognitive Behavioral Therapy for school-related anxiety</li>
                  <li>• Social skills training for peer relationships</li>
                  <li>• Executive function skill development</li>
                  <li>• Mindfulness and stress reduction techniques</li>
                  <li>• Trauma-informed care when needed</li>
                </ul>
              </div>
              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-800 mb-4">Academic Support Integration</h3>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Study skills and organization strategies</li>
                  <li>• Test-taking anxiety management</li>
                  <li>• Motivation and goal-setting techniques</li>
                  <li>• Time management and planning skills</li>
                  <li>• Communication skills for school settings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">What to Expect in School Support Services</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Comprehensive Assessment</h3>
                <p className="text-gray-700">
                  We conduct a thorough evaluation of your child's academic, social, and emotional 
                  functioning, including review of school records and consultation with educational team members.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Individualized Treatment Planning</h3>
                <p className="text-gray-700">
                  Based on assessment results, we develop a customized treatment plan that addresses 
                  specific barriers to academic success and aligns with educational goals.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Regular Therapy Sessions</h3>
                <p className="text-gray-700">
                  Students attend individual or group therapy sessions focused on building skills, 
                  processing challenges, and developing strategies for school success.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Progress Monitoring and Collaboration</h3>
                <p className="text-gray-700">
                  We regularly communicate with schools and families about progress, adjust interventions 
                  as needed, and provide ongoing support throughout the academic year.
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
                    <p className="text-gray-700">45-60 minutes for individual sessions; varies for consultations</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Frequency</h3>
                    <p className="text-gray-700">Weekly during school year; flexible scheduling during breaks</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Duration</h3>
                    <p className="text-gray-700">Varies by needs; typically spans full academic year</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Scheduling</h3>
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
                    <li>• School district partnerships</li>
                    <li>• Self-pay options available</li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    Many school-related mental health services are covered by insurance. We also 
                    work with some school districts to provide on-site services when appropriate.
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Grade-Level Specific Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Elementary School (K-5)</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Separation anxiety and school adjustment</li>
                  <li>• Basic social skills development</li>
                  <li>• Behavioral challenges in classroom</li>
                  <li>• Academic anxiety and confidence</li>
                  <li>• Friendship and peer relationship skills</li>
                  <li>• Attention and focus strategies</li>
                  <li>• Communication with teachers</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Middle School (6-8)</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Transition to middle school challenges</li>
                  <li>• Social dynamics and peer pressure</li>
                  <li>• Academic organization and planning</li>
                  <li>• Emotional regulation during adolescence</li>
                  <li>• Bullying prevention and response</li>
                  <li>• Self-advocacy skill development</li>
                  <li>• Technology and social media balance</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">High School (9-12)</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• College and career planning stress</li>
                  <li>• Academic pressure and perfectionism</li>
                  <li>• Time management and study skills</li>
                  <li>• Mental health and academic balance</li>
                  <li>• Graduation requirements anxiety</li>
                  <li>• Future planning and decision-making</li>
                  <li>• Transition to adulthood preparation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Address */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">School-Related Conditions We Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Anxiety-Related Issues</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• School avoidance and refusal</li>
                  <li>• Test and performance anxiety</li>
                  <li>• Social anxiety in school settings</li>
                  <li>• Separation anxiety</li>
                  <li>• Generalized anxiety affecting focus</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Behavioral Challenges</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• ADHD symptoms in classroom</li>
                  <li>• Oppositional behaviors</li>
                  <li>• Difficulty following rules</li>
                  <li>• Aggression or disruptive behavior</li>
                  <li>• Executive function challenges</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Academic & Social Issues</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Depression affecting motivation</li>
                  <li>• Peer relationship difficulties</li>
                  <li>• Bullying and victimization</li>
                  <li>• Learning difference adjustments</li>
                  <li>• Trauma impacting school function</li>
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
                <h3 className="text-lg font-semibold text-teal-600 mb-3">How do school support services differ from regular therapy?</h3>
                <p className="text-gray-700">
                  School support services specifically focus on mental health issues that impact academic 
                  performance and school functioning. We coordinate closely with school personnel and tailor 
                  interventions to address school-specific challenges and goals.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Will you communicate with my child's school?</h3>
                <p className="text-gray-700">
                  With proper consent, we actively collaborate with teachers, school counselors, and other 
                  educational team members. This coordination helps ensure consistent support strategies 
                  between home, therapy, and school environments.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Can you help with IEP or 504 plan meetings?</h3>
                <p className="text-gray-700">
                  Yes, we can provide input for IEP or 504 plan development, attend meetings when appropriate, 
                  and help ensure that mental health needs are addressed in educational planning and accommodations.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">What if my child refuses to go to school?</h3>
                <p className="text-gray-700">
                  School refusal is a serious concern that we address through comprehensive assessment, 
                  individual therapy, family work, and school collaboration. We develop gradual re-entry 
                  plans and address underlying causes like anxiety or depression.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">How quickly can we see improvements in school performance?</h3>
                <p className="text-gray-700">
                  Timeline varies by individual and situation. Some students show improvements within weeks, 
                  while others need several months. We monitor progress regularly and adjust approaches 
                  to maximize effectiveness.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Do you provide services during summer break?</h3>
                <p className="text-gray-700">
                  Yes, we continue therapy services during breaks and often use this time for intensive 
                  skill building, trauma processing, or preparing for upcoming school year transitions 
                  without academic pressures.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Can you help with college preparation anxiety?</h3>
                <p className="text-gray-700">
                  Absolutely. We help high school students manage college application stress, develop 
                  coping strategies for transitions, build independence skills, and address anxiety 
                  about leaving home and starting college.
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
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Typical Academic Improvements:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Improved school attendance and engagement</li>
                  <li>• Better academic performance and grades</li>
                  <li>• Enhanced focus and concentration in class</li>
                  <li>• Reduced school-related anxiety and stress</li>
                  <li>• Better peer relationships and social skills</li>
                  <li>• Improved teacher-student relationships</li>
                  <li>• Enhanced executive functioning skills</li>
                  <li>• Increased motivation and goal achievement</li>
                  <li>• Better communication and self-advocacy</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Our School Support Success Metrics:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">89%</p>
                    <p className="text-sm text-gray-700">of students show improved school attendance</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">84%</p>
                    <p className="text-sm text-gray-700">demonstrate improved academic performance</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">91%</p>
                    <p className="text-sm text-gray-700">report reduced school-related anxiety</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">87%</p>
                    <p className="text-sm text-gray-700">of teachers report improved classroom behavior</p>
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
            serviceName="School Support"
            serviceTitle="School Support"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Help Your Student Thrive Academically and Emotionally</h2>
            <p className="text-xl mb-8 opacity-95">
              Don't let mental health challenges stand in the way of your child's educational success. 
              Our school support services provide the specialized care needed to overcome barriers 
              and achieve academic potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-cream-100 text-navy-800 px-8 py-4 rounded-md hover:bg-cream-200 transition-colors font-semibold text-lg"
              >
                Schedule School Support
              </Link>
              <Link
                href="tel:918-391-3606"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-navy-800 transition-colors font-semibold text-lg"
              >
                Call (918) 391-3606
              </Link>
            </div>
            <p className="text-lg mt-6 opacity-90">
              School collaboration available • Medicaid & SoonerCare accepted
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}