import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Your Journey to Mental Wellness Starts Here
          </h1>
          <p className="text-xl mb-8 opacity-95">
            SafeHarbor Behavioral Health provides compassionate, comprehensive mental health services 
            to help you navigate life's challenges and achieve lasting well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-semibold text-center"
            >
              Schedule Appointment
            </Link>
            <Link
              href="/services"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-primary-600 transition-colors font-semibold text-center"
            >
              Explore Services
            </Link>
          </div>
          
          <div className="mt-12 p-4 bg-red-600 bg-opacity-90 rounded-lg">
            <p className="font-semibold mb-1">Need Immediate Help?</p>
            <p className="text-sm mb-2">Crisis support is available 24/7</p>
            <a href="tel:988" className="text-2xl font-bold hover:underline">
              Call or Text 988
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}