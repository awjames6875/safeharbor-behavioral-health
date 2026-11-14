import { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Service | Safe Harbor Behavioral Health',
  description: 'The terms for using the Safe Harbor Behavioral Health website, including what the site is and is not, emergencies, and how to reach us.',
  alternates: {
    canonical: '/terms'
  }
}

const sections = [
  {
    heading: 'Website information is not medical advice',
    body: [
      'The content on this website is for general information only. It is not a diagnosis or a substitute for care from a licensed professional who knows your situation.',
    ]
  },
  {
    heading: 'Using the site does not make you a client',
    body: [
      'Sending a form, email, or message, or using the voice assistant, does not create a provider-client relationship. That begins only after you complete intake with Safe Harbor.',
    ]
  },
  {
    heading: 'Emergencies',
    body: [
      'This website, our forms, and our voice assistant are not monitored for emergencies. If you or someone else is in danger, call 911. For a mental health crisis, call or text 988.',
    ]
  },
  {
    heading: 'Voice assistant',
    body: [
      'The voice assistant on this site is automated. It can make mistakes and cannot give medical advice. Please confirm anything important with our team by phone.',
    ]
  },
  {
    heading: 'Insurance and appointments',
    body: [
      'Insurance coverage depends on your plan. We will help check your benefits, but final coverage is decided by your insurance company. Appointment availability can change.',
    ]
  },
  {
    heading: 'Links to other websites',
    body: [
      'Our site may link to other websites, such as crisis resources or Zoom. We are not responsible for their content or privacy practices.',
    ]
  },
  {
    heading: 'Our content',
    body: [
      'The text, images, logo, and videos on this website belong to Safe Harbor Behavioral Health. Please do not copy or reuse them without our written permission.',
    ]
  },
  {
    heading: 'No guarantees',
    body: [
      'We work to keep this website accurate and available, but we cannot promise it will always be error-free or online. To the extent the law allows, Safe Harbor is not liable for losses that come from using this website.',
    ]
  },
  {
    heading: 'Governing law',
    body: [
      'These terms are governed by the laws of the State of Oklahoma.',
    ]
  },
  {
    heading: 'Changes to these terms',
    body: [
      'We may update these terms from time to time. The date at the top of this page shows when they were last updated.',
    ]
  },
]

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      lastUpdated="October 9, 2026"
      intro="These terms explain how you may use safeharborbehavioralhealth.com. By using this website, you agree to them."
      sections={sections}
    />
  )
}
