import type { MetadataRoute } from 'next'
import { articles } from '@/lib/journal'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'

export default function sitemap(): MetadataRoute.Sitemap {
  // Core static routes
  const staticRoutes = [
    '',
    '/services',
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
    let changeFrequency: 'daily' | 'weekly' | 'monthly' = 'weekly'

    if (route === '') {
      priority = 1.0
      changeFrequency = 'daily'
    } else if (route === '/journal') {
      priority = 0.95
      changeFrequency = 'daily'
    } else if (route === '/contact' || route === '/about') {
      priority = 0.5
      changeFrequency = 'monthly'
    } else if (
      route.includes('-engineering') || 
      route === '/mcp-infrastructure' || 
      route === '/n8n-workflows' || 
      route === '/ai-agents-automation'
    ) {
      priority = 0.9
      changeFrequency = 'weekly'
    }

    return {
      url: `${SITE_URL}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency,
      priority,
    }
  })

  // Dynamic journal articles sitemap
  const dynamicSitemap = articles.map((article) => ({
    url: `${SITE_URL}/journal/${article.slug}`,
    lastModified: new Date(article.lastUpdated || article.date).toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  return [...staticSitemap, ...dynamicSitemap]
}
