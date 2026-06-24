import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Safe Harbor Behavioral Health Tulsa | Common Questions Answered',
  description: 'Answers to common questions about Safe Harbor Behavioral Health in Tulsa, OK. Insurance, appointments, services for all ages, telehealth, and more.',
  alternates: {
    canonical: '/faq'
  },
  openGraph: {
    title: 'FAQ | Safe Harbor Behavioral Health Tulsa',
    description: 'Common questions about Safe Harbor Behavioral Health — insurance, appointments, services, telehealth, and more.',
    url: 'https://safeharborbehavioralhealth.com/faq',
  }
}

const faqs = [
  {
    question: "How quickly can I get an appointment at Safe Harbor Behavioral Health?",
    answer: "Same-week appointments are available for new clients. Call (918) 553-5746 or submit our online form and we will respond within 24 hours to schedule your visit. We work hard to make sure no family waits longer than necessary."
  },
  {
    question: "Does Safe Harbor Behavioral Health accept Medicaid or SoonerCare?",
    answer: "Yes. Safe Harbor Behavioral Health accepts Medicaid and SoonerCare for all eligible clients in Oklahoma, including children, teens, and adults. We also accept Blue Cross Blue Shield and Aetna. For clients without insurance, we offer sliding scale fees and payment plans so cost is never a barrier to care."
  },
  {
    question: "What insurance does Safe Harbor accept?",
    answer: "We currently accept Medicaid/SoonerCare, Blue Cross Blue Shield, and Aetna. We are actively credentialing with additional insurance providers. If you do not see your insurance listed, call us at (918) 553-5746 — we offer sliding scale fees for uninsured clients and can help you apply for Medicaid/SoonerCare."
  },
  {
    question: "Do you serve adults, or only children and teens?",
    answer: "Safe Harbor serves all ages — children, teens, and adults. We provide emotional wellness support for individuals in recovery, those reintegrating after incarceration, and adults navigating anxiety, depression, trauma, and other behavioral health challenges. Everyone deserves a safe harbor."
  },
  {
    question: "Can I get therapy online or by video in Oklahoma?",
    answer: "Yes. Safe Harbor offers secure telehealth sessions via Zoom statewide throughout Oklahoma. You do not need to visit a physical location — sessions are conducted from your home through a secure, HIPAA-compliant video call. This makes care accessible no matter where you are in Oklahoma."
  },
  {
    question: "What is the Body and Brain program?",
    answer: "Body and Brain is Safe Harbor's signature program that combines licensed behavioral health support with physical movement. Activities like boxing, dance, yoga, and drums are wrapped with a clinical layer — bringing licensed counselors into community settings like gyms, daycares, and after-school programs. It removes the stigma of traditional therapy by meeting people where they already are."
  },
  {
    question: "Where is Safe Harbor Behavioral Health located?",
    answer: "Our main office is at 2510 East 15th Street, Tulsa, OK 74104. We also serve clients throughout the Tulsa metro area and statewide via telehealth. Office hours are Monday through Friday 8am to 6pm and Saturday 9am to 2pm."
  },
  {
    question: "How do I schedule an appointment?",
    answer: "Call us at (918) 553-5746 or fill out the appointment request form on our contact page. We respond within 24 hours and offer same-week appointments for new clients. For immediate crisis support, call or text 988."
  },
  {
    question: "Who founded Safe Harbor Behavioral Health?",
    answer: "Safe Harbor Behavioral Health was founded by Adam James, a Tulsa entrepreneur and community advocate. Adam built Safe Harbor from personal experience with trauma and recovery, with a mission to make behavioral health accessible to every person regardless of age, background, or income."
  },
  {
    question: "Do you work with community organizations, daycares, or gyms?",
    answer: "Yes. Safe Harbor partners with daycares, after-school programs, gyms, nonprofits, and community organizations to bring behavioral health services directly into community settings. Through our facility fee and Medicaid billing model, we can create a new revenue stream for partners at no cost to them. If your organization serves groups meeting 2 or more hours per day, contact us to learn more."
  },
  {
    question: "What conditions do you treat?",
    answer: "Safe Harbor provides support for anxiety, depression, ADHD, trauma and PTSD, behavioral challenges, substance use, family conflict, and general emotional wellness. We serve children, teens, and adults using evidence-based, trauma-informed approaches including individual therapy, group therapy, family therapy, psychiatric evaluation, and medication management."
  },
  {
    question: "Is there a long waitlist?",
    answer: "No. Unlike many behavioral health providers, Safe Harbor offers same-week appointments for new clients. We believe mental health support should be accessible when you need it — not weeks or months later. Call (918) 553-5746 to get started today."
  }
]

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      {/* Hero */}
      <section className="bg-navy-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Frequently Asked Questions
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Questions About Safe Harbor
          </h1>
          <p className="text-navy-200 text-lg mb-8">
            Everything you need to know about our services, insurance, appointments, and more.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            📅 Schedule Same-Week Appointment
          </a>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 px-4 bg-cream-50">
        <div className="max-w-3xl mx-auto">

          {/* Quick facts bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { icon: "📅", label: "Same-Week Appointments" },
              { icon: "💳", label: "Medicaid, BCBS & Aetna" },
              { icon: "🧑‍🤝‍🧑", label: "All Ages Served" },
              { icon: "💻", label: "Telehealth Statewide" },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-100">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-xs font-semibold text-navy-800">{item.label}</div>
              </div>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <h2 className="text-lg font-bold text-navy-900 mb-3 flex gap-3">
                  <span className="text-teal-500 flex-shrink-0">Q</span>
                  <span>{faq.question}</span>
                </h2>
                <p className="text-navy-700 leading-relaxed pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 bg-navy-900 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
            <p className="text-navy-200 mb-6">
              Our team is here to help. Call us or request an appointment online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9185535746"
                className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                📞 Call (918) 553-5746
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-navy-900 hover:bg-navy-50 font-semibold px-6 py-3 rounded-full transition-colors"
              >
                📅 Request Appointment
              </a>
            </div>
            <p className="text-navy-300 text-sm mt-4">
              Same-week appointments available · Sliding scale for uninsured clients
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
