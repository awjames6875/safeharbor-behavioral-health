import { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Accessibility | Safe Harbor Behavioral Health',
  description: 'Safe Harbor Behavioral Health wants everyone to be able to use our website and reach our services. Learn how to get help or report a problem.',
  alternates: {
    canonical: '/accessibility'
  }
}

const sections = [
  {
    heading: 'Our goal',
    body: [
      'We are working to make this website meet the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA. This includes clear text, keyboard-friendly navigation, descriptive links, and captions written as real text on the page.',
      'Some parts of the site may not fully meet this goal yet. We review and improve the site over time.',
    ]
  },
  {
    heading: 'Getting help another way',
    body: [
      'If any part of this website is hard to use, call us at (918) 553-5746 or email us. We will give you the information or help you need another way, such as by phone.',
      'Sessions are available in person at our Tulsa office or by Zoom from anywhere in Oklahoma. If you have access needs for a visit, let us know when you schedule so we can plan ahead.',
    ]
  },
  {
    heading: 'Report a problem',
    body: [
      'If you find something on this website that does not work for you, please tell us the page and what happened. We will reply and work to fix it.',
    ]
  },
]

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility"
      lastUpdated="October 9, 2026"
      intro="Safe Harbor Behavioral Health wants everyone, including people with disabilities, to be able to use our website and reach our services."
      sections={sections}
    />
  )
}
