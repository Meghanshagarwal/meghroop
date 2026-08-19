import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/journal'
import { getSupabase, projectSlug, type Project } from '@/lib/supabase'
import { defaultProjects } from '@/data/projects'
import { aiAgentLinks } from '@/data/aiAgents'
import { getAllLocalSeoSlugs } from '@/data/localSeo'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'

// Regenerate the sitemap at most once a day. Without this, sitemap.ts computes
// `new Date()` on every crawler hit, so static pages that never change still
// report a fresh lastmod every time — a false freshness signal to search engines.
export const revalidate = 86400

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
    '/ai-automation-agency-jaipur',
    '/agentic-ai',
    '/software-development',
    '/shopify-development',
    '/wordpress-development',
    '/wordpress-hosting',
    '/branding-creative',
    // AI Agents sub-pages (live — powering the dedicated nav section)
    ...aiAgentLinks.map((a) => a.href),
    // Free tools (lead-gen / high search intent)
    '/free-website-audit',
    '/seo-checker',
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
    } else if (route === '/seo-checker' || route === '/free-website-audit') {
      // High-intent, lead-generating tool pages — push them hard.
      priority = 0.95
      changeFrequency = 'weekly'
    } else if (route === '/contact' || route === '/about') {
      priority = 0.5
      changeFrequency = 'monthly'
    } else if (route === '/privacy' || route === '/terms') {
      priority = 0.3
      changeFrequency = 'monthly'
    } else if (
      route === '/growth-marketing' ||
      route === '/ai-automation' ||
      route === '/ai-automation-agency-jaipur' ||
      route === '/agentic-ai' ||
      route === '/software-development' ||
      route === '/shopify-development' ||
      route === '/wordpress-development' ||
      route === '/wordpress-hosting' ||
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
    lastModified: new Date(project.created_at || Date.now()).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Programmatic local-SEO pages ({service} x {city/India})
  const localSeoSitemap = getAllLocalSeoSlugs().map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...staticSitemap, ...articleSitemap, ...workSitemap, ...localSeoSitemap]
}
