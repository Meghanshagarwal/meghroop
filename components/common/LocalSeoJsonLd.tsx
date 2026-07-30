import type { ServicePage } from '@/data/services'
import type { SeoLocation, SeoServiceLink } from '@/data/localSeo'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'

export default function LocalSeoJsonLd({
  slug,
  service,
  location,
  data,
}: {
  slug: string
  service: SeoServiceLink
  location: SeoLocation
  data: ServicePage
}) {
  const pageUrl = `${SITE_URL}/${slug}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: `${service.keyword} in ${location.name}`,
    serviceType: service.keyword,
    url: pageUrl,
    description: service.intro,
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: location.isCountry
      ? { '@type': 'Country', name: 'India' }
      : { '@type': 'City', name: location.name, containedInPlace: { '@type': 'State', name: location.region } },
    audience: { '@type': 'BusinessAudience', audienceType: 'Businesses and startups' },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: data.faqs.slice(0, 2).map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: data.eyebrow, item: `${SITE_URL}/${data.slug}` },
      { '@type': 'ListItem', position: 3, name: `${service.keyword} in ${location.name}`, item: pageUrl },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  )
}
