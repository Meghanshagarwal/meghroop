import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/journal'
import { getSupabase, projectSlug, type Project } from '@/lib/supabase'
import { defaultProjects } from '@/data/projects'
import { aiAgentLinks } from '@/data/aiAgents'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'

async function getProjects(): Promise<Project[]> {
  try {
    const db = getSupabase()
    const { data } = await db.from('projects').select('*').order('display_order', { ascending: true })
    return data && data.length ? data : defaultProjects
  } catch {
    return defaultProjects
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articles, projects] = await Promise.all([getAllArticles(), getProjects()])
  // Core static routes
  const staticRoutes = [
    '',
    // Primary service architecture
    '/services',
    '/growth-marketing',
    '/ai-automation',
    '/agentic-ai',
    '/software-development',
    '/shopify-development',
    '/wordpress-development',
    '/branding-creative',
    // AI Agents sub-pages (live — powering the dedicated nav section)
    ...aiAgentLinks.map((a) => a.href),
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
      route === '/ai-automation' ||
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
  const articleSitemap = articles.map((article) => ({
    url: `${SITE_URL}/journal/${article.slug}`,
    lastModified: new Date(article.lastUpdated || article.date).toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  // Dynamic work / case-study pages
  const workSitemap = projects.map((project) => ({
    url: `${SITE_URL}/work/${projectSlug(project)}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticSitemap, ...articleSitemap, ...workSitemap]
}
