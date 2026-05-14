import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'
import { revalidatePath } from 'next/cache'

export const dynamic = 'force-dynamic'

export async function GET() {
  const db = getSupabase()
  const { data, error } = await db
    .from('projects')
    .select('*')
    .order('display_order', { ascending: true })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function POST(req: Request) {
  const body = await req.json()
  const db = getSupabase()

  // Set display_order to end of list
  const { count } = await db.from('projects').select('*', { count: 'exact', head: true })

  const { data, error } = await db
    .from('projects')
    .insert({ ...body, display_order: (count ?? 0) })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  revalidatePath('/')
  return NextResponse.json(data, { status: 201 })
}
