// Single source of truth for the Hosting product (all server hosting —
// WordPress, web, and VPS-grade). Drives the /wordpress-hosting page
// content, its pricing cards, and the Product/Offer JSON-LD.

export type PlanSpec = { label: string; value: string }

export type HostingPlan = {
  id: string
  name: string
  monthly: number // INR / month
  tagline: string
  badge?: string
  featured?: boolean
  specs: PlanSpec[] // headline resource specs
  highlights: string[] // check-list features
}

export const yearlyDiscount = 0.2 // 20% off when billed yearly

// Per-month price when billed yearly (20% off, rounded to whole ₹).
export const yearlyMonthly = (monthly: number) =>
  Math.round(monthly * (1 - yearlyDiscount))

// Total billed once for the year.
export const yearlyTotal = (monthly: number) => yearlyMonthly(monthly) * 12

export const hostingMeta = {
  slug: 'wordpress-hosting',
  eyebrow: 'Web & WordPress Hosting',
  accent: 'text-[#60a5fa]',
  glow: 'rgba(96,165,250,0.09)',
  currency: 'INR',
  currencySymbol: '₹',
  seoTitle: 'Web & WordPress Hosting Plans from ₹49/mo — Fully Managed',
  seoDescription:
    'Fully managed web, WordPress & VPS-grade hosting from ₹49/mo. Free SSL, free migration, malware protection, daily backups, NVMe storage, and 24/7 support. Save 20% on yearly billing, with a 30-day money-back guarantee.',
}

// ── Pricing plans (Hostinger-style tiers) ──────────────────────────
export const hostingPlans: HostingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthly: 49,
    tagline: 'For a first website or a simple business page.',
    specs: [
      { label: 'Websites', value: '1 website' },
      { label: 'Storage', value: '25 GB NVMe SSD' },
      { label: 'Visits / mo', value: '~10,000' },
      { label: 'Email', value: '1 account' },
    ],
    highlights: ['Free SSL certificate', 'Weekly backups', 'Free migration', '24/7 support'],
  },
  {
    id: 'premium',
    name: 'Premium',
    monthly: 99,
    tagline: 'For multiple sites and growing traffic.',
    specs: [
      { label: 'Websites', value: '25 websites' },
      { label: 'Storage', value: '50 GB NVMe SSD' },
      { label: 'Visits / mo', value: '~25,000' },
      { label: 'Email', value: 'Unlimited' },
    ],
    highlights: ['Everything in Starter', 'Free domain (1 year)', 'Daily backups', 'Free CDN + staging'],
  },
  {
    id: 'business',
    name: 'Business',
    monthly: 149,
    tagline: 'For serious sites that need speed and priority.',
    badge: 'Most Popular',
    featured: true,
    specs: [
      { label: 'Websites', value: '50 websites' },
      { label: 'Storage', value: '100 GB NVMe SSD' },
      { label: 'Visits / mo', value: '~100,000' },
      { label: 'Email', value: 'Unlimited' },
    ],
    highlights: ['Everything in Premium', '2× faster resources', 'Malware removal included', 'Priority 24/7 support'],
  },
  {
    id: 'cloud',
    name: 'Cloud',
    monthly: 249,
    tagline: 'Dedicated VPS-grade resources for high traffic.',
    specs: [
      { label: 'Websites', value: '100 websites' },
      { label: 'Storage', value: '200 GB NVMe SSD' },
      { label: 'Visits / mo', value: '200,000+' },
      { label: 'Email', value: 'Unlimited' },
    ],
    highlights: ['Everything in Business', 'Dedicated VPS resources', 'Dedicated IP option', 'Fastest, first-in-line support'],
  },
]

// ── Included on every plan (universal) ─────────────────────────────
export const hostingIncludes: string[] = [
  'Free SSL certificate',
  'Free website migration',
  'Malware protection',
  '99.9% uptime',
  'Managed updates',
  'NVMe SSD storage',
  'Free CDN',
  '30-day money-back',
]

// ── How onboarding works ───────────────────────────────────────────
export type HostingStep = { title: string; desc: string }
export const hostingSteps: HostingStep[] = [
  { title: 'Pick a plan', desc: 'Choose the package that fits — Starter to Cloud. Not sure? We help you pick the right size.' },
  { title: 'Migrate', desc: 'We move your existing site over for free, with zero downtime — nothing for you to do.' },
  { title: 'Secure', desc: 'SSL, firewall, malware scanning, and backups are switched on and hardened for you.' },
  { title: 'Manage', desc: 'We monitor, update, back up, and support it 24/7 — hosting you never have to think about.' },
]

export const hostingStack: string[] = [
  'Managed VPS', 'WordPress', 'LiteSpeed', 'NVMe SSD', 'Free SSL', 'CDN', 'WAF', 'Daily Backups',
]

export type HostingFaq = { q: string; a: string }
export const hostingFaqs: HostingFaq[] = [
  {
    q: 'How does yearly billing save me 20%?',
    a: 'Any plan billed yearly gets a flat 20% off the monthly rate. For example, the Starter plan is ₹49/mo monthly, or effectively ₹39/mo when you pay for the year up front — the same discount applies across every plan.',
  },
  {
    q: 'What does the 30-day money-back guarantee cover?',
    a: 'If you are not happy within the first 30 days, tell us and we refund you directly — the full hosting fee, no questions asked. Every plan is covered, so you can try it risk-free.',
  },
  {
    q: 'Is this only for WordPress?',
    a: 'No. These plans run WordPress beautifully, but they host any website — HTML, PHP, Laravel, custom apps, and more. The Cloud plan gives you dedicated VPS-grade resources for heavier workloads.',
  },
  {
    q: 'Is it fully managed?',
    a: 'Yes. We handle the server, security, SSL, updates, backups, caching, and monitoring. You get a fast site and a login — you never have to touch a control panel or manage the server yourself.',
  },
  {
    q: 'Can you migrate my existing website?',
    a: 'Absolutely, and it is free on every plan. Send us access to your current site and we move it over for you with no downtime and nothing broken.',
  },
  {
    q: 'Can I upgrade later?',
    a: 'Anytime. Start on Starter and move up to Premium, Business, or Cloud as you grow — we handle the upgrade with no downtime.',
  },
]
