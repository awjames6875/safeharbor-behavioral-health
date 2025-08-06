import { Metadata } from 'next'
import Link from 'next/link'
import TrustBadges from '@/components/TrustBadges'
import ServiceContactForm from '@/components/ServiceContactForm'
import FAQSchema from '@/components/schema/FAQSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import { getServiceBySlug } from '@/data/services'

export const metadata: Metadata = {
  title: 'Child Therapy Tulsa | Medicaid Accepted | Play Therapy Ages 5-12',
  description: 'Child therapy Tulsa with Medicaid accepted. Play therapy for kids 5-12 with anxiety, ADHD, behavioral issues. SafeHarbor accepts SoonerCare. Call (918) 391-3606.',
  keywords: 'child therapy Tulsa Medicaid, play therapy SoonerCare, child counseling Tulsa, kids therapy Medicaid, behavioral therapy children Tulsa, child psychologist Medicaid',
  alternates: {
    canonical: 'https://safeharborbh.com/services/child-therapy'
  }
}

export default function ChildTherapyPage() {
  const service = getServiceBySlug('child-therapy')
  
  const breadcrumbItems = [
    {
      position: 1,
      name: 'Home',
      item: 'https://safeharborbh.com'
    },
    {
      position: 2,
      name: 'Services', 
      item: 'https://safeharborbh.com/services'
    },
    {
      position: 3,
      name: 'Child Therapy',
      item: 'https://safeharborbh.com/services/child-therapy'
    }
  ];

  return (
    <>
      {/* Schema Markup */}
      {service && <FAQSchema faqs={service.faqs} />}
      <BreadcrumbSchema items={breadcrumbItems} />
    
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-teal-600 hover:underline">Home</Link></li>
            <li>›</li>
            <li><Link href="/services" className="text-teal-600 hover:underline">Services</Link></li>
            <li>›</li>
            <li className="text-gray-600">Child Therapy</li>
          </ol>
        </div>
      </nav>

      {/* Insurance Banner */}
      <div className="bg-green-600 text-white py-3">
        <div className="container mx-auto px-4">
          <p className="text-center font-medium">
            ✓ Medicaid & SoonerCare Accepted ✓ Same-Week Appointments ✓ No Waitlist
            <a href="tel:918-391-3606" className="ml-4 underline font-bold">Call (918) 391-3606</a>
          </p>
        </div>
      </div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Individual Child Therapy</h1>
            <p className="text-xl md:text-2xl opacity-95 mb-8">
              Specialized therapy services for children ages 5-12 in a safe, nurturing environment
            </p>
            <div className="flex flex-col items-center gap-6">
              <Link
                href="/contact"
                className="inline-block bg-cream-100 text-navy-800 px-8 py-3 rounded-md hover:bg-cream-200 transition-colors font-semibold"
              >
                Schedule Today
              </Link>
              <TrustBadges variant="compact" className="justify-center" />
            </div>
          </div>
        </div>
      </section>

      {/* What is Child Therapy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">What is Individual Child Therapy?</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Individual child therapy is a specialized form of counseling designed specifically for children ages 5-12. 
                At SafeHarbor Behavioral Health, we understand that children experience and express emotions differently 
                than adults. Our child therapy services use age-appropriate techniques including play therapy, art therapy, 
                and interactive activities to help young clients process emotions, develop coping skills, and overcome challenges.
              </p>
              <p className="mb-6">
                Our licensed child therapists create a warm, safe environment where children feel comfortable expressing 
                themselves. Through engaging activities and evidence-based interventions, we help children understand 
                their feelings, improve behavior, and build resilience for a brighter future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits Section */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Who Benefits from Child Therapy?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Children Experiencing:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Anxiety or excessive worry</li>
                  <li>• Depression or persistent sadness</li>
                  <li>• Behavioral challenges at home or school</li>
                  <li>• Difficulty with transitions or changes</li>
                  <li>• Trauma or stressful life events</li>
                  <li>• Social skills difficulties</li>
                  <li>• Attention and focus problems</li>
                  <li>• Sleep disturbances or nightmares</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Life Situations:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Divorce or family separation</li>
                  <li>• Death of a loved one or pet</li>
                  <li>• Moving to a new home or school</li>
                  <li>• Birth of a sibling</li>
                  <li>• Bullying at school</li>
                  <li>• Academic struggles</li>
                  <li>• Medical procedures or illness</li>
                  <li>• Foster care or adoption adjustments</li>
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Our Child-Centered Therapeutic Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Play Therapy</h3>
                <p className="text-gray-700 text-sm">
                  Children naturally communicate through play. Our therapists use toys, games, and creative activities 
                  to help children express feelings they can't yet verbalize.
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Art & Music Therapy</h3>
                <p className="text-gray-700 text-sm">
                  Creative expression through drawing, painting, and music helps children process emotions and 
                  communicate experiences in non-verbal ways.
                </p>
              </div>
              <div className="bg-teal-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Cognitive Behavioral Techniques</h3>
                <p className="text-gray-700 text-sm">
                  Age-appropriate CBT strategies help children identify feelings, challenge negative thoughts, 
                  and develop healthy coping mechanisms.
                </p>
              </div>
            </div>
            <div className="bg-navy-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-navy-800 mb-4">Family Involvement</h3>
              <p className="text-gray-700">
                We believe families are essential partners in a child's healing journey. Parents receive regular 
                updates, participate in select sessions when appropriate, and learn strategies to support their 
                child's progress at home. Our therapists provide parent coaching to help implement therapeutic 
                techniques in daily routines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">What to Expect in Child Therapy Sessions</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">First Session (Parent Meeting)</h3>
                <p className="text-gray-700">
                  Parents meet with the therapist to discuss concerns, family history, and treatment goals. 
                  We'll explain our approach and answer any questions about the therapy process.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Child's First Visit</h3>
                <p className="text-gray-700">
                  Your child will explore our child-friendly therapy room, meet their therapist, and begin 
                  building a trusting relationship through gentle play and conversation.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Ongoing Sessions</h3>
                <p className="text-gray-700">
                  Each session is tailored to your child's needs and may include play activities, art projects, 
                  storytelling, or games that help them process emotions and learn new skills.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Progress Updates</h3>
                <p className="text-gray-700">
                  Regular check-ins with parents to discuss progress, share insights, and adjust treatment 
                  approaches as needed. We provide tools and strategies for home use.
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
                    <p className="text-gray-700">45-50 minutes per session, designed for children's attention spans</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Frequency</h3>
                    <p className="text-gray-700">Weekly sessions initially, with flexibility based on progress and needs</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <h3 className="font-semibold text-navy-800">Treatment Duration</h3>
                    <p className="text-gray-700">Typically 3-6 months, depending on individual goals and progress</p>
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
                    Our insurance specialists will verify your benefits and help maximize your coverage. 
                    Financial assistance programs may be available.
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
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Ages 5-7: Early Elementary</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Focus on basic emotion identification</li>
                  <li>• Simple coping strategies (deep breathing, counting)</li>
                  <li>• Lots of play-based interventions</li>
                  <li>• Picture books and storytelling</li>
                  <li>• Movement and sensory activities</li>
                  <li>• Parent involvement in most sessions</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Ages 8-12: Elementary to Pre-Teen</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• More complex emotional vocabulary</li>
                  <li>• Problem-solving skill development</li>
                  <li>• Social skills training</li>
                  <li>• Introduction to mindfulness techniques</li>
                  <li>• Academic and peer relationship focus</li>
                  <li>• Balance of individual and family sessions</li>
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Conditions We Treat in Children</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Anxiety Disorders</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Separation anxiety</li>
                  <li>• Social anxiety</li>
                  <li>• Generalized anxiety</li>
                  <li>• Specific phobias</li>
                  <li>• Selective mutism</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Mood Concerns</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Depression</li>
                  <li>• Emotional dysregulation</li>
                  <li>• Mood swings</li>
                  <li>• Irritability</li>
                  <li>• Low self-esteem</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-teal-600">Behavioral Issues</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• ADHD symptoms</li>
                  <li>• Oppositional behavior</li>
                  <li>• Aggression</li>
                  <li>• Impulse control</li>
                  <li>• School refusal</li>
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
                <h3 className="text-lg font-semibold text-teal-600 mb-3">How do I know if my child needs therapy?</h3>
                <p className="text-gray-700">
                  Consider therapy if your child shows persistent changes in behavior, mood, or functioning that 
                  last more than a few weeks. Warning signs include withdrawal from activities, declining school 
                  performance, excessive worry, frequent meltdowns, or regression in developmental milestones.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Will my child want to talk to a stranger?</h3>
                <p className="text-gray-700">
                  Our therapists are specially trained to build rapport with children. We use play, games, and 
                  activities that feel natural and fun. Most children enjoy therapy sessions once they feel 
                  comfortable with their therapist.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">How involved will I be as a parent?</h3>
                <p className="text-gray-700">
                  Parent involvement is crucial for successful outcomes. You'll receive regular updates, learn 
                  strategies to use at home, and may participate in some sessions. We work as a team to support 
                  your child's growth.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">What if my child doesn't want to go to therapy?</h3>
                <p className="text-gray-700">
                  Resistance is normal. We recommend framing therapy as a place to learn new skills and have fun. 
                  Our therapists are experienced in working with reluctant children and can help ease anxiety 
                  about starting therapy.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">How long before we see improvements?</h3>
                <p className="text-gray-700">
                  Many families notice small improvements within the first few sessions, such as increased 
                  communication or slight mood improvements. Significant changes typically occur within 
                  6-12 sessions, depending on the child's specific needs.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Do you work with schools?</h3>
                <p className="text-gray-700">
                  Yes, with parent permission, we can collaborate with teachers and school counselors to ensure 
                  consistent support for your child. We can also provide recommendations for school accommodations 
                  when appropriate.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">Is child therapy confidential?</h3>
                <p className="text-gray-700">
                  While children have some privacy rights, parents are kept informed about progress and any 
                  safety concerns. We balance respecting your child's privacy with keeping parents involved 
                  in the treatment process.
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
                  <li>• Better emotional regulation and fewer meltdowns</li>
                  <li>• Improved communication with family members</li>
                  <li>• Enhanced social skills and friendships</li>
                  <li>• Increased confidence and self-esteem</li>
                  <li>• Better school performance and behavior</li>
                  <li>• Reduced anxiety and worry</li>
                  <li>• Development of healthy coping strategies</li>
                  <li>• Improved sleep and appetite</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-600 mb-4">Our Success Metrics:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">85%</p>
                    <p className="text-sm text-gray-700">of children show significant improvement in target behaviors</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">90%</p>
                    <p className="text-sm text-gray-700">of parents report improved family relationships</p>
                  </div>
                  <div className="border-l-4 border-teal-500 pl-4">
                    <p className="text-2xl font-bold text-navy-800">78%</p>
                    <p className="text-sm text-gray-700">of children maintain improvements 6 months post-treatment</p>
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
            serviceName="Child Therapy"
            serviceTitle="Child Therapy"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Give Your Child the Support They Deserve</h2>
            <p className="text-xl mb-8 opacity-95">
              Every child deserves to feel confident, happy, and emotionally healthy. Our experienced 
              child therapists are here to help your family navigate challenges and build a brighter future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-cream-100 text-navy-800 px-8 py-4 rounded-md hover:bg-cream-200 transition-colors font-semibold text-lg"
              >
                Schedule Your Child's First Session
              </Link>
              <Link
                href="tel:918-391-3606"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-navy-800 transition-colors font-semibold text-lg"
              >
                Call (918) 391-3606
              </Link>
            </div>
            <p className="text-lg mt-6 opacity-90">
              Same-week appointments available • Medicaid & SoonerCare accepted
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}