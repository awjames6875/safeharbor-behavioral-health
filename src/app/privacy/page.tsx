import { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

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
    <LegalPage
      title="Privacy Policy"
      lastUpdated="October 9, 2026"
      intro="Safe Harbor Behavioral Health respects your privacy. This policy explains what information we collect through safeharborbehavioralhealth.com, how we use it, and the choices you have."
      sections={sections}
    />
  )
}
