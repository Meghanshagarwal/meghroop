import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'
import { markdownToBlocks, slugifyTitle, type ArticleBlock } from '@/lib/journal'

export const dynamic = 'force-dynamic'

/* eslint-disable @typescript-eslint/no-explicit-any */

function readTimeFromBlocks(blocks: ArticleBlock[]): string {
  const words = blocks
    .map((b) => (Array.isArray(b.content) ? b.content.join(' ') : b.content))
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length
  return `${Math.max(1, Math.round(words / 200))} min read`
}

function normalizeTags(tags: any): string[] {
  if (Array.isArray(tags)) return tags
  if (typeof tags === 'string') return tags.split(',').map((t) => t.trim()).filter(Boolean)
  return []
}

export async function GET() {
  const db = getSupabase()
  const { data, error } = await db
    .from('journal_articles')
    .select('*')
    .order('date', { ascending: false })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data ?? [])
}

export async function POST(req: Request) {
  const body = await req.json()
  const title = (body.title || '').toString().trim()
  if (!title) return NextResponse.json({ error: 'Title is required' }, { status: 400 })

  const blocks = markdownToBlocks((body.markdown || body.content || '').toString())
  if (!blocks.length) return NextResponse.json({ error: 'Content is required' }, { status: 400 })

  const db = getSupabase()

  let slug = slugifyTitle((body.slug || title).toString()) || `article-${Date.now()}`
  const { data: existing } = await db.from('journal_articles').select('slug').eq('slug', slug).maybeSingle()
  if (existing) slug = `${slug}-${Date.now().toString(36).slice(-4)}`

  const tags = normalizeTags(body.tags)
  const description = (body.description || '').toString().trim()
  const date = (body.date || new Date().toISOString().slice(0, 10)).toString()

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
    date,
    last_updated: date,
    read_time: readTimeFromBlocks(blocks),
    category: (body.category || 'AI Infrastructure').toString(),
    author: body.author || { name: 'MeghRoop', role: 'AI Engineering Studio', avatar: '/favicon.svg' },
    hero_image: (body.heroImage || body.hero_image || '').toString(),
    blocks,
    seo: { title, description: description || title, keywords: tags },
    faqs: faq,
    faq,
  }

  const { data, error } = await db.from('journal_articles').insert(row).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  revalidatePath('/journal')
  revalidatePath(`/journal/${slug}`)
  revalidatePath('/')
  return NextResponse.json(data, { status: 201 })
}
