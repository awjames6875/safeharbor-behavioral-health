import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Safe Harbor Behavioral Health',
  description: 'How Safe Harbor Behavioral Health collects, uses, and protects the information you share through our website, phone, and forms.',
  alternates: {
    canonical: '/privacy'
  }
}

const sections = [
  {
    heading: 'Information we collect',
    body: [
      'When you fill out a contact or intake form, we collect what you type in, such as your name, phone number, email, insurance, and a short note about what you are looking for.',
      'If you use the voice assistant on our site, what you say is sent to Google to be processed so the assistant can answer you.',
      'When you call or email us, we keep a record of that contact so we can follow up with you.',
    ]
  },
  {
    heading: 'How we use it',
    body: [
      'We use your information only to respond to you, schedule appointments, check insurance, and provide care.',
      'Form submissions are stored in our client management system (GoHighLevel), and our team gets a notification so we can reach you quickly.',
      'We do not sell your information, and we do not share it with advertisers.',
    ]
  },
  {
    heading: 'Your health information',
    body: [
      'Once you become a client, your health information is protected under HIPAA and handled as described in the Notice of Privacy Practices you receive at intake.',
      'Please do not send detailed health information through website forms or email. Share it with us by phone or during your appointment instead.',
    ]
  },
  {
    heading: 'Cookies',
    body: [
      'Our website uses basic cookies needed for it to work. Our contact form is provided by GoHighLevel, which may set its own cookies. You can block or delete cookies in your browser settings.',
    ]
  },
  {
    heading: 'Children',
    body: [
      'Parents and guardians reach out to us on behalf of children. We do not knowingly collect information directly from children under 13 through this website.',
    ]
  },
  {
    heading: 'Your choices',
    body: [
      'You can ask us to see, correct, or delete the information you sent through our website. Contact us using the details below.',
    ]
  },
  {
    heading: 'Changes to this policy',
    body: [
      'We may update this policy from time to time. The date at the top of this page shows when it was last updated.',
    ]
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-teal-500 to-navy-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg opacity-90">Last updated: October 9, 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-10 text-gray-700">
            <p className="text-lg">
              Safe Harbor Behavioral Health respects your privacy. This policy explains what information
              we collect through safeharborbehavioralhealth.com, how we use it, and the choices you have.
            </p>

            {sections.map(section => (
              <div key={section.heading}>
                <h2 className="text-2xl font-bold text-navy-800 mb-4">{section.heading}</h2>
                <div className="space-y-3">
                  {section.body.map(paragraph => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h2 className="text-2xl font-bold text-navy-800 mb-4">Contact us</h2>
              <p>Safe Harbor Behavioral Health</p>
              <address className="not-italic">2510 East 15th Street, Suite 207<br />Tulsa, OK 74104</address>
              <p className="mt-3">
                Phone: <a href="tel:918-553-5746" className="text-teal-600 hover:underline">(918) 553-5746</a>
              </p>
              <p>
                Email: <a href="mailto:support@safeharborbehavioralhealth.com" className="text-teal-600 hover:underline">support@safeharborbehavioralhealth.com</a>
              </p>
            </div>

            <p className="text-sm text-gray-500">
              In a crisis, call or text 988. For general questions, visit our <Link href="/contact" className="text-teal-600 hover:underline">contact page</Link>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
