import type { MetadataRoute } from 'next'
import { articles } from '@/lib/journal'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'

export default function sitemap(): MetadataRoute.Sitemap {
  // Core static routes
  const staticRoutes = [
    '',
    '/ai-agents-automation',
    '/web-engineering',
    '/shopify-engineering',
    '/wordpress-engineering',
    '/n8n-workflows',
    '/ai-search-optimization',
    '/mcp-infrastructure',
    '/systems',
    '/about',
    '/contact',
    '/journal',
  ]

  const staticSitemap = staticRoutes.map((route) => {
    let priority = 0.8
    let changeFrequency: 'weekly' | 'monthly' | 'yearly' = 'weekly'

    if (route === '') {
      priority = 1.0
      changeFrequency = 'weekly'
    } else if (route === '/contact') {
      priority = 0.9
      changeFrequency = 'monthly'
    } else if (route === '/about') {
      priority = 0.85
      changeFrequency = 'monthly'
    } else if (route === '/journal') {
      priority = 0.85
      changeFrequency = 'weekly'
    } else if (route === '/systems') {
      priority = 0.9
      changeFrequency = 'weekly'
    }

    return {
      url: `${SITE_URL}${route}`,
      lastModified: new Date('2026-05-22'),
      changeFrequency,
      priority,
    }
  })

  // Dynamic journal articles sitemap
  const dynamicSitemap = articles.map((article) => ({
    url: `${SITE_URL}/journal/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticSitemap, ...dynamicSitemap]
}
