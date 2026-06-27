import { NextRequest, NextResponse } from 'next/server'
import { collectSignals, normalizeUrl } from '@/lib/seo/collect'
import { generateReport } from '@/lib/seo/gemini'
import { renderReportPdf } from '@/lib/seo/pdf'
import { saveAudit } from '@/lib/seo/store'
import { insertLead } from '@/lib/leads'
import { rateLimit } from '@/lib/rate-limit'
import { clientIp } from '@/lib/utils'

export const runtime = 'nodejs'
export const maxDuration = 60

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  // 3 audits per IP per 15 min — the AI call is the expensive part.
  const limit = rateLimit(`seo-audit:${clientIp(req)}`, 3, 15 * 60 * 1000)
  if (!limit.ok) {
    return NextResponse.json(
      { error: 'Too many audits from this network. Please try again later.' },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } }
    )
  }

  let body: { url?: string; name?: string; email?: string; website?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot
  if (body.website) return NextResponse.json({ error: 'Bad request.' }, { status: 400 })

  const name = (body.name || '').toString().trim().slice(0, 120) || 'Website Owner'
  const email = (body.email || '').toString().trim().slice(0, 200)
  const rawUrl = (body.url || '').toString().trim().slice(0, 500)

  if (!email || !emailRegex.test(email)) {
    return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 })
  }
  if (!rawUrl) {
    return NextResponse.json({ error: 'A website URL is required.' }, { status: 400 })
  }

  let finalUrl: string
  try {
    finalUrl = normalizeUrl(rawUrl)
    new URL(finalUrl)
  } catch {
    return NextResponse.json({ error: 'That does not look like a valid URL.' }, { status: 400 })
  }

  try {
    // 1. Real crawl
    const signals = await collectSignals(finalUrl)
    // 2. AI report grounded in the crawl
    const report = await generateReport(signals)

    // 3. Persist audit + capture lead (best-effort — never blocks the PDF)
    try {
      await saveAudit({ url: signals.finalUrl, domain: signals.domain, name, email, report })
    } catch (e) {
      console.error('[seo-audit] saveAudit failed:', e)
    }
    try {
      await insertLead({
        name,
        email,
        projectType: 'SEO Checker',
        message: `Ran a free SEO audit for ${signals.finalUrl}. Overall score: ${report.overallScore}/100, ${report.issues.length} issues found. Hot lead — follow up with an SEO/growth proposal.`,
      })
    } catch (e) {
      console.error('[seo-audit] insertLead failed:', e)
    }

    // 4. Branded PDF
    const pdf = await renderReportPdf(report)
    const fileName = `SEO-Audit-${signals.domain}.pdf`

    return new NextResponse(new Uint8Array(pdf), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'X-SEO-Score': String(report.overallScore),
        'Cache-Control': 'no-store',
      },
    })
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Audit failed. Please try again.'
    console.error('[seo-audit] error:', msg)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
