import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'
import { markdownToBlocks, slugifyTitle, type ArticleBlock } from '@/lib/journal'

export const dynamic = 'force-dynamic'

/* eslint-disable @typescript-eslint/no-explicit-any */

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

  const blocks: ArticleBlock[] =
    Array.isArray(body.blocks) && body.blocks.length
      ? body.blocks
      : markdownToBlocks((body.content || body.markdown || body.body_markdown || '').toString())
  if (!blocks.length) {
    return NextResponse.json({ error: 'content (markdown) or blocks is required' }, { status: 400 })
  }

  const db = getSupabase()

  // Ensure unique slug
  let slug = slugifyTitle((body.slug || title).toString()) || `article-${Date.now()}`
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

  const faq = Array.isArray(body.faq)
    ? body.faq
        .filter((item: any) => item && typeof item.question === 'string' && typeof item.answer === 'string')
        .map((item: any) => ({ question: item.question.trim(), answer: item.answer.trim() }))
        .filter((item: any) => item.question && item.answer)
        .slice(0, 10)
    : []

  const row = {
    slug,
    title,
    subtitle: (body.subtitle || description || title).toString().slice(0, 300),
    description: description || title,
    date: today,
    last_updated: today,
    read_time: readTime,
    category: (body.category || 'AI Infrastructure').toString(),
    author: body.author || { name: 'MeghRoop', role: 'Software, AI & Growth Agency', avatar: '/favicon.svg' },
    hero_image: (body.heroImage || body.hero_image || '').toString(),
    blocks,
    seo: body.seo || { title, description: description || title, keywords: tags },
    faqs: faq,
    faq,
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
