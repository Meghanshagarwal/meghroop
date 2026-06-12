import type { ServiceContent } from './types'

export const content: ServiceContent = {
  accent: 'emerald',
  eyebrow: 'Agentic Process Automation',
  badge: 'First production agent live in 30 days',
  titleLines: ['RPA couldn’t think.', 'Your AI agents can.'],
  gradientIndex: 1,
  subtitle:
    'AI agents that handle exceptions, reason across systems, and run end-to-end back-office processes — invoice-to-pay, ticket triage, reconciliation, vendor onboarding. First production agent live in 30 days.',
  pills: ['Invoice-to-pay', 'Ticket triage', 'Reconciliation', 'Vendor onboarding', 'HITL guardrails', 'Eval-first'],
  primaryCta: { label: 'Start a 4-week Agent Sprint', href: '/contact' },
  secondaryCta: { label: 'Discuss my workflow', href: '/contact' },
  stats: [
    { value: '30 days', label: 'First agent live' },
    { value: '70–80%', label: 'Tier-1 tickets automated' },
    { value: '24/7', label: 'Autonomous ops' },
  ],

  problem: {
    heading: 'The problem',
    paragraphs: [
      'You automated the happy path with RPA. Then every UI change broke your bots. Every exception got escalated to humans. Every new process required a full rebuild.',
      'Agentic Process Automation (APA) replaces this work with AI agents that reason through exceptions — not just follow rules. They read unstructured data, call tools, handle edge cases, and escalate only when they should. Agents reason about the decision. The action is code.',
    ],
    card: {
      title: 'Meanwhile, your ops team still does this',
      items: [
        'Copies invoice data between SAP, your bank, and Excel',
        'Reads support tickets to figure out where to route them',
        'Reconciles payments across 5 systems',
        'Chases approvals across email, Slack, and SharePoint',
        'Onboards vendors with 40-step checklists',
      ],
    },
  },

  features: {
    heading: 'What we build',
    subtitle: 'Productized, back-office process automation across finance, IT/HR, procurement, and support ops.',
    items: [
      { title: 'Finance & accounting agents', tag: 'Finance', description: 'Invoice-to-pay (capture → match → code → route → post), AR reconciliation across bank feeds, payment gateways and CRM, expense classification + policy checks, and month-end close accelerators.' },
      { title: 'IT & HR ops agents', tag: 'IT / HR', description: 'Tier-1 IT ticket triage, diagnosis and resolution (password resets, access, provisioning), employee on/offboarding across 10+ SaaS tools, leave and attendance with HRMS write-back, and policy Q&A with citations.' },
      { title: 'Procurement & vendor agents', tag: 'Procurement', description: 'KYC + vendor onboarding with document verification, procurement requisition handling, and purchase-order matching + flagging.' },
      { title: 'Support ops agents', tag: 'Support', description: 'Multi-step customer inquiries across order/billing/product systems, returns + refund processing, and escalation routing with full context handoff.' },
    ],
    note: {
      title: 'Every agent ships with',
      items: [
        'Test suite + eval harness (not demo-ware)',
        'Observability dashboard (what it did, why, token spend)',
        'Guardrails (deterministic tool calls for irreversible actions)',
        'Clean handoff docs and runbooks',
      ],
    },
  },

  process: {
    heading: 'How we build',
    subtitle: 'Stack picked per use case: LangGraph, CrewAI, OpenAI Agents SDK, Claude Agent SDK, custom MCP servers.',
    steps: [
      { title: 'Scope the workflow', description: 'Map current process, exceptions, and success metrics.' },
      { title: 'Design the agent', description: 'Roles, tools, guardrails, handoff points, and eval criteria.' },
      { title: 'Build and test', description: 'Working agent in 2–3 weeks with a full eval harness.' },
      { title: 'Deploy with HITL', description: 'Humans-in-the-loop for high-risk actions until confidence is proven.' },
      { title: 'Observe and tune', description: 'Weekly eval reviews, guardrail updates, and coverage expansion.' },
    ],
  },

  why: {
    heading: 'Why MeghRoop',
    items: [
      { title: 'Eval-first delivery', description: 'Every agent ships with a test suite. We don’t deploy what we can’t measure.' },
      { title: 'Depth over breadth', description: 'We pick the right stack per use case (LangGraph, CrewAI, n8n, native APIs) — no lock-in.' },
      { title: 'Integration native', description: 'Our systems already integrate with 50+ tools. Those connectors carry over to your build.' },
      { title: 'Product discipline', description: 'We run agents at scale in production — not a services shop learning on client bills.' },
    ],
  },

  comparison: {
    heading: 'How we compare',
    subtitle: 'Agent Sprint vs RPA platforms vs custom dev shops.',
    columns: ['', 'MeghRoop Agent Sprint', 'UiPath / Automation Anywhere', 'Custom dev shop'],
    rows: [
      { label: 'Timeline to first agent', values: ['4 weeks fixed', '8–16 weeks', 'Unpredictable'] },
      { label: 'Core mechanism', values: ['LLM reasoning + deterministic tool calls', 'Rule-based + limited AI', 'Custom code, no standard pattern'] },
      { label: 'Exception handling', values: ['Reasons, acts, or escalates with context', 'Escalate to human', 'Manual scripting'] },
      { label: 'Maintenance overhead', values: ['Low — agents adapt', '40–60% of TCO fixing bots', 'High — no eval harness'] },
      { label: 'Deliverable', values: ['Agent + eval + observability + runbook', 'Configured flows + support', 'Code only'] },
    ],
  },

  outcomes: {
    heading: 'Outcomes you can expect',
    items: [
      'Cut invoice-to-pay cycle from 9 days to 18 hours',
      'Automate 70–80% of Tier-1 IT/HR tickets end-to-end',
      '1 agent replaces 3–5 FTE-hours per day on reconciliation',
      'First production agent live in 30 days via Agent Sprint',
      '24/7 autonomous ops across 20+ SaaS tools with one orchestrator',
    ],
  },

  pricing: {
    heading: 'Engagements',
    subtitle: 'No T&M, no scope creep. Start small, scale once it works.',
    tiers: [
      { title: 'Agent Sprint', price: 'Flat fee', scope: '4 weeks — one production agent, eval harness, observability dashboard, and runbook.' },
      { title: 'Multi-agent program', price: 'Custom', scope: '8–12 weeks for the first production cohort, quoted per scope.' },
      { title: 'Retained ops', price: 'Monthly', scope: 'Ongoing coverage expansion, new workflows, and weekly eval reviews.' },
    ],
  },

  faqs: [
    { q: 'What is agentic process automation?', a: 'APA uses LLM-powered agents that reason, read unstructured inputs, and make decisions — going beyond rule-based RPA. Agents handle the exceptions RPA used to escalate.' },
    { q: 'How is APA different from RPA?', a: 'RPA automates the happy path with deterministic rules. APA adds reasoning — so agents handle variations, unstructured data, and exceptions. Most companies run both: RPA for high-volume deterministic steps, APA for the messy middle.' },
    { q: 'Will agents hallucinate on financial data?', a: 'Not when designed correctly. Deterministic tool calls for irreversible actions, HITL approvals on high-risk steps, strict guardrails. Agents reason about the decision; the action is code.' },
    { q: 'How do we measure ROI?', a: 'Cycle time, cost-per-transaction, FTE hours reclaimed, exception rate, error rate. Metrics defined with you in week 1 and tracked weekly post-launch.' },
    { q: 'Does our data train your models?', a: 'No. We deploy in your cloud (AWS/Azure/GCP) or via API providers with zero-retention settings. Your data stays yours.' },
    { q: 'What if the agent breaks?', a: 'Observability, eval harnesses, fallback workflows, and a monitored alerting channel. Breaks are visible in minutes, not discovered by customers.' },
    { q: 'Which processes can AI agents automate?', a: 'Back-office processes with structured or semi-structured inputs: invoices, tickets, reconciliation, onboarding, policy Q&A, ticket triage, approvals. If it involves reading unstructured data, making a decision, and updating systems, it’s agent-shaped.' },
    { q: 'Why not just use UiPath Agents or Automation Anywhere?', a: 'Platform agents work for standard patterns. For deep custom logic, integration depth, or cost-sensitive mid-market, custom builds are 30–60% cheaper long-term and more flexible. We help you pick honestly.' },
    { q: 'Timeline to first production agent?', a: '4 weeks via Agent Sprint. Larger programs run 8–12 weeks for the first production cohort.' },
  ],

  cta: {
    heading: 'Pick one workflow. See it run in 30 days.',
    subtitle: 'Start with a 4-week Agent Sprint — one production agent live. No T&M. No scope creep. If it works, we talk about retained.',
    primary: { label: 'Start my Agent Sprint', href: '/contact' },
  },
}
