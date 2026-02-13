import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Substance Abuse Resources | Safe Harbor Behavioral Health',
  description: 'Looking for substance abuse support? Safe Harbor specializes in activity-based behavioral support for children ages 3-17 in Tulsa, OK. We can connect you with the right provider.',
  alternates: {
    canonical: 'https://safeharborbehavioralhealth.com/services/substance-abuse',
  },
}

export default function SubstanceAbusePage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-navy-700 to-navy-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Substance Abuse Support</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Connecting families with the right behavioral health resources in Tulsa
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-teal-50 border-2 border-teal-200 rounded-2xl p-10 mb-10">
              <h2 className="text-2xl font-bold text-navy-800 mb-4">Looking for Substance Abuse Support?</h2>
              <p className="text-gray-700 text-lg mb-6">
                While Safe Harbor Behavioral Health specializes in <strong>activity-based behavioral support for children ages 3–17</strong> through 
                our Body &amp; Brain program, we understand that some families need substance abuse treatment services. We&apos;re happy to help 
                connect you with trusted providers in the Tulsa area.
              </p>
              <p className="text-gray-700 text-lg mb-6">
                <strong>If you or someone you know is in crisis:</strong> Call the SAMHSA National Helpline at{' '}
                <a href="tel:1-800-662-4357" className="text-teal-600 font-bold hover:underline">1-800-662-4357</a> (free, confidential, 24/7).
              </p>
              <p className="text-gray-700 text-lg mb-8">
                For referrals and guidance, call Safe Harbor at{' '}
                <a href="tel:+19185535746" className="text-teal-600 font-bold hover:underline">(918) 553-5746</a>{' '}
                and we&apos;ll help connect you with the right provider.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://SafeHarborEasyEnrollment.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-semibold text-lg"
                >
                  Enroll in Our Programs
                </a>
                <Link
                  href="/services"
                  className="inline-block bg-navy-700 text-white px-8 py-3 rounded-lg hover:bg-navy-800 transition-colors font-semibold text-lg"
                >
                  View Our Services
                </Link>
              </div>
            </div>

            <div className="text-left bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-navy-800 mb-4">What Safe Harbor Does Offer</h3>
              <p className="text-gray-700 mb-4">
                Safe Harbor provides trauma-informed, activity-based behavioral health services for children and teens ages 3–17, including:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start"><span className="text-teal-500 mr-2">✓</span> Body &amp; Brain activity-based therapy</li>
                <li className="flex items-start"><span className="text-teal-500 mr-2">✓</span> Child and teen behavioral support</li>
                <li className="flex items-start"><span className="text-teal-500 mr-2">✓</span> Family and parent coaching</li>
                <li className="flex items-start"><span className="text-teal-500 mr-2">✓</span> School-based support services</li>
                <li className="flex items-start"><span className="text-teal-500 mr-2">✓</span> Group therapy sessions</li>
              </ul>
              <p className="text-gray-700">
                <strong>Current families:</strong>{' '}
                <a href="https://therapyportal.com/p/SafeHarbor74104" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                  Access your Therapy Portal here
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
