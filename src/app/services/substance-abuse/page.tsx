import ServiceSchema from '@/components/schema/ServiceSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Drug & Alcohol Counseling Tulsa | Assessments & Outpatient Support | Ages 5+',
  description:
    'Safe Harbor offers drug and alcohol assessments and outpatient counseling in Tulsa for ages 5 and up, with individual and group support sessions from licensed counselors. Medicaid and SoonerCare accepted.',
  alternates: {
    canonical: '/services/substance-abuse',
  },
}

export default function SubstanceAbusePage() {
  return (
    <>
      <ServiceSchema
        name="Drug & Alcohol Counseling"
        description="Substance use assessments and outpatient counseling for ages 5 and up in Tulsa"
        serviceType="Substance Use Counseling"
        url="https://www.safeharborbehavioralhealth.com/services/substance-abuse"
      />
      <BreadcrumbSchema items={[
        { position: 1, name: "Home", item: "https://www.safeharborbehavioralhealth.com" },
        { position: 2, name: "Services", item: "https://www.safeharborbehavioralhealth.com/services" },
        { position: 3, name: "Drug & Alcohol Counseling", item: "https://www.safeharborbehavioralhealth.com/services/substance-abuse" },
      ]} />
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-teal-500 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Drug & Alcohol Counseling</h1>
            <p className="text-xl md:text-2xl opacity-95 mb-8">
              Substance use assessments and outpatient counseling for ages 5 and up, with a licensed counselor and a practical plan for lasting recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-cream-100 text-navy-800 px-8 py-3 rounded-md hover:bg-cream-200 transition-colors font-semibold"
              >
                Start With a Contact Form
              </Link>
              <a
                href="tel:9185535746"
                className="inline-block border border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors font-semibold"
              >
                Call (918) 553-5746
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8 text-center">What We Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-teal-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-navy-800 mb-4">Substance Use Patterns</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Alcohol use and binge episodes</li>
                  <li>• Cannabis or vaping dependence</li>
                  <li>• Misuse of prescription medications</li>
                  <li>• Escalating risk-taking behaviors</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-navy-800 mb-4">Related Emotional Wellness Needs</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Anxiety, sadness, or mood instability</li>
                  <li>• School attendance and performance issues</li>
                  <li>• Family conflict and communication breakdowns</li>
                  <li>• Stress, trauma, and peer-pressure challenges</li>
                </ul>
              </div>
            </div>
            <p className="text-gray-700 mt-8 text-center">
              Support is available for children, teens, and adults. Safe Harbor does not prescribe medication.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">1) Fit Call</h3>
                <p className="text-gray-700 text-sm">
                  A short, judgment-free call to make sure Safe Harbor is the right fit, followed by a simple intake form.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">2) Assessment</h3>
                <p className="text-gray-700 text-sm">
                  You meet with our clinical director for a substance use assessment, and together you set clear goals.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-teal-700 mb-3">3) Outpatient Counseling</h3>
                <p className="text-gray-700 text-sm">
                  Individual and group support sessions with a licensed counselor, with regular check-ins on your progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
              <h2 className="text-2xl font-bold text-navy-800 mb-4">Insurance & SoonerCare</h2>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Oklahoma Medicaid accepted</li>
                <li>• SoonerCare accepted</li>
                <li>• Most major insurance plans accepted</li>
              </ul>
              <p className="text-sm text-gray-600">
                Our team can verify benefits and help your family understand coverage before the first visit.
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-8 border border-red-200">
              <h2 className="text-2xl font-bold text-navy-800 mb-4">24/7 Crisis Resources</h2>
              <p className="text-gray-700 mb-3">
                If there is immediate danger, call <a href="tel:911" className="font-semibold text-red-700">911</a>.
              </p>
              <p className="text-gray-700 mb-3">
                988 Suicide &amp; Crisis Lifeline:{' '}
                <a href="tel:988" className="font-semibold text-red-700">Call or text 988</a>
              </p>
              <p className="text-gray-700">
                SAMHSA National Helpline:{' '}
                <a href="tel:18006624357" className="font-semibold text-red-700">1-800-662-4357</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-navy-700 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Take the First Step.</h2>
          <p className="text-xl opacity-95 max-w-3xl mx-auto mb-8">
            Complete our contact form and our team will reach out with next steps for drug and alcohol counseling.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-cream-100 text-navy-800 px-8 py-3 rounded-md hover:bg-cream-200 transition-colors font-semibold"
          >
            Go to Contact Form
          </Link>
        </div>
      </section>
    </div>
    </>
  )
}
