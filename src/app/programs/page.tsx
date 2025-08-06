import Link from 'next/link'

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Programs</h1>
          <p className="text-xl opacity-95 max-w-2xl">
            Specialized treatment programs designed for comprehensive healing and lasting recovery.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Body-Brain Integration Program</h2>
              <p className="text-gray-600 mb-6">
                Our signature program that combines mental health treatment with physical wellness for holistic healing.
              </p>
              <Link
                href="/programs/body-brain"
                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors font-semibold"
              >
                Learn More About Body-Brain
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}