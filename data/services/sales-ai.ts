import type { ServiceContent } from './types'

export const content: ServiceContent = {
  accent: 'indigo',
  eyebrow: 'Sales Intelligence & Outreach',
  badge: 'Pay per qualified meeting — or you don’t pay',
  titleLines: ['Signal-based outbound.', 'Built by operators.', 'Priced on outcomes.'],
  gradientIndex: 1,
  subtitle:
    'We run signal-triggered outbound for B2B SaaS teams — not volume campaigns, not AI-SDR demoware. Start with a 6-week Performance Pilot: you pay per Stage-2-qualified meeting, or you don’t pay.',
  pills: ['Signal-triggered', 'Human-written copy', 'Email + LinkedIn + voice', 'Deliverability managed', 'Pay per meeting', 'B2B SaaS'],
  primaryCta: { label: 'Start a Performance Pilot', href: '/contact' },
  secondaryCta: { label: 'Check if we’re a fit', href: '/contact' },
  stats: [
    { value: '10–20%+', label: 'Reply rates' },
    { value: '95%+', label: 'Inbox placement' },
    { value: 'Wk 3–4', label: 'First meetings' },
  ],

  problem: {
    heading: 'You’ve tried outbound. It didn’t work.',
    paragraphs: [
      'Gmail and Yahoo’s 2024 sender rules killed spray-and-pray. Volume plays burn domains and book nothing. Autonomous “AI SDRs” write confident emails to the wrong people.',
      'We run signal-triggered plays with humans writing the copy — precision over volume, per-inbox caps, and weekly placement monitoring. You only pay for meetings that qualify.',
    ],
    card: {
      title: 'Things you’ve probably already tried',
      items: [
        'An Apollo + Instantly stack stitched together in-house',
        'An “AI SDR” platform (11x, Artisan, Regie) that emailed the wrong people',
        'A done-for-you agency that sent 20,000 emails and booked 4 meetings',
        'A human SDR you hired, onboarded, and watched churn in 9 months',
      ],
    },
  },

  features: {
    heading: 'The signal plays',
    subtitle: 'Refined, repeatable plays that fire the moment a buying signal appears.',
    items: [
      { title: 'The Funding Trigger Play', tag: '12–18% reply', description: 'Series A/B/C announcements with $10M+ rounds, matched to ICP fit → LinkedIn DM + email + optional voice follow-up, fired within 60 minutes of the signal.' },
      { title: 'The New-VP Play', tag: '14–22% reply', description: 'LinkedIn job-change notifications for VP/Head-of roles in target functions → engage on the announcement post, then DM, then email — within 24 hours.' },
      { title: 'The Competitor-Churn Play', tag: '9–14% reply', description: 'Intent spikes on competitor-alternative keywords + G2 review triggers + support chatter → email + LinkedIn with a specific “here’s how we handle the pain buyers leave X for” angle.' },
      { title: 'Plus 6 more plays', tag: 'Library', description: 'Hiring-Surge, Tech-Stack Change, Leadership-Exit, Trade-Show-Roster, Conference-Speaker, and Podcast-Guest plays — matched to your ICP and motion.' },
    ],
    note: {
      title: 'Signal sources we monitor',
      items: [
        'Funding events, executive moves, and job postings',
        'Tech-stack changes and competitor churn signals',
        'Intent data (Bombora, 6sense, Common Room)',
        'Warm-visitor de-anonymization and LinkedIn engagement',
      ],
    },
  },

  process: {
    heading: 'How we run it (safely)',
    steps: [
      { title: 'Human-written copy, not LLM wrappers', description: 'Copy is written by a human SDR-copywriter on our team, assisted by AI for research and first-line personalization. Every sequence is reviewed and owned by a named operator.' },
      { title: 'Deliverability infrastructure', description: 'Dedicated secondary domains, inbox-level warming, per-inbox send caps (40/day), and placement monitoring via Google Postmaster + GlockApps. Auto-pause if open rate dips, bounce >3%, or complaints rise.' },
      { title: 'LinkedIn, safely', description: 'Sales Navigator + Heyreach with residential IPs, daily caps enforced, engagement-based warming, and zero browser-automation patterns LinkedIn flags.' },
      { title: 'Reply handling + qualification', description: 'Replies triaged within the hour. Interested replies get a human response, not-now enters nurture, spam/unsubscribe handled automatically, and qualified meetings auto-book with full context.' },
    ],
  },

  why: {
    heading: 'Why MeghRoop',
    items: [
      { title: 'Operator-run, not marketer-run', description: 'We’ve worked in-house at B2B SaaS before building this practice.' },
      { title: 'Signal depth over Clay depth', description: 'The wedge is the plays we’ve refined, not the tables we can build.' },
      { title: 'Inbound AI as a bolt-on', description: 'Conversational AI for rapid qualification of inbound replies.' },
      { title: 'Real skin in the game', description: 'Performance pilot priced on outcomes, not volume reports.' },
      { title: 'India + US delivery', description: 'Engineering and ops in Jaipur, copywriting in US-native voice.' },
    ],
  },

  comparison: {
    heading: 'How we compare',
    subtitle: 'Signal-first, human-assisted vs autonomous AI SDRs vs volume agencies.',
    columns: ['', 'MeghRoop', 'AI SDR platforms (11x/Artisan)', 'Volume agencies'],
    rows: [
      { label: 'Motion', values: ['Signal-first, human-assisted', 'Autonomous AI SDR', 'Volume + templated sequences'] },
      { label: 'Hallucination risk', values: ['Low — human review every send', 'Medium — autonomous', 'Low'] },
      { label: 'Speed to 8+ meetings', values: ['Weeks 4–6', 'Weeks 2–4 (if ICP fits)', 'Weeks 6–10'] },
      { label: 'Deliverability', values: ['Included, monitored', 'Platform-dependent', 'Usually included'] },
      { label: 'What you get', values: ['Operator-run signal plays', 'Agent + dashboards', 'Volume + weekly reports'] },
    ],
  },

  outcomes: {
    heading: 'Outcomes you can expect',
    items: [
      '8–14 Stage-2-qualified meetings per quarter for $25K–$75K ACV clients',
      '10–20%+ reply rates on signal-triggered sequences',
      '95%+ inbox placement measured via Google Postmaster + GlockApps',
      'Zero banned LinkedIn accounts, zero burned primary domains in our history',
      'First meetings booked in weeks 3–4, steady state from week 5',
    ],
  },

  audience: {
    heading: 'Who it’s for',
    subtitle: 'Precision beats volume — so we’re selective about fit.',
    items: [
      'B2B SaaS selling into ops, RevOps, data, or engineering leaders',
      '$25K–$250K ACV (precision beats volume at this price point)',
      '10–500 employees, seed through Series C',
      'US-based with UK/EU expansion, or India teams selling to the US',
      'Not a fit: agencies reselling outreach, low-ACV transactional e-commerce, or “100 meetings a month” volume plays',
    ],
  },

  pricing: {
    heading: 'Engagements',
    subtitle: 'Outcome-based pilot first. Retainers are quoted after a pilot, never sold upfront.',
    tiers: [
      { title: 'Performance Pilot', price: '$300–$500 / meeting', scope: '6 weeks, ~500 tier-1 accounts. $2,500 one-time setup (domains, warming, Clay tables, copy, ICP workshop, CRM). Pay per Stage-2-qualified meeting.' },
      { title: 'Retained program', price: 'From $7,500/mo', scope: 'Single-play, single-inbox to start. Shared KPIs on pipeline and opportunities created.' },
      { title: 'Multi-play program', price: '$20,000+/mo', scope: 'Multi-play, multi-channel programs with voice follow-up.' },
    ],
  },

  faqs: [
    { q: 'Does AI cold outreach actually work in 2026?', a: 'Yes, when it’s signal-triggered and human-assisted. Gmail and Yahoo’s 2024 sender rules killed spray-and-pray. Precision plays with per-inbox caps and weekly placement monitoring still win.' },
    { q: 'How is this different from 11x or Artisan?', a: 'They sell autonomous AI SDRs. We run signal plays with humans writing copy. Autonomous agents hallucinate signals and burn domains; they can work when ICPs are broad and markets are huge.' },
    { q: 'Will my domain get blacklisted or my LinkedIn banned?', a: 'Not on our watch. We use dedicated secondary domains, enforced send caps per inbox, residential IPs for LinkedIn, and engagement-based warming. Zero banned accounts or burned primary domains so far.' },
    { q: 'Who writes the copy — a human or an LLM?', a: 'A human SDR-copywriter on our team, with their name attached to every campaign. AI assists with research and first-line personalization, but does not write sequences end-to-end.' },
    { q: 'What happens if the campaign doesn’t work in month 1?', a: 'Our pilot has explicit kill criteria defined in week 1. If we’re off at week 3, we pivot ICP, angle, or signal source with you. If we’re off at 6 weeks, the pilot ends and you pay only for qualified meetings booked.' },
    { q: 'How do you handle CAN-SPAM, GDPR, and Gmail/Yahoo sender rules?', a: 'SPF, DKIM, DMARC, BIMI configured per domain. Unsubscribe links on every email. DNC + GDPR suppression lists maintained. Postmaster and seed tests monitored weekly.' },
    { q: 'Will this cannibalize our existing SDR team?', a: 'Usually no. We run different plays than in-house SDRs — the speed-to-signal, niche-signal plays your team doesn’t want to interpret. We share data weekly to avoid overlap.' },
    { q: 'Who owns the data and infrastructure?', a: 'Your CRM records and lead data are fully yours. The domains and inboxes stay under our operational control during the engagement because we warm and maintain them. Offboarding includes full documentation and optional domain transfer.' },
    { q: 'How long until the first meetings?', a: 'Typical: weeks 3–4 for first meetings, week 5 onward is steady state. Domain warming takes 2–3 weeks regardless of agency — no shortcut exists.' },
    { q: 'Clay vs Apollo vs your setup — which do we need?', a: 'For B2B outbound in 2026: Clay for enrichment, Apollo as a data source inside Clay, Smartlead/Instantly for sending, Sales Nav + Heyreach for LinkedIn. We run all of it.' },
  ],

  cta: {
    heading: 'Start a 6-week Performance Pilot.',
    subtitle: 'Pay per Stage-2-qualified meeting, or you don’t pay. We’ll check fit first — if you’re not right for signal-based outbound, we’ll tell you.',
    primary: { label: 'Start a Performance Pilot', href: '/contact' },
  },
}
