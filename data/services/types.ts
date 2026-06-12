// Shared content schema for MeghRoop service detail pages (/ai-agents/*).
// Pages supply a typed ServiceContent object; ServiceDetailTemplate renders it
// in the MeghRoop design system. Only the sections present are rendered.

export type Accent =
  | 'purple'
  | 'cyan'
  | 'blue'
  | 'emerald'
  | 'amber'
  | 'rose'
  | 'violet'
  | 'indigo'

export interface CtaLink {
  label: string
  href: string
}

export interface ServiceContent {
  accent: Accent
  eyebrow: string
  badge: string
  /** Headline lines; the line at gradientIndex is rendered with the gradient. */
  titleLines: string[]
  gradientIndex: number
  subtitle: string
  pills: string[]
  primaryCta: CtaLink
  secondaryCta?: CtaLink
  stats?: { value: string; label: string }[]

  problem?: {
    heading: string
    paragraphs: string[]
    card: { title: string; items: string[] }
  }
  features?: {
    heading: string
    subtitle?: string
    items: { title: string; description: string; tag?: string }[]
    note?: { title: string; items: string[] }
  }
  process?: {
    heading: string
    subtitle?: string
    steps: { title: string; description: string }[]
  }
  why?: {
    heading: string
    subtitle?: string
    items: { title: string; description: string }[]
  }
  comparison?: {
    heading: string
    subtitle?: string
    columns: string[]
    rows: { label: string; values: string[] }[]
  }
  outcomes?: {
    heading: string
    subtitle?: string
    items: string[]
  }
  audience?: {
    heading: string
    subtitle?: string
    items: string[]
  }
  pricing?: {
    heading: string
    subtitle?: string
    tiers: { title: string; price: string; scope: string }[]
  }
  faqs: { q: string; a: string }[]
  cta: { heading: string; subtitle: string; primary: CtaLink }
}
