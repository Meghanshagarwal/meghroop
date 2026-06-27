import { getSupabase } from '@/lib/supabase'
import type { SeoSignals, SeoReport } from './types'

export const GEMINI_KEY_SETTING = 'gemini_api_key'
export const GEMINI_MODEL_SETTING = 'gemini_model'
const DEFAULT_MODEL = 'gemini-2.0-flash'

/** Prefer the admin-managed key in the `settings` table, fall back to env. */
export async function getGeminiConfig(): Promise<{ key: string; model: string }> {
  let key = process.env.GEMINI_API_KEY || ''
  let model = DEFAULT_MODEL
  try {
    const db = getSupabase()
    const { data } = await db
      .from('settings')
      .select('key, value')
      .in('key', [GEMINI_KEY_SETTING, GEMINI_MODEL_SETTING])
    for (const row of data ?? []) {
      if (row.key === GEMINI_KEY_SETTING && row.value) key = row.value
      if (row.key === GEMINI_MODEL_SETTING && row.value) model = row.value
    }
  } catch {
    /* settings table optional — env fallback already applied */
  }
  return { key, model }
}

// MeghRoop branding injected into every report (replaces the .md placeholders).
const BRAND = {
  COMPANY_NAME: 'MeghRoop',
  COMPANY_WEBSITE: 'https://meghroop.tech',
  COMPANY_EMAIL: 'hello@meghroop.tech',
  PREPARED_BY: 'MeghRoop — Growth, AI & Software Agency',
}

function buildPrompt(signals: SeoSignals): string {
  return `You are a Senior Technical SEO Auditor, Semantic SEO Specialist, GEO Optimization Consultant, AI Search Optimization Expert, and Enterprise SEO Consultant working for ${BRAND.COMPANY_NAME} (${BRAND.COMPANY_WEBSITE}).

You are auditing this website: ${signals.finalUrl}

CRITICAL RULES:
- Base EVERY finding strictly on the REAL crawl data provided below. Do NOT invent issues or evidence.
- Never mention "AI", "Gemini", "language model", or any audit-engine name. Always brand as ${BRAND.COMPANY_NAME}.
- Cover these audit areas in the scorecard: Platform & Architecture, Technical SEO, Core Web Vitals, On-Page SEO, Semantic SEO, GEO Optimization, AI Search Optimization, Schema Markup, Internal Linking, EEAT.
- "strengths" = things the site already does well (the GOOD findings).
- "issues" = problems (the BAD findings). For each issue fill EVERY field.
- Be specific, consultant-grade, and business-aware.

REAL CRAWL DATA (JSON):
${JSON.stringify(signals, null, 2)}

Return ONLY valid minified JSON (no markdown fences) matching exactly this TypeScript type:
{
  "domain": string,
  "url": string,
  "auditDate": string,            // human date e.g. "27 June 2026"
  "overallScore": number,         // 0-100 overall SEO health
  "scorecard": [{ "area": string, "score": number, "status": "good"|"warn"|"poor" }],
  "executiveSummary": string,     // 3-5 sentence overview
  "strengths": [{ "title": string, "detail": string }],
  "issues": [{
    "area": string,
    "severity": "Critical"|"High"|"Medium"|"Low",
    "description": string,
    "evidence": string,
    "seoImpact": string,
    "businessImpact": string,
    "recommendation": string,
    "expectedImprovement": string,
    "difficulty": "Easy"|"Medium"|"Hard"
  }],
  "quickWins": [string],
  "checklist": [{ "item": string, "done": boolean }],
  "finalSummary": string
}

Provide 4-8 strengths, 5-12 issues, 5-8 quick wins, and 10-14 checklist items. The scorecard MUST contain all 10 audit areas listed above.`
}

interface GeminiResponse {
  candidates?: { content?: { parts?: { text?: string }[] } }[]
  error?: { message?: string }
}

function extractJson(text: string): string {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i)
  if (fenced) return fenced[1].trim()
  const first = text.indexOf('{')
  const last = text.lastIndexOf('}')
  if (first !== -1 && last !== -1) return text.slice(first, last + 1)
  return text
}

/** Call Gemini and return a parsed, validated SEO report. */
export async function generateReport(signals: SeoSignals): Promise<SeoReport> {
  const { key, model } = await getGeminiConfig()
  if (!key) {
    throw new Error('GEMINI_API_KEY is not configured. Add it in Admin → SEO Audits.')
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: buildPrompt(signals) }] }],
      generationConfig: {
        temperature: 0.4,
        maxOutputTokens: 8192,
        responseMimeType: 'application/json',
      },
    }),
  })

  const data = (await res.json()) as GeminiResponse
  if (!res.ok || data.error) {
    throw new Error(data.error?.message || `Gemini request failed (${res.status})`)
  }

  const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text).join('') || ''
  if (!text) throw new Error('Empty response from the report engine.')

  let report: SeoReport
  try {
    report = JSON.parse(extractJson(text)) as SeoReport
  } catch {
    throw new Error('Could not parse the generated report. Please retry.')
  }

  // Backfill identity fields from real data so the PDF/header is always correct.
  report.domain = report.domain || signals.domain
  report.url = signals.finalUrl
  report.auditDate =
    report.auditDate ||
    new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
  report.overallScore = Math.max(0, Math.min(100, Math.round(report.overallScore || 0)))
  report.scorecard ||= []
  report.strengths ||= []
  report.issues ||= []
  report.quickWins ||= []
  report.checklist ||= []
  report.executiveSummary ||= ''
  report.finalSummary ||= ''

  return report
}
