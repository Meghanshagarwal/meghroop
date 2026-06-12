import type { ServiceContent } from './types'

export const content: ServiceContent = {
  accent: 'rose',
  eyebrow: 'AI Integration Services',
  badge: 'No rip-and-replace · AI live in weeks',
  titleLines: ['Your tools already charge you for AI.', 'Make it actually do something.'],
  gradientIndex: 1,
  subtitle:
    'Salesforce, HubSpot, Zoho, Zendesk, SAP, Tally, Oracle, your in-house systems — we wire AI into your existing stack. No rip-and-replace. AI live in weeks.',
  pills: ['CRM', 'Helpdesk', 'ERP', 'MCP servers', 'Context layer', 'Custom copilots'],
  primaryCta: { label: 'Scope my integration', href: '/contact' },
  secondaryCta: { label: 'See supported tools', href: '/contact' },
  stats: [
    { value: '2–6 wks', label: 'AI live in your stack' },
    { value: '50+', label: 'Connectors' },
    { value: '30%', label: 'Fewer support tickets' },
  ],

  problem: {
    heading: 'The AI you’re paying for barely does anything.',
    paragraphs: [
      'You’re already paying for Einstein, Breeze, Zia, Copilot — and most of it sits unused or does the bare minimum. The native features are fast to switch on but limited; the real value needs custom AI layered on top.',
      'We extend the tools you already run with AI that actually completes work — across systems, with permissions and audit. We don’t replace your stack; we make it intelligent.',
    ],
    card: {
      title: 'Two paths, evaluated honestly',
      items: [
        'Enable and configure native vendor AI (Einstein, Breeze, Zia) — limited but fast',
        'Build custom AI layers that do what native features can’t',
        'Keep your existing workflows — changes are additive, staged through test environments',
        'Use your own cloud credits (Azure OpenAI, AWS Bedrock, GCP Vertex)',
      ],
    },
  },

  features: {
    heading: 'What we build',
    subtitle: 'AI wired into the systems you already run — plus the context layer that ties them together.',
    items: [
      { title: 'AI-in-your-CRM', tag: 'CRM', description: 'Inbox copilot, deal insights, auto-enrichment, next-best-action, and meeting summaries with CRM write-back.' },
      { title: 'AI-in-your-helpdesk', tag: 'CX', description: 'Ticket auto-triage, resolution suggestions, draft reply generation, sentiment alerts, and macro selection.' },
      { title: 'AI-in-your-ERP', tag: 'Finance', description: 'Invoice capture and coding, vendor matching, reconciliation, and anomaly flagging.' },
      { title: 'MCP-powered agent access', tag: 'MCP', description: 'MCP servers so AI agents can safely read and write to your tools — with permissions, auth, and audit.' },
      { title: 'Context layer (cross-tool memory)', tag: 'Context', description: 'A unified data layer that lets AI see context across all your systems, not just the one it lives in.' },
      { title: 'Custom copilots', tag: 'Copilots', description: 'Internal copilots for your team, grounded on your data, deployed where they work (Slack, Teams, your app).' },
    ],
    note: {
      title: 'What MCP gives you',
      items: [
        'One place to manage AI permissions across your stack',
        'Consistent auth, logging, and audit trails',
        'Agents that can’t exceed their defined scope',
        'Re-usable integrations across every AI system you build',
      ],
    },
  },

  process: {
    heading: 'How it works',
    steps: [
      { title: 'Week 0 — Integration scoping', description: 'Current stack, target use cases, security constraints.' },
      { title: 'Weeks 1–3 — Build & integrate', description: 'Connectors, MCP servers, AI logic, and guardrails.' },
      { title: 'Week 4 — Test & deploy', description: 'UAT with your team, staged rollout.' },
      { title: 'Week 5+ — Scale & maintain', description: 'Tune, expand coverage, and keep integrations healthy as vendor APIs evolve.' },
    ],
  },

  why: {
    heading: 'Why MeghRoop',
    items: [
      { title: 'Tool-neutral', description: 'Not a Salesforce-only or Microsoft-only shop. We pick what fits.' },
      { title: 'Integration + agents in one team', description: 'Most SIs punt agent builds to partners. We do both.' },
      { title: 'Faster than big SIs', description: 'Weeks, not quarters. Fixed-fee, not T&M.' },
      { title: 'India delivery economics', description: '30–50% below US-only shops for the same quality.' },
      { title: 'We live this', description: 'We run these integrations in production every day. Not theoretical.' },
    ],
  },

  comparison: {
    heading: 'How we compare',
    subtitle: 'Custom AI integration vs Zapier vs enterprise iPaaS.',
    columns: ['', 'MeghRoop', 'Zapier / Make', 'Enterprise iPaaS'],
    rows: [
      { label: 'Custom AI logic', values: ['Yes — built per workflow', 'No — if/then only', 'Limited without code'] },
      { label: 'AI-native', values: ['LLM + tool calls across 50+ connectors', 'Basic AI steps only', 'Add-on modules'] },
      { label: 'Timeline', values: ['2–6 weeks per integration', 'Hours to days (simple)', 'Weeks to months'] },
      { label: 'Unstructured data', values: ['Yes — PDFs, emails, free text', 'No', 'Partial'] },
      { label: 'Maintenance', values: ['Observability + retainer available', 'You maintain', 'Vendor-managed, expensive'] },
    ],
  },

  outcomes: {
    heading: 'Outcomes you can expect',
    items: [
      'AI live inside your existing CRM/helpdesk in 2–6 weeks',
      '30% reduction in support tickets via AI triage',
      '20–40% sales rep time saved through CRM-embedded AI',
      'Single context layer — AI sees data across all your tools',
      'No rip-and-replace — we extend, not replace',
    ],
  },

  audience: {
    heading: 'Tools we integrate with',
    subtitle: 'And whatever else you already run.',
    items: [
      'CRM & sales — Salesforce, HubSpot, Zoho CRM, Pipedrive, LeadSquared',
      'Helpdesk & CX — Zendesk, Freshdesk, Intercom, ServiceNow, Jira Service Management',
      'ERP & finance — SAP, Oracle, NetSuite, Dynamics, Tally, Zoho Books, QuickBooks, Xero',
      'Data & collab — Snowflake, BigQuery, Postgres, Slack, Teams, Google Workspace, M365, Notion, Confluence, SharePoint',
      'Plus legacy, on-prem, homegrown tools, and Excel-driven workflows',
    ],
  },

  faqs: [
    { q: 'How do I integrate AI into my existing CRM?', a: 'Two paths: (1) enable and configure the vendor’s native AI (Einstein, Breeze, Zia) — limited but fast; (2) build custom AI layers that do what native features can’t. We evaluate both per use case and recommend honestly.' },
    { q: 'What’s the cost of integrating AI with ERP?', a: 'Depends on ERP and use case. Modern cloud ERPs (NetSuite, Dynamics) are cheaper and faster. Legacy on-prem (older SAP, custom ERPs) costs more due to API work. Fixed-fee quotes after scoping.' },
    { q: 'Can AI work with legacy systems?', a: 'Yes. We’ve integrated with SAP ECC, Oracle EBS, Tally, and custom in-house tools. Where no API exists, we’ll build one — or wrap it in RPA until there is.' },
    { q: 'How long does AI integration take?', a: 'Simple single-tool integrations: 2–4 weeks. Multi-tool programs: 3–6 months. Fixed timeline after scoping.' },
    { q: 'Will this break our existing workflows?', a: 'No. We extend, not replace. Changes are additive, deployed through test environments first, and rolled out in stages.' },
    { q: 'How do you handle data security and residency?', a: 'Deployments in your cloud (AWS/Azure/GCP), VPC or on-prem where required. DPDP, GDPR, HIPAA, SOC 2 compliance as applicable.' },
    { q: 'Which AI models do you integrate — can we use our Azure/AWS credits?', a: 'Yes. Azure OpenAI, AWS Bedrock, GCP Vertex, plus direct provider APIs. Your cloud credits, your choice.' },
    { q: 'What is MCP (Model Context Protocol)?', a: 'An open standard for letting AI agents access your tools safely — with permissions, auth, and audit.' },
    { q: 'Who maintains this when Salesforce or HubSpot updates their API?', a: 'Retainer clients get integration health monitoring and updates included. Non-retainer clients get a monitored alert so you know before things break.' },
  ],

  cta: {
    heading: 'Make the AI you already pay for earn its keep.',
    subtitle: 'Tell us your stack. We’ll scope where AI fits, what it’ll cost, and how fast it can go live — no rip-and-replace.',
    primary: { label: 'Scope my integration', href: '/contact' },
  },
}
