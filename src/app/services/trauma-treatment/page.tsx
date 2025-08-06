import Link from 'next/link'
import ServiceContactForm from '@/components/ServiceContactForm'

export default function TraumaTherapyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Trauma Treatment</h1>
            <p className="text-xl md:text-2xl opacity-95 mb-8">
              Specialized EMDR and Trauma-Focused CBT for children, teens, and families
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

      {/* What is Trauma Treatment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">What is Trauma Treatment?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Trauma treatment at SafeHarbor Behavioral Health provides specialized, evidence-based 
                interventions for children, teens, and families who have experienced traumatic events. 
                We understand that trauma affects everyone differently and can have lasting impacts 
                on mental health, relationships, and daily functioning.
              </p>
              <p className="mb-6">
                Our trauma-informed therapists are specially trained in EMDR (Eye Movement 
                Desensitization and Reprocessing) and Trauma-Focused Cognitive Behavioral Therapy 
                (TF-CBT), two of the most effective treatments for trauma. These approaches help 
                process traumatic memories, reduce symptoms, and build resilience.
              </p>
              <p className="mb-6">
                We create a safe, supportive environment where clients can heal at their own pace. 
                Our trauma treatment is individualized, taking into account each person's unique 
                experiences, cultural background, and personal strengths. We believe that healing 
                is possible and that everyone deserves to live free from the burden of unprocessed trauma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Who Benefits from Trauma Treatment?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Types of Trauma We Treat:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Physical, emotional, or sexual abuse</li>
                  <li>• Neglect or abandonment</li>
                  <li>• Witnessing domestic violence</li>
                  <li>• Community violence exposure</li>
                  <li>• Natural disasters or accidents</li>
                  <li>• Medical trauma or hospitalization</li>
                  <li>• Death of a loved one</li>
                  <li>• Bullying or cyberbullying</li>
                  <li>• School violence or threats</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Trauma Symptoms We Address:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Intrusive thoughts or flashbacks</li>
                  <li>• Nightmares or sleep difficulties</li>
                  <li>• Avoidance of trauma reminders</li>
                  <li>• Emotional numbing or detachment</li>
                  <li>• Hypervigilance or feeling "on edge"</li>
                  <li>• Depression or anxiety</li>
                  <li>• Difficulty concentrating</li>
                  <li>• Behavioral regression</li>
                  <li>• Anger outbursts or irritability</li>
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Our Evidence-Based Trauma Treatment Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">EMDR (Eye Movement Desensitization and Reprocessing)</h3>
                <p className="text-gray-700 text-sm mb-3">
                  EMDR helps process traumatic memories by using bilateral stimulation (typically eye movements) 
                  while recalling disturbing events. This helps the brain process and integrate traumatic memories 
                  more effectively.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Highly effective for PTSD and trauma</li>
                  <li>• Often faster than traditional talk therapy</li>
                  <li>• Suitable for children 6+ and adults</li>
                  <li>• Reduces emotional charge of traumatic memories</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Trauma-Focused CBT (TF-CBT)</h3>
                <p className="text-gray-700 text-sm mb-3">
                  TF-CBT is specifically designed for children and adolescents who have experienced trauma. 
                  It combines cognitive-behavioral techniques with trauma-sensitive interventions and 
                  family involvement.
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Gold standard for childhood trauma</li>
                  <li>• Includes parent/caregiver components</li>
                  <li>• Teaches coping skills and emotional regulation</li>
                  <li>• Addresses trauma-related thoughts and beliefs</li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Play Therapy for Children</h3>
                <p className="text-gray-700 text-sm">
                  For younger children, we use trauma-informed play therapy techniques that allow 
                  children to process experiences through natural play and creative expression.
                </p>
              </div>
              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Somatic Approaches</h3>
                <p className="text-gray-700 text-sm">
                  We incorporate body-based interventions to help clients reconnect with their 
                  bodies in safe ways and address trauma stored in the nervous system.
                </p>
              </div>
              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Family Systems Integration</h3>
                <p className="text-gray-700 text-sm">
                  We include family members in treatment when appropriate, helping them understand 
                  trauma's impact and learn how to best support their loved one's healing.
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">What to Expect in Trauma Treatment</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Safety and Stabilization Phase</h3>
                <p className="text-gray-700">
                  We begin by establishing safety and teaching coping skills. This foundational phase 
                  helps clients feel secure and develop tools for managing difficult emotions before 
                  processing traumatic memories.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Trauma Processing Phase</h3>
                <p className="text-gray-700">
                  Using EMDR or TF-CBT techniques, we help clients process traumatic memories at a 
                  pace that feels manageable. This phase includes developing a trauma narrative and 
                  challenging unhelpful beliefs about the trauma.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Integration and Future Planning</h3>
                <p className="text-gray-700">
                  The final phase focuses on integrating new insights and skills into daily life. 
                  We work on building resilience, preventing relapse, and preparing for future challenges 
                  with confidence.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Ongoing Support and Follow-up</h3>
                <p className="text-gray-700">
                  Healing from trauma is an ongoing process. We provide follow-up support and 
                  "booster" sessions as needed to maintain progress and address any new challenges 
                  that may arise.
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
                    <p className="text-gray-700">60-90 minutes for EMDR sessions; 50 minutes for TF-CBT sessions</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Frequency</h3>
                    <p className="text-gray-700">Weekly sessions initially, with some flexibility based on client needs</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Treatment Duration</h3>
                    <p className="text-gray-700">TF-CBT: 12-20 sessions; EMDR: varies by individual, often 6-12 sessions</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Pacing</h3>
                    <p className="text-gray-700">Client-controlled pace - you're always in charge of your healing process</p>
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
                    <li>• Victim compensation programs</li>
                    <li>• Self-pay options available</li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    Trauma treatment is often covered under mental health benefits. We also work 
                    with victim compensation programs and can provide documentation for legal cases 
                    when appropriate.
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Age-Appropriate Trauma Treatment</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Ages 5-8: Young Children</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Play-based trauma therapy</li>
                  <li>• Simple coping strategies</li>
                  <li>• Parent/caregiver involvement essential</li>
                  <li>• Art and expressive therapies</li>
                  <li>• Focus on safety and routine</li>
                  <li>• Modified EMDR techniques (butterfly hugs)</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Ages 9-12: School-Age</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Trauma-Focused CBT appropriate</li>
                  <li>• More cognitive processing abilities</li>
                  <li>• Group components when beneficial</li>
                  <li>• Emotion regulation skill building</li>
                  <li>• School collaboration when needed</li>
                  <li>• EMDR with age-appropriate modifications</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Ages 13-18: Adolescents</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Full EMDR and TF-CBT protocols</li>
                  <li>• Individual and family components</li>
                  <li>• Identity and relationship focus</li>
                  <li>• Future planning and goals</li>
                  <li>• Peer and social factors</li>
                  <li>• Transition to independence preparation</li>
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Trauma-Related Conditions We Treat</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">PTSD and Related Disorders</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Post-Traumatic Stress Disorder</li>
                  <li>• Complex PTSD</li>
                  <li>• Acute stress disorder</li>
                  <li>• Adjustment disorders with trauma</li>
                  <li>• Dissociative disorders</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Trauma-Related Symptoms</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Flashbacks and intrusive thoughts</li>
                  <li>• Nightmares and sleep problems</li>
                  <li>• Emotional numbing</li>
                  <li>• Hypervigilance and anxiety</li>
                  <li>• Avoidance behaviors</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Secondary Trauma Effects</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Depression and mood issues</li>
                  <li>• Behavioral problems</li>
                  <li>• Relationship difficulties</li>
                  <li>• Academic or work impairment</li>
                  <li>• Substance use concerns</li>
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
                <h3 className="text-lg font-semibold text-teal-600 mb-3">How do I know if my child needs trauma treatment?</h3>
                <p className="text-gray-700">
                  Signs include persistent nightmares, regression in development, avoidance of places 
                  or activities, emotional outbursts, withdrawal, concentration problems, or physical 
                  symptoms without medical cause. If you're concerned, a professional assessment can help.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Is EMDR safe for children?</h3>
                <p className="text-gray-700">
                  Yes, EMDR is safe and effective for children 6 and older when conducted by a trained 
                  professional. We use child-friendly modifications and ensure the child feels safe 
                  and in control throughout the process.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Will trauma therapy make my child relive the traumatic event?</h3>
                <p className="text-gray-700">
                  Our trauma therapies are designed to process memories safely without retraumatization. 
                  We teach coping skills first, work at your child's pace, and use techniques that 
                  help process trauma without overwhelming them.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">How long does trauma therapy take?</h3>
                <p className="text-gray-700">
                  Treatment length varies by individual. TF-CBT typically takes 12-20 sessions, while 
                  EMDR may require fewer sessions but varies widely. We work at your pace and regularly 
                  assess progress.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">What if my child doesn't want to talk about the trauma?</h3>
                <p className="text-gray-700">
                  We never force children to discuss traumatic events. We use indirect approaches like 
                  play therapy, art, and other creative methods. Building trust and safety always comes 
                  first, and we respect each child's readiness.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Can parents be involved in trauma treatment?</h3>
                <p className="text-gray-700">
                  Absolutely. Parent involvement is often crucial for successful outcomes. We provide 
                  parent education, teach supportive strategies, and may include parents in some sessions. 
                  TF-CBT specifically includes parent components.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">What makes SafeHarbor's trauma treatment different?</h3>
                <p className="text-gray-700">
                  Our therapists are specifically trained in evidence-based trauma treatments. We provide 
                  a trauma-informed environment, individualized treatment plans, family involvement when 
                  appropriate, and culturally responsive care that honors each family's unique background.
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
                  <li>• Significant reduction in PTSD symptoms</li>
                  <li>• Decreased frequency and intensity of nightmares</li>
                  <li>• Improved emotional regulation and coping</li>
                  <li>• Reduced avoidance behaviors</li>
                  <li>• Better concentration and school performance</li>
                  <li>• Improved relationships with family and friends</li>
                  <li>• Increased sense of safety and control</li>
                  <li>• Development of post-traumatic growth</li>
                  <li>• Enhanced resilience for future challenges</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Our Trauma Treatment Success Metrics:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">89%</p>
                    <p className="text-sm text-gray-700">of clients show significant reduction in PTSD symptoms</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">84%</p>
                    <p className="text-sm text-gray-700">report improved daily functioning within 3 months</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">92%</p>
                    <p className="text-sm text-gray-700">of children return to pre-trauma functioning levels</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">81%</p>
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
            serviceName="Trauma Treatment"
            serviceTitle="Trauma Treatment"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Begin Your Healing Journey Today</h2>
            <p className="text-xl mb-8 opacity-95">
              Trauma doesn't have to define your future. Our specialized trauma therapists are here 
              to provide the expert care and support needed to process difficult experiences and 
              reclaim a sense of safety, control, and hope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-cream-100 text-navy-800 px-8 py-4 rounded-md hover:bg-cream-200 transition-colors font-semibold text-lg"
              >
                Schedule Trauma Treatment
              </Link>
              <Link
                href="tel:918-391-3606"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-navy-800 transition-colors font-semibold text-lg"
              >
                Call (918) 391-3606
              </Link>
            </div>
            <p className="text-lg mt-6 opacity-90">
              Confidential consultations available • Medicaid & SoonerCare accepted
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}