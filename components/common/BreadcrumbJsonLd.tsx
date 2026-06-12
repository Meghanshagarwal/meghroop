const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'

interface Crumb {
  name: string
  /** Path starting with '/', e.g. '/web-engineering'. Home is added automatically. */
  path: string
}

/**
 * Emits BreadcrumbList JSON-LD. Home is prepended automatically.
 * Usage: <BreadcrumbJsonLd items={[{ name: 'Web Engineering', path: '/web-engineering' }]} />
 */
export default function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const elements = [{ name: 'Home', path: '/' }, ...items].map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: `${SITE_URL}${c.path === '/' ? '/' : c.path}`,
  }))

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: elements,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
