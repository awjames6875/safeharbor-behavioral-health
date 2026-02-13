import Link from 'next/link'

export default function InsuranceSection() {
  const insurances = [
    'Medicaid/SoonerCare',
    'Blue Cross Blue Shield',
    'United Healthcare',
    'Aetna',
    'Cigna',
    'Health Choice',
    'Community Care',
    'TriCare',
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
            We Accept Most Major Insurance Plans
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Quality mental health care should be accessible to everyone. We work with most major insurance plans including Medicaid/SoonerCare.
          </p>

          <div className="bg-cream-100 rounded-lg p-8 mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {insurances.map((insurance, index) => (
                <div
                  key={index}
                  className="bg-white rounded-md py-3 px-4 text-sm font-medium text-navy-800 shadow-sm"
                >
                  {insurance}
                </div>
              ))}
            </div>
            
            <p className="text-sm text-gray-600 italic">
              Don't see your insurance? Call us — we may still be able to help!
            </p>
          </div>

          <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-navy-800 mb-3">
              Need Help Enrolling in Medicaid?
            </h3>
            <p className="text-gray-600 mb-4">
              We can help you apply for Medicaid/SoonerCare so your child can access our programs at no cost to you.
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