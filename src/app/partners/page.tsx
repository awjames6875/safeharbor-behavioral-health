import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Partner With Us | Daycares, Gyms & Nonprofits | SafeHarbor Behavioral Health',
  description: 'We bring embedded behavioral health to your facility. Zero work for you. We handle compliance, staffing, documentation — everything. You get the competitive edge.',
  alternates: { canonical: '/partners' },
}

export default function PartnersPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-teal-500 font-semibold uppercase tracking-widest mb-4">For Daycares, Gyms &amp; Youth Programs</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            You Have The Space.<br />We Bring The <span className="text-teal-500">Program.</span>
          </h1>
          <p className="text-xl md:text-2xl text-navy-100 max-w-2xl mx-auto mb-8">
            Embedded behavioral health services inside your facility. We handle everything. You get the competitive advantage.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors"
          >
            Let&apos;s Talk Partnership
          </Link>
        </div>
      </section>

      {/* The Offer */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 text-center mb-4">
            Here&apos;s Everything We Do <span className="text-teal-600">For You</span>
          </h2>
          <p className="text-center text-navy-700 text-lg mb-12 max-w-2xl mx-auto">
            You don&apos;t hire anyone. You don&apos;t train anyone. You don&apos;t file anything. We do all of it.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '👥', title: 'We Bring Our Own Staff', desc: 'Fully trained behavioral health professionals show up ready to work. Your team doesn\'t lift a finger.' },
              { icon: '📋', title: 'Full Compliance — Handled', desc: 'ODMHSAS licensing, Medicaid documentation, reporting, audits — all on us. You stay focused on running your business.' },
              { icon: '📊', title: 'All Documentation Done', desc: 'Session notes, parent reports, progress tracking, outcome data. We handle every piece of paper.' },
              { icon: '🎓', title: 'Staff Training Included', desc: 'We train your existing staff on trauma-informed practices. Your whole facility levels up.' },
              { icon: '🏆', title: 'CMI Certification Pathway', desc: 'We guide your facility through Community Mental Health Integration certification. A credential that sets you apart.' },
              { icon: '⭐', title: 'State Quality Ratings Boost', desc: 'Embedded behavioral health services directly impact your state quality ratings. Stand out from every other facility in the area.' },
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

      {/* Oklahoma Daycare Crisis */}
      <section className="bg-red-50 py-20 px-4 border-y-4 border-red-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-red-600 font-bold uppercase tracking-widest mb-3">⚠️ Oklahoma Childcare Crisis</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
              400+ Daycares Have Closed.<br />Yours Doesn&apos;t Have To Be Next.
            </h2>
            <p className="text-navy-700 text-lg max-w-3xl mx-auto">
              Since November 2024, over 400 Oklahoma childcare centers have permanently shut down. Federal COVID-era funding expired. The state slashed its childcare budget request from $57 million to $7.5 million. And new fraud investigations are tightening oversight on every provider.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-navy-900 mb-2">📉 The Numbers Are Devastating</h3>
              <ul className="text-navy-700 space-y-2">
                <li>• <strong>400+</strong> centers closed since Nov 2024</li>
                <li>• <strong>2,300</strong> childcare slots lost statewide</li>
                <li>• <strong>34 of 77</strong> counties are childcare deserts</li>
                <li>• <strong>$1.2 billion</strong> in economic losses from the crisis</li>
                <li>• Staff pay as low as <strong>$11/hour</strong> — can&apos;t compete</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-navy-900 mb-2">🔍 Why It&apos;s Happening</h3>
              <ul className="text-navy-700 space-y-2">
                <li>• Federal pandemic funding <strong>expired</strong></li>
                <li>• State budget for childcare <strong>slashed 87%</strong></li>
                <li>• Subsidy eligibility <strong>reduced</strong></li>
                <li>• Federal fraud investigations <strong>tightening oversight</strong></li>
                <li>• Providers can&apos;t afford staff or meet ratios</li>
              </ul>
            </div>
          </div>

          <div className="bg-navy-900 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4 text-teal-400">
              🛡️ How Partnering With Safe Harbor Protects Your Daycare
            </h3>
            <p className="text-navy-100 text-lg mb-6">
              While other daycares are closing, our partners are <strong>thriving</strong>. Here&apos;s why:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-teal-400 font-bold mb-2">💰 New Revenue Stream</h4>
                <p className="text-navy-200">Safe Harbor pays your facility a monthly lease fee. Predictable income that doesn&apos;t depend on state subsidies or government funding.</p>
              </div>
              <div>
                <h4 className="text-teal-400 font-bold mb-2">📋 Full Compliance Protection</h4>
                <p className="text-navy-200">With fraud investigations increasing, compliance matters more than ever. We handle ALL compliance — ODMHSAS, HIPAA, Medicaid documentation, audits. You&apos;re protected.</p>
              </div>
              <div>
                <h4 className="text-teal-400 font-bold mb-2">📊 Grant-Ready Data</h4>
                <p className="text-navy-200">Our tracking provides outcomes data that proves your facility&apos;s impact. When you apply for grants, you&apos;ll have the numbers to back it up.</p>
              </div>
              <div>
                <h4 className="text-teal-400 font-bold mb-2">🏆 Competitive Advantage</h4>
                <p className="text-navy-200">&ldquo;The daycare that also supports your child&apos;s emotional health&rdquo; — parents tell their friends. You stand out while others shut down.</p>
              </div>
              <div>
                <h4 className="text-teal-400 font-bold mb-2">🎓 Staff Development</h4>
                <p className="text-navy-200">Your staff can earn CMI certification — a real career path. Better trained staff = better retention = better outcomes for kids.</p>
              </div>
              <div>
                <h4 className="text-teal-400 font-bold mb-2">🤝 Collaborative Care Model</h4>
                <p className="text-navy-200">This isn&apos;t a vendor relationship — it&apos;s a partnership. We bring the clinical expertise. You bring the community trust. Together, we change kids&apos; lives.</p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-navy-500 mt-6">
            Sources: News9, Read Frontier, Licensed Childcare Association of Oklahoma, Greater OKC Chamber, KGOU/NPR
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-navy-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 text-center mb-12">
            Built For Your Facility
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-navy-900 mb-3">🏫 Daycare Centers</h3>
              <p className="text-navy-700 mb-4">
                Become the only daycare in your area with embedded behavioral health. Parents will choose you over every competitor. Period.
              </p>
              <p className="text-navy-700 font-semibold">
                We come to you. Your families get the support. You get the reputation.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-navy-900 mb-3">🥊 Boxing Gyms</h3>
              <p className="text-navy-700 mb-4">
                You already have the space, the equipment, and the culture. We bring the clinical framework that turns your gym into a behavioral health powerhouse.
              </p>
              <p className="text-navy-700 font-semibold">
                Same space. Same equipment. Bigger impact.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-navy-900 mb-3">🤝 Nonprofits</h3>
              <p className="text-navy-700 mb-4">
                If you run youth programs, after-school care, or community centers — we plug right in. Your mission gets a clinical backbone without the overhead.
              </p>
              <p className="text-navy-700 font-semibold">
                Your mission. Our expertise. Their transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zero Risk */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">
            Zero Risk. All Upside.
          </h2>
          <p className="text-navy-700 text-lg mb-8 max-w-2xl mx-auto">
            We don&apos;t ask you to gamble on anything. We bring the staff. We handle the compliance. We manage the paperwork. We do the training. If it doesn&apos;t work, you lost nothing.
          </p>
          <div className="bg-navy-900 text-white rounded-2xl p-8 md:p-12 text-left">
            <h3 className="text-2xl font-bold mb-6 text-teal-500">Quick Recap — What You Get:</h3>
            <ul className="space-y-4 text-lg">
              {[
                'Fully staffed behavioral health program inside your facility',
                'All ODMHSAS and Medicaid compliance handled',
                'Complete documentation and reporting',
                'Staff training on trauma-informed care',
                'CMI certification pathway guidance',
                'State quality ratings improvement',
                'A competitive advantage nobody else in your area has',
                'Zero extra work for you or your team',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-teal-500 mt-1 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-500 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready To Stand Out?
          </h2>
          <p className="text-xl mb-8 text-teal-50">
            One conversation. That&apos;s all it takes to see if this is right for your facility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-teal-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-teal-50 transition-colors"
            >
              Start The Conversation
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
