import { getSupabase } from '@/lib/supabase'

// Shared CRM lead model + data access. Backed by the dedicated `public.leads`
// table (see docs/leads-table.sql) so concurrent inserts don't race.

export type LeadStatus =
  | 'new'
  | 'contacted'
  | 'qualifying'
  | 'won'
  | 'lost'
  | 'archived'

export interface Lead {
  id: string
  name: string
  email: string
  projectType: string
  message: string
  status: LeadStatus
  notes: string
  createdAt: string
}

// DB row → API shape (snake_case → camelCase).
function fromRow(row: Record<string, unknown>): Lead {
  return {
    id: String(row.id),
    name: String(row.name ?? ''),
    email: String(row.email ?? ''),
    projectType: String(row.project_type ?? 'Not specified'),
    message: String(row.message ?? ''),
    status: (row.status as LeadStatus) ?? 'new',
    notes: String(row.notes ?? ''),
    createdAt: String(row.created_at ?? new Date().toISOString()),
  }
}

function newId(): string {
  return 'lead_' + Math.random().toString(36).substring(2, 9)
}

export interface NewLeadInput {
  name: string
  email: string
  projectType?: string
  message: string
}

/** Insert a single lead row. One INSERT per lead — no read-modify-write race. */
export async function insertLead(input: NewLeadInput): Promise<void> {
  const db = getSupabase()
  const { error } = await db.from('leads').insert({
    id: newId(),
    name: input.name,
    email: input.email,
    project_type: input.projectType || 'Not specified',
    message: input.message,
    status: 'new',
    notes: '',
  })
  if (error) throw new Error(error.message)
}

export async function listLeads(): Promise<Lead[]> {
  const db = getSupabase()
  const { data, error } = await db
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })
  if (error || !data) return []
  return data.map(fromRow)
}

export async function updateLead(
  id: string,
  patch: { status?: LeadStatus; notes?: string }
): Promise<void> {
  const db = getSupabase()
  const fields: Record<string, unknown> = {}
  if (patch.status !== undefined) fields.status = patch.status
  if (patch.notes !== undefined) fields.notes = patch.notes
  if (Object.keys(fields).length === 0) return
  const { error } = await db.from('leads').update(fields).eq('id', id)
  if (error) throw new Error(error.message)
}

export async function deleteLead(id: string): Promise<void> {
  const db = getSupabase()
  const { error } = await db.from('leads').delete().eq('id', id)
  if (error) throw new Error(error.message)
}
