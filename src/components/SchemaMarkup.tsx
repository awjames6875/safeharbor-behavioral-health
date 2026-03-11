// components/SchemaMarkup.tsx
// JSON-LD structured data — all parent-facing text uses
// "emotional wellness" / "behavioral health" / "support sessions"
// Schema @type values stay as Google's vocabulary (MedicalTherapy, etc.)

import Script from 'next/script'

// ============================================================
// ORGANIZATION + LOCAL BUSINESS (add to layout.tsx)
// ============================================================
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': 'https://www.safeharborbehavioralhealth.com/#organization',
    name: 'SafeHarbor Behavioral Health',
    alternateName: 'Safe Harbor Behavioral Health',
    url: 'https://www.safeharborbehavioralhealth.com',
    logo: 'https://www.safeharborbehavioralhealth.com/logo.jpg',
    image: 'https://www.safeharborbehavioralhealth.com/logo.jpg',
    description:
      'Trauma-informed emotional wellness services for children and teens ages 3-17 in Tulsa, Oklahoma. ODMHSAS certified. Medicaid/SoonerCare accepted.',
    telephone: '(918) 553-5746',
    email: 'support@safeharborbehavioralhealth.com',
    founder: {
      '@type': 'Person',
      name: 'Adam James',
      jobTitle: 'Founder & CEO',
      url: 'https://www.safeharborbehavioralhealth.com/about',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2510 East 15th Street',
      addressLocality: 'Tulsa',
      addressRegion: 'OK',
      postalCode: '74104',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1399,
      longitude: -95.9619,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    priceRange: '$$',
    paymentAccepted:
      'Medicaid, SoonerCare, Blue Cross Blue Shield, United Healthcare, Aetna, Cigna, Health Choice, Community Care, TriCare',
    currenciesAccepted: 'USD',
    areaServed: [
      { '@type': 'City', name: 'Tulsa, OK' },
      { '@type': 'City', name: 'Broken Arrow, OK' },
      { '@type': 'City', name: 'Owasso, OK' },
      { '@type': 'City', name: 'Jenks, OK' },
      { '@type': 'City', name: 'Bixby, OK' },
      { '@type': 'City', name: 'Sand Springs, OK' },
      { '@type': 'City', name: 'Sapulpa, OK' },
    ],
    sameAs: [
      // Add your social media URLs here:
      // 'https://www.facebook.com/safeharborbehavioralhealth',
      // 'https://www.instagram.com/safeharborbehavioralhealth',
    ],
    medicalSpecialty: ['Psychiatric', 'Pediatric'],
    availableService: [
      {
        '@type': 'MedicalTherapy',
        name: 'Child Behavioral Health Services',
        description:
          'Specialized emotional wellness support for children ages 3-12',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Teen Support & Counseling',
        description:
          'Adolescent-focused support for stress, mood, and life transitions',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Body & Brain Integration Program',
        description:
          'Innovative movement-based program connecting physical wellness with emotional regulation',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Trauma Recovery Services',
        description:
          'Trauma-informed care helping children process difficult experiences',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Family Support Sessions',
        description:
          'Strengthening family bonds through collaborative support sessions',
      },
    ],
  }

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ============================================================
// WEBSITE + SEARCH (add to layout.tsx)
// ============================================================
export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SafeHarbor Behavioral Health',
    url: 'https://www.safeharborbehavioralhealth.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate:
          'https://www.safeharborbehavioralhealth.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ============================================================
// BREADCRUMB (use on every subpage)
// ============================================================
interface BreadcrumbItem {
  name: string
  url: string
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ============================================================
// ARTICLE (use on every blog post)
// ============================================================
interface ArticleSchemaProps {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  image?: string
  url: string
}

export function ArticleSchema({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    author: { '@type': 'Person', name: author },
    datePublished,
    dateModified: dateModified || datePublished,
    image: image || 'https://www.safeharborbehavioralhealth.com/logo.jpg',
    url,
    publisher: {
      '@type': 'Organization',
      name: 'SafeHarbor Behavioral Health',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.safeharborbehavioralhealth.com/logo.jpg',
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ============================================================
// FAQ PAGE
// ============================================================
interface FAQItem {
  question: string
  answer: string
}

export function FAQSchema({ items }: { items: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ============================================================
// SERVICE (use on individual service pages)
// ============================================================
interface ServiceSchemaProps {
  name: string
  description: string
  url: string
}

export function ServiceSchema({ name, description, url }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    name,
    description,
    url,
    provider: {
      '@type': 'MedicalBusiness',
      name: 'SafeHarbor Behavioral Health',
      url: 'https://www.safeharborbehavioralhealth.com',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceLocation: {
        '@type': 'Place',
        name: 'SafeHarbor Behavioral Health',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '2510 East 15th Street',
          addressLocality: 'Tulsa',
          addressRegion: 'OK',
          postalCode: '74104',
        },
      },
    },
  }

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// ============================================================
// LOCATION (use on location pages)
// ============================================================
interface LocationSchemaProps {
  name: string
  areaName: string
  url: string
}

export function LocationSchema({ name, areaName, url }: LocationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: `SafeHarbor Behavioral Health - ${name}`,
    url,
    description: `Emotional wellness services for children and teens in ${areaName}. Medicaid accepted.`,
    telephone: '(918) 553-5746',
    areaServed: { '@type': 'City', name: areaName },
    parentOrganization: {
      '@type': 'MedicalBusiness',
      name: 'SafeHarbor Behavioral Health',
      url: 'https://www.safeharborbehavioralhealth.com',
    },
  }

  return (
    <Script
      id="location-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
