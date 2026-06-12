import type { ServiceContent } from './types'

export const content: ServiceContent = {
  accent: 'cyan',
  eyebrow: 'AI Strategy & Readiness Audit',
  badge: '3-week fixed-fee AI readiness audit',
  titleLines: ['Stop guessing where AI fits.', 'Get a 3-week', 'AI Readiness Audit.'],
  gradientIndex: 2,
  subtitle:
    'A fixed-fee AI readiness audit that surfaces your 5–10 highest-ROI AI use cases, scores them by feasibility, and delivers a 90-day action plan. The audit fee is credited toward your first build if we work together.',
  pills: ['ROI-first scoring', '90-day roadmap', 'Board-ready readout', '3 weeks fixed', 'No lock-in'],
  primaryCta: { label: 'Start my audit — proposal in 48 hours', href: '/contact' },
  secondaryCta: { label: 'Book a free 20-min fit call', href: '/contact' },
  stats: [
    { value: '3 weeks', label: 'Kickoff to readout' },
    { value: '5–10', label: 'Use cases scored' },
    { value: '$1.2M+/yr', label: 'Avg opportunities surfaced' },
  ],

  problem: {
    heading: 'The problem',
    paragraphs: [
      'You bought the Copilot licenses. You’ve read every “AI for business” article. Your team keeps asking what to do next. And your board keeps asking why you haven’t done more.',
      '70% of GenAI pilots never reach production (Gartner, 2024 CIO Survey). The problem isn’t the tech. It’s that no one decided what to build, or why.',
      'You need a prioritized, feasibility-scored list of 5–10 AI use cases with real ROI — and the answer to “which one do we build first.”',
    ],
    card: {
      title: 'The ROI-First AI Audit delivers',
      items: [
        '5–10 high-ROI AI use cases scored by feasibility',
        'A 90-day action plan with budgets, milestones, and owners',
        'A board-ready readout your CFO will sign off on',
        'A clear recommendation for the first build',
      ],
    },
  },

  features: {
    heading: 'The ROI-First AI Audit — what’s inside',
    subtitle: 'A structured 3-week process focused on ROI, feasibility, and time-to-value.',
    items: [
      { title: 'Discovery workshops (week 1)', description: 'Two 90-minute sessions with your leadership and team leads. We map current workflows, pain points, and existing AI spend.' },
      { title: 'Data & tooling readiness (week 2)', description: 'We evaluate your data, systems, and integration layer to identify what’s AI-ready today, what needs fixing first, and where the quick wins are.' },
      { title: 'Use case scoring (week 2)', description: '5–10 AI use cases scored on our ROI-First framework: business impact, technical feasibility, time-to-value, and risk.' },
      { title: '90-day roadmap (week 3)', description: 'Ranked action plan with recommended first build, budget estimates per use case, team + tooling requirements, and milestones with success metrics.' },
      { title: 'Executive readout (week 3)', description: '15-slide board-ready summary. Not 120. Built to be presented and acted on — not filed.' },
    ],
    note: {
      title: 'ROI-First scoring framework',
      items: [
        'Business impact (cost savings, revenue, CX)',
        'Technical feasibility (data quality, integration complexity)',
        'Time-to-value (weeks to first production)',
        'Risk (compliance, accuracy, change management)',
      ],
    },
  },

  process: {
    heading: 'How it works',
    steps: [
      { title: 'Week 0 — Kickoff call (free)', description: 'Confirm fit, scope, and stakeholders.' },
      { title: 'Week 1 — Discovery', description: '5–8 interviews across leadership and operating teams.' },
      { title: 'Week 2 — Analysis', description: 'Stack + data + process review. Score use cases.' },
      { title: 'Week 3 — Deliverables', description: 'Roadmap + executive readout + optional build proposal.' },
      { title: 'Post-audit', description: 'If we build together, the audit fee is credited toward the first engagement.' },
    ],
  },

  why: {
    heading: 'Why MeghRoop',
    subtitle: 'Most pilots fail on the wrong question, not the wrong model. That’s what this audit is for.',
    items: [
      { title: 'We build what we audit', description: 'Your audit fee is credited toward the first build — big firms can’t do that because they don’t build.' },
      { title: 'Fixed fee, fixed timeline', description: 'Three weeks, one price. No scope creep or 12-week delays.' },
      { title: 'Engineers and operators, not junior MBAs', description: 'Your audit is led by people who ship AI, not people who read about it.' },
      { title: 'India + US delivery economics', description: 'From $999 — under 10% of what Deloitte or BCG quote.' },
    ],
  },

  comparison: {
    heading: 'How we compare',
    subtitle: 'ROI-first delivery without the 12-week strategy theater.',
    columns: ['', 'MeghRoop ROI-First Audit', 'Big-4 / MBB', 'Generalist boutique'],
    rows: [
      { label: 'Timeline', values: ['3 weeks fixed', '8–12 weeks', '4–8 weeks'] },
      { label: 'Deliverable', values: ['15-slide readout + roadmap', '80–120 slide deck', 'Variable'] },
      { label: 'Team', values: ['Engineers + operators', 'Partners + junior MBAs', 'Mix'] },
      { label: 'Build what they recommend?', values: ['Yes — audit credited to build', 'Referred to SI partner', 'Sometimes'] },
      { label: 'Best for', values: ['Mid-market + SMB committing real budget', 'Fortune 500 transformations', 'Deeper strategy theater'] },
    ],
  },

  outcomes: {
    heading: 'Outcomes you can expect',
    subtitle: 'Clarity, prioritization, and a path to production within 60–90 days.',
    items: [
      'A prioritized roadmap of 5–10 AI use cases',
      'Audits we’ve shipped typically surface $500K–$2M in annual efficiency opportunities',
      'Use-case pilot failure rate drops from 70% to under 20%',
      'A board-ready readout your CFO will actually sign off on',
      'Clear path from audit to first live AI system in 60–90 days',
    ],
  },

  audience: {
    heading: 'Who it’s for',
    subtitle: 'Designed for leaders who need ROI clarity before committing real AI budget.',
    items: [
      'Mid-market and SMB leaders ($5M–$500M revenue)',
      'CXOs, CTOs, Heads of Digital/Operations',
      'Teams who’ve tried AI tools but haven’t seen ROI',
      'Companies preparing to commit real budget to AI in the next 12 months',
    ],
  },

  pricing: {
    heading: 'Pricing',
    subtitle: 'All tiers include the full deliverable set. Audit fee is credited toward the first build if we work together.',
    tiers: [
      { title: 'Essential', price: '$999', scope: 'Single function (e.g., CX or RevOps)' },
      { title: 'Growth', price: '$4,999', scope: 'Cross-functional, 3 workstreams' },
      { title: 'Enterprise', price: 'Custom', scope: 'Multi-BU, data readiness deep-dive' },
    ],
  },

  faqs: [
    { q: 'What’s an AI readiness assessment?', a: 'A structured evaluation of your business, data, tools, and team — designed to identify which AI use cases are worth building, in what order, and with what investment.' },
    { q: 'How much does an AI readiness audit cost?', a: 'Our ROI-First Audit starts at $999 for a single-function scope. Cross-functional audits are $4,999. Enterprise/multi-BU scope is custom.' },
    { q: 'How long does an AI audit take?', a: '3 weeks from kickoff to executive readout. Longer audits rarely produce better decisions.' },
    { q: 'How is this different from a Deloitte or BCG audit?', a: 'Our audit is three weeks and a fraction of the cost. We’re engineers who ship. Their audits are 8–12 weeks of frameworks and slides. Both can have value — ours is built for companies that need to move.' },
    { q: 'Do you understand our industry?', a: 'We’ve worked across BFSI, healthcare, D2C, B2B SaaS, manufacturing, real estate, and education. If we’re not the right fit for your vertical, we’ll say so upfront.' },
    { q: 'What if we decide not to build anything after the audit?', a: 'That’s fine. You walk away with a roadmap, budget estimates, and clarity — whether you build with us or not.' },
    { q: 'Does the audit cover data readiness, not just use cases?', a: 'Yes. Data quality, integration, permissions, and governance are core to the assessment. Most pilots fail on data, not models.' },
    { q: 'How do you handle compliance (DPDP, GDPR, SOC 2, HIPAA)?', a: 'Flagged as part of the readiness assessment. We note compliance exposure per use case so your legal/InfoSec team can sign off before the build.' },
  ],

  cta: {
    heading: 'Ready to stop guessing?',
    subtitle: 'Book a free 20-min fit call. If we’re a fit, we’ll send a proposal in 48 hours and start your audit within 2 weeks. If we’re not, we’ll say so.',
    primary: { label: 'Book my fit call', href: '/contact' },
  },
}
