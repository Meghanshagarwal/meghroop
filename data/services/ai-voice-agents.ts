import type { ServiceContent } from './types'

export const content: ServiceContent = {
  accent: 'blue',
  eyebrow: 'AI Voice Agents',
  badge: 'Natural voice · Sub-800ms latency · 20+ languages',
  titleLines: ['AI voice agents that sound human.', 'Work 24/7.', 'Cost a fraction of an SDR.'],
  gradientIndex: 0,
  subtitle:
    'Human-sounding voice agents for inbound support, outbound qualification, appointment booking, and collections. Natural voice, sub-800ms latency, and 20+ languages including Hindi, English, and regional Indian languages.',
  pills: ['Hindi + 20 languages', 'Hinglish code-switching', 'Sub-800ms latency', 'Inbound + outbound', 'TRAI DLT / TCPA', 'CRM-integrated'],
  primaryCta: { label: 'Book a voice agent demo', href: '/contact' },
  secondaryCta: { label: 'Discuss my use case', href: '/contact' },
  stats: [
    { value: '<800ms', label: 'Voice latency' },
    { value: '20+', label: 'Languages supported' },
    { value: '1,000+', label: 'Concurrent calls' },
  ],

  problem: {
    heading: 'IVRs frustrate. Humans don’t scale.',
    paragraphs: [
      'IVRs route calls via keypad menus and frustrate callers. Human SDRs and BPO agents are expensive, hard to scale, and only work in business hours.',
      'AI voice agents converse — they understand intent, answer questions, complete tasks, and book calendars. They answer 100% of calls in under two rings, in three-plus languages, with zero hold time — and warm-transfer to a human with full context when they should.',
    ],
    card: {
      title: 'What our voice agents handle',
      items: [
        '24/7 reception, call qualification, and Tier-1 support',
        'Appointment booking straight into your calendar',
        'Outbound lead qualification at scale (BANT, MEDDIC, custom)',
        'Collections (early buckets) with regulatory guardrails',
        'Warm transfer to humans with full transcript + context',
      ],
    },
  },

  features: {
    heading: 'What we build',
    subtitle: 'Inbound, outbound, and industry-specific voice agents — wired into your CRM and telephony.',
    items: [
      { title: 'Inbound agents', tag: 'Inbound', description: '24/7 reception and call qualification, appointment booking (Calendly, Google, Outlook, HubSpot, Chili Piper), Tier-1 support (FAQs, order status, billing), and warm transfer with full context.' },
      { title: 'Outbound agents', tag: 'Outbound', description: 'Lead qualification at scale (BANT, MEDDIC, custom criteria), appointment setting, survey and NPS callbacks, early-stage collections with guardrails, and event reminders.' },
      { title: 'Industry-specific agents', tag: 'Verticals', description: 'Real estate viewings, healthcare scheduling (HIPAA-aware), lending/BFSI collections (DLT/TRAI compliant), EdTech admissions counseling, D2C order status and cart recovery, and auto test-drive bookings.' },
      { title: 'Multilingual & code-switching', tag: 'Languages', description: 'English, Hindi, Tamil, Telugu, Marathi, Kannada, Bengali, Spanish, and 15+ more — with natural Hinglish/Spanglish code-switching tuned for real phone conversations.' },
    ],
    note: {
      title: 'Integrations, telephony & compliance',
      items: [
        'CRMs: Salesforce, HubSpot, Zoho, LeadSquared, Freshsales, Pipedrive, Zendesk, Freshdesk + custom APIs',
        'Telephony: Twilio, Exotel, Plivo, Knowlarity, Ozonetel — picked on cost and compliance',
        'Compliance: TCPA (US), TRAI DLT (India), HIPAA-aware, DNC handling, consent flows',
        'Observability: full transcripts, recordings, sentiment, outcome tracking, weekly reports',
      ],
    },
  },

  process: {
    heading: 'How it works',
    steps: [
      { title: 'Week 0 — Scoping call', description: 'Use case, language mix, call volume, and integrations.' },
      { title: 'Weeks 1–2 — Build & tune', description: 'Voice selection, script design, CRM integration, and guardrails.' },
      { title: 'Week 3 — Pilot', description: 'Live traffic on a subset of calls, with weekly review.' },
      { title: 'Week 4+ — Scale', description: 'Full rollout and ongoing tuning on real-world edge cases.' },
    ],
  },

  why: {
    heading: 'Why MeghRoop',
    items: [
      { title: 'India-native multilingual', description: 'Hindi + regional languages + Hinglish code-switching, tuned for real Indian phone conversations.' },
      { title: 'No telephony lock-in', description: 'Twilio, Exotel, Plivo, Knowlarity — picked on cost and compliance, not vendor kickbacks.' },
      { title: 'Compliance-first', description: 'TCPA and TRAI DLT templates built into every outbound agent by default.' },
      { title: 'One agent, all channels', description: 'Voice + chat + WhatsApp share the same brain via our omnichannel layer.' },
      { title: 'Outcome-linked pricing available', description: 'Pay per qualified lead or booked appointment on select engagements.' },
    ],
  },

  comparison: {
    heading: 'How we compare',
    subtitle: 'Done-for-you voice agents vs DIY platforms vs human BPO.',
    columns: ['', 'MeghRoop Voice Agents', 'DIY platforms (Retell/Vapi/Bland)', 'Human BPO'],
    rows: [
      { label: 'Voice quality', values: ['Premium (ElevenLabs, Cartesia)', 'Premium', 'Human (variable)'] },
      { label: 'India languages + Hinglish', values: ['Yes, with code-switching', 'Partial / limited', 'Native'] },
      { label: 'Telephony flexibility', values: ['Twilio, Exotel, Plivo, Knowlarity, Ozonetel', 'BYO (Twilio/Telnyx)', 'N/A'] },
      { label: 'Compliance templates', values: ['TCPA, TRAI DLT, HIPAA-aware', 'TCPA only', 'Variable'] },
      { label: 'Done-for-you setup', values: ['Yes', 'No (DIY)', 'N/A'] },
    ],
  },

  outcomes: {
    heading: 'Outcomes you can expect',
    items: [
      'Answer 100% of inbound calls in under 2 rings, 24/7, in 3+ languages',
      '1,000+ concurrent calls with zero hold time',
      'Qualify leads in 90 seconds and auto-book into the calendar',
      'Cut cost-per-qualified-lead by 70% vs. human SDRs',
      'Recover 15–25% more on early-stage collections buckets',
    ],
  },

  audience: {
    heading: 'Built for these industries',
    items: [
      'Real estate — property inquiry qualification and viewing bookings',
      'Healthcare — appointment scheduling, reminders, and intake (HIPAA-aware)',
      'Lending / BFSI — collections, document collection, application status (DLT/TRAI compliant)',
      'EdTech — lead qualification and admission counseling',
      'D2C / e-commerce — order status and abandoned-cart recovery calls',
      'Dealerships / auto — test-drive bookings and service reminders',
    ],
  },

  pricing: {
    heading: 'Pricing',
    subtitle: 'Transparent, all-in pricing including LLM, TTS, telephony, and platform.',
    tiers: [
      { title: 'Setup', price: 'From $2,500', scope: 'Per use case — scripts, CRM integration, telephony setup, and voice tuning.' },
      { title: 'Usage', price: 'Per minute', scope: 'Pay-as-you-go, all-in. At typical SMB volume, 60–80% less than a human SDR or BPO.' },
      { title: 'Outcome pilots', price: 'Per result', scope: 'Per-qualified-lead or per-booked-appointment pricing for select use cases.' },
    ],
  },

  faqs: [
    { q: 'How much does an AI voice agent cost?', a: 'Setup from $2,500, then per-minute usage. At typical SMB volume (5,000 minutes/month), all-in cost is 60–80% less than a human SDR or BPO agent.' },
    { q: 'Can AI voice agents speak Hindi and regional languages?', a: 'Yes — Hindi, Tamil, Telugu, Marathi, Kannada, Bengali, plus code-switching (Hinglish). This is where most US-built platforms fail; we’ve tuned for real Indian phone conversations.' },
    { q: 'Will callers know it’s a bot?', a: 'Most don’t flag it within the first 30 seconds. Where regulation requires disclosure, we build that into the opening line.' },
    { q: 'Are AI voice agents legal for outbound calls?', a: 'Yes, with proper compliance. TCPA in the US, TRAI DLT in India, DNC registry checks, and consent capture — built into every outbound agent by default.' },
    { q: 'How natural do AI voice agents sound?', a: 'Very. Natural voices (ElevenLabs, Cartesia, PlayHT, OpenAI voices), sub-800ms latency, and interruption handling. Most callers don’t realize they’re talking to AI until they ask.' },
    { q: 'What happens when the agent can’t answer?', a: 'Warm transfer to a human with full conversation transcript, caller intent, and CRM context. No one re-explains themselves.' },
    { q: 'Which CRMs do you integrate with?', a: 'Salesforce, HubSpot, Zoho, LeadSquared, Freshsales, Pipedrive, Zendesk, Freshdesk — plus custom APIs for anything in-house.' },
    { q: 'Can we use our existing telephony?', a: 'Almost always yes. Twilio, Exotel, Plivo, Knowlarity, Ozonetel, Vonage — we plug in where you are.' },
    { q: 'AI voice agent vs IVR — what’s the difference?', a: 'IVRs route calls via keypad menus. AI voice agents converse — understand intent, answer questions, complete tasks, and book calendars. IVRs frustrate callers; modern voice agents resolve.' },
  ],

  cta: {
    heading: 'Hear it for yourself.',
    subtitle: 'Book a demo and we’ll set up a live AI voice agent built for your use case — natural voice, your language mix, your CRM.',
    primary: { label: 'Book a voice agent demo', href: '/contact' },
  },
}
