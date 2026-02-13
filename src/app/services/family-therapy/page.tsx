import Link from 'next/link'
import ServiceContactForm from '@/components/ServiceContactForm'

export default function FamilyTherapyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Family Therapy</h1>
            <p className="text-xl md:text-2xl opacity-95 mb-8">
              Strengthen family bonds and improve communication for lasting positive change
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

      {/* What is Family Therapy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">What is Family Therapy?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Family therapy at SafeHarbor Behavioral Health is a collaborative approach that brings family 
                members together to improve communication, resolve conflicts, and strengthen relationships. 
                We understand that families are complex systems where each person's well-being affects the 
                entire family unit.
              </p>
              <p className="mb-6">
                Our licensed family therapists work with families of all configurations - traditional nuclear 
                families, single-parent households, blended families, grandparents raising grandchildren, 
                and chosen families. We believe that every family has inherent strengths that can be 
                leveraged to create positive change and healing.
              </p>
              <p className="mb-6">
                Through evidence-based family therapy approaches, we help families develop better communication 
                skills, establish healthy boundaries, process trauma together, and create more supportive 
                home environments. Our goal is to help each family member feel heard, valued, and connected 
                while working toward shared family goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Who Benefits from Family Therapy?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Families Experiencing:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Communication breakdowns</li>
                  <li>• Frequent arguments and conflict</li>
                  <li>• Teen behavioral problems</li>
                  <li>• Divorce or separation adjustment</li>
                  <li>• Blended family challenges</li>
                  <li>• Grief and loss as a family</li>
                  <li>• Substance abuse impact on family</li>
                  <li>• Mental health challenges affecting family</li>
                  <li>• Major life transitions</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Specific Situations:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Parent-teen relationship difficulties</li>
                  <li>• Sibling rivalry and conflicts</li>
                  <li>• Adoption or foster care adjustments</li>
                  <li>• Cultural or generational differences</li>
                  <li>• Financial stress affecting relationships</li>
                  <li>• Chronic illness impact on family</li>
                  <li>• Technology and social media conflicts</li>
                  <li>• Extended family boundary issues</li>
                  <li>• Preparing for family changes</li>
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Our Family-Centered Therapeutic Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Systemic Family Therapy</h3>
                <p className="text-gray-700 text-sm">
                  We view families as interconnected systems where changes in one member affect 
                  everyone. This approach helps identify patterns and create positive systemic change.
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Structural Family Therapy</h3>
                <p className="text-gray-700 text-sm">
                  This approach focuses on family structure, roles, and boundaries to create 
                  healthier family dynamics and improve overall functioning.
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Solution-Focused Approach</h3>
                <p className="text-gray-700 text-sm">
                  We help families identify their strengths and resources to build on what's 
                  already working while addressing specific challenges.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-800 mb-4">Culturally Responsive Care</h3>
                <p className="text-gray-700">
                  We honor and respect each family's cultural background, values, and traditions. 
                  Our therapists understand that culture significantly influences family dynamics 
                  and incorporate cultural strengths into treatment planning.
                </p>
              </div>
              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-800 mb-4">Collaborative Partnership</h3>
                <p className="text-gray-700">
                  Families are the experts on their own experiences. We partner with families 
                  to identify goals, develop solutions, and create lasting change that fits 
                  their unique needs and circumstances.
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">What to Expect in Family Therapy Sessions</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Initial Family Assessment</h3>
                <p className="text-gray-700">
                  The first session involves meeting with all available family members to understand 
                  each person's perspective, family history, current challenges, and shared goals for therapy.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Communication Skills Building</h3>
                <p className="text-gray-700">
                  We teach practical communication techniques including active listening, expressing 
                  feelings constructively, and resolving conflicts respectfully. Families practice 
                  these skills during sessions.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Family Dynamics Exploration</h3>
                <p className="text-gray-700">
                  We explore family patterns, roles, and dynamics to identify what's working well 
                  and what needs to change. This includes examining boundaries, rules, and expectations.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Goal Setting and Progress Monitoring</h3>
                <p className="text-gray-700">
                  Families work together to set specific, achievable goals and regularly assess 
                  progress. We celebrate successes and adjust approaches when needed.
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
                    <p className="text-gray-700">60-90 minutes per family session (longer for larger families)</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Frequency</h3>
                    <p className="text-gray-700">Weekly or bi-weekly sessions based on family needs and availability</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Treatment Duration</h3>
                    <p className="text-gray-700">Typically 3-6 months, with some families benefiting from longer-term support</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Flexible Scheduling</h3>
                    <p className="text-gray-700">Evening and weekend appointments available to accommodate family schedules</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy-800 mb-6">Insurance & Coverage</h2>
                <div className="bg-teal-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-teal-600 mb-4">We Accept:</h3>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• Oklahoma Medicaid</li>
                    <li>• SoonerCare (covers family therapy)</li>
                    <li>• Most major insurance plans</li>
                    <li>• Employee Assistance Programs (EAP)</li>
                    <li>• Self-pay options with sliding scale</li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    Family therapy is often covered under mental health benefits. Our billing 
                    specialists will help verify coverage and work with your insurance to 
                    maximize benefits for your family.
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Family-Specific Therapeutic Considerations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Families with Young Children</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Play-based interventions for younger children</li>
                  <li>• Parent-child interaction therapy techniques</li>
                  <li>• Behavior management strategies</li>
                  <li>• Attachment and bonding strengthening</li>
                  <li>• Developmental considerations in therapy</li>
                  <li>• Sibling relationship enhancement</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Families with Teenagers</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Balancing independence and family connection</li>
                  <li>• Improving parent-teen communication</li>
                  <li>• Setting appropriate boundaries and expectations</li>
                  <li>• Addressing adolescent developmental needs</li>
                  <li>• Managing technology and social media conflicts</li>
                  <li>• Preparing for transitions to adulthood</li>
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Special Family Situations</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Blended Families</h4>
                    <ul className="space-y-1">
                      <li>• Integration strategies</li>
                      <li>• Co-parenting coordination</li>
                      <li>• Step-relationship building</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Single-Parent Families</h4>
                    <ul className="space-y-1">
                      <li>• Support system building</li>
                      <li>• Role adjustment strategies</li>
                      <li>• Stress management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Multi-Generational Families</h4>
                    <ul className="space-y-1">
                      <li>• Boundary negotiations</li>
                      <li>• Cultural bridge-building</li>
                      <li>• Role clarification</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Address */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Family Issues We Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Communication Problems</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Frequent misunderstandings</li>
                  <li>• Emotional disconnection</li>
                  <li>• Conflict escalation patterns</li>
                  <li>• Poor listening skills</li>
                  <li>• Unexpressed needs and feelings</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Behavioral Challenges</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Child or teen acting out</li>
                  <li>• Defiance and oppositional behavior</li>
                  <li>• Sibling conflicts and rivalry</li>
                  <li>• School-related problems</li>
                  <li>• Substance use concerns</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Life Transitions</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Divorce and remarriage</li>
                  <li>• New baby or adoption</li>
                  <li>• Moving or job changes</li>
                  <li>• Death and grief</li>
                  <li>• Financial difficulties</li>
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
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Do all family members need to attend every session?</h3>
                <p className="text-gray-700">
                  While we encourage full family participation when possible, we understand that 
                  scheduling can be challenging. We can work with varying family member attendance 
                  and may sometimes meet with subsystems (like parents only or siblings) when beneficial.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">What if one family member refuses to participate?</h3>
                <p className="text-gray-700">
                  Family therapy can still be effective even if one member is initially reluctant. 
                  We can start with willing family members and often see improvements that eventually 
                  encourage the reluctant member to join. We also teach strategies to work with resistant family dynamics.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Will you take sides or blame someone for family problems?</h3>
                <p className="text-gray-700">
                  Absolutely not. Family therapy is not about blame or taking sides. We focus on 
                  patterns and systems rather than individual fault. Our goal is to help everyone 
                  feel heard and work together toward positive solutions.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">How do you handle confidentiality in family therapy?</h3>
                <p className="text-gray-700">
                  In family therapy, we generally maintain transparency within the family while 
                  protecting the family's privacy from outside parties. However, we discuss 
                  confidentiality expectations at the beginning of treatment, including any individual 
                  sessions that might occur.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Can family therapy help with our teenager's mental health issues?</h3>
                <p className="text-gray-700">
                  Yes, family involvement often enhances treatment outcomes for teenagers with mental 
                  health concerns. We can combine family therapy with individual teen counseling 
                  to address both personal and family system factors contributing to the problems.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">What's the difference between family therapy and family counseling?</h3>
                <p className="text-gray-700">
                  The terms are often used interchangeably. Both involve working with families to 
                  improve relationships and functioning. At SafeHarbor, we use evidence-based family 
                  therapy approaches that address both immediate concerns and underlying family patterns.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">How quickly will we see improvements in our family?</h3>
                <p className="text-gray-700">
                  Many families notice small improvements in communication and understanding within 
                  the first few sessions. Significant changes typically occur over several months 
                  as families learn new skills and practice healthier interaction patterns.
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
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Typical Family Improvements Include:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Enhanced communication and listening skills</li>
                  <li>• Reduced frequency and intensity of family conflicts</li>
                  <li>• Stronger emotional connections between family members</li>
                  <li>• Better problem-solving and conflict resolution abilities</li>
                  <li>• Improved family cooperation and teamwork</li>
                  <li>• Healthier boundaries and family roles</li>
                  <li>• Increased empathy and understanding</li>
                  <li>• More effective parenting strategies</li>
                  <li>• Enhanced family resilience during stress</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Take the Next Step</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">Safe Harbor provides activity-based behavioral support for children ages 3–17 through our Body &amp; Brain program.</p>
                  <a
                    href="https://SafeHarborEasyEnrollment.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold"
                  >
                    Enroll Today
                  </a>
                  <p className="text-sm text-gray-600 mt-2">
                    Current families: <a href="https://therapyportal.com/p/SafeHarbor74104" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">Access your Therapy Portal</a>
                  </p>
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
            serviceName="Family Therapy"
            serviceTitle="Family Therapy"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Strengthen Your Family Bonds Today</h2>
            <p className="text-xl mb-8 opacity-95">
              Every family has the potential for growth, connection, and healing. Our experienced 
              family therapists are here to guide your family toward better communication, 
              stronger relationships, and a more harmonious home environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-cream-100 text-navy-800 px-8 py-4 rounded-md hover:bg-cream-200 transition-colors font-semibold text-lg"
              >
                Schedule Family Therapy
              </Link>
              <Link
                href="tel:918-553-5746"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-navy-800 transition-colors font-semibold text-lg"
              >
                Call (918) 553-5746
              </Link>
            </div>
            <p className="text-lg mt-6 opacity-90">
              Flexible scheduling available • Medicaid & SoonerCare accepted
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}