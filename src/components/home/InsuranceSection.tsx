import Link from 'next/link'

export default function InsuranceSection() {
  const accepting = [
    { name: 'Medicaid/SoonerCare', status: 'active' as const },
  ]

  const credentialingInProgress = [
    { name: 'Blue Cross Blue Shield', status: 'pending' as const },
    { name: 'United Healthcare', status: 'pending' as const },
    { name: 'Aetna', status: 'pending' as const },
    { name: 'Cigna', status: 'pending' as const },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            Insurance &amp; Coverage
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Quality emotional wellness support should be accessible to every family.
          </p>

          <div className="bg-cream-100 rounded-lg p-8 mb-6">
            {/* Currently Accepting */}
            <h3 className="text-lg font-bold text-navy-800 mb-4 uppercase tracking-wide">
              Currently Accepting
            </h3>
            <div className="flex justify-center mb-8">
              {accepting.map((insurance, index) => (
                <div
                  key={index}
                  className="bg-green-50 border-2 border-green-300 rounded-lg py-4 px-8 text-base font-bold text-green-800 shadow-sm flex items-center gap-2"
                >
                  <span className="text-xl">✅</span>
                  {insurance.name}
                </div>
              ))}
            </div>

            {/* Credentialing In Progress */}
            <h3 className="text-lg font-bold text-navy-800 mb-4 uppercase tracking-wide">
              Credentialing In Progress <span className="text-sm font-normal text-gray-500 normal-case">(coming soon)</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {credentialingInProgress.map((insurance, index) => (
                <div
                  key={index}
                  className="bg-amber-50 border border-amber-200 rounded-md py-3 px-4 text-sm font-medium text-amber-800 shadow-sm flex items-center gap-2 justify-center"
                >
                  <span>🔄</span>
                  {insurance.name}
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-gray-500 italic mb-8">
            Insurance acceptance is subject to individual credentialing and plan participation. 
            Please call to verify your specific plan:{' '}
            <a href="tel:918-553-5746" className="text-teal-600 font-semibold hover:underline">
              (918) 553-5746
            </a>
          </p>

          <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-navy-800 mb-3">
              No Insurance? We Can Help
            </h3>
            <p className="text-gray-600 mb-4">
              We offer sliding scale fees, payment plans, and can help you apply for Medicaid/SoonerCare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-colors font-semibold"
              >
                Learn About Financial Assistance
              </Link>
              <a
                href="tel:918-553-5746"
                className="inline-block bg-white text-teal-600 border-2 border-teal-500 px-6 py-3 rounded-md hover:bg-teal-50 transition-colors font-semibold"
              >
                Call for Insurance Verification
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
