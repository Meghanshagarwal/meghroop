import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Brain,
  Database,
  Shield,
  Zap,
  MessageSquare,
  TrendingUp,
  Bot,
  Layers,
  Cog,
  Users,
  Check,
  X,
  ChevronDown,
  Factory,
  Heart,
  ShoppingCart,
  Truck,
  Landmark,
  Search,
  Lock,
  ClipboardCheck,
  Eye,
  Workflow,
  ArrowUpRight,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import ProductFAQ from '@/components/sections/ProductFAQ'

export const metadata: Metadata = {
  title: 'Custom AI Agent Development Services | Build Enterprise AI Agents',
  description:
    'Build autonomous, custom AI agents tailored to your business. Explore how enterprise AI agents work, what they cost, and how to integrate them with your existing systems.',
  alternates: { canonical: '/product/custom-ai-agent-development' },
  openGraph: {
    title: 'Custom AI Agent Development Services | Build Enterprise AI Agents | MeghRoop',
    description:
      'Build autonomous, custom AI agents tailored to your business. Explore how enterprise AI agents work, what they cost, and how to integrate them with your existing systems.',
  },
}

/* ── Data ── */

const comparisonRows = [
  {
    capability: 'Interaction style',
    chatbot: 'Responds to one message at a time',
    agent: 'Plans and executes multi-step tasks',
  },
  {
    capability: 'Memory',
    chatbot: 'Limited or none between sessions',
    agent: 'Retains context across sessions and tasks',
  },
  {
    capability: 'Tool use',
    chatbot: 'Rarely connects to external systems',
    agent: 'Calls APIs, databases, and business tools directly',
  },
  {
    capability: 'Decision-making',
    chatbot: 'Follows scripted flows',
    agent: 'Reasons through ambiguous or novel situations',
  },
  {
    capability: 'Autonomy',
    chatbot: 'Requires a human prompt for every step',
    agent: 'Can complete a task end-to-end once triggered',
  },
]

const coreComponents = [
  {
    icon: Brain,
    title: 'Reasoning',
    desc: 'The agent breaks a broad goal into smaller steps, using an LLM as its reasoning engine to plan the optimal path forward.',
  },
  {
    icon: Database,
    title: 'Memory',
    desc: 'Short-term memory tracks the current task; long-term memory retains context across sessions — a genuine differentiator from chatbots.',
  },
  {
    icon: Cog,
    title: 'Tool Use / Function Calling',
    desc: 'The agent calls external systems — a CRM, a database, a scheduling tool — to complete real actions instead of just generating text.',
  },
  {
    icon: Shield,
    title: 'Guardrails',
    desc: 'Rules and permission boundaries that keep the agent\'s actions within approved limits, ensuring safe and responsible autonomy.',
  },
]

const agentTypes = [
  {
    icon: MessageSquare,
    title: 'Conversational AI Agents',
    desc: 'Handle customer or employee interactions with contextual memory across sessions.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics Agents',
    desc: 'Forecast trends like demand, churn, or market movements using live business data.',
  },
  {
    icon: Workflow,
    title: 'RPA-Integrated Agents',
    desc: 'Combine reasoning with traditional automation for rules-heavy workflows.',
  },
  {
    icon: Users,
    title: 'Recommendation Agents',
    desc: 'Personalize product or content suggestions based on user behavior and preferences.',
  },
  {
    icon: Eye,
    title: 'Decision Intelligence Agents',
    desc: 'Support executive-level decisions using live business data and multi-source analysis.',
  },
  {
    icon: Layers,
    title: 'Multi-Agent Systems',
    desc: 'Several specialized agents coordinating on a larger workflow, rather than one agent handling everything.',
  },
]

const benefits = [
  'Reduce operational costs by automating repetitive, high-volume tasks',
  'Provide 24/7 customer support automation without proportional headcount growth',
  'Cut manual data entry errors by handling structured data tasks directly',
  'Scale support and operations functions without a linear increase in hiring',
  'Surface insights faster through natural language queries against business data',
]

const devProcess = [
  {
    step: '01',
    title: 'Discovery & Use-Case Definition',
    desc: 'Identify the specific workflow, decision, or task the agent will own, and what success looks like.',
  },
  {
    step: '02',
    title: 'Data & Systems Assessment',
    desc: 'Audit the data sources, APIs, and existing systems the agent will need access to.',
  },
  {
    step: '03',
    title: 'Architecture & Model Selection',
    desc: 'Decide between RAG, fine-tuning, or a hybrid approach, and design the agent\'s memory and tool-use structure.',
  },
  {
    step: '04',
    title: 'Development & Testing',
    desc: 'Build the agent, connect it to required tools, and test it against real (not just simulated) scenarios.',
  },
  {
    step: '05',
    title: 'Deployment & Monitoring (AgentOps)',
    desc: 'Launch with guardrails in place, then monitor performance, accuracy, and drift over time.',
  },
]

const integrations = [
  { label: 'CRM & ERP Platforms', desc: 'Customer and operational data' },
  { label: 'Internal APIs', desc: 'Real-time actions — updating records, triggering workflows' },
  { label: 'Data Warehouses', desc: 'Historical analysis and reporting' },
  { label: 'Legacy Systems', desc: 'Via middleware when direct API access isn\'t available' },
]

const governance = [
  {
    icon: Lock,
    title: 'Role-Based Access Control',
    desc: 'Agents only see and act on data appropriate to their function.',
  },
  {
    icon: Shield,
    title: 'Behavioral Guardrails',
    desc: 'Constrain what actions an agent can take autonomously versus what requires human approval.',
  },
  {
    icon: Users,
    title: 'Human-in-the-Loop',
    desc: 'Checkpoints for high-stakes or irreversible actions before the agent proceeds.',
  },
  {
    icon: ClipboardCheck,
    title: 'Audit Trails',
    desc: 'Document what the agent did and why — critical for compliance reviews.',
  },
]

const industries = [
  {
    icon: Landmark,
    title: 'Financial Services',
    items: ['Fraud detection agents', 'Loan servicing support', 'Automated compliance checks'],
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    items: ['Predictive maintenance agents', 'Quality control monitoring', 'Supply chain forecasting'],
  },
  {
    icon: Heart,
    title: 'Healthcare',
    items: ['Administrative task automation', 'Patient scheduling support', 'Strict data privacy controls'],
  },
  {
    icon: ShoppingCart,
    title: 'Retail & E-Commerce',
    items: ['Inventory optimization', 'Personalized product recommendations'],
  },
  {
    icon: Truck,
    title: 'Logistics',
    items: ['Route optimization', 'Demand forecasting agents'],
  },
]

const costFactors = [
  'Scope of the task the agent handles — a single-workflow agent costs far less than a multi-agent system',
  'Integration complexity — the number and age of systems it needs to connect to',
  'Data readiness — whether your data is already structured and accessible, or needs significant cleanup first',
  'Governance requirements — regulated industries typically need more guardrail and audit work',
  'Ongoing monitoring and tuning after launch, which is often a separate retainer rather than a one-time cost',
]

const faqs = [
  {
    q: 'What is a custom AI agent?',
    a: 'A custom AI agent is an AI system built to autonomously complete tasks specific to your business, using your data and connected to your existing tools, rather than operating as a generic, one-size-fits-all assistant.',
  },
  {
    q: 'How is a custom AI agent different from a chatbot?',
    a: 'A chatbot responds to individual messages within a conversation. A custom AI agent can plan multiple steps, take real actions in connected systems, and retain context across a task without needing a new prompt at every step.',
  },
  {
    q: 'How long does it take to build a custom AI agent?',
    a: 'Timelines vary by scope — a narrow, single-workflow agent with straightforward integrations can move faster than a multi-agent system requiring deep integration with legacy platforms. Discovery and data readiness are usually the biggest factors in timeline.',
  },
  {
    q: 'How much does custom AI agent development cost?',
    a: 'Cost depends on task complexity, the number of systems it integrates with, how ready your existing data is, and governance requirements. A detailed estimate should follow a scoping conversation rather than a generic price list.',
  },
  {
    q: 'Can AI agents integrate with our existing CRM or ERP?',
    a: 'Yes. Most custom AI agents are built specifically to connect with CRM, ERP, and internal APIs, which is typically a core part of the development process rather than an add-on.',
  },
  {
    q: 'Are custom AI agents secure enough for regulated industries?',
    a: 'When built with role-based access control, guardrails, human-in-the-loop checkpoints, and audit trails, custom AI agents can meet the governance requirements of regulated sectors like finance and healthcare — but this needs to be designed in from the start, not retrofitted.',
  },
  {
    q: 'Do we need our own data infrastructure before building an AI agent?',
    a: 'Not necessarily perfect infrastructure, but data accessibility matters. A data and systems assessment early in the process identifies gaps that need addressing before or during development.',
  },
  {
    q: "What's the difference between RAG and fine-tuning for AI agents?",
    a: 'RAG connects an agent to your live documents and data so it retrieves current information without retraining the model. Fine-tuning adjusts the model itself using historical data, useful when a very specific tone or domain reasoning pattern is needed. Many enterprise agents use both.',
  },
]

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-28 sm:pt-32">

        {/* ═══════════════════════════ HERO ═══════════════════════════ */}
        <section className="grid-bg relative overflow-hidden">
          <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[80vw] h-[45vh] bg-[#c084fc]/[0.10] rounded-full blur-[170px] pointer-events-none" />
          <div className="absolute top-20 right-[10%] w-[30vw] h-[30vh] bg-[#60a5fa]/[0.06] rounded-full blur-[140px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-6 pb-20 sm:pb-28 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[13px] text-white/70 mb-8 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc] animate-pulse" />
              Custom AI Agent Development
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl text-white leading-[1.02] tracking-tight mb-7 animate-fade-up" style={{ animationDelay: '80ms' }}>
              Build Autonomous Agents{' '}
              <span className="gradient-text">for Your Business</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/[0.62] max-w-3xl mx-auto leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '160ms' }}>
              Businesses are moving past static chatbots and simple automation scripts toward custom AI agents —
              systems that can reason through a task, make decisions, and act across multiple tools without constant
              human input.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: '240ms' }}>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-black font-semibold text-[15px] hover:bg-white/90 transition-all duration-200 shadow-[0_0_50px_rgba(192,132,252,0.18)]"
              >
                Get a Scoped Estimate
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/[0.12] text-white font-semibold text-[15px] hover:bg-white/[0.05] transition-all duration-200"
              >
                How It Works
                <ChevronDown size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ WHAT IS A CUSTOM AI AGENT ═══════════════════════ */}
        <section className="border-t border-white/[0.06]">
          <div className="max-w-4xl mx-auto px-6 py-20 sm:py-28">
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white leading-[1.08] tracking-tight mb-8">
              What Is a{' '}
              <span className="gradient-text">Custom AI Agent?</span>
            </h2>
            <div className="space-y-5">
              <p className="text-base sm:text-lg text-white/[0.62] leading-relaxed max-w-3xl">
                A custom AI agent is a software system built on large language models (LLMs) that can understand
                a goal, plan the steps to reach it, use external tools or data sources, and complete multi-step tasks
                with minimal human supervision. Unlike generic AI tools, a custom AI agent is designed around your
                specific business processes, data, and systems.
              </p>
              <p className="text-base sm:text-lg text-white/[0.62] leading-relaxed max-w-3xl">
                <strong className="text-white/80">Personalized AI agents</strong> go a step further: they adapt their behavior based on individual user context,
                historical interactions, or role-specific permissions, rather than responding the same way to everyone.
              </p>
            </div>

            {/* Differentiator callout */}
            <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#0d0d0d] p-6 sm:p-8">
              <h3 className="font-heading font-bold text-xl text-white mb-3">
                How Custom AI Agents Differ from Off-the-Shelf Tools
              </h3>
              <p className="text-[15px] text-white/[0.55] leading-relaxed">
                Pre-built AI tools are designed for general use cases and rarely connect deeply into your internal systems.
                A custom-built enterprise AI agent is trained on your business logic, integrated with your CRM, ERP, or
                internal databases, and shaped around workflows unique to your industry — which is why enterprises
                increasingly choose custom AI agent development over generic software.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ COMPARISON TABLE ═══════════════════════ */}
        <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
          <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
            <div className="text-xs uppercase tracking-[0.2em] text-[#52525b] mb-4">Comparison</div>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-5">
              AI Agents vs. Chatbots:{' '}
              <span className="gradient-text">What&apos;s the Real Difference?</span>
            </h2>
            <p className="text-base sm:text-lg text-white/[0.55] leading-relaxed max-w-3xl mb-12">
              This is one of the most common points of confusion for buyers evaluating agentic AI.
              Chatbots are reactive; agents are proactive and can take action.
            </p>

            {/* Desktop table */}
            <div className="hidden sm:block rounded-2xl border border-white/[0.08] overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0d0d0d]">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-white/70 border-b border-white/[0.06] w-[28%]">Capability</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-red-400/80 border-b border-white/[0.06] w-[36%]">
                      <span className="flex items-center gap-2"><MessageSquare size={14} /> Traditional Chatbot</span>
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-emerald-400/80 border-b border-white/[0.06] w-[36%]">
                      <span className="flex items-center gap-2"><Bot size={14} /> Custom AI Agent</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.capability}
                      className={`${i % 2 === 0 ? 'bg-[#0d0d0d]/50' : 'bg-[#0a0a0a]'} hover:bg-[#101010] transition-colors`}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-white border-b border-white/[0.04]">{row.capability}</td>
                      <td className="px-6 py-4 text-sm text-white/50 border-b border-white/[0.04]">
                        <span className="flex items-start gap-2">
                          <X size={14} className="flex-shrink-0 mt-0.5 text-red-400/60" />
                          {row.chatbot}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-white/70 border-b border-white/[0.04]">
                        <span className="flex items-start gap-2">
                          <Check size={14} className="flex-shrink-0 mt-0.5 text-emerald-400" />
                          {row.agent}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="sm:hidden space-y-3">
              {comparisonRows.map((row) => (
                <div key={row.capability} className="rounded-xl border border-white/[0.08] bg-[#0d0d0d] p-4">
                  <div className="text-sm font-semibold text-white mb-3">{row.capability}</div>
                  <div className="flex items-start gap-2 mb-2">
                    <X size={13} className="flex-shrink-0 mt-0.5 text-red-400/60" />
                    <span className="text-xs text-white/50">{row.chatbot}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check size={13} className="flex-shrink-0 mt-0.5 text-emerald-400" />
                    <span className="text-xs text-white/70">{row.agent}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ HOW DO AI AGENTS WORK ═══════════════════════ */}
        <section id="how-it-works" className="border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
            <div className="text-xs uppercase tracking-[0.2em] text-[#52525b] mb-4">Architecture</div>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-5">
              How Do AI Agents{' '}
              <span className="gradient-text">Work?</span>
            </h2>
            <p className="text-base sm:text-lg text-white/[0.55] leading-relaxed max-w-3xl mb-14">
              At a technical level, an autonomous AI agent combines four elements: a reasoning engine
              (usually an LLM), memory, access to tools, and a feedback loop that lets it evaluate whether
              a task was completed successfully.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
              {coreComponents.map((c) => {
                const Icon = c.icon
                return (
                  <div key={c.title} className="bg-[#0d0d0d] p-8 sm:p-10 hover:bg-[#101010] transition-colors duration-300">
                    <Icon size={22} className="text-purple-400 mb-5" />
                    <h3 className="font-heading font-bold text-xl text-white mb-3">{c.title}</h3>
                    <p className="text-[15px] text-white/[0.55] leading-relaxed">{c.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ RAG vs FINE-TUNING ═══════════════════════ */}
        <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
          <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-5">
              RAG vs. Fine-Tuning:{' '}
              <span className="gradient-text">Which Approach Fits Your Data?</span>
            </h2>
            <p className="text-base sm:text-lg text-white/[0.55] leading-relaxed max-w-3xl mb-10">
              Two approaches are commonly used to ground an agent in your business knowledge:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* RAG Card */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d0d] overflow-hidden group hover:border-purple-400/20 transition-all duration-300">
                <div className="h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="p-8">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-400/20 flex items-center justify-center mb-5">
                    <Search size={20} className="text-purple-400" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-3">Retrieval-Augmented Generation (RAG)</h3>
                  <p className="text-[15px] text-white/[0.55] leading-relaxed">
                    Connects the agent to your existing documents and databases in real time, so it always
                    references current information without retraining the underlying model. Typically faster
                    to deploy and easier to keep up to date.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {['Real-time data', 'No retraining', 'Fast deployment'].map((t) => (
                      <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-purple-400/20 bg-purple-500/[0.06] text-purple-300">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Fine-tuning Card */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d0d] overflow-hidden group hover:border-blue-400/20 transition-all duration-300">
                <div className="h-[2px] bg-gradient-to-r from-blue-500 to-cyan-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="p-8">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-5">
                    <Cog size={20} className="text-blue-400" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-3">LLM Fine-Tuning</h3>
                  <p className="text-[15px] text-white/[0.55] leading-relaxed">
                    Adjusts the underlying model&apos;s behavior using your historical data, which suits cases where the agent
                    needs a very specific tone, format, or domain-specific reasoning pattern.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {['Custom behavior', 'Domain reasoning', 'High consistency'].map((t) => (
                      <span key={t} className="text-xs px-3 py-1.5 rounded-full border border-blue-400/20 bg-blue-500/[0.06] text-blue-300">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-white/[0.45] mt-8 max-w-3xl leading-relaxed">
              Most enterprise deployments use RAG for factual grounding and reserve fine-tuning for narrower,
              high-volume tasks where consistency matters more than freshness.
            </p>
          </div>
        </section>

        {/* ═══════════════════════ TYPES OF AGENTS ═══════════════════════ */}
        <section className="border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
            <div className="text-xs uppercase tracking-[0.2em] text-[#52525b] mb-4">Agent Categories</div>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-14">
              Types of{' '}
              <span className="gradient-text">Custom AI Agents</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
              {agentTypes.map((t) => {
                const Icon = t.icon
                return (
                  <div key={t.title} className="bg-[#0d0d0d] p-8 hover:bg-[#101010] transition-colors duration-300">
                    <Icon size={20} className="text-purple-400 mb-5" />
                    <h3 className="font-heading font-bold text-lg text-white mb-2">{t.title}</h3>
                    <p className="text-[15px] text-white/[0.55] leading-relaxed">{t.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ KEY BENEFITS ═══════════════════════ */}
        <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-6 py-20 sm:py-28">
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-12">
              Key Benefits for{' '}
              <span className="gradient-text">Enterprises</span>
            </h2>

            <div className="space-y-4">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-[#0d0d0d] p-5 hover:border-white/[0.12] transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center mt-0.5">
                    <Check size={16} className="text-emerald-400" />
                  </div>
                  <p className="text-[15px] text-white/70 leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ DEVELOPMENT PROCESS ═══════════════════════ */}
        <section className="border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-14">
              How we <span className="gradient-text">build it</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {devProcess.map((p) => (
                <div key={p.step} className="group">
                  <div className="font-heading font-bold text-5xl text-white/[0.06] mb-4 group-hover:text-[#c084fc]/25 transition-colors duration-300">
                    {p.step}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-white/[0.55] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ INTEGRATION ═══════════════════════ */}
        <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
          <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-5">
              Integrating AI Agents with{' '}
              <span className="gradient-text">Existing Systems</span>
            </h2>
            <p className="text-base sm:text-lg text-white/[0.55] leading-relaxed max-w-3xl mb-12">
              A custom agent is only as useful as the systems it can reach. Integration typically involves
              connecting the agent to:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {integrations.map((item) => (
                <div key={item.label} className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-[#0d0d0d] p-5 hover:border-white/[0.12] transition-colors">
                  <Zap size={18} className="flex-shrink-0 text-purple-400 mt-0.5" />
                  <div>
                    <div className="font-heading font-semibold text-white text-[15px] mb-1">{item.label}</div>
                    <div className="text-sm text-white/[0.45]">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-white/[0.45] mt-8 max-w-3xl leading-relaxed italic">
              Integration complexity is one of the biggest variables in both development timeline and cost, so
              it&apos;s worth assessing early rather than after the agent is built.
            </p>
          </div>
        </section>

        {/* ═══════════════════════ GOVERNANCE & SECURITY ═══════════════════════ */}
        <section className="border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
            <div className="text-xs uppercase tracking-[0.2em] text-[#52525b] mb-4">Enterprise-grade</div>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-5">
              Governance, Security &{' '}
              <span className="gradient-text">Guardrails</span>
            </h2>
            <p className="text-base sm:text-lg text-white/[0.55] leading-relaxed max-w-3xl mb-14">
              For regulated industries especially, governance isn&apos;t optional. Enterprise AI agent deployments should include:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
              {governance.map((g) => {
                const Icon = g.icon
                return (
                  <div key={g.title} className="bg-[#0d0d0d] p-8 sm:p-10 hover:bg-[#101010] transition-colors duration-300">
                    <Icon size={22} className="text-amber-400 mb-5" />
                    <h3 className="font-heading font-bold text-xl text-white mb-3">{g.title}</h3>
                    <p className="text-[15px] text-white/[0.55] leading-relaxed">{g.desc}</p>
                  </div>
                )
              })}
            </div>

            <p className="text-sm text-white/[0.45] mt-8 max-w-3xl leading-relaxed">
              This is an area where responsible AI practices directly affect whether a regulated business (finance, healthcare)
              can actually deploy an agent in production.
            </p>
          </div>
        </section>

        {/* ═══════════════════════ USE CASES BY INDUSTRY ═══════════════════════ */}
        <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
            <div className="text-xs uppercase tracking-[0.2em] text-[#52525b] mb-4">Industry Solutions</div>
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-14">
              Use Cases by{' '}
              <span className="gradient-text">Industry</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((ind) => {
                const Icon = ind.icon
                return (
                  <div
                    key={ind.title}
                    className="rounded-2xl border border-white/[0.08] bg-[#0d0d0d] p-7 hover:border-white/[0.15] transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:border-purple-400/20 group-hover:bg-purple-500/[0.06] transition-all duration-300">
                      <Icon size={20} className="text-white/60 group-hover:text-purple-400 transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white mb-4">{ind.title}</h3>
                    <ul className="space-y-2">
                      {ind.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-white/[0.55]">
                          <Check size={13} className="flex-shrink-0 mt-0.5 text-emerald-400/70" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════ COST ═══════════════════════ */}
        <section className="border-t border-white/[0.06]">
          <div className="max-w-4xl mx-auto px-6 py-20 sm:py-28">
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-5">
              How Much Does It{' '}
              <span className="gradient-text">Cost?</span>
            </h2>
            <p className="text-base sm:text-lg text-white/[0.55] leading-relaxed max-w-3xl mb-10">
              Custom AI agent development cost varies significantly based on a few concrete factors rather than a flat rate:
            </p>

            <div className="space-y-3">
              {costFactors.map((f, i) => (
                <div key={i} className="flex items-start gap-4 rounded-xl border border-white/[0.06] bg-[#0d0d0d] p-5 hover:border-white/[0.12] transition-colors">
                  <div className="flex-shrink-0 font-heading font-bold text-lg text-white/[0.12]">0{i + 1}</div>
                  <p className="text-[15px] text-white/[0.6] leading-relaxed">{f}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-amber-400/20 bg-amber-500/[0.04] p-5">
              <p className="text-sm text-amber-200/70 leading-relaxed">
                <strong className="text-amber-200/90">Note:</strong> Specific price ranges depend on vendor, region, and project scope —
                request a scoped estimate based on your actual use case rather than relying on general figures.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════ FAQ ═══════════════════════ */}
        <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
          <div className="max-w-3xl mx-auto px-6 py-20 sm:py-28">
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-12 text-center">
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </h2>
            <ProductFAQ faqs={faqs} />
          </div>
        </section>

        {/* ═══════════════════════ BOTTOM CTA ═══════════════════════ */}
        <section className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
          <div className="relative rounded-[2rem] border border-white/[0.08] bg-[#0d0d0d] overflow-hidden px-8 py-16 sm:py-24 text-center">
            <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[32vh] bg-[#c084fc]/[0.13] rounded-full blur-[140px] pointer-events-none" />
            <h2 className="relative font-heading font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight mb-6">
              Ready to build your{' '}
              <span className="gradient-text">AI agent?</span>
            </h2>
            <p className="relative text-white/[0.6] max-w-lg mx-auto mb-9">
              From discovery to deployment. From a single workflow agent to a multi-agent system. Let&apos;s
              scope your project and build something autonomous.
            </p>
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold text-[15px] hover:bg-white/90 transition-colors shadow-[0_0_50px_rgba(192,132,252,0.2)]"
              >
                Get a Scoped Estimate
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/agentic-ai"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/[0.12] text-white font-semibold text-[15px] hover:bg-white/[0.05] transition-all duration-200"
              >
                Explore AI Agents
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
