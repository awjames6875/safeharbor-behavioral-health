export default function CrisisHelpPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Crisis Help & Emergency Resources</h1>
          <p className="text-xl opacity-95 max-w-2xl">
            If you're in crisis, help is available immediately. You are not alone.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Immediate Help Available</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">988 Suicide & Crisis Lifeline</h3>
                  <p className="text-gray-600 mb-3">Free, confidential support 24/7</p>
                  <a href="tel:988" className="inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors font-semibold">
                    Call or Text 988
                  </a>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Services</h3>
                  <p className="text-gray-600 mb-3">For immediate danger or medical emergency</p>
                  <a href="tel:911" className="inline-block bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors font-semibold">
                    Call 911
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Additional Crisis Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <strong>Crisis Text Line:</strong> Text HOME to 741741
                  </li>
                  <li>
                    <strong>NAMI Helpline:</strong> 1-800-950-NAMI (6264)
                  </li>
                  <li>
                    <strong>Veterans Crisis Line:</strong> 1-800-273-8255, Press 1
                  </li>
                  <li>
                    <strong>LGBTQ National Hotline:</strong> 1-888-843-4564
                  </li>
                  <li>
                    <strong>SAMHSA National Helpline:</strong> 1-800-662-4357
                  </li>
                </ul>
              </div>

              <div className="bg-primary-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Warning Signs of Crisis</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Talking about wanting to die or suicide</li>
                  <li>• Looking for ways to harm oneself</li>
                  <li>• Feeling hopeless or having no purpose</li>
                  <li>• Feeling trapped or in unbearable pain</li>
                  <li>• Talking about being a burden</li>
                  <li>• Increasing use of alcohol or drugs</li>
                  <li>• Acting anxious, agitated, or reckless</li>
                  <li>• Sleeping too little or too much</li>
                  <li>• Withdrawing or feeling isolated</li>
                  <li>• Showing rage or talking about revenge</li>
                  <li>• Displaying extreme mood swings</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Help Someone in Crisis</h3>
                <ol className="space-y-2 text-gray-600 list-decimal list-inside">
                  <li>Take it seriously - Listen without judgment</li>
                  <li>Ask directly about suicide if concerned</li>
                  <li>Keep them safe - Remove any means of self-harm</li>
                  <li>Be there - Stay with them or ensure someone else can</li>
                  <li>Help them connect with professional help</li>
                  <li>Follow up - Check in regularly after the crisis</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}