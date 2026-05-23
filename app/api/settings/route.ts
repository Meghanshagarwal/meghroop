import { NextResponse } from 'next/server'
import { getSupabase } from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const db = getSupabase()
    const { data } = await db.from('settings').select('key, value')
    const map = Object.fromEntries((data ?? []).map((s: { key: string; value: string }) => [s.key, s.value]))
    
    return NextResponse.json({
      whatsapp_number: map['whatsapp_number'] || process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210',
    })
  } catch {
    return NextResponse.json({
      whatsapp_number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210',
    })
  }
}
