import type { ServiceContent } from './types'

export const content: ServiceContent = {
  accent: 'cyan',
  eyebrow: 'AI for SMBs',
  badge: 'Fixed-fee · live in weeks · built for SMBs',
  titleLines: ['Big AI.', 'SMB price point.', 'Same team.'],
  gradientIndex: 1,
  subtitle:
    'AI services for small and mid-sized businesses — built for outcomes, priced to be accessible. Voice agents, custom AI, outbound, and knowledge assistants. Fixed-fee, live in weeks.',
  pills: ['Readiness Audit', 'Voice Agents', 'Agent Sprint', 'Sales Outreach', 'Custom Agents', 'Knowledge AI'],
  primaryCta: { label: 'Book a free 30-min call', href: '/contact' },
  secondaryCta: { label: 'See all AI services', href: '/agentic-ai' },
  stats: [
    { value: '4–8 wks', label: 'To live' },
    { value: 'Fixed-fee', label: 'Every engagement' },
    { value: '3–6 mo', label: 'Typical payback' },
  ],

  problem: {
    heading: 'Sound like you?',
    paragraphs: [
      'Most SMBs know AI could help — they just don’t know where to start, what’s worth building, or whether they can afford it. You can. Our pricing is built for 20–500-person teams, not Fortune 500 budgets.',
      'Tell us your biggest pain and we’ll point you to the right starting engagement — usually a $999 Readiness Audit or a voice-agent pilot.',
    ],
    card: {
      title: 'Common SMB pains we hear',
      items: [
        '“We know AI could help — we have no idea where to start.”',
        '“We’re missing calls / leads because we can’t staff 24/7.”',
        '“Our team is drowning in repetitive back-office work.”',
        '“We need more pipeline but can’t afford SDRs.”',
        '“New hires take forever to ramp. Our SOPs are a mess.”',
        '“Our CRM has ‘AI features’ but they don’t do anything useful.”',
      ],
    },
  },

  features: {
    heading: 'Where SMBs start',
    subtitle: 'Pick the entry point that matches your biggest pain — every one is fixed-fee.',
    items: [
      { title: 'AI Readiness Audit', tag: 'from $999', description: 'The most common entry point. 3-week fixed-fee engagement that maps your highest-ROI AI opportunities. Audit fee credited toward the build.' },
      { title: 'AI Voice Agents', tag: 'from $250 + usage', description: 'Answer inbound calls 24/7, qualify leads, book appointments. Most SMBs recover setup cost in month one on missed-call recovery alone.' },
      { title: 'Agent Sprint', tag: '4 weeks', description: 'One production agent in 30 days. Pick one back-office workflow — invoice processing, ticket triage, vendor onboarding — and see it run.' },
      { title: 'Sales Intelligence & Outreach', tag: 'pay per meeting', description: '6-week performance pilot. Pay per Stage-2 qualified meeting, not per send. Pipeline without SDR overhead.' },
      { title: 'Custom AI Agent Development', tag: 'feasibility → build', description: 'When off-the-shelf doesn’t fit. Start with a 1-week feasibility review before committing to a custom build.' },
      { title: 'Document & Knowledge Intelligence', tag: 'pilot from $15K', description: 'When new hires take forever to ramp and SOPs are a mess. Private knowledge assistants that answer with citations.' },
      { title: 'AI Integration Services', tag: 'from $10K', description: 'Extend your CRM or helpdesk with AI layers that actually work. We integrate with what you already run.' },
    ],
  },

  process: {
    heading: 'Your AI journey',
    steps: [
      { title: 'Month 0 — Discovery', description: '30-min free call. We figure out if AI helps you, and where to start.' },
      { title: 'Month 1 — First engagement', description: 'Typically a Readiness Audit or an Agent Sprint.' },
      { title: 'Months 2–3 — Build the first system', description: 'Voice agent, knowledge assistant, custom agent, or integration. Live by month 3.' },
      { title: 'Months 4–6 — Expand coverage', description: 'Second and third workflows. The second system starts paying for the first.' },
      { title: 'Ongoing', description: 'Managed retainer or clean handoff — your call.' },
    ],
  },

  why: {
    heading: 'Why MeghRoop',
    items: [
      { title: 'Fixed fees, not open-ended', description: 'Every engagement is fixed-fee and fixed-timeline. No T&M creep.' },
      { title: 'Ship in weeks', description: 'Most engagements go live in 4–8 weeks. Big firms take 4–8 months.' },
      { title: 'Jaipur-built engineering, US-grade craft', description: 'Our pricing reflects the economics; our quality doesn’t.' },
      { title: 'Start small, expand', description: 'Most SMB clients start with one engagement, see results, then expand. No contract lock-in.' },
    ],
  },

  outcomes: {
    heading: 'Benchmarks from SMB engagements',
    items: [
      'Voice agents: 40% of missed calls recovered within the first month',
      'Custom support agents: 30–60% of Tier-1 tickets deflected',
      'Sales outreach pilots: 8–14 Stage-2 meetings per quarter, pay-per-meeting',
      'Knowledge assistants: 50%+ reduction in “where do I find…” questions',
      'Finance automation: 70%+ reduction in manual invoice cycles',
    ],
  },

  audience: {
    heading: 'Industries we work with',
    items: [
      'D2C & e-commerce — WhatsApp commerce, support bots, abandoned-cart voice calls',
      'Professional services — RFP automation, sales outreach, knowledge assistants',
      'B2B SaaS — SDR automation, support deflection, onboarding assistants',
      'Real estate — lead qualification voice bots, property matching agents',
      'Healthcare clinics — appointment scheduling, reminders, intake automation',
      'Education & EdTech — admissions outreach, student support, content assistants',
      'Local services — 24/7 reception, missed-call recovery, booking automation',
      'Manufacturing & trade — invoice automation, vendor management, procurement agents',
    ],
  },

  faqs: [
    { q: 'Can we afford AI as a small business?', a: 'If “small” means under 10 employees — probably not custom builds yet. Start with our Strategy Audit or a voice agent pilot. If you’re 20–500 employees, yes — our pricing is built for you.' },
    { q: 'What’s the minimum engagement?', a: 'The Agent Feasibility Review and the Voice Agent setup are our smallest fixed-scope entries. The Readiness Audit starts at $999. Sales outreach is a pay-per-meeting Performance Pilot.' },
    { q: 'Do you work with startups?', a: 'Yes — especially funded B2B SaaS and services startups. We don’t do equity-for-work engagements.' },
    { q: 'We don’t have technical staff. Can you still help?', a: 'Yes. We deliver turnkey systems with clean handoff docs. Many SMB clients have no internal AI team.' },
    { q: 'What tools do we need to already have?', a: 'Usually just the tools you already run — CRM, helpdesk, spreadsheets, WhatsApp. We integrate with what exists.' },
    { q: 'How do we measure ROI?', a: 'We define 2–3 outcome metrics with you at kickoff and report weekly/monthly. Most engagements pay back in 3–6 months.' },
    { q: 'What AI should a small business implement first?', a: 'Depends on your biggest pain. Missing calls → voice agent. Too much repetitive back-office work → Agent Sprint. No pipeline → sales outreach pilot. Can’t decide → Readiness Audit.' },
    { q: 'Can we start small and expand?', a: 'Yes. Most SMB clients start with one engagement, see results, then expand. No contract lock-in.' },
  ],

  cta: {
    heading: 'Big-company AI, built for your size.',
    subtitle: 'Book a free 30-minute call. We’ll figure out if AI helps you and exactly where to start — no slide dump, no hard sell.',
    primary: { label: 'Book a free 30-min call', href: '/contact' },
  },
}
