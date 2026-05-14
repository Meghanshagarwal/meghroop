import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

export const dynamic = 'force-dynamic'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const db = getSupabase()
  const { data, error } = await db.from('projects').select('*').eq('id', params.id).single()
  if (error) return NextResponse.json({ error: error.message }, { status: 404 })
  return NextResponse.json(data)
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json()
  const db = getSupabase()
  const { data, error } = await db
    .from('projects')
    .update(body)
    .eq('id', params.id)
    .select()
    .single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  revalidatePath('/')
  return NextResponse.json(data)
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  const db = getSupabase()
  const { error } = await db.from('projects').delete().eq('id', params.id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  revalidatePath('/')
  return NextResponse.json({ ok: true })
}

// Reorder: move a project up or down
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  const { direction } = await req.json() // 'up' | 'down'
  const db = getSupabase()

  const { data: all } = await db.from('projects').select('id, display_order').order('display_order')
  if (!all) return NextResponse.json({ error: 'Failed' }, { status: 500 })

  const idx = all.findIndex((p) => p.id === params.id)
  const swapIdx = direction === 'up' ? idx - 1 : idx + 1
  if (swapIdx < 0 || swapIdx >= all.length) return NextResponse.json({ ok: true })

  const a = all[idx]
  const b = all[swapIdx]

  await db.from('projects').update({ display_order: b.display_order }).eq('id', a.id)
  await db.from('projects').update({ display_order: a.display_order }).eq('id', b.id)

  revalidatePath('/')
  return NextResponse.json({ ok: true })
}
