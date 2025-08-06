import Link from 'next/link'
import ServiceContactForm from '@/components/ServiceContactForm'

export default function CrisisInterventionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Crisis Intervention Services</h1>
            <p className="text-xl md:text-2xl opacity-95 mb-8">
              Immediate professional support for children, teens, and families in mental health crisis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:988"
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors font-semibold"
              >
                Call 988 - Crisis Lifeline
              </Link>
              <Link
                href="/contact"
                className="inline-block bg-cream-100 text-navy-800 px-8 py-3 rounded-md hover:bg-cream-200 transition-colors font-semibold"
              >
                Schedule Crisis Support
              </Link>
            </div>
            <p className="text-lg mt-4 opacity-90">
              24/7 Crisis Support Available • Same-Day Appointments • Medicaid & SoonerCare Accepted
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg font-semibold">
              🚨 If you're experiencing a mental health emergency, call 988 (Suicide & Crisis Lifeline) 
              or go to your nearest emergency room immediately.
            </p>
          </div>
        </div>
      </section>

      {/* What is Crisis Intervention Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">What are Crisis Intervention Services?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Crisis Intervention Services at SafeHarbor Behavioral Health provide immediate, 
                specialized support for children, adolescents, and families experiencing acute 
                mental health crises. We understand that mental health emergencies can happen 
                at any time and require prompt, professional intervention to ensure safety and stability.
              </p>
              <p className="mb-6">
                Our crisis intervention team consists of licensed mental health professionals trained 
                in crisis assessment, de-escalation techniques, safety planning, and emergency 
                intervention protocols. We provide both immediate crisis response and short-term 
                stabilization services to help families navigate mental health emergencies safely.
              </p>
              <p className="mb-6">
                Crisis intervention is not just about managing immediate danger—it's about providing 
                hope, support, and practical solutions during the most difficult moments. Our goal 
                is to help stabilize the crisis, ensure safety, and connect individuals and families 
                to appropriate ongoing care and community resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">When to Seek Crisis Intervention</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-red-500">
                <h3 className="text-xl font-semibold text-red-600 mb-4">Immediate Danger Signs:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Suicidal thoughts, plans, or attempts</li>
                  <li>• Threats to harm others</li>
                  <li>• Self-harm behaviors (cutting, burning, etc.)</li>
                  <li>• Psychotic symptoms (hallucinations, delusions)</li>
                  <li>• Severe substance intoxication or overdose</li>
                  <li>• Complete inability to care for self</li>
                  <li>• Manic episode with dangerous behavior</li>
                  <li>• Severe panic or dissociative episodes</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold text-orange-600 mb-4">Urgent Situation Signs:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Severe depression with isolation</li>
                  <li>• Extreme anxiety or panic attacks</li>
                  <li>• Dramatic behavioral changes</li>
                  <li>• Complete school or activity refusal</li>
                  <li>• Family crisis or trauma</li>
                  <li>• Eating disorder with health risks</li>
                  <li>• Running away or missing persons</li>
                  <li>• Abuse or neglect situations</li>
                  <li>• Grief crisis following sudden loss</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Crisis Response Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Our Crisis Response Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Immediate Safety Assessment</h3>
                <p className="text-gray-700 text-sm">
                  Rapid evaluation of immediate safety risks, including suicide risk, harm to others, 
                  and ability to care for oneself or be cared for by family.
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Crisis De-escalation</h3>
                <p className="text-gray-700 text-sm">
                  Professional techniques to reduce acute emotional distress, panic, and agitation 
                  to restore emotional stability and clear thinking.
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Safety Planning</h3>
                <p className="text-gray-700 text-sm">
                  Development of detailed safety plans including coping strategies, support contacts, 
                  and specific steps to take if crisis symptoms return.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-800 mb-4">24/7 Crisis Support</h3>
                <p className="text-gray-700">
                  We provide round-the-clock crisis consultation and support. Our crisis team can 
                  be reached by phone for immediate consultation, and we provide same-day or 
                  next-day in-person crisis appointments when needed.
                </p>
              </div>
              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-800 mb-4">Family-Centered Crisis Care</h3>
                <p className="text-gray-700">
                  We involve family members appropriately in crisis intervention, providing support 
                  and education to help families understand and respond to mental health crises 
                  effectively while maintaining safety for everyone.
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">What to Expect During Crisis Intervention</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Initial Crisis Contact</h3>
                <p className="text-gray-700">
                  When you contact us in crisis, our trained staff will conduct an immediate phone 
                  assessment to determine the level of risk and need for emergency services, same-day 
                  appointment, or other appropriate intervention.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Comprehensive Crisis Assessment</h3>
                <p className="text-gray-700">
                  In-person evaluation includes detailed assessment of suicide risk, risk of harm to 
                  others, psychotic symptoms, substance use, social support, and previous mental health 
                  history to determine appropriate level of care.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Immediate Stabilization</h3>
                <p className="text-gray-700">
                  Crisis counseling session focused on reducing acute distress, establishing immediate 
                  coping strategies, and creating a sense of safety and hope. Family members are 
                  involved when appropriate and helpful.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Safety Planning and Follow-up</h3>
                <p className="text-gray-700">
                  Development of detailed written safety plan, connection to ongoing treatment resources, 
                  coordination with other providers, and scheduled follow-up to ensure continued stability 
                  and progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Crisis Resources & Emergency Contacts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-red-600 mb-4">National Crisis Lines</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800">988 Suicide & Crisis Lifeline</p>
                    <p className="text-sm text-gray-600">24/7 free, confidential crisis support</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Crisis Text Line: Text HOME to 741741</p>
                    <p className="text-sm text-gray-600">Free 24/7 crisis support via text</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Trevor Lifeline: 1-866-488-7386</p>
                    <p className="text-sm text-gray-600">Crisis support for LGBTQ+ youth</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">National Child Abuse Hotline: 1-800-4-A-CHILD</p>
                    <p className="text-sm text-gray-600">24/7 support for children in danger</p>
                  </div>
                </div>
              </div>
              <div className="bg-teal-50 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Local Emergency Services</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800">Emergency: 911</p>
                    <p className="text-sm text-gray-600">Immediate medical/psychiatric emergency</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">SafeHarbor Crisis Line: (918) 391-3606</p>
                    <p className="text-sm text-gray-600">24/7 crisis consultation and support</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Oklahoma Mental Health Crisis Line</p>
                    <p className="text-sm text-gray-600">1-800-522-9054</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Tulsa Police Crisis Response Team</p>
                    <p className="text-sm text-gray-600">(918) 596-9222 (non-emergency)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age-Appropriate Crisis Considerations */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Age-Specific Crisis Response</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Children (5-12)</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Child-friendly assessment techniques</li>
                  <li>• Heavy parent/caregiver involvement</li>
                  <li>• Play and art therapy approaches</li>
                  <li>• Focus on safety and security</li>
                  <li>• Developmentally appropriate explanations</li>
                  <li>• Coordination with schools when appropriate</li>
                  <li>• Family stability as primary concern</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Adolescents (13-18)</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Balance of privacy and safety</li>
                  <li>• Peer and social factors assessment</li>
                  <li>• Substance use screening</li>
                  <li>• Academic and future impact discussion</li>
                  <li>• Family involvement with teen consent</li>
                  <li>• Technology and social media factors</li>
                  <li>• Transition planning for ongoing care</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Families in Crisis</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Whole family system assessment</li>
                  <li>• Multiple member safety planning</li>
                  <li>• Resource coordination and referrals</li>
                  <li>• Extended family and support involvement</li>
                  <li>• Cultural and spiritual considerations</li>
                  <li>• Economic and practical need assessment</li>
                  <li>• Long-term stability planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Crisis We Address */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Types of Mental Health Crises We Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Suicidal Crisis</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Suicidal thoughts and ideation</li>
                  <li>• Suicide attempts</li>
                  <li>• Self-harm behaviors</li>
                  <li>• Hopelessness and despair</li>
                  <li>• Previous suicide attempts</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Psychiatric Emergencies</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Psychotic episodes</li>
                  <li>• Severe manic episodes</li>
                  <li>• Catatonia or severe depression</li>
                  <li>• Dissociative episodes</li>
                  <li>• Severe panic or anxiety attacks</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Behavioral Crises</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Violence or aggression</li>
                  <li>• Substance abuse overdose</li>
                  <li>• Eating disorder complications</li>
                  <li>• Trauma reactions</li>
                  <li>• Family crisis situations</li>
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Crisis Intervention FAQs</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">What happens if I call during a crisis?</h3>
                <p className="text-gray-700">
                  Our crisis line is staffed 24/7 by trained mental health professionals. We'll conduct 
                  an immediate phone assessment, provide crisis counseling, help with safety planning, 
                  and arrange appropriate follow-up care including same-day appointments when needed.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Will you hospitalize my child?</h3>
                <p className="text-gray-700">
                  Hospitalization is considered only when absolutely necessary for safety. Our goal is 
                  to help families manage crises at home when safely possible. We use the least restrictive 
                  level of care that ensures safety while providing effective treatment.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">What should I do before calling for crisis help?</h3>
                <p className="text-gray-700">
                  Ensure immediate physical safety first. Remove any means of self-harm, stay with the 
                  person in crisis if safe to do so, call 911 if there's imminent danger, and try to 
                  remain calm. Have insurance information and medical history ready if possible.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Do you work with police and emergency responders?</h3>
                <p className="text-gray-700">
                  Yes, we collaborate with local emergency services, crisis response teams, and law 
                  enforcement when appropriate. Our goal is to provide mental health expertise to 
                  de-escalate situations and connect families to appropriate care.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Is crisis intervention covered by insurance?</h3>
                <p className="text-gray-700">
                  Yes, crisis intervention services are typically covered by insurance including Medicaid 
                  and SoonerCare. We handle insurance billing and ensure that cost never prevents someone 
                  from accessing needed crisis care.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">What happens after the immediate crisis is resolved?</h3>
                <p className="text-gray-700">
                  We help connect individuals and families to appropriate ongoing mental health care, 
                  schedule follow-up appointments, coordinate with other providers, and ensure continuity 
                  of care to prevent future crises.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Can family members get support during a crisis too?</h3>
                <p className="text-gray-700">
                  Absolutely. Family members are often significantly impacted by mental health crises. 
                  We provide support, education, and counseling for family members to help them cope 
                  and support their loved one's recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention & Preparedness */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Crisis Prevention & Family Preparedness</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Warning Signs to Watch For:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Dramatic changes in mood or behavior</li>
                  <li>• Withdrawing from friends and activities</li>
                  <li>• Talking about death, dying, or suicide</li>
                  <li>• Giving away prized possessions</li>
                  <li>• Increased substance use</li>
                  <li>• Declining self-care and hygiene</li>
                  <li>• Extreme mood swings</li>
                  <li>• Sleeping too much or too little</li>
                  <li>• Decreased academic or work performance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Creating a Family Crisis Plan:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Keep emergency contact numbers readily available</li>
                  <li>• Remove or secure potential means of self-harm</li>
                  <li>• Identify trusted adults and support people</li>
                  <li>• Know your insurance information and coverage</li>
                  <li>• Identify nearest emergency rooms and crisis centers</li>
                  <li>• Practice calm, supportive communication</li>
                  <li>• Know when to call 911 vs. crisis lines</li>
                  <li>• Have current medication lists and medical history</li>
                  <li>• Schedule regular mental health check-ups</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <ServiceContactForm 
            serviceName="Crisis Intervention"
            serviceTitle="Crisis Intervention"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Help is Available 24/7 - You Are Not Alone</h2>
            <p className="text-xl mb-8 opacity-95">
              Mental health crises can feel overwhelming and frightening, but help is always available. 
              Our crisis intervention team is here to provide immediate support, ensure safety, and 
              help you navigate through the most difficult moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:988"
                className="inline-block bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-700 transition-colors font-semibold text-lg"
              >
                Call 988 - Crisis Lifeline
              </Link>
              <Link
                href="tel:918-391-3606"
                className="inline-block bg-cream-100 text-navy-800 px-8 py-4 rounded-md hover:bg-cream-200 transition-colors font-semibold text-lg"
              >
                Call (918) 391-3606
              </Link>
            </div>
            <p className="text-lg mt-6 opacity-90">
              24/7 Crisis Support • Same-Day Appointments • All Insurance Accepted
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}