import { NextResponse } from 'next/server'
import { listLeads, updateLead, deleteLead, type LeadStatus } from '@/lib/leads'

export const dynamic = 'force-dynamic'

const VALID_STATUSES: LeadStatus[] = [
  'new',
  'contacted',
  'qualifying',
  'won',
  'lost',
  'archived',
]

export async function GET() {
  try {
    const leads = await listLeads()
    return NextResponse.json(leads)
  } catch {
    return NextResponse.json([])
  }
}

// Update a single lead's status / notes (no whole-array rewrite).
export async function PATCH(req: Request) {
  try {
    const { id, status, notes } = await req.json()
    if (!id || typeof id !== 'string') {
      return NextResponse.json({ error: 'id is required' }, { status: 400 })
    }
    if (status !== undefined && !VALID_STATUSES.includes(status)) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
    }
    await updateLead(id, {
      status: status as LeadStatus | undefined,
      notes: typeof notes === 'string' ? notes.trim() : undefined,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Invalid request'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}

// Delete a single lead by id (?id=... or JSON body).
export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url)
    let id = url.searchParams.get('id') || ''
    if (!id) {
      const body = await req.json().catch(() => ({}))
      id = body?.id || ''
    }
    if (!id) {
      return NextResponse.json({ error: 'id is required' }, { status: 400 })
    }
    await deleteLead(id)
    return NextResponse.json({ ok: true })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Invalid request'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
