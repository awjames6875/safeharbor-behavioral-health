import { Metadata } from 'next'
import Link from 'next/link'
import ParentIntakeForm from '@/components/ParentIntakeForm'

export const metadata: Metadata = {
  title: 'For Parents | Body & Brain Program for Kids 3-8 | SafeHarbor Behavioral Health',
  description: 'Therapy disguised as play. Boxing, yoga, dance, obstacle courses & mindfulness — delivered right at your child\'s daycare. Covered by SoonerCare.',
  alternates: { canonical: '/parents' },
}

export default function ParentsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal-500 font-semibold uppercase tracking-widest mb-4">For Parents of Kids Ages 3–8</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            We Don&apos;t Diagnose.<br />We <span className="text-teal-500">Equip.</span>
          </h1>
          <p className="text-xl md:text-2xl text-navy-100 max-w-2xl mx-auto mb-8">
            Your child gets world-class behavioral support — disguised as the most fun part of their day. And you don&apos;t have to drive anywhere.
          </p>
          <Link
            href="https://SafeHarborEasyEnrollment.com"
            target="_blank"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            Enroll Your Child Now
          </Link>
        </div>
      </section>

      {/* What They Get — Value Stack */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 text-center mb-4">
            Here&apos;s What Your Child Gets
          </h2>
          <p className="text-center text-navy-700 text-lg mb-12 max-w-2xl mx-auto">
            This isn&apos;t &quot;sit in a chair and talk about your feelings&quot; therapy. This is movement. Play. Real skills. Real results.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '🥊', title: 'Boxing & Movement', desc: 'Emotional regulation through controlled, high-energy activity. They learn to channel — not suppress.' },
              { icon: '🧘', title: 'Yoga & Mindfulness', desc: 'Breathing techniques and body awareness that actually stick. Skills they use at home, at school, everywhere.' },
              { icon: '💃', title: 'Dance & Creative Expression', desc: 'Confidence-building through movement. No choreography tests — just joy.' },
              { icon: '🏋️', title: 'Obstacle Courses', desc: 'Problem-solving, resilience, and teamwork built into every jump, crawl, and climb.' },
              { icon: '🧠', title: 'Mindfulness Training', desc: 'Age-appropriate techniques that help kids self-regulate before meltdowns happen.' },
              { icon: '🤝', title: 'Social Skills Groups', desc: 'Turn-taking, sharing, conflict resolution — practiced in real time with real peers.' },
            ].map((item) => (
              <div key={item.title} className="bg-cream-50 rounded-xl p-6 border border-navy-50">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-navy-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Body & Brain Difference */}
      <section className="bg-navy-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 text-center mb-12">
            Why Body &amp; Brain Is <span className="text-teal-600">Different</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'We Come To Them', desc: 'Our trained staff delivers sessions right at your child\'s daycare. No driving. No waiting rooms. No missed work.' },
              { title: 'You See The Progress', desc: 'Daily parent slips after every session. Weekly summaries. You\'re never guessing — you\'re watching your child grow.' },
              { title: 'SoonerCare Covers It', desc: 'If your child has SoonerCare (Medicaid), this is covered. No out-of-pocket stress. Just results.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 shadow-sm text-center">
                <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-navy-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Video */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
            See How Easy Enrollment Is
          </h2>
          <p className="text-navy-700 text-lg mb-8">
            Two minutes. That&apos;s it. Watch this and you&apos;ll know exactly what to do.
          </p>
          <div className="relative w-full pb-[56.25%] rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/wkzycf9C83s"
              title="Safe Harbor Easy Enrollment"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Quick Intake Form */}
      <section className="py-20 px-4 bg-cream-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 text-center mb-4">
            Enroll Your Child in 2 Minutes
          </h2>
          <p className="text-center text-navy-700 text-lg mb-8">
            Fill out this quick form and we&apos;ll handle the rest. SoonerCare accepted — zero cost to you.
          </p>
          <ParentIntakeForm />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-500 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Your Child Deserves This
          </h2>
          <p className="text-xl mb-8 text-teal-50">
            Behavioral support that feels like play. Delivered where they already are. Covered by SoonerCare. Zero hassle for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://SafeHarborEasyEnrollment.com"
              target="_blank"
              className="bg-white text-teal-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-teal-50 transition-colors"
            >
              Enroll Now
            </Link>
            <Link
              href="tel:9185535746"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-teal-600 transition-colors"
            >
              Call (918) 553-5746
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
