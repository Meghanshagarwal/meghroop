import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

const SETTINGS_KEY = 'admin_tasks'

export async function GET() {
  try {
    const db = getSupabase()
    const { data, error } = await db
      .from('settings')
      .select('value')
      .eq('key', SETTINGS_KEY)
      .single()

    if (error || !data) {
      return NextResponse.json([])
    }

    const tasks = JSON.parse(data.value)
    return NextResponse.json(Array.isArray(tasks) ? tasks : [])
  } catch {
    return NextResponse.json([])
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    if (!Array.isArray(body)) {
      return NextResponse.json({ error: 'Body must be an array of tasks' }, { status: 400 })
    }

    const db = getSupabase()
    const { error } = await db
      .from('settings')
      .upsert({ key: SETTINGS_KEY, value: JSON.stringify(body) }, { onConflict: 'key' })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Invalid request'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
