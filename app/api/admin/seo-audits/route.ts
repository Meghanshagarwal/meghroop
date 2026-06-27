import { NextResponse } from 'next/server'
import { listAudits } from '@/lib/seo/store'

export const dynamic = 'force-dynamic'

// Auth is enforced by middleware (cookie-gated /api/admin/*).
export async function GET() {
  try {
    const audits = await listAudits()
    return NextResponse.json({ audits })
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Failed to load audits.'
    return NextResponse.json({ error: msg, audits: [] }, { status: 500 })
  }
}
