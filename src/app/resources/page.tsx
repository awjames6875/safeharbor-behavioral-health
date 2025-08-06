import Link from 'next/link'

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Mental Health Resources</h1>
          <p className="text-xl opacity-95 max-w-2xl">
            Helpful resources and information to support your mental health journey.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Crisis Help Available 24/7</h2>
              <p className="text-gray-600 mb-4">
                If you or someone you know is experiencing a mental health crisis, immediate help is available.
              </p>
              <Link
                href="/resources/crisis-help"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors font-semibold"
              >
                Access Crisis Resources
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Self-Help Resources</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Mindfulness exercises</li>
                  <li>• Stress management techniques</li>
                  <li>• Sleep hygiene tips</li>
                  <li>• Healthy coping strategies</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Educational Materials</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Understanding mental health conditions</li>
                  <li>• Treatment options overview</li>
                  <li>• Family support guides</li>
                  <li>• Recovery and wellness planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}