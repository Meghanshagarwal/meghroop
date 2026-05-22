import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/web-engineering',
    '/shopify-engineering',
    '/wordpress-engineering',
    '/ai-agents-automation',
    '/ai-search-optimization',
    '/n8n-workflows',
    '/mcp-infrastructure',
    '/systems',
  ]

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date('2026-05-22'),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }))
}

