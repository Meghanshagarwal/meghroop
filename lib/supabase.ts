import { createClient } from '@supabase/supabase-js'

export function getSupabase() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export type Project = {
  id: string
  title: string
  description: string
  gradient: string
  image: string
  tags: string[]
  live_url: string
  github_url: string
  year: string
  category: string
  display_order: number
  created_at: string
  // Case-study detail fields (single portfolio page)
  slug?: string | null
  client_intro?: string
  services?: string[]
  project_types?: string[]
  timeline?: string
  outcome?: string
  deliverables?: string[]
  results?: { label: string; before: string; after: string }[]
  gallery?: string[]
}

// Stable slug for a project — falls back to id when slug not yet set
export function projectSlug(p: Pick<Project, 'id' | 'slug'>): string {
  return p.slug && p.slug.trim() ? p.slug.trim() : p.id
}

// Fetch a single project by slug, falling back to id (for legacy rows)
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const db = getSupabase()
    const bySlug = await db.from('projects').select('*').eq('slug', slug).maybeSingle()
    if (bySlug.data) return bySlug.data as Project
    const byId = await db.from('projects').select('*').eq('id', slug).maybeSingle()
    return (byId.data as Project) ?? null
  } catch {
    return null
  }
}

export type Setting = {
  key: string
  value: string
}

export type JournalRow = {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  date: string
  last_updated: string
  read_time: string
  category: string
  author: { name: string; role: string; avatar: string }
  hero_image: string
  blocks: { type: string; content: string | string[]; level?: number; language?: string }[]
  seo: { title: string; description: string; keywords: string[] }
  faqs: { question: string; answer: string }[]
  faq?: { question: string; answer: string }[]
  created_at: string
}

export const JOURNAL_CATEGORIES = [
  'AI Automation',
  'SEO',
  'Meta Ads',
  'Content Marketing',
  'Branding',
  'Software Engineering',
  'Shopify',
  'WordPress',
  'Growth',
]

export const GRADIENT_PRESETS = [
  { label: 'Purple / Blue',   value: 'from-purple-600 via-violet-600 to-blue-600' },
  { label: 'Blue / Cyan',     value: 'from-blue-600 via-cyan-600 to-teal-600' },
  { label: 'Amber / Orange',  value: 'from-amber-600 via-orange-600 to-red-600' },
  { label: 'Emerald / Green', value: 'from-emerald-600 via-green-600 to-teal-600' },
  { label: 'Rose / Pink',     value: 'from-rose-600 via-pink-600 to-purple-600' },
  { label: 'Indigo / Pink',   value: 'from-indigo-600 via-purple-600 to-pink-600' },
]
