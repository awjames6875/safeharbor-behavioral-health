import Link from 'next/link'
import ServiceContactForm from '@/components/ServiceContactForm'

export default function ParentCoachingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Parent Coaching & Support</h1>
            <p className="text-xl md:text-2xl opacity-95 mb-8">
              Expert guidance and support for parents navigating childhood and adolescent challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-cream-100 text-navy-800 px-8 py-3 rounded-md hover:bg-cream-200 transition-colors font-semibold"
              >
                Get Support Today
              </Link>
              <p className="text-lg opacity-90 self-center">
                Medicaid & SoonerCare Accepted • Same-Week Appointments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Parent Coaching Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">What is Parent Coaching & Support?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Parent Coaching & Support at SafeHarbor Behavioral Health provides specialized guidance 
                for parents and caregivers who are navigating the challenges of raising children and 
                teenagers with mental health, behavioral, or developmental concerns. Our experienced 
                therapists understand that parenting is one of life's most rewarding yet challenging roles.
              </p>
              <p className="mb-6">
                Our parent coaching services combine evidence-based parenting strategies with emotional 
                support and practical tools to help families thrive. We recognize that when parents feel 
                confident and supported, children benefit greatly. Our approach is collaborative, 
                non-judgmental, and tailored to each family's unique needs and circumstances.
              </p>
              <p className="mb-6">
                Whether you're dealing with everyday parenting challenges or more complex issues like 
                ADHD, anxiety, depression, or behavioral problems, our parent coaching provides the 
                knowledge, skills, and support you need to strengthen your family relationships and 
                promote your child's healthy development and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Who Benefits from Parent Coaching?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Parents Facing:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Child or teen behavioral challenges</li>
                  <li>• Difficulty with discipline and boundaries</li>
                  <li>• Communication problems with children</li>
                  <li>• Bedtime, homework, or routine struggles</li>
                  <li>• Sibling rivalry and family conflicts</li>
                  <li>• Screen time and technology battles</li>
                  <li>• Anxiety about parenting decisions</li>
                  <li>• Feeling overwhelmed or burned out</li>
                  <li>• Co-parenting challenges</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Children with:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• ADHD or attention difficulties</li>
                  <li>• Anxiety or depression</li>
                  <li>• Autism spectrum disorders</li>
                  <li>• Oppositional or defiant behavior</li>
                  <li>• Trauma or attachment issues</li>
                  <li>• Learning differences or disabilities</li>
                  <li>• Social skills challenges</li>
                  <li>• Emotional regulation difficulties</li>
                  <li>• Developmental delays</li>
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Our Parent Coaching Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Positive Parenting Strategies</h3>
                <p className="text-gray-700 text-sm">
                  Evidence-based techniques that focus on building strong parent-child relationships 
                  while setting appropriate boundaries and expectations.
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Behavioral Management</h3>
                <p className="text-gray-700 text-sm">
                  Practical strategies for addressing challenging behaviors, implementing consistent 
                  consequences, and reinforcing positive behaviors.
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Communication Skills</h3>
                <p className="text-gray-700 text-sm">
                  Techniques for effective parent-child communication, active listening, and 
                  age-appropriate ways to discuss difficult topics.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-800 mb-4">Strengths-Based Approach</h3>
                <p className="text-gray-700">
                  We focus on identifying and building upon your existing parenting strengths while 
                  providing new tools and strategies. Every parent has valuable skills and insights 
                  that we help recognize and expand.
                </p>
              </div>
              <div className="bg-navy-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-800 mb-4">Individualized Support</h3>
                <p className="text-gray-700">
                  Our coaching is tailored to your family's specific needs, cultural background, 
                  and circumstances. We work within your family values and goals to create 
                  sustainable, positive changes.
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">What to Expect in Parent Coaching</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Initial Assessment</h3>
                <p className="text-gray-700">
                  We begin by understanding your family's unique situation, challenges, and goals. 
                  This includes discussing your child's needs, family dynamics, and your parenting 
                  concerns and questions.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Personalized Strategy Development</h3>
                <p className="text-gray-700">
                  Based on your assessment, we develop customized parenting strategies that fit your 
                  family's needs, schedule, and values. We provide practical, actionable techniques 
                  you can implement immediately.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Skill Building and Practice</h3>
                <p className="text-gray-700">
                  Through role-playing, problem-solving exercises, and guided practice, you'll learn 
                  new parenting skills and gain confidence in handling challenging situations.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Ongoing Support and Adjustment</h3>
                <p className="text-gray-700">
                  We provide ongoing support as you implement new strategies, troubleshoot challenges, 
                  and celebrate successes. We adjust approaches as your child grows and family needs change.
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
                    <p className="text-gray-700">50-60 minutes per session</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Frequency</h3>
                    <p className="text-gray-700">Weekly to bi-weekly sessions based on needs</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Duration</h3>
                    <p className="text-gray-700">8-16 sessions typically, with ongoing support as needed</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Flexibility</h3>
                    <p className="text-gray-700">Evening and weekend appointments available</p>
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
                    <li>• Employee Assistance Programs</li>
                    <li>• Self-pay options available</li>
                  </ul>
                  <p className="text-sm text-gray-600">
                    Parent coaching may be covered under your family therapy benefits. We'll help 
                    verify your coverage and find the most cost-effective way to access support 
                    for your family.
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Age-Specific Parenting Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Early Childhood (3-7)</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Toddler tantrums and emotional meltdowns</li>
                  <li>• Establishing routines and structure</li>
                  <li>• Toilet training and developmental milestones</li>
                  <li>• Bedtime and sleep issues</li>
                  <li>• Setting boundaries and discipline</li>
                  <li>• Preparing for school transitions</li>
                  <li>• Managing challenging behaviors</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">School Age (8-12)</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Homework battles and school stress</li>
                  <li>• Friendship and social skill challenges</li>
                  <li>• Sibling rivalry and family dynamics</li>
                  <li>• Screen time and technology limits</li>
                  <li>• Building responsibility and independence</li>
                  <li>• Managing ADHD and attention issues</li>
                  <li>• Supporting learning differences</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Adolescence (13-18)</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Teen mood swings and emotional regulation</li>
                  <li>• Balancing independence and safety</li>
                  <li>• Communication and conflict resolution</li>
                  <li>• Academic pressure and future planning</li>
                  <li>• Peer influence and social media</li>
                  <li>• Mental health concerns (anxiety, depression)</li>
                  <li>• Preparing for transition to adulthood</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Parenting Challenges */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Common Parenting Challenges We Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Behavioral Issues</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Defiance and oppositional behavior</li>
                  <li>• Aggression and anger outbursts</li>
                  <li>• Attention and hyperactivity issues</li>
                  <li>• Lying and dishonesty</li>
                  <li>• Rule-breaking and boundary testing</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Emotional Challenges</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Anxiety and worry</li>
                  <li>• Depression and mood issues</li>
                  <li>• Emotional meltdowns and dysregulation</li>
                  <li>• Low self-esteem and confidence</li>
                  <li>• Trauma and difficult experiences</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Daily Life Struggles</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Morning and bedtime routines</li>
                  <li>• Homework and academic issues</li>
                  <li>• Chores and responsibility</li>
                  <li>• Screen time and technology</li>
                  <li>• Social skills and friendships</li>
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
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Is parent coaching right for me if my child isn't in therapy?</h3>
                <p className="text-gray-700">
                  Absolutely! Parent coaching can be beneficial whether or not your child is receiving 
                  individual therapy. Many parenting challenges can be addressed through parent coaching 
                  alone, and it can be an excellent prevention and early intervention strategy.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Will you judge my parenting or tell me I'm doing everything wrong?</h3>
                <p className="text-gray-700">
                  Not at all. Our approach is completely non-judgmental and strengths-based. We recognize 
                  that parenting is challenging and that every parent is doing their best. We're here to 
                  support you and build on what you're already doing well.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Can both parents attend sessions together?</h3>
                <p className="text-gray-700">
                  Yes, we encourage both parents or co-parents to participate when possible. This helps 
                  ensure consistency in parenting approaches. However, we can also work with single 
                  parents or situations where only one parent can attend.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">How is parent coaching different from family therapy?</h3>
                <p className="text-gray-700">
                  Parent coaching focuses specifically on building parenting skills and strategies, 
                  while family therapy includes all family members in addressing relationship dynamics. 
                  Some families benefit from both approaches, used either simultaneously or sequentially.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">What if my child has special needs or developmental differences?</h3>
                <p className="text-gray-700">
                  Our parent coaching services are inclusive and adapt to children with various needs, 
                  including ADHD, autism, learning differences, and other developmental or mental health 
                  conditions. We provide specialized strategies for these unique situations.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">How quickly will I see changes in my child's behavior?</h3>
                <p className="text-gray-700">
                  While some parents notice improvements within a few weeks of implementing new strategies, 
                  lasting change typically takes time and consistency. Most families see significant 
                  improvements within 2-3 months of consistent implementation.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Can you help with co-parenting challenges after divorce?</h3>
                <p className="text-gray-700">
                  Yes, we provide guidance on effective co-parenting strategies, maintaining consistency 
                  across households, and helping children adjust to divorce or separation. We can work 
                  with co-parents together or individually.
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Parent Coaching Success & What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Typical Family Improvements:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Increased parental confidence and competence</li>
                  <li>• Improved parent-child communication</li>
                  <li>• Reduced frequency and intensity of behavioral issues</li>
                  <li>• Better family cooperation and harmony</li>
                  <li>• More effective discipline and boundary setting</li>
                  <li>• Enhanced emotional connection with children</li>
                  <li>• Decreased parental stress and overwhelm</li>
                  <li>• Improved family routines and structure</li>
                  <li>• Better problem-solving skills for future challenges</li>
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
            serviceName="Parent Coaching"
            serviceTitle="Parent Coaching"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Become the Parent You Want to Be</h2>
            <p className="text-xl mb-8 opacity-95">
              Parenting doesn't come with a manual, but you don't have to figure it out alone. 
              Our parent coaching services provide the guidance, support, and practical strategies 
              you need to strengthen your family and help your children thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-cream-100 text-navy-800 px-8 py-4 rounded-md hover:bg-cream-200 transition-colors font-semibold text-lg"
              >
                Start Parent Coaching
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