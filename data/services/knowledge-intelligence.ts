import type { ServiceContent } from './types'

export const content: ServiceContent = {
  accent: 'amber',
  eyebrow: 'Document & Knowledge Intelligence',
  badge: 'Permission-aware RAG · deployed in your cloud',
  titleLines: ['Your best documentation is trapped', 'in your worst search tool.'],
  gradientIndex: 1,
  subtitle:
    'AI that reads your SOPs, contracts, policies, and internal docs — and answers with citations. Permission-aware. Deployed in your VPC or on-prem. Zero hallucination tolerance for compliance teams.',
  pills: ['Permission-aware', 'Citation-backed', 'Your cloud / on-prem', 'RAG', 'Any model', '85–95% accuracy'],
  primaryCta: { label: 'Start a knowledge pilot', href: '/contact' },
  secondaryCta: { label: 'Book a knowledge audit', href: '/contact' },
  stats: [
    { value: '5 sec', label: 'To a cited answer' },
    { value: '85–95%', label: 'Answer accuracy' },
    { value: '4–6 wks', label: 'To pilot' },
  ],

  problem: {
    heading: 'The knowledge is there. Nobody can find it.',
    paragraphs: [
      'Your documentation is good. Your search isn’t. So the knowledge sits unused — and people guess, or worse, paste confidential docs into public chatbots.',
      'We build permission-aware RAG assistants that read your documents and answer with citations, deployed inside your perimeter. Grounded answers only — if it can’t cite a source, it won’t answer.',
    ],
    card: {
      title: 'Sound familiar?',
      items: [
        'New hires take 3–6 months to ramp because no one can find anything',
        'Contract teams spend hours locating clauses across thousands of agreements',
        'Support teams answer the same questions with conflicting answers',
        'Employees paste confidential docs into ChatGPT because intranet search is unusable',
      ],
    },
  },

  features: {
    heading: 'What we build',
    subtitle: 'Grounded, permission-aware assistants for employees, support, contracts, compliance, and sales.',
    items: [
      { title: 'Employee knowledge assistants', tag: 'Internal', description: 'Ask anything about policies, SOPs, benefits, IT, HR, compliance — get a cited answer in seconds. Deployed in Slack, Teams, your intranet, or a custom chat UI.' },
      { title: 'Customer support knowledge bots', tag: 'Support', description: 'Grounded on your help center, internal playbooks, and product docs. Deployable as a chatbot, WhatsApp bot, or agent-facing co-pilot.' },
      { title: 'Contract intelligence', tag: 'Legal', description: 'Search, summarize, and extract clauses across thousands of agreements. Compare contracts, flag missing terms, and auto-draft from templates.' },
      { title: 'SOP & compliance assistants', tag: 'Regulated', description: 'For BFSI, pharma, and healthcare — answers tied to the current version of a policy, with clause-level citations and audit trail.' },
      { title: 'Sales enablement assistants', tag: 'Sales', description: 'Grounded on battle cards, win/loss notes, and case studies. Instant answers during discovery calls.' },
      { title: 'RFP & proposal assistants', tag: 'Proposals', description: 'Pulls from your response library, past proposals, and product docs. Drafts responses with citations.' },
    ],
    note: {
      title: 'How we build it',
      items: [
        'Grounded answers only — every answer links to source doc + page; if it can’t cite, it won’t answer',
        'Permission-aware — inherits source ACLs (SharePoint, Drive, Confluence); no leakage across roles',
        'Your cloud, your control — VPC/on-prem with open models; no data leaves your perimeter',
        'Real-time sync — when a document updates, the index updates; no stale answers',
        'Eval-first — citation precision and answer accuracy measured against a domain test set, weekly',
        'Multi-modal — PDFs with tables/images, scans, handwriting, audio transcripts',
      ],
    },
  },

  process: {
    heading: 'How it works',
    steps: [
      { title: 'Week 0 — Knowledge audit', description: 'What you have, where it lives, access patterns, and the accuracy bar.' },
      { title: 'Weeks 1–3 — Build', description: 'Ingestion pipeline, embeddings, retrieval, LLM orchestration, permissions, and UI.' },
      { title: 'Week 4 — Deploy', description: 'Internal pilot and eval tuning.' },
      { title: 'Weeks 5–6 — Scale', description: 'Full rollout, monitoring, and feedback loop.' },
    ],
  },

  why: {
    heading: 'Why MeghRoop',
    items: [
      { title: 'Built in your cloud, not ours', description: 'VPC/on-prem deployment with open models. No data leaves your perimeter.' },
      { title: 'Accuracy-measured', description: 'Every RAG build has an eval harness with citation precision + answer accuracy measured weekly.' },
      { title: 'Ships as a real assistant', description: 'WhatsApp, Slack, Teams, web, voice — not just a search box.' },
      { title: 'Domain-specific', description: 'Pharma SOPs, BFSI compliance, legal contracts — not generic enterprise search.' },
      { title: 'India pricing, US quality', description: '4–6 week pilots vs. 6-month enterprise rollouts.' },
    ],
  },

  comparison: {
    heading: 'How we compare',
    subtitle: 'Domain-tuned RAG vs raw LLM chat vs enterprise search.',
    columns: ['', 'MeghRoop', 'Raw LLM (ChatGPT)', 'Enterprise search'],
    rows: [
      { label: 'Answers with citations', values: ['Yes — sourced to doc + page', 'No — hallucinated summaries', 'No — returns links'] },
      { label: 'Handles proprietary docs', values: ['Yes — PDF, Word, Confluence, SharePoint, Notion', 'Only if uploaded each session', 'Depends on indexing'] },
      { label: 'Hallucination control', values: ['Strict — only from your corpus', 'Medium — may go off-source', 'N/A — keyword match'] },
      { label: 'Private deployment', values: ['Yes — your cloud or on-prem', 'No — data leaves your env', 'Yes (on-prem SharePoint)'] },
      { label: 'Time to production', values: ['4–6 weeks', 'N/A', '3–6+ months'] },
    ],
  },

  outcomes: {
    heading: 'Outcomes you can expect',
    items: [
      'Answer policy/SOP questions in 5 seconds instead of 2 hours of searching',
      'Cut new-hire ramp time by 40–60%',
      'Find a specific contract clause across 10,000 agreements in under 10 seconds',
      'Deflect 30–50% of internal IT/HR tickets with a grounded assistant',
      '100% citation-backed answers — zero hallucination tolerance for compliance',
    ],
  },

  audience: {
    heading: 'Connects to everything you already store',
    items: [
      'Doc stores — SharePoint, Google Drive, Confluence, Notion, Dropbox, OneDrive, Box',
      'Collaboration — Slack, Microsoft Teams, internal wikis, email archives',
      'Systems — Zendesk, Salesforce attachments, databases, custom document stores',
      'Repositories — PDF libraries, contract repositories, scanned archives',
    ],
  },

  pricing: {
    heading: 'Engagements',
    subtitle: 'Start with a scoped pilot, scale to production.',
    tiers: [
      { title: 'Pilot', price: '$15K–$40K', scope: 'One use case, one data source, 4–6 weeks.' },
      { title: 'Production build', price: '$40K–$150K', scope: 'Multi-source, multi-channel deployment.' },
      { title: 'Managed retainer', price: '$2K–$10K/mo', scope: 'Tuning, evals, re-indexing, and new sources.' },
    ],
  },

  faqs: [
    { q: 'How does RAG work on internal documents?', a: 'We ingest your documents, split them into chunks, create vector embeddings, and store them in a vector database. When you ask a question, the system retrieves the most relevant chunks and feeds them to an LLM to generate a grounded answer with citations.' },
    { q: 'Is enterprise RAG secure and private?', a: 'Yes, when built right. We deploy in your cloud, use permission-aware retrieval, and never train on your data. Open models for fully on-prem deployments.' },
    { q: 'RAG vs. fine-tuning — which is better for internal docs?', a: 'RAG for most cases. It handles frequent updates, provides citations, and respects permissions. Fine-tuning is for teaching specialized reasoning or output patterns, not injecting knowledge.' },
    { q: 'How do you compare to Glean?', a: 'Glean is SaaS, priced per-seat, and is generic enterprise search. We build custom RAG in your cloud, with domain-tuning, open models, and lower year-1 cost at most scales. Glean is the right call for some Fortune 500 buyers; we’re a better fit for teams wanting control, accuracy, or air-gapped deployment.' },
    { q: 'What accuracy can we expect?', a: 'Measured via our RAG Accuracy Benchmark per engagement. Typical deployments hit 85–95% answer accuracy with near-100% citation fidelity. We define the target accuracy bar with you in week 1.' },
    { q: 'How do you handle permissions — will employees see docs they shouldn’t?', a: 'No. We inherit permissions from the source system (SharePoint ACLs, Google Drive permissions). The retrieval layer filters before content ever reaches the LLM.' },
    { q: 'Can it handle scanned PDFs, images, and tables?', a: 'Yes. Modern OCR, layout-aware parsing, and multi-modal embeddings handle complex documents including scans, diagrams, and tables.' },
    { q: 'What happens when documents are updated?', a: 'Real-time or scheduled re-indexing. Changes propagate in minutes.' },
    { q: 'Can we deploy on-prem, fully air-gapped?', a: 'Yes. Open models (Llama 3.3, Qwen, Mistral) on your hardware, with no external API calls. Common for defense, BFSI, and healthcare.' },
  ],

  cta: {
    heading: 'Turn your documents into instant, cited answers.',
    subtitle: 'Start with a knowledge audit. We’ll map what you have, set the accuracy bar, and stand up a pilot in 4–6 weeks.',
    primary: { label: 'Start a knowledge pilot', href: '/contact' },
  },
}
