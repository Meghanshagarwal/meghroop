import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/journal'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles()
  // Core static routes
  const staticRoutes = [
    '',
    // Primary service architecture
    '/services',
    '/growth-marketing',
    '/agentic-ai',
    '/software-development',
    '/shopify-development',
    '/wordpress-development',
    '/branding-creative',
    // Core pages
    '/work',
    '/about',
    '/contact',
    '/journal',
    // Legal
    '/privacy',
    '/terms',
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
    } else if (route === '/privacy' || route === '/terms') {
      priority = 0.3
      changeFrequency = 'monthly'
    } else if (
      route === '/growth-marketing' ||
      route === '/agentic-ai' ||
      route === '/software-development' ||
      route === '/shopify-development' ||
      route === '/wordpress-development' ||
      route === '/branding-creative' ||
      route === '/work'
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
