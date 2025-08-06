interface LocalBusinessSchemaProps {
  name: string;
  description: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  telephone: string;
  email?: string;
  faxNumber?: string;
  latitude: string;
  longitude: string;
  url: string;
  areaServed?: string[];
  services?: string[];
  openingHours?: string[];
  paymentAccepted?: string[];
  priceRange?: string;
  amenityFeature?: { name: string; value: boolean }[];
}

export default function LocalBusinessSchema({
  name,
  description,
  streetAddress,
  addressLocality,
  addressRegion,
  postalCode,
  telephone,
  email,
  faxNumber,
  latitude,
  longitude,
  url,
  areaServed = [],
  services = [],
  openingHours = [],
  paymentAccepted = [],
  priceRange = "$$",
  amenityFeature = []
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "name": name,
    "description": description,
    "url": url,
    "telephone": telephone,
    ...(email && { "email": email }),
    ...(faxNumber && { "faxNumber": faxNumber }),
    "address": {
      "@type": "PostalAddress",
      "streetAddress": streetAddress,
      "addressLocality": addressLocality,
      "addressRegion": addressRegion,
      "postalCode": postalCode,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    },
    "priceRange": priceRange,
    "medicalSpecialty": [
      "Child Psychology",
      "Adolescent Psychology",
      "Family Therapy", 
      "Behavioral Health"
    ],
    ...(areaServed.length > 0 && {
      "areaServed": areaServed.map(area => ({
        "@type": "City",
        "name": area
      }))
    }),
    ...(services.length > 0 && {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Mental Health Services",
        "itemListElement": services.map(service => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service,
            "serviceType": "Mental Health Treatment"
          }
        }))
      }
    }),
    "paymentAccepted": paymentAccepted.length > 0 ? paymentAccepted : [
      "Cash",
      "Credit Card", 
      "Debit Card",
      "Check",
      "Insurance",
      "Medicaid",
      "SoonerCare",
      "Medicare",
      "Blue Cross Blue Shield",
      "Aetna",
      "UnitedHealthcare",
      "Cigna"
    ],
    "currenciesAccepted": "USD",
    ...(openingHours.length > 0 && { "openingHours": openingHours }),
    ...(amenityFeature.length > 0 && {
      "amenityFeature": amenityFeature.map(feature => ({
        "@type": "LocationFeatureSpecification",
        "name": feature.name,
        "value": feature.value
      }))
    }),
    "sameAs": [
      "https://www.facebook.com/SafeHarborBH",
      "https://www.linkedin.com/company/safeharbor-behavioral-health",
      "https://www.instagram.com/safeharborbh"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema)
      }}
    />
  );
}