export interface ArticleBlock {
  type: 'paragraph' | 'heading' | 'list' | 'code' | 'quote'
  content: string | string[]
  level?: 2 | 3 | 4
  language?: string
}

export interface Article {
  slug: string
  title: string
  subtitle: string
  description: string
  date: string
  lastUpdated: string
  readTime: string
  category: string
  author: {
    name: string
    role: string
    avatar: string
  }
  heroImage: string
  blocks: ArticleBlock[]
  seo: {
    title: string
    description: string
    keywords: string[]
  }
  faqs: { question: string; answer: string }[]
  faq?: { question: string; answer: string }[]
}

export const articles: Article[] = []

// ─────────────────────────────────────────────────────────────
// Supabase-backed articles (auto-published via /api/journal)
// The curated `articles` above stay hardcoded; DB articles are
// merged in at request time with ISR so new posts appear without
// a redeploy. getSupabase is imported dynamically so this module
// stays safe to import from client components.
// ─────────────────────────────────────────────────────────────

/* eslint-disable @typescript-eslint/no-explicit-any */
function mapRowToArticle(r: any): Article {
  const faq = Array.isArray(r.faq) ? r.faq : (Array.isArray(r.faqs) ? r.faqs : [])
  return {
    slug: r.slug,
    title: r.title,
    subtitle: r.subtitle ?? '',
    description: r.description ?? '',
    date: r.date,
    lastUpdated: r.last_updated ?? r.date,
    readTime: r.read_time ?? '5 min read',
    category: r.category ?? 'AI Infrastructure',
    author: r.author ?? { name: 'MeghRoop', role: 'Software, AI & Growth Agency', avatar: '/favicon.svg' },
    // Fall back to the branded site OG image so every shared link has a preview
    heroImage: r.hero_image || `${process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'}/og-image.jpg`,
    blocks: Array.isArray(r.blocks) ? r.blocks : [],
    seo: r.seo ?? { title: r.title, description: r.description ?? '', keywords: [] },
    faqs: faq,
    faq: faq,
  }
}

async function fetchDbArticles(): Promise<Article[]> {
  try {
    const { getSupabase } = await import('@/lib/supabase')
    const db = getSupabase()
    const { data, error } = await db
      .from('journal_articles')
      .select('*')
      .order('date', { ascending: false })
    if (error || !data) return []
    return data.map(mapRowToArticle)
  } catch {
    // Supabase not configured / unreachable — fall back to static articles only
    return []
  }
}

/** All articles: curated (hardcoded) + auto-published (Supabase), newest first. */
export async function getAllArticles(): Promise<Article[]> {
  const dbArticles = await fetchDbArticles()
  const curatedSlugs = new Set(articles.map((a) => a.slug))
  const merged = [...articles, ...dbArticles.filter((a) => !curatedSlugs.has(a.slug))]
  return merged.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

/** Single article by slug — curated first, then Supabase. */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const curated = articles.find((a) => a.slug === slug)
  if (curated) return curated
  try {
    const { getSupabase } = await import('@/lib/supabase')
    const db = getSupabase()
    const { data, error } = await db
      .from('journal_articles')
      .select('*')
      .eq('slug', slug)
      .single()
    if (error || !data) return null
    return mapRowToArticle(data)
  } catch {
    return null
  }
}

// ─────────────────────────────────────────────────────────────
// Markdown <-> structured blocks (shared by /api/journal + admin)
// Pure functions — safe to import anywhere.
// ─────────────────────────────────────────────────────────────

/** Convert a markdown article body into the journal's structured blocks. */
export function markdownToBlocks(md: string): ArticleBlock[] {
  const blocks: ArticleBlock[] = []
  const lines = md.replace(/\r\n/g, '\n').split('\n')
  let i = 0
  let para: string[] = []
  let list: string[] = []

  const flushPara = () => {
    const text = para.join(' ').trim()
    if (text) blocks.push({ type: 'paragraph', content: text })
    para = []
  }
  const flushList = () => {
    if (list.length) blocks.push({ type: 'list', content: list.slice() })
    list = []
  }

  while (i < lines.length) {
    const trimmed = lines[i].trim()

    if (trimmed.startsWith('```')) {
      flushPara(); flushList()
      const language = trimmed.slice(3).trim() || 'typescript'
      const code: string[] = []
      i++
      while (i < lines.length && !lines[i].trim().startsWith('```')) { code.push(lines[i]); i++ }
      i++
      blocks.push({ type: 'code', language, content: code.join('\n') })
      continue
    }

    if (trimmed === '') { flushPara(); flushList(); i++; continue }

    const h = trimmed.match(/^(#{1,4})\s+(.*)$/)
    if (h) {
      flushPara(); flushList()
      const level = h[1].length
      if (level > 1) blocks.push({ type: 'heading', level: Math.min(level, 4) as 2 | 3 | 4, content: h[2].trim() })
      i++; continue
    }

    if (trimmed.startsWith('>')) {
      flushPara(); flushList()
      const quote: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('>')) { quote.push(lines[i].trim().replace(/^>\s?/, '')); i++ }
      blocks.push({ type: 'quote', content: quote.join(' ').trim() })
      continue
    }

    const li = trimmed.match(/^(?:[-*]|\d+\.)\s+(.*)$/)
    if (li) { flushPara(); list.push(li[1].trim()); i++; continue }

    flushList()
    para.push(trimmed)
    i++
  }
  flushPara(); flushList()
  return blocks
}

/** Serialize structured blocks back to markdown (for the admin edit form). */
export function blocksToMarkdown(blocks: ArticleBlock[]): string {
  return blocks
    .map((b) => {
      switch (b.type) {
        case 'heading':
          return '#'.repeat(b.level ?? 2) + ' ' + (b.content as string)
        case 'paragraph':
          return b.content as string
        case 'quote':
          return '> ' + (b.content as string)
        case 'code':
          return '```' + (b.language ?? '') + '\n' + (b.content as string) + '\n```'
        case 'list':
          return (b.content as string[]).map((item) => '- ' + item).join('\n')
        default:
          return ''
      }
    })
    .filter(Boolean)
    .join('\n\n')
}

export function slugifyTitle(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80)
}
