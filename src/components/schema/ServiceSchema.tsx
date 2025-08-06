interface ServiceSchemaProps {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  audience?: string;
  areaServed?: string;
  provider?: {
    name: string;
    address: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
    };
    telephone: string;
    url: string;
  };
  offers?: {
    name: string;
    description: string;
  }[];
  availableChannel?: {
    servicePhone: string;
    serviceUrl: string;
  };
}

export default function ServiceSchema({
  name,
  description,
  serviceType,
  url,
  audience = "Children, Teens, Adults",
  areaServed = "Oklahoma",
  provider,
  offers = [],
  availableChannel
}: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "serviceType": serviceType,
    "url": url,
    "audience": {
      "@type": "PeopleAudience",
      "audienceType": audience
    },
    "areaServed": {
      "@type": "State",
      "name": areaServed
    },
    ...(provider && {
      "provider": {
        "@type": "MedicalBusiness",
        "name": provider.name,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": provider.address.streetAddress,
          "addressLocality": provider.address.addressLocality,
          "addressRegion": provider.address.addressRegion,
          "postalCode": provider.address.postalCode,
          "addressCountry": "US"
        },
        "telephone": provider.telephone,
        "url": provider.url
      }
    }),
    ...(offers.length > 0 && {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Service Options",
        "itemListElement": offers.map(offer => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": offer.name,
            "description": offer.description
          }
        }))
      }
    }),
    ...(availableChannel && {
      "availableChannel": {
        "@type": "ServiceChannel",
        "availableLanguage": "English",
        "servicePhone": availableChannel.servicePhone,
        "serviceUrl": availableChannel.serviceUrl
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceSchema)
      }}
    />
  );
}