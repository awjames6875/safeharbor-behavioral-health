import { Metadata } from 'next'
import ServiceSchema from '@/components/schema/ServiceSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import Link from 'next/link'
import ServiceContactForm from '@/components/ServiceContactForm'

export const metadata: Metadata = {
  title: 'Adult Mental Health Support in Tulsa | Safe Harbor Behavioral Health',
  description: 'Adult emotional wellness support for anxiety, depression, trauma, and stress in Tulsa and by Zoom across Oklahoma. Medicaid/SoonerCare, BCBS, Aetna, and United Healthcare accepted.',
  alternates: { canonical: '/services/adult-mental-health' }
}

const faqs = [
  {
    question: 'Can I meet by Zoom?',
    answer: 'Yes. We offer secure Zoom sessions anywhere in Oklahoma, as well as in-person visits at our Tulsa office.'
  },
  {
    question: 'How soon can I be seen?',
    answer: 'Same-week appointments are often available. We aim to see you within 48 hours once your intake paperwork is completed.'
  },
  {
    question: 'Do you prescribe medication?',
    answer: 'No. Safe Harbor does not prescribe medication. Our licensed counselors provide support sessions, and we are glad to work alongside your doctor.'
  },
  {
    question: 'What if I am not sure what I need?',
    answer: 'That is okay. Call us or send the form below. We will listen, talk through what is going on, and help you find the right next step.'
  },
]

export default function AdultMentalHealthPage() {
  return (
    <>
      <ServiceSchema
        name="Adult Mental Health Support"
        description="Adult emotional wellness support for anxiety, depression, trauma, and stress in Tulsa and across Oklahoma by Zoom"
        serviceType="Adult Mental Health"
        url="https://www.safeharborbehavioralhealth.com/services/adult-mental-health"
      />
      <BreadcrumbSchema items={[
        { position: 1, name: "Home", item: "https://www.safeharborbehavioralhealth.com" },
        { position: 2, name: "Services", item: "https://www.safeharborbehavioralhealth.com/services" },
        { position: 3, name: "Adult Mental Health", item: "https://www.safeharborbehavioralhealth.com/services/adult-mental-health" },
      ]} />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Adult Mental Health Support</h1>
            <p className="text-xl md:text-2xl opacity-95 mb-8">
              Judgment-free emotional wellness support for adults in Tulsa and across Oklahoma
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-cream-100 text-navy-800 px-8 py-3 rounded-md hover:bg-cream-200 transition-colors font-semibold"
              >
                Schedule Today
              </Link>
              <p className="text-lg opacity-90 self-center">
                Medicaid &amp; SoonerCare Accepted • Same-Week Appointments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">You Don&apos;t Have to Carry It Alone</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Life can pile up: stress at work, a loss, old pain that never healed, or days when getting
                out of bed feels hard. At Safe Harbor Behavioral Health, our licensed counselors offer
                one-on-one support sessions for adults, at your pace and without judgment.
              </p>
              <p className="mb-6">
                Meet with us in person in Tulsa or by Zoom from anywhere in Oklahoma.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Help With */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-teal-600 mb-4">What We Help With</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Anxiety and constant worry</li>
                  <li>• Depression and low mood</li>
                  <li>• <Link href="/services/trauma-treatment" className="text-teal-600 hover:underline">Trauma</Link> and painful past experiences</li>
                  <li>• Stress, burnout, and big life changes</li>
                  <li>• Grief and loss</li>
                  <li>• Rebuilding life after incarceration</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-teal-600 mb-4">What Support Looks Like</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• One-on-one sessions with a licensed counselor</li>
                  <li>• Practical coping and calming tools</li>
                  <li>• Goals you set, at a pace that feels right</li>
                  <li>• <Link href="/services/group-therapy" className="text-teal-600 hover:underline">Group sessions</Link> for connection with others</li>
                  <li>• In person in Tulsa or by Zoom statewide</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Insurance &amp; Coverage</h2>
            <div className="bg-teal-50 rounded-lg p-6">
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>• Medicaid / SoonerCare</li>
                <li>• Blue Cross Blue Shield</li>
                <li>• Aetna</li>
                <li>• United Healthcare</li>
              </ul>
              <p className="text-sm text-gray-600">
                Not sure about your coverage? Call us and we will check it for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-navy-800 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map(faq => (
                <div key={faq.question} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-teal-600 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ServiceContactForm
            serviceName="Adult Mental Health"
            serviceTitle="Adult Mental Health Support"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Reaching Out Is the First Step</h2>
            <p className="text-xl mb-8 opacity-95">
              Talk with our team today. We will help you find the right support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block bg-cream-100 text-navy-800 px-8 py-4 rounded-md hover:bg-cream-200 transition-colors font-semibold text-lg"
              >
                Schedule a Visit
              </Link>
              <Link
                href="tel:918-553-5746"
                className="inline-block border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-navy-800 transition-colors font-semibold text-lg"
              >
                Call (918) 553-5746
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
