import { Metadata } from 'next'
import ServiceSchema from '@/components/schema/ServiceSchema'
import BreadcrumbSchema from '@/components/schema/BreadcrumbSchema'
import Link from 'next/link'
import ServiceContactForm from '@/components/ServiceContactForm'

export const metadata: Metadata = {
  title: 'ADHD & Focus Support in Tulsa | Safe Harbor Behavioral Health',
  description: 'ADHD and focus support for children, teens, and adults in Tulsa and by Zoom across Oklahoma. Practical strategies, parent coaching, and school support. Medicaid/SoonerCare accepted.',
  alternates: { canonical: '/services/adhd-treatment' }
}

const faqs = [
  {
    question: 'Do you prescribe ADHD medication?',
    answer: 'No. Safe Harbor does not prescribe medication. Our licensed counselors focus on skills, routines, and support, and we are glad to work alongside your doctor if medication is part of the plan.'
  },
  {
    question: 'Do I need an ADHD diagnosis to get started?',
    answer: 'No. If focus, impulsivity, or follow-through are getting in the way at school, work, or home, you can reach out. We will talk through what is going on and build a plan from there.'
  },
  {
    question: 'Can sessions happen by Zoom?',
    answer: 'Yes. We offer secure Zoom sessions anywhere in Oklahoma, as well as in-person visits at our Tulsa office.'
  },
  {
    question: 'How involved are parents?',
    answer: 'Very. For children and teens, parents learn the same strategies so the progress made in sessions carries over at home and at school.'
  },
]

export default function AdhdTreatmentPage() {
  return (
    <>
      <ServiceSchema
        name="ADHD & Focus Support"
        description="ADHD and focus support for children, teens, and adults in Tulsa and across Oklahoma by Zoom"
        serviceType="ADHD Support"
        url="https://www.safeharborbehavioralhealth.com/services/adhd-treatment"
      />
      <BreadcrumbSchema items={[
        { position: 1, name: "Home", item: "https://www.safeharborbehavioralhealth.com" },
        { position: 2, name: "Services", item: "https://www.safeharborbehavioralhealth.com/services" },
        { position: 3, name: "ADHD & Focus Support", item: "https://www.safeharborbehavioralhealth.com/services/adhd-treatment" },
      ]} />
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">ADHD &amp; Focus Support</h1>
            <p className="text-xl md:text-2xl opacity-95 mb-8">
              Practical strategies for children, teens, and adults to thrive at school, work, and home
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
            <h2 className="text-3xl font-bold text-navy-800 mb-8">How We Help With ADHD</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                ADHD can make focus, organization, and managing big feelings harder than it needs to be.
                At Safe Harbor Behavioral Health, our licensed counselors help children, teens, and adults
                build the skills and routines that make daily life work better.
              </p>
              <p className="mb-6">
                We do not prescribe medication. Our support sessions focus on practical strategies, and we
                are happy to work alongside your doctor or your child&apos;s school.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signs and Approach */}
      <section className="py-16 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-teal-600 mb-4">Signs It May Be Time to Reach Out</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Trouble focusing or finishing tasks</li>
                  <li>• Forgetting assignments, chores, or appointments</li>
                  <li>• Acting before thinking</li>
                  <li>• Frequent meltdowns or frustration</li>
                  <li>• Struggling at school or work despite real effort</li>
                  <li>• Stress at home around homework and routines</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-teal-600 mb-4">What Support Looks Like</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Focus, planning, and organization skills</li>
                  <li>• Calming and emotional regulation tools</li>
                  <li>• <Link href="/services/parent-coaching" className="text-teal-600 hover:underline">Parent coaching</Link> for routines that stick</li>
                  <li>• <Link href="/services/school-support" className="text-teal-600 hover:underline">School support</Link> and teacher collaboration</li>
                  <li>• <Link href="/programs/body-brain" className="text-teal-600 hover:underline">Body &amp; Brain</Link> movement-based program</li>
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
            serviceName="ADHD & Focus Support"
            serviceTitle="ADHD & Focus Support"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Let&apos;s Make Every Day a Little Easier</h2>
            <p className="text-xl mb-8 opacity-95">
              Talk with our team about ADHD and focus support for you or your child.
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
