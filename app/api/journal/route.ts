import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

export const dynamic = 'force-dynamic'

/* eslint-disable @typescript-eslint/no-explicit-any */

type Block = {
  type: 'paragraph' | 'heading' | 'list' | 'code' | 'quote'
  content: string | string[]
  level?: 2 | 3 | 4
  language?: string
}

// Convert a markdown article into the journal's structured block format
function markdownToBlocks(md: string): Block[] {
  const blocks: Block[] = []
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
    const line = lines[i]
    const trimmed = line.trim()

    // Fenced code block
    if (trimmed.startsWith('```')) {
      flushPara(); flushList()
      const language = trimmed.slice(3).trim() || 'typescript'
      const code: string[] = []
      i++
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        code.push(lines[i]); i++
      }
      i++ // skip closing fence
      blocks.push({ type: 'code', language, content: code.join('\n') })
      continue
    }

    // Blank line ends paragraph / list
    if (trimmed === '') { flushPara(); flushList(); i++; continue }

    // Heading (#1 is the title — skip it)
    const h = trimmed.match(/^(#{1,4})\s+(.*)$/)
    if (h) {
      flushPara(); flushList()
      const level = h[1].length
      if (level > 1) {
        blocks.push({ type: 'heading', level: Math.min(level, 4) as 2 | 3 | 4, content: h[2].trim() })
      }
      i++; continue
    }

    // Blockquote
    if (trimmed.startsWith('>')) {
      flushPara(); flushList()
      const quote: string[] = []
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quote.push(lines[i].trim().replace(/^>\s?/, '')); i++
      }
      blocks.push({ type: 'quote', content: quote.join(' ').trim() })
      continue
    }

    // List item (bullet or numbered)
    const li = trimmed.match(/^(?:[-*]|\d+\.)\s+(.*)$/)
    if (li) {
      flushPara()
      list.push(li[1].trim())
      i++; continue
    }

    // Plain paragraph line
    flushList()
    para.push(trimmed)
    i++
  }
  flushPara(); flushList()
  return blocks
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80)
}

export async function POST(req: Request) {
  // Bearer-token auth (n8n sends Authorization: Bearer <JOURNAL_API_KEY>)
  const token = (req.headers.get('authorization') || '').replace(/^Bearer\s+/i, '')
  const expected = process.env.JOURNAL_API_KEY
  if (!expected || token !== expected) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let body: any
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const title = (body.title || '').toString().trim()
  if (!title) return NextResponse.json({ error: 'title is required' }, { status: 400 })

  const blocks: Block[] =
    Array.isArray(body.blocks) && body.blocks.length
      ? body.blocks
      : markdownToBlocks((body.content || body.markdown || body.body_markdown || '').toString())
  if (!blocks.length) {
    return NextResponse.json({ error: 'content (markdown) or blocks is required' }, { status: 400 })
  }

  const db = getSupabase()

  // Ensure unique slug
  let slug = slugify((body.slug || title).toString()) || `article-${Date.now()}`
  const { data: existing } = await db
    .from('journal_articles')
    .select('slug')
    .eq('slug', slug)
    .maybeSingle()
  if (existing) slug = `${slug}-${Date.now().toString(36).slice(-4)}`

  const description = (body.description || body.excerpt || '').toString().trim()
  const tags: string[] = Array.isArray(body.tags)
    ? body.tags
    : body.tags
    ? String(body.tags).split(',').map((t: string) => t.trim()).filter(Boolean)
    : []

  // Estimate read time from word count (~200 wpm)
  const wordCount = blocks
    .map((b) => (Array.isArray(b.content) ? b.content.join(' ') : b.content))
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length
  const readTime = `${Math.max(1, Math.round(wordCount / 200))} min read`
  const today = new Date().toISOString().slice(0, 10)

  const row = {
    slug,
    title,
    subtitle: (body.subtitle || description || title).toString().slice(0, 300),
    description: description || title,
    date: today,
    last_updated: today,
    read_time: readTime,
    category: (body.category || 'AI Infrastructure').toString(),
    author: body.author || { name: 'MeghRoop', role: 'AI Engineering Studio', avatar: '/favicon.svg' },
    hero_image: (body.heroImage || body.hero_image || '').toString(),
    blocks,
    seo: body.seo || { title, description: description || title, keywords: tags },
    faqs: Array.isArray(body.faqs) ? body.faqs : [],
  }

  const { error } = await db.from('journal_articles').insert(row).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // Refresh caches so the new article is live immediately
  revalidatePath('/journal')
  revalidatePath(`/journal/${slug}`)
  revalidatePath('/')

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'
  return NextResponse.json(
    { ok: true, slug, url: `${siteUrl}/journal/${slug}` },
    { status: 201 }
  )
}
