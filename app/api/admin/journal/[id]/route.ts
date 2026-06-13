import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'
import { markdownToBlocks, type ArticleBlock } from '@/lib/journal'

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

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const db = getSupabase()
  const { data, error } = await db.from('journal_articles').select('*').eq('id', params.id).single()
  if (error) return NextResponse.json({ error: error.message }, { status: 404 })
  return NextResponse.json(data)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json()
  const db = getSupabase()

  const title = (body.title || '').toString().trim()
  if (!title) return NextResponse.json({ error: 'Title is required' }, { status: 400 })

  const blocks = markdownToBlocks((body.markdown || body.content || '').toString())
  if (!blocks.length) return NextResponse.json({ error: 'Content is required' }, { status: 400 })

  const tags = normalizeTags(body.tags)
  const description = (body.description || '').toString().trim()

  // Slug (URL) stays stable on edit
  const update = {
    title,
    subtitle: (body.subtitle || description || title).toString().slice(0, 300),
    description: description || title,
    last_updated: new Date().toISOString().slice(0, 10),
    read_time: readTimeFromBlocks(blocks),
    category: (body.category || 'AI Infrastructure').toString(),
    hero_image: (body.heroImage || body.hero_image || '').toString(),
    blocks,
    seo: { title, description: description || title, keywords: tags },
    ...(body.date ? { date: body.date.toString() } : {}),
  }

  const { data, error } = await db
    .from('journal_articles')
    .update(update)
    .eq('id', params.id)
    .select()
    .single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  revalidatePath('/journal')
  if (data?.slug) revalidatePath(`/journal/${data.slug}`)
  revalidatePath('/')
  return NextResponse.json(data)
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const db = getSupabase()
  const { data: row } = await db.from('journal_articles').select('slug').eq('id', params.id).single()
  const { error } = await db.from('journal_articles').delete().eq('id', params.id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  revalidatePath('/journal')
  if (row?.slug) revalidatePath(`/journal/${row.slug}`)
  revalidatePath('/')
  return NextResponse.json({ ok: true })
}
