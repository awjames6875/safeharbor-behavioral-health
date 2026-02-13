import Link from 'next/link'
import ServiceContactForm from '@/components/ServiceContactForm'

export default function BehavioralAssessmentsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Behavioral Assessments</h1>
            <p className="text-xl md:text-2xl opacity-95 mb-8">
              Thorough evaluations to understand your child's behavioral patterns and mental health needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-cream-100 text-navy-800 px-8 py-3 rounded-md hover:bg-cream-200 transition-colors font-semibold"
              >
                Schedule Assessment
              </Link>
              <p className="text-lg opacity-90 self-center">
                Medicaid & SoonerCare Accepted • Same-Week Appointments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Behavioral Assessment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">What is a Comprehensive Behavioral Assessment?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                A comprehensive behavioral assessment is a thorough evaluation process designed to understand your child's 
                behavioral patterns, emotional functioning, and mental health needs. At SafeHarbor Behavioral Health, our 
                licensed clinicians use evidence-based assessment tools and clinical interviews to create a complete picture 
                of your child's strengths, challenges, and therapeutic needs.
              </p>
              <p className="mb-6">
                This multi-faceted evaluation goes beyond surface symptoms to identify underlying factors that may be 
                contributing to behavioral concerns. We examine developmental history, family dynamics, school performance, 
                social relationships, and any trauma or stressful life events that may be impacting your child's well-being.
              </p>
              <p className="mb-6">
                Our assessments provide families and treatment teams with crucial information needed to develop effective, 
                individualized treatment plans. The detailed findings help determine the most appropriate therapeutic 
                interventions, identify strengths to build upon, and create realistic goals for positive behavioral change.
              </p>
              <p className="mb-6">
                We understand that seeking an assessment can feel overwhelming for families. Our compassionate team creates 
                a comfortable, supportive environment where children and parents feel heard and understood throughout the 
                entire evaluation process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Who Benefits from Behavioral Assessments?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Children & Teens Experiencing:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Persistent behavioral problems at home or school</li>
                  <li>• Emotional outbursts or difficulty regulating emotions</li>
                  <li>• Academic struggles or declining school performance</li>
                  <li>• Social difficulties with peers or family members</li>
                  <li>• Attention and concentration problems</li>
                  <li>• Anxiety, depression, or mood changes</li>
                  <li>• Sleep disturbances or changes in appetite</li>
                  <li>• Developmental concerns or delays</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Assessment Needs Include:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Diagnostic clarification for mental health conditions</li>
                  <li>• Pre-treatment evaluation to guide therapy planning</li>
                  <li>• School accommodation recommendations</li>
                  <li>• Court-ordered or legal system evaluations</li>
                  <li>• Second opinions on previous diagnoses</li>
                  <li>• Medication evaluation preparation</li>
                  <li>• Foster care or adoption assessments</li>
                  <li>• Progress monitoring during treatment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Assessment Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Our Comprehensive Assessment Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Clinical Interviews</h3>
                <p className="text-gray-700 text-sm">
                  In-depth interviews with parents, caregivers, and age-appropriate children to gather comprehensive 
                  developmental and behavioral history.
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Standardized Testing</h3>
                <p className="text-gray-700 text-sm">
                  Evidence-based assessment tools including BASC-3, Conners scales, CBCL, and other validated 
                  instruments appropriate for your child's age and concerns.
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Behavioral Observations</h3>
                <p className="text-gray-700 text-sm">
                  Direct observation of your child's behavior, social interactions, and emotional responses in 
                  different settings and situations.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-800 mb-4">Multi-Source Information</h3>
                <p className="text-gray-700 mb-3">
                  We gather information from multiple sources to ensure accuracy and completeness:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Parent and caregiver reports</li>
                  <li>• Teacher and school input (with permission)</li>
                  <li>• Medical records review</li>
                  <li>• Previous therapy or evaluation reports</li>
                  <li>• Self-report from age-appropriate children</li>
                </ul>
              </div>
              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-800 mb-4">Culturally Sensitive Assessment</h3>
                <p className="text-gray-700 mb-3">
                  Our assessments consider cultural, linguistic, and socioeconomic factors that may influence 
                  your child's behavior and development:
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Cultural background and values</li>
                  <li>• Language preferences and abilities</li>
                  <li>• Family structure and dynamics</li>
                  <li>• Community and environmental factors</li>
                  <li>• Trauma-informed assessment practices</li>
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">What to Expect During the Assessment Process</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Initial Consultation (60-90 minutes)</h3>
                <p className="text-gray-700">
                  Parents meet with our clinician to discuss concerns, review developmental history, and explain 
                  the assessment process. We'll answer questions and help you feel prepared for the evaluation.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Child Assessment Sessions (2-3 sessions)</h3>
                <p className="text-gray-700">
                  Your child will participate in age-appropriate activities, interviews, and standardized assessments. 
                  Sessions are designed to be engaging and comfortable, with breaks as needed.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Information Gathering</h3>
                <p className="text-gray-700">
                  We collect questionnaires from parents, teachers, and other relevant sources. Medical records 
                  and previous evaluations are reviewed when available.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Results Meeting (60 minutes)</h3>
                <p className="text-gray-700">
                  Parents receive a comprehensive written report and meet with the clinician to review findings, 
                  discuss recommendations, and develop next steps for treatment or support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-navy-800 mb-6">Assessment Duration & Process</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Total Time Frame</h3>
                    <p className="text-gray-700">2-3 weeks from start to completion, including report preparation</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Assessment Sessions</h3>
                    <p className="text-gray-700">3-4 sessions total, each lasting 60-120 minutes depending on age</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Report Delivery</h3>
                    <p className="text-gray-700">Comprehensive written report provided within 1 week of final session</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Follow-up Support</h3>
                    <p className="text-gray-700">Additional consultation available to discuss implementation of recommendations</p>
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
                  </ul>
                  <p className="text-sm text-gray-600">
                    Behavioral assessments are typically covered by insurance when medically necessary. 
                    Our insurance specialists will verify your benefits and help maximize your coverage before scheduling.
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Age-Appropriate Assessment Considerations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Ages 3-6: Early Childhood</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Play-based assessment activities</li>
                  <li>• Parent-child interaction observations</li>
                  <li>• Developmental milestone screening</li>
                  <li>• Shorter session lengths with breaks</li>
                  <li>• Focus on attachment and regulation</li>
                  <li>• Caregiver-focused interventions</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Ages 7-12: School Age</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Academic performance evaluation</li>
                  <li>• Social skills and peer relationship assessment</li>
                  <li>• Attention and learning assessments</li>
                  <li>• Family dynamics evaluation</li>
                  <li>• School-based behavioral reports</li>
                  <li>• Self-report measures when appropriate</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Ages 13-18: Adolescents</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Identity and autonomy development</li>
                  <li>• Risk-taking behavior assessment</li>
                  <li>• Mental health symptom evaluation</li>
                  <li>• Substance use screening</li>
                  <li>• Future planning and goals assessment</li>
                  <li>• Confidentiality and privacy considerations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Assess */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Conditions and Concerns We Assess</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Behavioral Disorders</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• ADHD and attention difficulties</li>
                  <li>• Oppositional Defiant Disorder</li>
                  <li>• Conduct problems</li>
                  <li>• Impulse control disorders</li>
                  <li>• Disruptive behavior patterns</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Emotional Disorders</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Anxiety disorders</li>
                  <li>• Depression and mood disorders</li>
                  <li>• Trauma and PTSD</li>
                  <li>• Emotional dysregulation</li>
                  <li>• Attachment difficulties</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Developmental Concerns</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Autism Spectrum Disorders</li>
                  <li>• Learning disabilities</li>
                  <li>• Intellectual disabilities</li>
                  <li>• Communication disorders</li>
                  <li>• Social skills deficits</li>
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
                <h3 className="text-lg font-semibold text-teal-600 mb-3">How long does a behavioral assessment take?</h3>
                <p className="text-gray-700">
                  The complete assessment process typically takes 2-3 weeks from initial appointment to final report. 
                  This includes 3-4 assessment sessions, information gathering from multiple sources, scoring and 
                  interpretation of results, and report writing.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Will my child find the assessment stressful?</h3>
                <p className="text-gray-700">
                  Our clinicians are specially trained to make assessments engaging and age-appropriate. We use 
                  games, activities, and interactive tools that feel natural to children. Sessions include breaks, 
                  and we go at your child's pace to ensure comfort throughout the process.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">What information should I bring to the assessment?</h3>
                <p className="text-gray-700">
                  Please bring any previous evaluations, medical records, school reports, IEP/504 plans, and 
                  medication lists. We'll also provide you with questionnaires to complete before your first 
                  appointment to help us understand your concerns and your child's history.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Will you share results with my child's school?</h3>
                <p className="text-gray-700">
                  Information is only shared with your written consent. Many families find it helpful to share 
                  assessment results with schools to support accommodation planning, but this is entirely your 
                  choice. We can help you understand which parts might be most relevant for school personnel.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">What happens after the assessment is complete?</h3>
                <p className="text-gray-700">
                  You'll receive a comprehensive written report with findings and recommendations. We'll schedule 
                  a results meeting to discuss the findings in detail, answer questions, and help you understand 
                  next steps, which might include therapy, school accommodations, or medical consultation.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Can you assess for specific conditions like ADHD or autism?</h3>
                <p className="text-gray-700">
                  Yes, our comprehensive assessments can evaluate for a wide range of conditions including ADHD, 
                  autism spectrum disorders, anxiety, depression, and behavioral disorders. We use evidence-based 
                  tools specific to each condition for accurate diagnosis.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Do you provide recommendations for treatment?</h3>
                <p className="text-gray-700">
                  Absolutely. Our reports include specific, actionable recommendations for treatment, school 
                  accommodations, parenting strategies, and community resources. We can also provide referrals 
                  to appropriate specialists when needed.
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Assessment Outcomes & Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-4">What Families Gain:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Clear understanding of their child's strengths and challenges</li>
                  <li>• Accurate diagnosis and diagnostic clarity</li>
                  <li>• Specific treatment recommendations tailored to their child</li>
                  <li>• School accommodation and IEP/504 plan support</li>
                  <li>• Reduced family stress and improved understanding</li>
                  <li>• Connection to appropriate community resources</li>
                  <li>• Evidence-based foundation for treatment planning</li>
                  <li>• Advocacy tools for accessing needed services</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Our Assessment Quality Metrics:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">95%</p>
                    <p className="text-sm text-gray-700">of families report increased understanding of their child's needs</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">88%</p>
                    <p className="text-sm text-gray-700">of assessment recommendations are successfully implemented</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">92%</p>
                    <p className="text-sm text-gray-700">of families feel more confident advocating for their child</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">85%</p>
                    <p className="text-sm text-gray-700">of children show improvement within 6 months of assessment</p>
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
            serviceName="Behavioral Assessments"
            serviceTitle="Behavioral Assessments"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get the Answers Your Family Needs</h2>
            <p className="text-xl mb-8 opacity-95">
              A comprehensive behavioral assessment provides the foundation for understanding your child's unique needs 
              and developing an effective plan for support and growth. Our experienced clinicians are here to guide you 
              through this important process with compassion and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-cream-100 text-navy-800 px-8 py-4 rounded-md hover:bg-cream-200 transition-colors font-semibold text-lg"
              >
                Schedule Assessment Consultation
              </Link>
              <Link
                href="tel:918-553-5746"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-navy-800 transition-colors font-semibold text-lg"
              >
                Call (918) 553-5746
              </Link>
            </div>
            <p className="text-lg mt-6 opacity-90">
              Insurance verification available • Medicaid & SoonerCare accepted
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}