import type { ServiceContent } from './types'

export const content: ServiceContent = {
  accent: 'violet',
  eyebrow: 'Custom AI Agent Development',
  badge: 'You own the code, prompts, data & IP',
  titleLines: ['Off-the-shelf copilots don’t know your business.', 'We build the one that does.'],
  gradientIndex: 1,
  subtitle:
    'Production-ready bespoke AI agents for your specific workflow — not generic copilots, not templated chatbots, not productized back-office bots. You own the code, the prompts, the data, and the IP.',
  pills: ['Bespoke logic', 'Tool use', 'Eval harness', 'No model lock-in', 'Your cloud', 'You own the IP'],
  primaryCta: { label: 'Scope my custom agent', href: '/contact' },
  secondaryCta: { label: 'Book a feasibility review', href: '/contact' },
  stats: [
    { value: '4–8 wks', label: 'To first production agent' },
    { value: '60–80%', label: 'Workflow automated' },
    { value: '3–8 FTEs', label: 'Equivalent per agent' },
  ],

  problem: {
    heading: 'Chatbots converse. Agents act.',
    paragraphs: [
      'A chatbot answers “Where’s my order?” with a link. An agent checks the order system, triggers a refund if appropriate, and writes back to your CRM. Chatbots are scripted; agents reason with guardrails and complete real work.',
      'Off-the-shelf copilots don’t know your domain, your data model, or your internal jargon. When a workflow is unique and business-critical, you want your own agent — not a vendor’s black box.',
    ],
    card: {
      title: 'Meanwhile, your team still does this manually',
      items: [
        'SDRs researching accounts and drafting outreach',
        'AP clerks matching invoices across systems',
        'Support engineers triaging and diagnosing Tier-2 tickets',
        'Analysts pulling data across 6 tools to answer one question',
        'Recruiters screening and scheduling 50 candidates a week',
      ],
    },
  },

  features: {
    heading: 'What we build',
    subtitle: 'Bespoke agents across sales, support, finance, research, people, and internal tooling.',
    items: [
      { title: 'Sales & revenue agents', tag: 'Sales', description: 'SDR research (account intel, firmographics, personalized outreach), lead qualification and routing, quote/proposal generation, and CRM hygiene (dedup, enrichment, activity logging).' },
      { title: 'Support & CX agents', tag: 'Support', description: 'L2 support with tool access (order lookup, refund initiation, account updates), ticket triage beyond Tier-1 templates, customer health monitoring with proactive alerts, and feedback analysis.' },
      { title: 'Finance & operations agents', tag: 'Finance', description: 'Specialized AR/AP agents with domain-specific logic, contract negotiation assistants, treasury and cash-flow agents, and audit-ready reconciliation for niche ledgers.' },
      { title: 'Research & analyst agents', tag: 'Research', description: 'RFP response drafting, competitive intel monitoring with summarization, market research synthesis, and investment memo drafting.' },
      { title: 'People / recruiting agents', tag: 'People', description: 'Candidate screening with structured scoring, interview scheduling across time zones, and onboarding task orchestration.' },
      { title: 'Internal-tool & analyst agents', tag: 'Internal', description: '“Ask your data” analyst agent over your warehouse, internal Q&A over SOPs and policies, and meeting summarizer + action-item tracker.' },
    ],
    note: {
      title: 'Every agent ships with',
      items: [
        'Eval harness — success cases, edge cases, adversarial inputs',
        'Observability dashboard — what it did, why, token spend, error rates',
        'Guardrails — deterministic tool calls + HITL on high-risk steps',
        'Runbook + handoff docs — architecture, prompts, config, deployment',
      ],
    },
  },

  process: {
    heading: 'How we build',
    subtitle: 'Stack picked per project: LangGraph, CrewAI, OpenAI/Claude Agent SDK · models from Anthropic, OpenAI, Google, Mistral, Llama · deploy to your cloud.',
    steps: [
      { title: 'Week 0 — Scoping call (free)', description: 'Workflow, success metrics, constraints, stack.' },
      { title: 'Week 1 — Agent Feasibility Review', description: 'Architecture, cost/timeline estimate, go/no-go.' },
      { title: 'Weeks 2–7 — Build', description: 'Working agent by week 4. Weekly demos. Iterate.' },
      { title: 'Week 8 — Deploy', description: 'Shadow → HITL → autonomous. Monitored go-live.' },
      { title: 'Ongoing (optional)', description: 'Retainer for tuning, coverage expansion, and model updates.' },
    ],
  },

  why: {
    heading: 'Why MeghRoop',
    items: [
      { title: 'Own your agent, own your data', description: 'No per-conversation metering, no lock-in, and you can move to open models the day provider pricing shifts.' },
      { title: 'Product-tested team', description: 'We run agents at scale in production — not a pure services shop learning on client bills.' },
      { title: 'Full-stack in one team', description: 'Prompt engineering, backend, integration, and eval — no handoffs.' },
      { title: 'No framework lock-in', description: 'Claude, GPT, Gemini, Llama. LangGraph, CrewAI, OpenAI Agents SDK. We pick per project.' },
      { title: 'India delivery economics', description: '50–60% the cost of US-only firms, same engineering stack.' },
    ],
  },

  comparison: {
    heading: 'How we compare',
    subtitle: 'Production-grade agents vs enterprise consultancies vs freelance devs.',
    columns: ['', 'MeghRoop', 'Enterprise consultancy', 'Freelance dev'],
    rows: [
      { label: 'Timeline', values: ['4–8 weeks to first agent', '12–24 weeks', 'Unpredictable'] },
      { label: 'Team', values: ['Engineers who ship AI', 'Partners + junior MBAs', 'Single dev, no AI ops'] },
      { label: 'Deliverable', values: ['Agent + eval harness + runbook', 'Architecture doc + recommendations', 'Code only'] },
      { label: 'Eval & testing', values: ['Full test suite, every agent', 'Varies', 'Manual only'] },
      { label: 'Production support', values: ['Observability + retainer available', 'Separate support contract', 'Best effort'] },
    ],
  },

  outcomes: {
    heading: 'Outcomes you can expect',
    items: [
      'Production agent live in 4–8 weeks',
      '60–80% of the target workflow automated end-to-end',
      '40–70% reduction in cost-per-ticket / case / lead',
      'One agent equivalent to 3–8 FTEs on repetitive work',
      'Move models without a rebuild as provider pricing shifts',
    ],
  },

  audience: {
    heading: 'When a custom agent is the right call',
    subtitle: 'Custom builds make sense when the workflow is:',
    items: [
      'Unique to your business, domain, or data model',
      'Deeper than a template — custom logic, proprietary reasoning, internal jargon',
      'Business-critical enough that you want your own IP, not a vendor’s black box',
    ],
  },

  pricing: {
    heading: 'Engagements',
    subtitle: 'Fixed-fee, fixed-timeline. No T&M.',
    tiers: [
      { title: 'Feasibility Review', price: '1 week', scope: 'Scopes your workflow, prototypes the core logic, and delivers a go/no-go recommendation.' },
      { title: 'Agent build', price: 'Fixed fee', scope: '4 weeks for a productized sprint; 6–10 weeks for complex bespoke builds with deep integrations.' },
      { title: 'Retainer', price: 'Monthly', scope: 'Tuning, coverage expansion, and model-migration support included.' },
    ],
  },

  faqs: [
    { q: 'How much does it cost to build a custom AI agent?', a: 'We start with a 1-week Agent Feasibility Review that scopes your workflow, prototypes the core logic, and delivers a go/no-go recommendation. All builds are fixed-fee and fixed-timeline — no T&M.' },
    { q: 'How long does AI agent development take?', a: '4 weeks for the productized Agent Sprint. 6–10 weeks for complex bespoke builds with deep integrations and high reliability requirements.' },
    { q: 'What’s the difference between a chatbot and an AI agent?', a: 'Chatbots converse. Agents act — they call tools, read/write to systems, make decisions, and complete work.' },
    { q: 'Can AI agents integrate with our existing tools?', a: 'Yes — CRMs, ERPs, helpdesks, databases, internal APIs, and SaaS tools with webhooks or APIs. If it has an interface, we can connect.' },
    { q: 'Which model / framework do you use — are we locked in?', a: 'No lock-in. We pick the best fit for your use case. Your agent is portable across providers; we document the swap path.' },
    { q: 'Who owns the code and the IP?', a: 'You. Full source, prompts, configs, and docs are yours on delivery. We keep nothing proprietary to us.' },
    { q: 'How do you handle hallucinations and guardrails?', a: 'Deterministic tool calls for irreversible actions, HITL approval gates, strict output schemas, retry logic, and eval harnesses. Hallucination is a design problem, not an LLM problem.' },
    { q: 'Can it work with our on-prem / VPC / private LLM?', a: 'Yes. AWS Bedrock, Azure OpenAI, GCP Vertex, VPC deployments, and open-source models (Llama, Qwen, Mistral) on your infrastructure.' },
    { q: 'What happens when the underlying model changes or deprecates?', a: 'We build with abstraction layers so you can swap models. Our retainer clients get model-migration support included.' },
    { q: 'Custom agents vs Agentic Process Automation — which do I need?', a: 'Use Agentic Process Automation for productized back-office workflows (invoice-to-pay, ticket triage, reconciliation). Use Custom AI Agent Development for unique workflows with bespoke logic, proprietary data, or domain-specific reasoning.' },
  ],

  cta: {
    heading: 'Build the agent that knows your business.',
    subtitle: 'Start with a 1-week Feasibility Review. We scope the workflow, prototype the core logic, and give you a straight go/no-go.',
    primary: { label: 'Scope my custom agent', href: '/contact' },
  },
}
