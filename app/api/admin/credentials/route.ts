import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'
import { randomUUID } from 'crypto'

export const dynamic = 'force-dynamic'

const SETTINGS_KEY = 'credentials'

type Credential = {
  id: string
  label: string
  category: string
  value: string
  createdAt: string
}

async function getAll(): Promise<Credential[]> {
  const db = getSupabase()
  const { data } = await db.from('settings').select('value').eq('key', SETTINGS_KEY).single()
  if (!data) return []
  try { return JSON.parse(data.value) } catch { return [] }
}

async function saveAll(creds: Credential[]) {
  const db = getSupabase()
  await db.from('settings').upsert({ key: SETTINGS_KEY, value: JSON.stringify(creds) }, { onConflict: 'key' })
}

export async function GET() {
  return NextResponse.json(await getAll())
}

export async function POST(req: Request) {
  const { label, category, value } = await req.json()
  if (!label?.trim() || !value?.trim()) {
    return NextResponse.json({ error: 'label and value required' }, { status: 400 })
  }
  const creds = await getAll()
  creds.push({ id: randomUUID(), label: label.trim(), category: (category || 'General').trim(), value: value.trim(), createdAt: new Date().toISOString() })
  await saveAll(creds)
  return NextResponse.json({ ok: true })
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 })
  const creds = await getAll()
  await saveAll(creds.filter((c) => c.id !== id))
  return NextResponse.json({ ok: true })
}

export async function PATCH(req: Request) {
  const { id, label, category, value } = await req.json()
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 })
  const creds = await getAll()
  const idx = creds.findIndex((c) => c.id === id)
  if (idx === -1) return NextResponse.json({ error: 'not found' }, { status: 404 })
  creds[idx] = { ...creds[idx], label: label ?? creds[idx].label, category: category ?? creds[idx].category, value: value ?? creds[idx].value }
  await saveAll(creds)
  return NextResponse.json({ ok: true })
}
