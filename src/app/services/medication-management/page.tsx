import Link from 'next/link'

export default function MedicationManagementPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Medication Management</h1>
          <p className="text-xl opacity-95 max-w-2xl">
            Expert psychiatric care to optimize your medication treatment plan for better mental health outcomes.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Medication Management</h2>
            <p className="text-gray-600 mb-6">
              Our board-certified psychiatrists provide expert medication management services to help you find the right 
              treatment for your mental health condition. We take a careful, personalized approach to ensure medications 
              are safe, effective, and well-tolerated.
            </p>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Process</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-2 mr-4">
                    <span className="text-primary-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Initial Evaluation</h4>
                    <p className="text-gray-600">Comprehensive assessment of symptoms, medical history, and current medications</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-2 mr-4">
                    <span className="text-primary-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Treatment Planning</h4>
                    <p className="text-gray-600">Develop a personalized medication plan based on your specific needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 rounded-full p-2 mr-4">
                    <span className="text-primary-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ongoing Monitoring</h4>
                    <p className="text-gray-600">Regular follow-ups to assess effectiveness and adjust as needed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-block bg-primary-600 text-white px-8 py-3 rounded-md hover:bg-primary-700 transition-colors font-semibold"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}