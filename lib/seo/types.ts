// Shared types for the SEO Audit tool (public checker + admin dashboard + PDF).

export type Severity = 'Critical' | 'High' | 'Medium' | 'Low'
export type Difficulty = 'Easy' | 'Medium' | 'Hard'
export type AreaStatus = 'good' | 'warn' | 'poor'

/** A positive finding — something the site already does well. */
export interface Strength {
  title: string
  detail: string
}

/** A problem found, in the format the .md template mandates. */
export interface Issue {
  area: string
  severity: Severity
  description: string
  evidence: string
  seoImpact: string
  businessImpact: string
  recommendation: string
  expectedImprovement: string
  difficulty: Difficulty
}

export interface ScorecardRow {
  area: string
  score: number // 0–100
  status: AreaStatus
}

export interface ChecklistItem {
  item: string
  done: boolean
}

/** The full structured report returned by Gemini and rendered into the PDF. */
export interface SeoReport {
  domain: string
  url: string
  auditDate: string
  overallScore: number // 0–100
  scorecard: ScorecardRow[]
  executiveSummary: string
  strengths: Strength[]
  issues: Issue[]
  quickWins: string[]
  checklist: ChecklistItem[]
  finalSummary: string
}

/** Raw, real signals collected from the target page before the AI step. */
export interface SeoSignals {
  url: string
  finalUrl: string
  domain: string
  statusCode: number
  fetchedAt: string
  https: boolean
  title: string | null
  titleLength: number
  metaDescription: string | null
  metaDescriptionLength: number
  canonical: string | null
  robotsMeta: string | null
  viewport: string | null
  lang: string | null
  h1: string[]
  h1Count: number
  h2Count: number
  h3Count: number
  wordCount: number
  imgCount: number
  imgMissingAlt: number
  internalLinks: number
  externalLinks: number
  hasOpenGraph: boolean
  hasTwitterCard: boolean
  hasJsonLd: boolean
  jsonLdTypes: string[]
  hasFavicon: boolean
  hasViewport: boolean
  hasRobotsTxt: boolean
  hasSitemap: boolean
  hasHreflang: boolean
  hasInlineStyles: boolean
  htmlSizeKb: number
  responseTimeMs: number
}
