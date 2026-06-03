// Star Rating Schema — JSON-LD for Google Search Stars
// Usage: <StarRatingSchema name="Product Name" rating={4.9} reviewCount={120} />

interface Props {
  name: string
  description: string
  rating?: number
  reviewCount?: number
  brand?: string
  category?: string
}

export function StarRatingSchema({
  name,
  description,
  rating = 4.9,
  reviewCount = 150,
  brand = "Winsoft Software Consultancy",
  category = "Software",
}: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "applicationCategory": category,
    "operatingSystem": "Windows, Android",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating.toString(),
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": reviewCount.toString(),
    },
    "author": {
      "@type": "Organization",
      "name": brand,
      "url": "https://www.winsoft.in",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Organization Schema for homepage
export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Winsoft Software Consultancy",
    "url": "https://www.winsoft.in",
    "logo": "https://www.winsoft.in/winsoftlogo.jpg",
    "foundingDate": "1998",
    "description": "Professional ERP software for dairy, sugar factory, and gold/jewellery industry. 25+ years of experience.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 448, Lane 14B, Hari Om Nagar",
      "addressLocality": "Kolhapur",
      "addressRegion": "Maharashtra",
      "postalCode": "416010",
      "addressCountry": "IN",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-94230-39902",
      "contactType": "sales",
      "availableLanguage": ["English", "Marathi", "Hindi", "Kannada"],
    },
    "sameAs": [
      "https://www.instagram.com/winsoft_kolhapur",
      "https://facebook.com/winsoft",
      "https://linkedin.com/company/winsoft",
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "ratingCount": "500",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
