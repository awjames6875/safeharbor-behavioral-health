import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mental Health Crisis Help Tulsa | 24/7 Emergency Resources | SafeHarbor',
  description: 'Immediate mental health crisis help in Tulsa. 24/7 hotlines, pediatric psych ERs, suicide prevention resources. Call 988 or 911. We accept Medicaid.',
  keywords: [
    'mental health crisis Tulsa',
    'suicide prevention Tulsa',
    'pediatric psychiatric emergency Tulsa',
    'crisis help Tulsa children',
    'teen mental health emergency Tulsa',
    'Tulsa emergency mental health',
    'child psychiatry emergency Tulsa',
    'youth crisis intervention Tulsa'
  ],
  openGraph: {
    title: 'Mental Health Crisis Help Tulsa | SafeHarbor Behavioral Health',
    description: 'Immediate mental health crisis help in Tulsa. 24/7 hotlines, pediatric psychiatric emergency rooms, and comprehensive crisis resources.',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://safeharbortulsa.com/resources/crisis',
  },
}

export default function CrisisResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mental Health Crisis Help in Tulsa
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Available 24/7 - You Are Not Alone
            </p>
            
            {/* Emergency Alert Box */}
            <div className="bg-white text-red-700 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <div className="text-2xl font-bold mb-4">
                If someone is in immediate danger, call 911
              </div>
              <div className="text-3xl font-bold mb-2">
                For Crisis Support: Call or Text 988
              </div>
              <div className="text-lg">
                Suicide & Crisis Lifeline - Free, Confidential, 24/7
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:988" 
                className="inline-block bg-white text-red-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-xl"
              >
                Call 988 Now
              </a>
              <a 
                href="tel:911" 
                className="inline-block bg-red-800 text-white px-8 py-4 rounded-lg hover:bg-red-900 transition-colors font-bold text-xl"
              >
                Call 911 for Emergencies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Help Numbers */}
      <section className="py-12 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
              Immediate Help Numbers - Available 24/7
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 988 Crisis Line */}
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-red-600 mb-2">988 Suicide & Crisis Lifeline</h3>
                <p className="text-gray-600 mb-4">Free, confidential crisis counseling 24/7</p>
                <a href="tel:988" className="block bg-red-600 text-white text-center py-3 px-4 rounded-md hover:bg-red-700 transition-colors font-semibold">
                  Call or Text 988
                </a>
              </div>

              {/* SafeHarbor Crisis Line */}
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-teal-600">
                <h3 className="text-xl font-bold text-teal-600 mb-2">SafeHarbor Crisis Line</h3>
                <p className="text-gray-600 mb-4">Direct access to our crisis specialists</p>
                <a href="tel:9185535746" className="block bg-teal-600 text-white text-center py-3 px-4 rounded-md hover:bg-teal-700 transition-colors font-semibold">
                  (918) 553-5746
                </a>
              </div>

              {/* COPES Tulsa */}
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-600 mb-2">COPES Tulsa</h3>
                <p className="text-gray-600 mb-4">Comprehensive psychiatric emergency services</p>
                <a href="tel:9187444800" className="block bg-blue-600 text-white text-center py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-semibold">
                  (918) 744-4800
                </a>
              </div>

              {/* Trevor Project */}
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-purple-600 mb-2">Trevor Project (LGBTQ)</h3>
                <p className="text-gray-600 mb-4">Crisis support for LGBTQ youth</p>
                <a href="tel:18664887386" className="block bg-purple-600 text-white text-center py-3 px-4 rounded-md hover:bg-purple-700 transition-colors font-semibold">
                  1-866-488-7386
                </a>
              </div>

              {/* Crisis Text Line */}
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-green-600 mb-2">Crisis Text Line</h3>
                <p className="text-gray-600 mb-4">Text with a trained crisis counselor</p>
                <a href="sms:741741" className="block bg-green-600 text-white text-center py-3 px-4 rounded-md hover:bg-green-700 transition-colors font-semibold">
                  Text "HOME" to 741741
                </a>
              </div>

              {/* Emergency Services */}
              <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-red-800">
                <h3 className="text-xl font-bold text-red-800 mb-2">Emergency Services</h3>
                <p className="text-gray-600 mb-4">For immediate danger or medical emergency</p>
                <a href="tel:911" className="block bg-red-800 text-white text-center py-3 px-4 rounded-md hover:bg-red-900 transition-colors font-semibold">
                  Call 911
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Mental Health Crisis */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-8">What is a Mental Health Crisis?</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A mental health crisis occurs when a person's thoughts, emotions, or behaviors put them at risk of 
                hurting themselves or others, or prevent them from caring for themselves effectively. It's different 
                from everyday stress or sadness - it's an acute situation that requires immediate attention and 
                professional intervention.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Crisis situations can develop gradually or suddenly, and they affect people of all ages. Recognizing 
                the warning signs early and knowing how to respond can save lives and help your loved one get the 
                support they need.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Warning Signs in Children */}
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-red-800 mb-4">Warning Signs in Children</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Extreme mood swings or sudden personality changes
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Persistent sadness or withdrawal from activities
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Talking about death, dying, or "going away"
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Self-harm behaviors (hitting, scratching, cutting)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Extreme fear or anxiety that interferes with daily life
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Aggressive behavior toward others or animals
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Significant changes in sleeping or eating patterns
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    Loss of interest in friends, family, or favorite activities
                  </li>
                </ul>
              </div>

              {/* Warning Signs in Teens */}
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Warning Signs in Teens</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Direct or indirect talk about suicide or self-harm
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Giving away possessions or saying goodbye
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Increased use of alcohol or drugs
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Reckless or impulsive behavior
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Extreme hopelessness or feelings of being trapped
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Sudden improvement after a period of depression (can indicate decision to end life)
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Withdrawal from family and friends
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Dramatic decline in academic performance
                  </li>
                </ul>
              </div>
            </div>

            {/* When to Seek Help */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <h3 className="text-2xl font-bold text-yellow-800 mb-4">When to Seek Immediate Help</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-yellow-800 mb-2">Call 911 if:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Active suicide attempt in progress</li>
                    <li>• Serious threat of violence to others</li>
                    <li>• Severe psychotic episode with dangerous behavior</li>
                    <li>• Medical emergency combined with mental health crisis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-800 mb-2">Call 988 or Crisis Line if:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Suicidal thoughts without immediate plan</li>
                    <li>• Severe depression or anxiety</li>
                    <li>• Need to talk through crisis feelings</li>
                    <li>• Support for family members in crisis</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Crisis vs Emergency */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Understanding Crisis vs. Emergency</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-blue-700 mb-2">Mental Health Crisis:</h4>
                  <p className="text-gray-700 mb-3">
                    A situation where someone is experiencing severe emotional distress but is not in immediate 
                    physical danger. They may have suicidal thoughts but no immediate plan or means.
                  </p>
                  <p className="text-sm text-blue-600 font-semibold">Response: Call 988, crisis line, or seek urgent care</p>
                </div>
                <div>
                  <h4 className="font-bold text-red-700 mb-2">Mental Health Emergency:</h4>
                  <p className="text-gray-700 mb-3">
                    A situation where someone is in immediate danger of hurting themselves or others, or is unable 
                    to care for their basic safety needs due to their mental state.
                  </p>
                  <p className="text-sm text-red-600 font-semibold">Response: Call 911 immediately</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tulsa Emergency Rooms */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
              Tulsa Emergency Rooms with Pediatric Psychiatric Services
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Saint Francis Children's Hospital */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold text-teal-700 mb-4">Saint Francis Children's Hospital</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-gray-500 mr-2">📍</span>
                    <div>
                      <p className="font-semibold">6161 S Yale Ave, Tulsa, OK 74136</p>
                      <p className="text-gray-600">(918) 502-6000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-teal-200 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Pediatric Psychiatric Services:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 24/7 pediatric emergency care</li>
                      <li>• On-call child psychiatrists</li>
                      <li>• Specialized crisis intervention team</li>
                      <li>• Inpatient psychiatric unit for children</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <h4 className="font-semibold text-blue-800 mb-1">Wait Time Tips:</h4>
                    <p className="text-sm text-blue-700">
                      Call ahead if not life-threatening. Peak times: evenings and weekends. 
                      Bring insurance cards and medication list.
                    </p>
                  </div>
                </div>
              </div>

              {/* Hillcrest Medical Center */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold text-teal-700 mb-4">Hillcrest Medical Center</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-gray-500 mr-2">📍</span>
                    <div>
                      <p className="font-semibold">1120 S Utica Ave, Tulsa, OK 74104</p>
                      <p className="text-gray-600">(918) 579-1000</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-teal-200 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Youth Crisis Stabilization:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Emergency psychiatric evaluations</li>
                      <li>• Youth crisis stabilization unit</li>
                      <li>• 24/7 mental health professionals</li>
                      <li>• Outpatient crisis services</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <h4 className="font-semibold text-green-800 mb-1">Special Features:</h4>
                    <p className="text-sm text-green-700">
                      Dedicated youth crisis area. Social workers available. 
                      Coordinates with local schools and services.
                    </p>
                  </div>
                </div>
              </div>

              {/* St. John Medical Center */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold text-teal-700 mb-4">St. John Medical Center</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-gray-500 mr-2">📍</span>
                    <div>
                      <p className="font-semibold">1923 S Utica Ave, Tulsa, OK 74104</p>
                      <p className="text-gray-600">(918) 744-2345</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-teal-200 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Pediatric Emergency Services:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Pediatric emergency department</li>
                      <li>• Mental health crisis assessment</li>
                      <li>• Child and adolescent specialists</li>
                      <li>• Family support services</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <h4 className="font-semibold text-purple-800 mb-1">Family Support:</h4>
                    <p className="text-sm text-purple-700">
                      Family waiting areas designed for comfort. Chaplain services available. 
                      Discharge planning specialists on staff.
                    </p>
                  </div>
                </div>
              </div>

              {/* OSU Medical Center */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-2xl font-bold text-teal-700 mb-4">OSU Medical Center</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-gray-500 mr-2">📍</span>
                    <div>
                      <p className="font-semibold">744 W 9th St, Tulsa, OK 74127</p>
                      <p className="text-gray-600">(918) 588-2300</p>
                    </div>
                  </div>
                  <div className="border-l-4 border-teal-200 pl-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Psychiatric Emergency Services:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Adult and pediatric psychiatric care</li>
                      <li>• 24/7 emergency psychiatric evaluations</li>
                      <li>• Crisis intervention specialists</li>
                      <li>• Inpatient psychiatric services</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-3 rounded">
                    <h4 className="font-semibold text-orange-800 mb-1">Academic Medical Center:</h4>
                    <p className="text-sm text-orange-700">
                      Teaching hospital with latest protocols. Research-based treatment approaches. 
                      Connects to OSU psychiatric residency program.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-800 mb-3">Important Notes for ER Visits:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                <li>• Bring insurance cards and ID</li>
                <li>• List of current medications</li>
                <li>• Recent medical records if available</li>
                <li>• Contact information for current providers</li>
                <li>• Be prepared for potential wait times</li>
                <li>• Advocate for your child's needs</li>
                <li>• Ask about discharge planning early</li>
                <li>• Request social worker consultation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to Do if Child is Suicidal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-8">What to Do If Your Child is Suicidal</h2>
            
            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <h3 className="text-xl font-bold text-red-800 mb-4">Take Every Threat Seriously</h3>
              <p className="text-gray-700">
                Even if your child has talked about suicide before, or if you think they're "just seeking attention," 
                every mention of suicide should be treated as a serious cry for help. Many suicide attempts are preceded 
                by direct or indirect warnings.
              </p>
            </div>

            <div className="space-y-8">
              {/* Immediate Safety Steps */}
              <div className="bg-white border border-red-200 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-red-700 mb-4">Immediate Safety Steps</h3>
                <ol className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 mt-1">1</span>
                    <div>
                      <h4 className="font-semibold mb-1">Stay Calm and Listen</h4>
                      <p>Take a deep breath. Your child needs you to be steady right now. Listen without judgment and avoid getting angry or panicked.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 mt-1">2</span>
                    <div>
                      <h4 className="font-semibold mb-1">Ask Direct Questions</h4>
                      <p>Ask specifically: "Are you thinking about suicide?" "Do you have a plan?" "When?" Be direct - you won't give them the idea.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 mt-1">3</span>
                    <div>
                      <h4 className="font-semibold mb-1">Remove Means of Self-Harm</h4>
                      <p>Immediately secure or remove any potential means: medications, weapons, sharp objects, ropes, belts. Don't wait.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 mt-1">4</span>
                    <div>
                      <h4 className="font-semibold mb-1">Do Not Leave Them Alone</h4>
                      <p>Stay with your child or arrange for a responsible adult to supervise them at all times until professional help is obtained.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-700 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3 mt-1">5</span>
                    <div>
                      <h4 className="font-semibold mb-1">Get Professional Help Immediately</h4>
                      <p>Call 988, take them to the ER, or call their mental health provider. Don't wait until Monday or try to handle it alone.</p>
                    </div>
                  </li>
                </ol>
              </div>

              {/* How to Talk to Suicidal Child */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-4">What TO Say</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      "I love you and I'm here for you."
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      "You are important to me and many others."
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      "I'm glad you told me. That took courage."
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      "We're going to get through this together."
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      "Let's get you some help right now."
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      "These feelings can change with help."
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      "You matter to me."
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-4">What NOT to Say</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      "You have so much to live for."
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      "Suicide is selfish."
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      "Things could be worse."
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      "You're just trying to get attention."
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      "Think about what this would do to us."
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      "Just snap out of it."
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      "Promise me you won't hurt yourself."
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Safety Plan */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Crisis Safety Plan Template</h2>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <p className="text-gray-600 mb-6">
                A safety plan is a written plan that helps your child recognize warning signs and know what to do during a crisis. 
                Create this plan together when your child is stable and thinking clearly.
              </p>

              <div className="space-y-8">
                {/* Warning Signs */}
                <div className="border-l-4 border-yellow-400 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">1. Warning Signs to Watch For</h3>
                  <p className="text-gray-600 mb-3">Help your child identify their personal warning signs:</p>
                  <div className="bg-yellow-50 p-4 rounded">
                    <ul className="space-y-2 text-gray-700">
                      <li>• Thoughts: ________________________________</li>
                      <li>• Feelings: ________________________________</li>
                      <li>• Behaviors: ______________________________</li>
                      <li>• Physical symptoms: _______________________</li>
                      <li>• Situations that trigger me: _______________</li>
                    </ul>
                  </div>
                </div>

                {/* Coping Strategies */}
                <div className="border-l-4 border-green-400 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">2. Coping Strategies I Can Use</h3>
                  <p className="text-gray-600 mb-3">Things your child can do on their own to feel better:</p>
                  <div className="bg-green-50 p-4 rounded">
                    <ul className="space-y-2 text-gray-700">
                      <li>• ________________________________________</li>
                      <li>• ________________________________________</li>
                      <li>• ________________________________________</li>
                      <li>• ________________________________________</li>
                      <li>• ________________________________________</li>
                    </ul>
                  </div>
                </div>

                {/* People to Call */}
                <div className="border-l-4 border-blue-400 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">3. People I Can Call for Support</h3>
                  <div className="bg-blue-50 p-4 rounded">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold">Name: _______________________</p>
                        <p>Phone: ______________________</p>
                        <br />
                        <p className="font-semibold">Name: _______________________</p>
                        <p>Phone: ______________________</p>
                      </div>
                      <div>
                        <p className="font-semibold">Name: _______________________</p>
                        <p>Phone: ______________________</p>
                        <br />
                        <p className="font-semibold">Name: _______________________</p>
                        <p>Phone: ______________________</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professionals */}
                <div className="border-l-4 border-purple-400 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">4. Mental Health Professionals to Contact</h3>
                  <div className="bg-purple-50 p-4 rounded">
                    <p className="font-semibold">Therapist: ___________________________</p>
                    <p>Phone: ___________________________________</p>
                    <br />
                    <p className="font-semibold">Psychiatrist: __________________________</p>
                    <p>Phone: ___________________________________</p>
                    <br />
                    <p className="font-semibold">Crisis Service: SafeHarbor Crisis Line</p>
                    <p>Phone: (918) 553-5746</p>
                  </div>
                </div>

                {/* Safe Environment */}
                <div className="border-l-4 border-red-400 pl-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">5. Making the Environment Safe</h3>
                  <div className="bg-red-50 p-4 rounded">
                    <p className="text-gray-700 mb-3">Items removed or secured:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Medications secured by: ___________________</li>
                      <li>• Sharp objects removed by: _________________</li>
                      <li>• Other means secured: ____________________</li>
                      <li>• Safe location to go: ______________________</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold">
                    Download Printable Safety Plan Template
                  </button>
                  <p className="text-sm text-gray-500 mt-2">Keep copies at home, school, and with your child</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Tulsa Crisis Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
              Local Tulsa Crisis Resources
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* COPES */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-teal-700 mb-3">COPES Tulsa</h3>
                <p className="text-gray-600 mb-4">Comprehensive Outpatient Psychiatric Emergency Services</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Phone:</strong> (918) 744-4800</p>
                  <p><strong>Address:</strong> 1620 E 12th St, Tulsa, OK</p>
                  <p><strong>Services:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                    <li>24/7 crisis assessment</li>
                    <li>Mobile crisis response</li>
                    <li>Crisis stabilization</li>
                    <li>Safety planning</li>
                  </ul>
                </div>
              </div>

              {/* Family & Children's Services */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-teal-700 mb-3">Family & Children's Services</h3>
                <p className="text-gray-600 mb-4">Crisis intervention and family support</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Crisis Line:</strong> (918) 587-9471</p>
                  <p><strong>Address:</strong> 650 S Peoria Ave, Tulsa, OK</p>
                  <p><strong>Services:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                    <li>Youth crisis services</li>
                    <li>Family counseling</li>
                    <li>Case management</li>
                    <li>Emergency shelter</li>
                  </ul>
                </div>
              </div>

              {/* Mental Health Association Oklahoma */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-teal-700 mb-3">Mental Health Association Oklahoma</h3>
                <p className="text-gray-600 mb-4">Mental health advocacy and support</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Phone:</strong> (918) 585-1213</p>
                  <p><strong>Address:</strong> 1140 S Yale Ave, Tulsa, OK</p>
                  <p><strong>Services:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                    <li>Support groups</li>
                    <li>Educational programs</li>
                    <li>Resource navigation</li>
                    <li>Advocacy services</li>
                  </ul>
                </div>
              </div>

              {/* Youth Services of Tulsa */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-teal-700 mb-3">Youth Services of Tulsa</h3>
                <p className="text-gray-600 mb-4">Crisis services for youth and families</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Phone:</strong> (918) 582-0061</p>
                  <p><strong>Crisis:</strong> (918) 744-9966</p>
                  <p><strong>Address:</strong> 3633 E Indian School Rd, Tulsa, OK</p>
                  <p><strong>Services:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                    <li>Youth shelter services</li>
                    <li>Crisis counseling</li>
                    <li>Transitional living</li>
                    <li>Family reunification</li>
                  </ul>
                </div>
              </div>

              {/* Tulsa Police Crisis Intervention */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-teal-700 mb-3">Tulsa Police Crisis Intervention Team</h3>
                <p className="text-gray-600 mb-4">Specialized police response for mental health crises</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Phone:</strong> (918) 596-9222 (non-emergency)</p>
                  <p><strong>Emergency:</strong> 911 (ask for CIT officer)</p>
                  <p><strong>Services:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                    <li>Crisis de-escalation</li>
                    <li>Mental health trained officers</li>
                    <li>Connection to services</li>
                    <li>Follow-up support</li>
                  </ul>
                </div>
              </div>

              {/* Parkside Psychiatric */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-teal-700 mb-3">Parkside Psychiatric Hospital</h3>
                <p className="text-gray-600 mb-4">Inpatient psychiatric care for children and adults</p>
                <div className="space-y-2 text-sm">
                  <p><strong>Phone:</strong> (918) 588-8888</p>
                  <p><strong>Address:</strong> 1620 E 12th St, Tulsa, OK</p>
                  <p><strong>Services:</strong></p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
                    <li>Inpatient treatment</li>
                    <li>Partial hospitalization</li>
                    <li>Intensive outpatient</li>
                    <li>Child/adolescent programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* After the Crisis */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-8">After the Crisis: Recovery and Follow-up</h2>
            
            <div className="space-y-8">
              {/* Immediate Follow-up */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-teal-700 mb-4">Immediate Follow-up Care (24-48 hours)</h3>
                <p className="text-gray-600 mb-4">
                  The period immediately after a mental health crisis is critical. Your child may feel embarrassed, 
                  scared, or even angry about what happened. This is normal, but professional follow-up is essential.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Essential Steps:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Schedule appointment with mental health provider</li>
                      <li>• Follow medication instructions exactly</li>
                      <li>• Remove or secure potential means of self-harm</li>
                      <li>• Arrange for supervision (don't leave alone)</li>
                      <li>• Contact school/work about absence or needs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Watch For:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Return of suicidal thoughts</li>
                      <li>• Increased hopelessness or agitation</li>
                      <li>• Refusal to take medication</li>
                      <li>• Isolation or withdrawal</li>
                      <li>• Substance use</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Finding Ongoing Therapy */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-teal-700 mb-4">Finding Ongoing Therapy in Tulsa</h3>
                <p className="text-gray-600 mb-4">
                  Consistent therapy is crucial for preventing future crises and building long-term mental health.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border-l-4 border-teal-200 pl-4">
                    <h4 className="font-bold text-gray-800 mb-2">Child/Teen Specialists in Tulsa:</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• SafeHarbor Behavioral Health - (918) 555-0123</li>
                      <li>• Children's Medical Center - (918) 584-1351</li>
                      <li>• Laureate Psychiatric Hospital - (918) 481-4000</li>
                      <li>• Family & Children's Services - (918) 587-9471</li>
                      <li>• Saint Francis Behavioral Health - (918) 494-2100</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-blue-200 pl-4">
                    <h4 className="font-bold text-gray-800 mb-2">Questions to Ask Providers:</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Experience with youth crisis recovery</li>
                      <li>• Treatment approaches used (CBT, DBT, etc.)</li>
                      <li>• Availability for crisis appointments</li>
                      <li>• Insurance accepted/sliding scale fees</li>
                      <li>• Family involvement in treatment</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-teal-50 p-4 rounded">
                  <h4 className="font-bold text-teal-800 mb-2">Insurance and Payment Options:</h4>
                  <p className="text-gray-700 text-sm">
                    SafeHarbor accepts most major insurance plans including Medicaid, SoonerCare, Blue Cross Blue Shield, 
                    Aetna, and others. We also offer sliding scale fees based on income. Call (918) 555-0123 to verify 
                    your coverage and schedule an appointment.
                  </p>
                </div>
              </div>

              {/* Supporting Recovery */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-teal-700 mb-4">Supporting Your Child's Recovery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Creating a Supportive Home Environment:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Maintain routines and structure</li>
                      <li>• Encourage healthy habits (sleep, exercise, nutrition)</li>
                      <li>• Limit stress and overstimulation</li>
                      <li>• Practice open, non-judgmental communication</li>
                      <li>• Celebrate small improvements and victories</li>
                      <li>• Be patient - recovery takes time</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Building Long-term Resilience:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Teach healthy coping skills</li>
                      <li>• Encourage social connections</li>
                      <li>• Help identify triggers and warning signs</li>
                      <li>• Support involvement in meaningful activities</li>
                      <li>• Regular mental health check-ins</li>
                      <li>• Family therapy when recommended</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Return to School */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-teal-700 mb-4">Return to School Planning</h3>
                <p className="text-gray-600 mb-4">
                  Returning to school after a mental health crisis requires careful planning and communication 
                  with school personnel to ensure your child's continued safety and success.
                </p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-yellow-300 pl-4">
                    <h4 className="font-bold text-gray-800 mb-2">Before Returning to School:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Get clearance from mental health provider</li>
                      <li>• Meet with school counselor or social worker</li>
                      <li>• Discuss any needed accommodations (504 plan, IEP)</li>
                      <li>• Plan for gradual reintegration if needed</li>
                      <li>• Ensure school has emergency contact information</li>
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-green-300 pl-4">
                    <h4 className="font-bold text-gray-800 mb-2">School Support Options:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Modified schedule or reduced course load</li>
                      <li>• Access to school counselor</li>
                      <li>• Quiet space for breaks when needed</li>
                      <li>• Extended time for assignments/tests</li>
                      <li>• Communication system between home and school</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Support for Parents and Caregivers</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3">You Matter Too</h3>
              <p className="text-gray-700">
                Caring for a child in mental health crisis is emotionally and physically exhausting. Taking care of 
                yourself isn't selfish - it's necessary. You can't pour from an empty cup, and your child needs you 
                to be strong and healthy.
              </p>
            </div>

            <div className="space-y-8">
              {/* Self-Care */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-teal-700 mb-4">Taking Care of Yourself</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Maintain your own therapy or counseling</li>
                    <li>• Take breaks when possible - ask for help</li>
                    <li>• Keep up with your physical health</li>
                    <li>• Stay connected with supportive friends/family</li>
                    <li>• Practice stress-reduction techniques</li>
                    <li>• Set boundaries and realistic expectations</li>
                    <li>• Don't blame yourself for your child's illness</li>
                    <li>• Celebrate small victories</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-teal-700 mb-4">When to Seek Your Own Help</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Persistent sadness or hopelessness</li>
                    <li>• Excessive worry or anxiety</li>
                    <li>• Sleep or appetite changes</li>
                    <li>• Difficulty functioning at work/home</li>
                    <li>• Thoughts of self-harm</li>
                    <li>• Substance use to cope</li>
                    <li>• Feeling overwhelmed or burned out</li>
                    <li>• Relationship problems</li>
                  </ul>
                </div>
              </div>

              {/* Support Groups */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-2xl font-bold text-teal-700 mb-4">Local Support Groups in Tulsa</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">NAMI Tulsa (National Alliance on Mental Illness)</h4>
                    <p className="text-gray-600 mb-2">Support groups for families affected by mental illness</p>
                    <p className="text-sm text-gray-500">Phone: (918) 587-0006</p>
                    <p className="text-sm text-gray-500">Meetings: Various locations, weekly</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Survivors of Suicide Support Group</h4>
                    <p className="text-gray-600 mb-2">For families who have lost someone to suicide</p>
                    <p className="text-sm text-gray-500">Location: Various Tulsa locations</p>
                    <p className="text-sm text-gray-500">Contact: Mental Health Association OK</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">Parents of Children with Mental Illness</h4>
                    <p className="text-gray-600 mb-2">Specific support for parents navigating children's mental health</p>
                    <p className="text-sm text-gray-500">Contact: Family & Children's Services</p>
                    <p className="text-sm text-gray-500">Phone: (918) 587-9471</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">SafeHarbor Family Support Group</h4>
                    <p className="text-gray-600 mb-2">Monthly meetings for SafeHarbor families</p>
                    <p className="text-sm text-gray-500">Phone: (918) 555-0123</p>
                    <p className="text-sm text-gray-500">Second Thursday each month, 6:30 PM</p>
                  </div>
                </div>
              </div>

              {/* Online Resources */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Online Resources and Support</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">Educational Resources:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• NAMI.org - Mental health education</li>
                      <li>• American Foundation for Suicide Prevention</li>
                      <li>• Child Mind Institute resources</li>
                      <li>• JED Campus mental health resources</li>
                      <li>• Crisis & Trauma Resource Institute</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700 mb-2">Online Support Communities:</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• NAMI online support groups</li>
                      <li>• 7 Cups peer support chat</li>
                      <li>• Parents of suicide attempt survivors groups</li>
                      <li>• Reddit mental health family support</li>
                      <li>• Facebook support groups (moderated)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Respite Care */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-2xl font-bold text-teal-700 mb-4">Respite Care Options</h3>
                <p className="text-gray-600 mb-4">
                  Sometimes you need a break to recharge. Respite care provides temporary relief while ensuring 
                  your child remains safe and supervised.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Professional Respite Services:</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Easter Seals respite program</li>
                      <li>• Family & Children's Services respite</li>
                      <li>• Youth Services of Tulsa programs</li>
                      <li>• Private respite care providers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Informal Respite Options:</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Trusted family members or friends</li>
                      <li>• Other parents in support groups</li>
                      <li>• Church or community volunteers</li>
                      <li>• Therapeutic mentor programs</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-yellow-50 rounded">
                  <p className="text-sm text-yellow-800">
                    <strong>Important:</strong> Always ensure respite caregivers understand your child's condition, 
                    safety plan, medications, and have emergency contact information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Strategies */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-900 mb-8">Prevention Strategies: Building Long-term Resilience</h2>
            
            <div className="space-y-8">
              {/* Building Resilience */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Building Resilience in Children and Teens</h3>
                <p className="text-gray-600 mb-6">
                  Resilience is the ability to bounce back from adversity, adapt to challenge, and grow stronger 
                  through difficult experiences. It's not something children are born with - it's developed through 
                  supportive relationships and learned skills.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-green-300 pl-4">
                    <h4 className="font-bold text-gray-800 mb-3">Emotional Resilience Skills:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Teaching emotion identification and naming</li>
                      <li>• Healthy coping strategies (deep breathing, mindfulness)</li>
                      <li>• Problem-solving skills</li>
                      <li>• Stress management techniques</li>
                      <li>• Building frustration tolerance</li>
                      <li>• Developing self-compassion</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-blue-300 pl-4">
                    <h4 className="font-bold text-gray-800 mb-3">Social Resilience Skills:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Building strong, supportive relationships</li>
                      <li>• Communication and conflict resolution</li>
                      <li>• Empathy and perspective-taking</li>
                      <li>• Asking for help when needed</li>
                      <li>• Building a sense of belonging</li>
                      <li>• Community involvement and service</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Early Warning Signs */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Recognizing Early Warning Signs</h3>
                <p className="text-gray-600 mb-4">
                  Prevention is most effective when we can identify and address problems before they become crises. 
                  Learn to recognize subtle changes that might indicate your child is struggling.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-yellow-50 p-4 rounded">
                    <h4 className="font-bold text-yellow-800 mb-2">Behavioral Changes:</h4>
                    <ul className="space-y-1 text-yellow-700 text-sm">
                      <li>• Changes in sleep patterns</li>
                      <li>• Appetite changes</li>
                      <li>• Withdrawal from activities</li>
                      <li>• Decline in school performance</li>
                      <li>• Increased irritability</li>
                      <li>• Risk-taking behaviors</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded">
                    <h4 className="font-bold text-orange-800 mb-2">Emotional Changes:</h4>
                    <ul className="space-y-1 text-orange-700 text-sm">
                      <li>• Persistent sadness</li>
                      <li>• Increased anxiety or worry</li>
                      <li>• Mood swings</li>
                      <li>• Feelings of hopelessness</li>
                      <li>• Loss of interest in things they used to enjoy</li>
                      <li>• Excessive guilt or self-blame</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded">
                    <h4 className="font-bold text-red-800 mb-2">Social Changes:</h4>
                    <ul className="space-y-1 text-red-700 text-sm">
                      <li>• Withdrawal from family/friends</li>
                      <li>• Problems with peers</li>
                      <li>• Difficulty maintaining relationships</li>
                      <li>• Increased conflict at home</li>
                      <li>• Changes in friend groups</li>
                      <li>• Social media changes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Creating Support Systems */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Creating a Strong Support System</h3>
                <p className="text-gray-600 mb-6">
                  A strong support system acts as a safety net, providing multiple people and resources your child 
                  can turn to when facing challenges. The more connections, the better.
                </p>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3">Family Support Network:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Extended family members who understand</li>
                        <li>• Family friends your child trusts</li>
                        <li>• Siblings (with appropriate boundaries)</li>
                        <li>• Family mental health advocate/navigator</li>
                        <li>• Consistent family routines and traditions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3">Community Support Network:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>• School counselors and trusted teachers</li>
                        <li>• Mental health professionals</li>
                        <li>• Youth group leaders or coaches</li>
                        <li>• Mentors and positive adult role models</li>
                        <li>• Peer support groups</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded">
                    <h4 className="font-bold text-teal-800 mb-2">Building Your Support Team Checklist:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-1 text-teal-700 text-sm">
                        <li>☐ Primary therapist/counselor</li>
                        <li>☐ Psychiatrist (if needed)</li>
                        <li>☐ School counselor or social worker</li>
                        <li>☐ Pediatrician familiar with mental health</li>
                        <li>☐ Two trusted family friends</li>
                      </ul>
                      <ul className="space-y-1 text-teal-700 text-sm">
                        <li>☐ Supportive extended family member</li>
                        <li>☐ Crisis contact person</li>
                        <li>☐ Parent support group</li>
                        <li>☐ Emergency backup childcare</li>
                        <li>☐ Community mentor or coach</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Regular Check-ins */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-green-700 mb-4">Regular Mental Health Check-ins</h3>
                <p className="text-gray-600 mb-4">
                  Just like regular medical check-ups, consistent mental health check-ins help catch problems early 
                  and maintain overall wellbeing.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-green-400 pl-4">
                    <h4 className="font-bold text-gray-800 mb-3">Daily Check-ins (5 minutes):</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• "How are you feeling today?" (1-10 scale)</li>
                      <li>• "What was the best part of your day?"</li>
                      <li>• "What was challenging today?"</li>
                      <li>• "What are you looking forward to?"</li>
                      <li>• "Is there anything you need help with?"</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="font-bold text-gray-800 mb-3">Weekly Deeper Check-ins (15-20 minutes):</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Review the week's ups and downs</li>
                      <li>• Discuss any concerning patterns</li>
                      <li>• Plan for the coming week's challenges</li>
                      <li>• Review coping strategies that worked</li>
                      <li>• Adjust safety plan if needed</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded">
                  <h4 className="font-bold text-green-800 mb-2">Professional Check-ins Schedule:</h4>
                  <ul className="space-y-1 text-green-700 text-sm">
                    <li>• Therapy appointments: Weekly initially, then bi-weekly or monthly</li>
                    <li>• Psychiatrist visits: Monthly initially, then quarterly</li>
                    <li>• School counselor: Monthly or as needed</li>
                    <li>• Pediatrician: Annually, or more if concerns</li>
                    <li>• Crisis plan review: Every 6 months or after any incident</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact SafeHarbor Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">SafeHarbor Behavioral Health is Here to Help</h2>
            <p className="text-xl mb-8 opacity-90">
              Serving Tulsa families with compassionate, comprehensive mental health care
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Crisis Support Available 24/7</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Crisis Line:</p>
                    <a href="tel:9185535746" className="text-teal-300 hover:text-teal-200 text-lg">
                      (918) 553-5746
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold">Main Office:</p>
                    <a href="tel:9185550123" className="text-teal-300 hover:text-teal-200">
                      (918) 555-0123
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">We Accept Most Insurance</h3>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>• Medicaid & SoonerCare</li>
                  <li>• Blue Cross Blue Shield</li>
                  <li>• Aetna, United Healthcare</li>
                  <li>• Sliding scale fees available</li>
                  <li>• Payment plans offered</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:9185535746" 
                className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-bold text-lg"
              >
                Call Crisis Line Now
              </a>
              <a 
                href="/contact" 
                className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors font-bold text-lg"
              >
                Schedule Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Numbers Quick Reference */}
      <section className="py-8 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Emergency Numbers - Save to Your Phone</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <div className="text-center">
                <p className="text-sm opacity-90">Crisis & Suicide Prevention</p>
                <p className="text-2xl font-bold">988</p>
              </div>
              <div className="text-center">
                <p className="text-sm opacity-90">Life-Threatening Emergency</p>
                <p className="text-2xl font-bold">911</p>
              </div>
              <div className="text-center">
                <p className="text-sm opacity-90">SafeHarbor Crisis Line</p>
                <p className="text-2xl font-bold">(918) 553-5746</p>
              </div>
              <div className="text-center">
                <p className="text-sm opacity-90">Crisis Text Line</p>
                <p className="text-xl font-bold">Text HOME to 741741</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}