import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

export const dynamic = 'force-dynamic'

export async function GET() {
  const db = getSupabase()
  const { data, error } = await db.from('settings').select('key, value')
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // Return as flat key→value object
  const map = Object.fromEntries((data ?? []).map((s) => [s.key, s.value]))
  return NextResponse.json(map)
}

export async function PUT(req: Request) {
  const updates: Record<string, string> = await req.json()
  const db = getSupabase()

  const rows = Object.entries(updates).map(([key, value]) => ({ key, value }))
  const { error } = await db.from('settings').upsert(rows, { onConflict: 'key' })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  revalidatePath('/')
  return NextResponse.json({ ok: true })
}
