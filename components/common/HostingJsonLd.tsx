import { hostingMeta, hostingPlans, hostingFaqs, yearlyMonthly } from '@/data/hosting'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'

/**
 * Emits Product + Offer + FAQPage + BreadcrumbList JSON-LD for the
 * hosting page. One monthly + one yearly Offer per plan, plus the
 * 30-day return policy, so Google can show pricing rich results.
 */
export default function HostingJsonLd() {
  const pageUrl = `${SITE_URL}/${hostingMeta.slug}`

  const returnPolicy = {
    '@type': 'MerchantReturnPolicy',
    applicableCountry: 'IN',
    returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
    merchantReturnDays: 30,
    returnMethod: 'https://schema.org/ReturnByMail',
    returnFees: 'https://schema.org/FreeReturn',
  }

  const offers = hostingPlans.flatMap((p) => [
    {
      '@type': 'Offer',
      name: `${p.name} plan — monthly`,
      price: p.monthly,
      priceCurrency: hostingMeta.currency,
      url: pageUrl,
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: p.monthly,
        priceCurrency: hostingMeta.currency,
        unitCode: 'MON',
      },
      hasMerchantReturnPolicy: returnPolicy,
      seller: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'Offer',
      name: `${p.name} plan — yearly (20% off)`,
      price: yearlyMonthly(p.monthly),
      priceCurrency: hostingMeta.currency,
      url: pageUrl,
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: yearlyMonthly(p.monthly),
        priceCurrency: hostingMeta.currency,
        unitCode: 'MON',
      },
      hasMerchantReturnPolicy: returnPolicy,
      seller: { '@id': `${SITE_URL}/#organization` },
    },
  ])

  const allPrices = offers.map((o) => o.price)

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${pageUrl}#product`,
    name: 'Web & WordPress Hosting',
    description: hostingMeta.seoDescription,
    brand: { '@type': 'Brand', name: 'MeghRoop' },
    category: 'Web Hosting',
    url: pageUrl,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: hostingMeta.currency,
      lowPrice: Math.min(...allPrices),
      highPrice: Math.max(...allPrices),
      offerCount: offers.length,
      offers,
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: hostingFaqs.map((f) => ({
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
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: hostingMeta.eyebrow, item: pageUrl },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  )
}
