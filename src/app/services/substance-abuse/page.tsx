import Link from 'next/link'
import ServiceContactForm from '@/components/ServiceContactForm'

export default function SubstanceAbusePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Teen Substance Abuse Counseling</h1>
            <p className="text-xl md:text-2xl opacity-95 mb-8">
              Specialized treatment for adolescents struggling with substance use and addiction
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-cream-100 text-navy-800 px-8 py-3 rounded-md hover:bg-cream-200 transition-colors font-semibold"
              >
                Get Help Today
              </Link>
              <p className="text-lg opacity-90 self-center">
                Medicaid & SoonerCare Accepted • Confidential • Same-Week Appointments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Substance Abuse Counseling Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">What is Teen Substance Abuse Counseling?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Teen Substance Abuse Counseling at SafeHarbor Behavioral Health provides specialized, 
                evidence-based treatment for adolescents ages 13-18 who are struggling with substance 
                use disorders. We understand that teenage substance use presents unique challenges 
                requiring age-appropriate, developmentally sensitive approaches.
              </p>
              <p className="mb-6">
                Our licensed addiction counselors and therapists are specially trained in adolescent 
                development and substance abuse treatment. We provide comprehensive assessment, individual 
                and group counseling, family therapy, and relapse prevention planning in a supportive, 
                non-judgmental environment that respects teen autonomy while involving families appropriately.
              </p>
              <p className="mb-6">
                We recognize that teen substance use often co-occurs with other mental health conditions 
                such as depression, anxiety, trauma, or ADHD. Our integrated treatment approach addresses 
                both substance use and underlying mental health concerns simultaneously for the best possible 
                outcomes. Recovery is possible, and we're here to support teens and families every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Who Benefits from Teen Substance Abuse Counseling?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Teens Using:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Alcohol (binge drinking, regular use)</li>
                  <li>• Marijuana and THC products</li>
                  <li>• Prescription medications (non-prescribed)</li>
                  <li>• Vaping and e-cigarettes with nicotine</li>
                  <li>• Party drugs (MDMA, cocaine, etc.)</li>
                  <li>• Over-the-counter medications for highs</li>
                  <li>• Synthetic drugs (K2, Spice, etc.)</li>
                  <li>• Inhalants or household products</li>
                  <li>• Multiple substances (polysubstance use)</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Warning Signs:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Dramatic changes in friend groups</li>
                  <li>• Declining academic performance</li>
                  <li>• Increased secrecy and lying</li>
                  <li>• Money or items missing from home</li>
                  <li>• Changes in sleep patterns</li>
                  <li>• Mood swings and irritability</li>
                  <li>• Loss of interest in previous activities</li>
                  <li>• Physical signs (bloodshot eyes, smell)</li>
                  <li>• Legal problems or school discipline</li>
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Our Teen-Focused Treatment Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Motivational Interviewing</h3>
                <p className="text-gray-700 text-sm">
                  A collaborative approach that helps teens explore their own motivations for change 
                  and build internal motivation for recovery.
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Cognitive Behavioral Therapy</h3>
                <p className="text-gray-700 text-sm">
                  Helps teens identify triggers, change thought patterns, and develop healthy coping 
                  strategies to replace substance use.
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Dialectical Behavior Therapy</h3>
                <p className="text-gray-700 text-sm">
                  Teaches emotion regulation, distress tolerance, and interpersonal skills that are 
                  crucial for maintaining sobriety.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-800 mb-4">Integrated Treatment</h3>
                <p className="text-gray-700">
                  We simultaneously address substance use and co-occurring mental health conditions 
                  like depression, anxiety, trauma, or ADHD. This integrated approach leads to better 
                  outcomes than treating conditions separately.
                </p>
              </div>
              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-800 mb-4">Family-Based Approaches</h3>
                <p className="text-gray-700">
                  Family involvement is crucial for teen recovery. We provide family therapy, parent 
                  education, and help families develop healthy communication patterns and boundaries 
                  that support recovery.
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">What to Expect in Teen Substance Abuse Treatment</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Comprehensive Assessment</h3>
                <p className="text-gray-700">
                  Thorough evaluation of substance use patterns, mental health status, family dynamics, 
                  and social factors. We assess motivation for change and develop individualized treatment goals.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Individual Counseling</h3>
                <p className="text-gray-700">
                  One-on-one sessions focused on building motivation, identifying triggers, developing 
                  coping skills, and addressing underlying issues contributing to substance use.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Group Therapy</h3>
                <p className="text-gray-700">
                  Age-appropriate group sessions where teens connect with peers facing similar challenges, 
                  practice social skills, and learn from each other's experiences and strategies.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Family Therapy and Education</h3>
                <p className="text-gray-700">
                  Family sessions to improve communication, establish healthy boundaries, and help 
                  families understand addiction and recovery. Parent education programs provide tools 
                  for supporting teen recovery.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Relapse Prevention Planning</h3>
                <p className="text-gray-700">
                  Development of personalized relapse prevention plans including trigger identification, 
                  coping strategies, support system activation, and crisis intervention plans.
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
                <h2 className="text-2xl font-bold text-navy-800 mb-6">Treatment Structure & Duration</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Session Length</h3>
                    <p className="text-gray-700">50-60 minutes individual; 90 minutes group sessions</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Frequency</h3>
                    <p className="text-gray-700">2-3 times per week initially, reducing as progress is made</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Treatment Duration</h3>
                    <p className="text-gray-700">6-12 months on average, individualized based on progress</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Aftercare Support</h3>
                    <p className="text-gray-700">Ongoing support and relapse prevention for sustained recovery</p>
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
                    <li>• Sliding scale fees when appropriate</li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    Substance abuse treatment is typically covered by insurance under mental health 
                    and addiction benefits. We'll help verify your coverage and work with you to 
                    make treatment affordable and accessible.
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Developmentally Appropriate Treatment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Early Adolescence (13-15)</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Focus on experimentation vs. addiction patterns</li>
                  <li>• Peer influence and social pressure education</li>
                  <li>• Family involvement and parental authority</li>
                  <li>• School-based prevention and intervention</li>
                  <li>• Basic education about substances and risks</li>
                  <li>• Identity development and self-esteem work</li>
                  <li>• Alternative activities and interests development</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Later Adolescence (16-18)</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• More developed addiction patterns recognition</li>
                  <li>• Independence and responsibility balance</li>
                  <li>• Future planning and goal setting</li>
                  <li>• Relationship and intimacy issues</li>
                  <li>• Legal consequences and adult implications</li>
                  <li>• Transition planning for adult services if needed</li>
                  <li>• Career and educational impact discussions</li>
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Substance Use and Co-occurring Disorders</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Substance Use Disorders</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Alcohol use disorder</li>
                  <li>• Cannabis use disorder</li>
                  <li>• Prescription drug misuse</li>
                  <li>• Stimulant use disorders</li>
                  <li>• Nicotine/vaping addiction</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Co-occurring Mental Health</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Depression and mood disorders</li>
                  <li>• Anxiety disorders</li>
                  <li>• ADHD and attention issues</li>
                  <li>• Trauma and PTSD</li>
                  <li>• Conduct and behavioral disorders</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Associated Problems</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Academic problems</li>
                  <li>• Family conflicts</li>
                  <li>• Legal issues</li>
                  <li>• Peer relationship difficulties</li>
                  <li>• Risk-taking behaviors</li>
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
                <h3 className="text-lg font-semibold text-teal-600 mb-3">What if my teen doesn't want treatment?</h3>
                <p className="text-gray-700">
                  Resistance to treatment is common among teens with substance use issues. We use 
                  motivational interviewing techniques to help teens explore their own reasons for 
                  change. Often starting with harm reduction goals rather than complete abstinence 
                  can help engage reluctant teens.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">How do you maintain confidentiality with teens?</h3>
                <p className="text-gray-700">
                  Teens have confidentiality rights, but we balance this with parental involvement 
                  and safety concerns. We discuss confidentiality boundaries upfront and generally 
                  share progress updates and safety issues while protecting specific session content.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Do you require drug testing?</h3>
                <p className="text-gray-700">
                  Drug testing may be used as a therapeutic tool to support recovery goals and provide 
                  objective feedback, but it's not always required. When used, it's done collaboratively 
                  as part of the treatment plan, not punitively.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">What's the difference between experimentation and addiction?</h3>
                <p className="text-gray-700">
                  Experimentation is typically limited, social, and doesn't significantly impact 
                  functioning. Problematic use involves regular use, negative consequences, inability 
                  to control use, and continued use despite problems. We assess each teen individually.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">How do you handle co-occurring mental health issues?</h3>
                <p className="text-gray-700">
                  We provide integrated treatment addressing both substance use and mental health 
                  conditions simultaneously. This approach is more effective than treating conditions 
                  separately and leads to better long-term outcomes.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">What happens if my teen relapses?</h3>
                <p className="text-gray-700">
                  Relapse is often part of the recovery process, especially for teens. We view it as 
                  a learning opportunity, reassess the treatment plan, identify triggers that led to 
                  relapse, and adjust strategies. The therapeutic relationship continues supportively.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Do you work with schools and probation officers?</h3>
                <p className="text-gray-700">
                  With appropriate consent, we can coordinate with schools, probation officers, and 
                  other involved parties to ensure consistent support. We can provide documentation 
                  for court requirements while maintaining therapeutic boundaries.
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Recovery Success & What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Typical Recovery Milestones:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Reduced or eliminated substance use</li>
                  <li>• Improved family relationships and communication</li>
                  <li>• Better academic performance and school attendance</li>
                  <li>• Enhanced emotional regulation and coping skills</li>
                  <li>• Healthier peer relationships and social choices</li>
                  <li>• Increased honesty and trust with family</li>
                  <li>• Better decision-making and risk assessment</li>
                  <li>• Improved physical and mental health</li>
                  <li>• Greater motivation and future planning</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Our Treatment Success Metrics:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">76%</p>
                    <p className="text-sm text-gray-700">of teens complete their treatment program successfully</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">68%</p>
                    <p className="text-sm text-gray-700">maintain sobriety 6 months post-treatment</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">84%</p>
                    <p className="text-sm text-gray-700">show improved family relationships</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">79%</p>
                    <p className="text-sm text-gray-700">demonstrate improved academic performance</p>
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
            serviceName="Substance Abuse"
            serviceTitle="Substance Abuse Treatment"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Recovery is Possible - Get Help Today</h2>
            <p className="text-xl mb-8 opacity-95">
              If your teenager is struggling with substance use, early intervention makes a significant 
              difference. Our specialized treatment team is here to provide the compassionate, 
              evidence-based care your family needs for lasting recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-cream-100 text-navy-800 px-8 py-4 rounded-md hover:bg-cream-200 transition-colors font-semibold text-lg"
              >
                Start Treatment Today
              </Link>
              <Link
                href="tel:918-391-3606"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-navy-800 transition-colors font-semibold text-lg"
              >
                Call (918) 391-3606
              </Link>
            </div>
            <p className="text-lg mt-6 opacity-90">
              Confidential assessments • Crisis intervention available 24/7 • Medicaid & SoonerCare accepted
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}