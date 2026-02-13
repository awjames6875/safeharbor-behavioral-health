import Link from 'next/link'
import ServiceContactForm from '@/components/ServiceContactForm'

export default function GroupTherapyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Group Therapy</h1>
            <p className="text-xl md:text-2xl opacity-95 mb-8">
              Find support, connection, and healing in our professionally-led therapy groups
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-cream-100 text-navy-800 px-8 py-3 rounded-md hover:bg-cream-200 transition-colors font-semibold"
              >
                Join a Group Today
              </Link>
              <p className="text-lg opacity-90 self-center">
                Medicaid & SoonerCare Accepted • Same-Week Appointments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Group Therapy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">What is Group Therapy?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Group therapy at SafeHarbor Behavioral Health provides a unique opportunity to heal and 
                grow alongside others who share similar experiences and challenges. Led by our licensed 
                therapists, these groups offer a safe, supportive environment where participants can 
                share their stories, learn from others, and develop new coping strategies together.
              </p>
              <p className="mb-6">
                Our therapeutic groups are carefully structured to maximize healing while maintaining 
                confidentiality and respect. We believe that there is immense power in shared experiences 
                and that often the most healing words come not just from therapists, but from peers who 
                truly understand what you're going through.
              </p>
              <p className="mb-6">
                Group therapy complements individual therapy beautifully, offering opportunities to 
                practice new skills in a supportive social setting, gain different perspectives on 
                challenges, and build lasting connections with others on similar healing journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Who Benefits from Group Therapy?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">People Experiencing:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Depression or persistent sadness</li>
                  <li>• Anxiety or worry</li>
                  <li>• Grief and loss</li>
                  <li>• Trauma or PTSD</li>
                  <li>• Social isolation or loneliness</li>
                  <li>• Relationship difficulties</li>
                  <li>• Life transitions and changes</li>
                  <li>• Stress and overwhelm</li>
                  <li>• Low self-esteem or confidence issues</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Those Looking For:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Connection with others who understand</li>
                  <li>• Different perspectives on their challenges</li>
                  <li>• Opportunities to help others heal</li>
                  <li>• Cost-effective therapy options</li>
                  <li>• Social skills practice</li>
                  <li>• Accountability and motivation</li>
                  <li>• Community and belonging</li>
                  <li>• Learning from others' successes</li>
                  <li>• Reducing stigma around mental health</li>
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Our Group Therapy Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Cognitive Behavioral Groups</h3>
                <p className="text-gray-700 text-sm">
                  CBT-based groups help participants identify and change negative thought patterns 
                  and behaviors while learning from peers' experiences and strategies.
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Process-Oriented Groups</h3>
                <p className="text-gray-700 text-sm">
                  These groups focus on interpersonal relationships and emotional processing, 
                  helping members understand patterns and improve communication skills.
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Skills-Based Groups</h3>
                <p className="text-gray-700 text-sm">
                  Focused on learning specific techniques like mindfulness, emotion regulation, 
                  distress tolerance, and interpersonal effectiveness.
                </p>
              </div>
            </div>
            <div className="bg-navy-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-navy-800 mb-4">Our Group Therapy Standards</h3>
              <p className="text-gray-700">
                All groups are led by licensed therapists with specialized training in group dynamics. 
                We maintain strict confidentiality, establish clear group guidelines, and ensure a 
                safe environment where all members feel heard and respected. Groups are kept small 
                (typically 6-10 members) to maximize participation and therapeutic benefit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">What to Expect in Group Therapy</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Initial Screening</h3>
                <p className="text-gray-700">
                  Before joining a group, you'll meet individually with the group therapist to ensure 
                  the group is a good fit for your needs and goals. We'll discuss expectations and 
                  answer any questions.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">First Group Session</h3>
                <p className="text-gray-700">
                  We'll review group guidelines, establish confidentiality agreements, and help you 
                  feel comfortable. The therapist will facilitate introductions and begin building 
                  group cohesion.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Ongoing Sessions</h3>
                <p className="text-gray-700">
                  Each session follows a structured format with check-ins, skill building or processing 
                  activities, and planning for the week ahead. You'll participate as much as you're 
                  comfortable with.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Progress and Growth</h3>
                <p className="text-gray-700">
                  Over time, you'll develop relationships with group members, practice new skills in 
                  a safe environment, and gain insights from both the therapist and your peers.
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
                    <p className="text-gray-700">90 minutes per group session</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Frequency</h3>
                    <p className="text-gray-700">Weekly sessions, same day and time each week</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Group Duration</h3>
                    <p className="text-gray-700">Most groups run 10-16 weeks, some are ongoing</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Group Size</h3>
                    <p className="text-gray-700">6-10 members for optimal participation</p>
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
                    Group therapy is often more affordable than individual therapy and is typically 
                    covered by insurance. Contact us to verify your benefits and discuss payment options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Groups Available */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Current Groups Available</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Teen Groups (Ages 13-18)</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Teen Anxiety Management Group</li>
                  <li>• Teen Depression Support Group</li>
                  <li>• Social Skills Group for Teens</li>
                  <li>• Teen Trauma Recovery Group</li>
                  <li>• Adolescent DBT Skills Group</li>
                  <li>• Teen Grief and Loss Support</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Adult Groups</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Depression Support Group</li>
                  <li>• Anxiety and Panic Management</li>
                  <li>• Trauma Recovery and PTSD</li>
                  <li>• Mindfulness-Based Stress Reduction</li>
                  <li>• Young Adult Transitions (18-25)</li>
                  <li>• Grief and Bereavement Support</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Group schedules vary by program. Some groups are open enrollment while others are closed groups 
                that start together. Contact us to learn about current openings and upcoming group start dates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Age-Appropriate Considerations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Age-Specific Group Considerations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-800 mb-4">Teen Groups (13-18)</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Age-appropriate topics and examples</li>
                  <li>• Focus on peer relationships and school stress</li>
                  <li>• Technology and social media influences</li>
                  <li>• Identity development and future planning</li>
                  <li>• Family dynamics and independence</li>
                  <li>• Activities that engage adolescent interests</li>
                  <li>• Confidentiality boundaries with parents</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-800 mb-4">Young Adult Groups (18-25)</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Transition to independence challenges</li>
                  <li>• Career and educational decisions</li>
                  <li>• Dating and intimate relationships</li>
                  <li>• Financial stress and responsibility</li>
                  <li>• Finding purpose and direction</li>
                  <li>• Building adult friendships</li>
                  <li>• Managing family expectations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Address */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Conditions We Address in Group Therapy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Mood Disorders</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Major depression</li>
                  <li>• Persistent depressive disorder</li>
                  <li>• Seasonal affective disorder</li>
                  <li>• Bipolar disorder</li>
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
                  <li>• Post-traumatic stress disorder</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Life Challenges</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Grief and loss</li>
                  <li>• Relationship difficulties</li>
                  <li>• Life transitions</li>
                  <li>• Chronic stress</li>
                  <li>• Low self-esteem</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">What if I'm too shy to participate in group therapy?</h3>
                <p className="text-gray-700">
                  It's completely normal to feel nervous about group therapy. You can participate at your 
                  own comfort level - listening is participating too. Most people find that their anxiety 
                  decreases as they get to know the group members and see that everyone is supportive.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Is everything shared in group therapy confidential?</h3>
                <p className="text-gray-700">
                  Yes, group therapy follows strict confidentiality rules. All members sign confidentiality 
                  agreements, and therapists are bound by professional ethics. What's shared in group stays 
                  in group, just like individual therapy.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Can I do both individual and group therapy?</h3>
                <p className="text-gray-700">
                  Absolutely! Many people find that combining individual and group therapy is highly effective. 
                  Individual therapy allows for personal focus while group therapy provides community support 
                  and practice opportunities.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">What if I don't like my group or it's not helping?</h3>
                <p className="text-gray-700">
                  It's important to give group therapy a few sessions to see if it's a good fit. If after 
                  several sessions you feel it's not helpful, we can discuss other options including different 
                  groups or individual therapy approaches.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">How do you handle conflict within the group?</h3>
                <p className="text-gray-700">
                  Conflict is actually a normal part of group dynamics and can be therapeutic when handled 
                  properly. Our therapists are trained to facilitate healthy conflict resolution and use 
                  these moments as learning opportunities for all group members.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">What happens if I miss group sessions?</h3>
                <p className="text-gray-700">
                  Regular attendance is important for group cohesion and your progress. We understand life 
                  happens, but we ask members to commit to consistent attendance. Excessive absences may 
                  require discussion about continued group participation.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Are there any age restrictions for groups?</h3>
                <p className="text-gray-700">
                  Yes, our groups are age-specific to ensure appropriate content and peer connections. 
                  We have separate groups for teens (13-18), young adults (18-25), and adults (25+). 
                  This helps create better group dynamics and relevant discussions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Outcomes */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Success Outcomes & What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Typical Group Therapy Benefits:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Decreased feelings of isolation and loneliness</li>
                  <li>• Improved social and communication skills</li>
                  <li>• Greater self-awareness and insight</li>
                  <li>• Enhanced coping strategies and resilience</li>
                  <li>• Reduced symptoms of depression and anxiety</li>
                  <li>• Increased confidence and self-esteem</li>
                  <li>• Better relationships outside of therapy</li>
                  <li>• Sense of purpose through helping others</li>
                  <li>• Lasting supportive friendships</li>
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
            serviceName="Group Therapy"
            serviceTitle="Group Therapy"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Find Your Supportive Community Today</h2>
            <p className="text-xl mb-8 opacity-95">
              You don't have to face life's challenges alone. Join others who understand your 
              experience and discover the healing power of connection, support, and shared growth 
              in our professionally-led therapy groups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-cream-100 text-navy-800 px-8 py-4 rounded-md hover:bg-cream-200 transition-colors font-semibold text-lg"
              >
                Join a Therapy Group
              </Link>
              <Link
                href="tel:918-553-5746"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-navy-800 transition-colors font-semibold text-lg"
              >
                Call (918) 553-5746
              </Link>
            </div>
            <p className="text-lg mt-6 opacity-90">
              New groups starting regularly • Medicaid & SoonerCare accepted
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}