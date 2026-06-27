import { getSupabase } from '@/lib/supabase'
import type { SeoReport } from './types'

export interface SeoAuditRow {
  id: string
  url: string
  domain: string
  name: string
  email: string
  score: number
  strengthsCount: number
  issuesCount: number
  report: SeoReport
  createdAt: string
}

function newId(): string {
  return 'seo_' + Math.random().toString(36).substring(2, 10)
}

/** Persist a completed audit. Best-effort: never blocks PDF delivery. */
export async function saveAudit(input: {
  url: string
  domain: string
  name: string
  email: string
  report: SeoReport
}): Promise<void> {
  const db = getSupabase()
  const { error } = await db.from('seo_audits').insert({
    id: newId(),
    url: input.url,
    domain: input.domain,
    name: input.name,
    email: input.email,
    score: input.report.overallScore,
    strengths_count: input.report.strengths.length,
    issues_count: input.report.issues.length,
    report: input.report,
    status: 'new',
  })
  if (error) throw new Error(error.message)
}

export async function listAudits(): Promise<SeoAuditRow[]> {
  const db = getSupabase()
  const { data, error } = await db
    .from('seo_audits')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(500)
  if (error || !data) return []
  return data.map((r) => ({
    id: String(r.id),
    url: String(r.url ?? ''),
    domain: String(r.domain ?? ''),
    name: String(r.name ?? ''),
    email: String(r.email ?? ''),
    score: Number(r.score ?? 0),
    strengthsCount: Number(r.strengths_count ?? 0),
    issuesCount: Number(r.issues_count ?? 0),
    report: (r.report ?? {}) as SeoReport,
    createdAt: String(r.created_at ?? ''),
  }))
}
