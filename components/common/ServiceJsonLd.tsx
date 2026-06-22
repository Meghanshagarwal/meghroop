import type { ServicePage } from '@/data/services'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'

/**
 * Emits Service + FAQPage + BreadcrumbList JSON-LD for a service page.
 * Driven entirely by the ServicePage data object so every service page
 * stays in sync with its content (offerings, FAQs) automatically.
 */
export default function ServiceJsonLd({ data }: { data: ServicePage }) {
  const pageUrl = `${SITE_URL}/${data.slug}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: data.eyebrow,
    serviceType: data.eyebrow,
    url: pageUrl,
    description: data.seoDescription,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: 'Worldwide',
    audience: { '@type': 'BusinessAudience', audienceType: 'Businesses and startups' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${data.eyebrow} — what we do`,
      itemListElement: data.offerings.map((o) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: o.title,
          description: o.desc,
        },
      })),
    },
  }

  const faqSchema = data.faqs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: data.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: data.eyebrow, item: pageUrl },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
