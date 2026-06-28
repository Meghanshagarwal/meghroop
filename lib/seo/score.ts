import type { SeoSignals, ScorecardRow, AreaStatus } from './types'

/**
 * Deterministic SEO scoring.
 *
 * The overall score and the per-area scorecard are computed PURELY from the
 * real crawl signals — never from the AI. That guarantees the same website
 * always gets the same score (the AI step, run at a non-zero temperature, used
 * to invent a slightly different number on every run). The AI is now only
 * responsible for the narrative (summary, issues, recommendations), and we feed
 * it these exact numbers so the prose stays consistent with the scorecard.
 */

const clamp = (n: number) => Math.max(0, Math.min(100, Math.round(n)))

// NOTE: response time is intentionally NOT used for scoring. A single
// server-side fetch measures server-to-target network latency (which swings
// wildly run-to-run) — not the user's real Core Web Vitals — so including it
// made the same site score differently every time. We score only stable,
// reproducible signals so a given page always yields the same number.

function pageWeightScore(kb: number): number {
  if (kb <= 100) return 100
  if (kb <= 250) return 90
  if (kb <= 500) return 75
  if (kb <= 1000) return 55
  return 35
}

function statusFor(score: number): AreaStatus {
  if (score >= 75) return 'good'
  if (score >= 50) return 'warn'
  return 'poor'
}

/** Average a list of 0/φ contributions, each already 0–100, with weights. */
function weighted(parts: Array<[number, number]>): number {
  const total = parts.reduce((a, [, w]) => a + w, 0)
  const sum = parts.reduce((a, [v, w]) => a + v * w, 0)
  return total ? sum / total : 0
}

export interface ComputedScores {
  overallScore: number
  scorecard: ScorecardRow[]
}

export function computeScores(sig: SeoSignals): ComputedScores {
  const yes = (b: boolean, full = 100) => (b ? full : 0)

  // ── Technical SEO ──
  const robotsBlocks = /noindex/i.test(sig.robotsMeta || '')
  const technical = weighted([
    [yes(sig.https), 2],
    [yes(sig.statusCode >= 200 && sig.statusCode < 300), 2],
    [yes(!!sig.canonical), 1.5],
    [yes(!robotsBlocks), 1.5],
    [yes(sig.hasSitemap), 1.5],
    [yes(sig.hasRobotsTxt), 1],
    [yes(sig.hasViewport), 1],
    [yes(sig.hasFavicon), 0.5],
  ])

  // ── On-Page SEO ──
  const titleOk = sig.titleLength >= 30 && sig.titleLength <= 65
  const titlePartial = sig.titleLength > 0 && !titleOk
  const descOk = sig.metaDescriptionLength >= 110 && sig.metaDescriptionLength <= 165
  const descPartial = sig.metaDescriptionLength > 0 && !descOk
  const onPage = weighted([
    [titleOk ? 100 : titlePartial ? 60 : 0, 2.5],
    [descOk ? 100 : descPartial ? 60 : 0, 2],
    [sig.h1Count === 1 ? 100 : sig.h1Count > 1 ? 50 : 0, 2],
    [yes(sig.h2Count > 0), 1],
    [sig.wordCount >= 600 ? 100 : sig.wordCount >= 300 ? 70 : sig.wordCount >= 100 ? 40 : 10, 1.5],
    [
      sig.imgCount === 0 ? 100 : clamp(100 - (sig.imgMissingAlt / sig.imgCount) * 100),
      1,
    ],
  ])

  // ── Schema Markup ──
  const schemaTypeCount = sig.jsonLdTypes.length
  const schema = sig.hasJsonLd
    ? clamp(55 + Math.min(schemaTypeCount, 5) * 9)
    : 0

  // ── Internal Linking ──
  const internal =
    sig.internalLinks >= 30
      ? 100
      : sig.internalLinks >= 10
      ? 80
      : sig.internalLinks >= 4
      ? 55
      : sig.internalLinks >= 1
      ? 30
      : 0

  // ── Semantic SEO (heading structure + depth + entities) ──
  const semantic = weighted([
    [sig.h1Count === 1 ? 100 : 40, 1.5],
    [yes(sig.h2Count >= 2), 1],
    [yes(sig.h3Count >= 1), 0.5],
    [sig.wordCount >= 600 ? 100 : sig.wordCount >= 300 ? 65 : 25, 1],
    [yes(schemaTypeCount >= 2), 1],
  ])

  // ── GEO / AI Search Optimization ──
  const hasEntitySchema = sig.jsonLdTypes.some((t) =>
    /Organization|Person|LocalBusiness|Product|Article|FAQPage/i.test(t)
  )
  const geo = weighted([
    [yes(sig.hasJsonLd), 2],
    [yes(hasEntitySchema), 1.5],
    [sig.wordCount >= 600 ? 100 : sig.wordCount >= 300 ? 60 : 20, 1],
    [yes(!!sig.metaDescription), 1],
    [yes(sig.hasSitemap), 0.5],
  ])
  const aiSearch = weighted([
    [yes(sig.jsonLdTypes.some((t) => /FAQPage|Question/i.test(t)), 100), 1.5],
    [yes(hasEntitySchema), 1.5],
    [sig.wordCount >= 500 ? 100 : 50, 1],
    [yes(sig.h2Count >= 3), 1],
  ])

  // ── Core Web Vitals (proxied by page weight — a stable signal) ──
  const cwv = weighted([
    [pageWeightScore(sig.htmlSizeKb), 2],
    [yes(sig.hasViewport), 1],
  ])

  // ── Platform & Architecture ──
  const platform = weighted([
    [yes(sig.https), 2],
    [yes(sig.hasViewport), 1.5],
    [pageWeightScore(sig.htmlSizeKb), 1],
    [yes(!sig.hasInlineStyles, 100), 0.5],
    [yes(sig.hasFavicon), 0.5],
  ])

  // ── EEAT (signals available from a single page) ──
  const eeat = weighted([
    [yes(sig.jsonLdTypes.some((t) => /Organization|Person/i.test(t)), 100), 2],
    [yes(sig.https), 1],
    [sig.externalLinks >= 1 ? 100 : 40, 1],
    [sig.wordCount >= 600 ? 100 : 50, 1],
  ])

  const rows: Array<[string, number]> = [
    ['Platform & Architecture', platform],
    ['Technical SEO', technical],
    ['Core Web Vitals', cwv],
    ['On-Page SEO', onPage],
    ['Semantic SEO', semantic],
    ['GEO Optimization', geo],
    ['AI Search Optimization', aiSearch],
    ['Schema Markup', schema],
    ['Internal Linking', internal],
    ['EEAT', eeat],
  ]

  const scorecard: ScorecardRow[] = rows.map(([area, raw]) => {
    const score = clamp(raw)
    return { area, score, status: statusFor(score) }
  })

  // Overall = weighted blend that emphasises the factors that move rankings.
  const overallScore = clamp(
    weighted([
      [technical, 2],
      [onPage, 2],
      [schema, 1.5],
      [semantic, 1.5],
      [geo, 1.5],
      [aiSearch, 1],
      [cwv, 1],
      [platform, 1],
      [internal, 1],
      [eeat, 1],
    ])
  )

  return { overallScore, scorecard }
}
