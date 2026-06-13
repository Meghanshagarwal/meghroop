import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET() {
  try {
    const db = getSupabase()
    const { data, error } = await db
      .from('settings')
      .select('value')
      .eq('key', 'client_payments_data')
      .single()

    if (error || !data) {
      return NextResponse.json([], {
        headers: { 'Cache-Control': 'no-store, max-age=0, must-revalidate' }
      })
    }

    const payments = JSON.parse(data.value)
    return NextResponse.json(Array.isArray(payments) ? payments : [], {
      headers: { 'Cache-Control': 'no-store, max-age=0, must-revalidate' }
    })
  } catch {
    return NextResponse.json([], {
      headers: { 'Cache-Control': 'no-store, max-age=0, must-revalidate' }
    })
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    const db = getSupabase()

    const { error } = await db
      .from('settings')
      .upsert({ key: 'client_payments_data', value: JSON.stringify(body) }, { onConflict: 'key' })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Invalid request'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
