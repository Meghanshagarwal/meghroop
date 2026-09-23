import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  Database,
  Search,
  Workflow,
  Bot,
  Layers,
  HardDrive,
  Globe,
  Zap,
  Server,
  Brain,
  Factory,
  Landmark,
  HeartPulse,
  GraduationCap,
  Shield,
  Check,
  TrendingDown,
  Clock,
  Scale,
  MonitorCog,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import ProductFAQ from '@/components/sections/ProductFAQ'

export const metadata: Metadata = {
  title: 'AI Operating System | Unified AI Data Platform',
  description:
    'One AI operating system for storage, vector search, and data pipelines — built for GPU-scale AI workloads. Request a demo to see it in action.',
  alternates: { canonical: '/product/ai-operating-system' },
  openGraph: {
    title: 'AI Operating System | Unified AI Data Platform | MeghRoop',
    description:
      'One AI operating system for storage, vector search, and data pipelines — built for GPU-scale AI workloads. Request a demo to see it in action.',
  },
}

/* ── Data ── */

const workflowSteps = [
  {
    step: '01',
    title: 'Ingest',
    desc: 'Structured and unstructured data flows into the platform from applications, sensors, logs, and existing data sources.',
    icon: Database,
  },
  {
    step: '02',
    title: 'Store',
    desc: 'Data is stored in a unified foundation across block, file, and object formats at scale — no separate systems per data type.',
    icon: HardDrive,
  },
  {
    step: '03',
    title: 'Transform',
    desc: 'Unstructured data is converted into embeddings and made searchable, while pipelines automate ongoing data preparation.',
    icon: Workflow,
  },
  {
    step: '04',
    title: 'Search & Retrieve',
    desc: 'Applications and AI models query data directly using vector similarity search or real-time analytical queries.',
    icon: Search,
  },
  {
    step: '05',
    title: 'Orchestrate',
    desc: 'AI agents and automated workflows act on the data in place — reading, updating, and triggering downstream processes without moving data between tools.',
    icon: Bot,
  },
]

const features = [
  {
    icon: HardDrive,
    title: 'Unified Storage Foundation',
    desc: 'A single storage layer for block, file, and object data at exabyte scale — no more separate systems for different data types.',
  },
  {
    icon: Search,
    title: 'Vector Search Database',
    desc: 'Built-in similarity search over embeddings for AI applications — from recommendation engines to retrieval-augmented generation — without a standalone vector database.',
  },
  {
    icon: Workflow,
    title: 'AI Data Pipeline Automation',
    desc: 'Automates data movement and transformation from raw ingestion to AI-ready output, reducing need for separately managed pipeline tooling.',
  },
  {
    icon: Bot,
    title: 'AI Agent Orchestration',
    desc: 'Supports agentic AI workflows by letting agents read, write, and act on data directly within the platform rather than through external integrations.',
  },
  {
    icon: Layers,
    title: 'Structured & Unstructured Data',
    desc: 'Handles both structured (tabular, transactional) and unstructured (documents, images, logs) data within the same platform.',
  },
  {
    icon: Server,
    title: 'Disaggregated, Scalable Architecture',
    desc: 'Storage and compute scale independently, supporting GPU-heavy AI training and inference without traditional storage bottlenecks.',
  },
  {
    icon: Globe,
    title: 'Global Namespace Access',
    desc: 'Consistent, unified data access across sites and environments — supporting edge-to-cloud AI deployments without data duplication.',
  },
  {
    icon: Zap,
    title: 'Real-Time Analytics',
    desc: 'Fast, real-time querying over live data for AI applications that need up-to-date information rather than batch-delayed results.',
  },
]

const useCases = [
  {
    title: 'Consolidating Fragmented AI Infrastructure',
    problem: 'Teams run separate storage, vector database, and pipeline tools — each requiring its own integration and maintenance.',
    solution: 'A single platform handles storage, search, and pipelines together, reducing systems that need to be built, secured, and maintained.',
    value: 'Less operational overhead and fewer integration points.',
  },
  {
    title: 'Preparing Data for AI Training & Inference',
    problem: 'Raw structured and unstructured data isn\'t AI-ready without significant preprocessing.',
    solution: 'Built-in pipeline automation and embedding generation make data usable by AI models without a separate preparation stage.',
    value: 'Faster path from raw data to usable AI datasets.',
  },
  {
    title: 'Supporting GPU-Scale AI Workloads',
    problem: 'Traditional storage architectures bottleneck GPU compute during large-scale AI training.',
    solution: 'Disaggregated architecture designed for GPU storage infrastructure keeps compute fed without legacy storage limits.',
    value: 'Better utilization of GPU compute investment.',
  },
  {
    title: 'Deploying Agentic AI Workflows',
    problem: 'AI agents need direct, low-latency access to live data to act autonomously.',
    solution: 'Agent orchestration is built in — agents read, write, and trigger actions on data without external integration layers.',
    value: 'Lower-latency foundation for agentic AI applications.',
  },
  {
    title: 'AI Across Distributed or Regulated Environments',
    problem: 'Organizations with multiple sites or in regulated industries need consistent data access without duplicating infrastructure.',
    solution: 'Global namespace provides unified data visibility from edge to cloud, supporting sovereign or distributed deployments.',
    value: 'Consistent AI data access without per-location infrastructure.',
  },
]

const industries = [
  {
    icon: MonitorCog,
    name: 'Technology & Software',
    desc: 'Building and scaling AI-native applications with unified data infrastructure.',
  },
  {
    icon: Landmark,
    name: 'Financial Services',
    desc: 'Real-time analytics and data governance for AI-driven decisioning.',
  },
  {
    icon: HeartPulse,
    name: 'Healthcare & Life Sciences',
    desc: 'Managing large volumes of unstructured clinical and research data.',
  },
  {
    icon: Shield,
    name: 'Government & Public Sector',
    desc: 'Sovereign, regulated AI infrastructure deployments.',
  },
  {
    icon: GraduationCap,
    name: 'Research & Higher Education',
    desc: 'Supporting large-scale AI training workloads.',
  },
]

const benefits = [
  {
    icon: Layers,
    title: 'Reduce Infrastructure Complexity',
    desc: 'Operate storage, vector search, and pipelines through one platform instead of several disconnected tools.',
  },
  {
    icon: Clock,
    title: 'Save Engineering Time',
    desc: 'Eliminate hours spent integrating and maintaining separate storage, database, and pipeline systems.',
  },
  {
    icon: Brain,
    title: 'Improve AI Data Readiness',
    desc: 'Automate the transformation of raw data into AI-usable formats without manual preprocessing stages.',
  },
  {
    icon: Scale,
    title: 'Scale Storage & Compute Independently',
    desc: 'Match GPU-driven AI workload demands without one constraining the other.',
  },
  {
    icon: Zap,
    title: 'Support Real-Time AI Applications',
    desc: 'Fast query performance over live data for applications that can\'t wait for batch processing.',
  },
  {
    icon: TrendingDown,
    title: 'Lower Total Cost of Ownership',
    desc: 'Consolidate infrastructure that would otherwise require multiple licensed tools and integration efforts.',
  },
]

const faqs = [
  {
    q: 'What is an AI operating system?',
    a: 'An AI operating system is a unified platform that combines storage, data pipelines, vector search, and AI agent orchestration into one system, replacing the need to integrate multiple separate tools to support AI workloads.',
  },
  {
    q: 'How is an AI operating system different from a traditional data lake?',
    a: 'A traditional data lake primarily stores raw data for later processing. An AI operating system goes further — it also handles vector search, pipeline automation, and agent orchestration, making data AI-ready within the same platform rather than requiring separate downstream tools.',
  },
  {
    q: 'Does an AI operating system replace my existing storage?',
    a: 'It\'s designed to serve as a unified storage and data foundation for AI workloads, consolidating functions that would otherwise run across separate storage, database, and pipeline systems. Specific migration and coexistence details depend on your current environment.',
  },
  {
    q: 'What kind of data can an AI operating system handle?',
    a: 'It supports both structured data (such as tabular or transactional records) and unstructured data (such as documents, images, and logs) within the same platform.',
  },
  {
    q: 'How does an AI operating system support AI agents?',
    a: 'It provides built-in AI agent orchestration, allowing agents to read, write, and act on data directly within the platform rather than through external integrations, supporting agentic AI workflows with more direct data access.',
  },
  {
    q: 'Why does GPU storage infrastructure matter for AI workloads?',
    a: 'GPU compute is only as effective as the data feeding it. Storage architectures that can\'t keep pace with GPU throughput create bottlenecks during AI training and inference — a disaggregated, scalable storage architecture is designed to avoid that limitation.',
  },
  {
    q: 'Can an AI operating system help reduce AI infrastructure costs?',
    a: 'Consolidating storage, vector search, and pipeline functions into a single platform can reduce the licensing, integration, and operational overhead of running multiple separate systems — contributing to a lower total cost of ownership.',
  },
  {
    q: 'Is an AI operating system suitable for regulated or sovereign environments?',
    a: 'Global namespace access and unified data management support deployments across distributed or regulated environments, which is relevant for organizations with sovereign AI infrastructure requirements. Specific compliance capabilities should be confirmed against your regulatory requirements.',
  },
]

export default function AIOperatingSystemPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-28 sm:pt-32">
        {/* ── Hero ── */}
        <section className="grid-bg relative overflow-hidden">
          <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[80vw] h-[45vh] bg-[#a78bfa]/[0.08] rounded-full blur-[170px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-6 pt-6 pb-16 sm:pb-24 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[13px] text-white/70 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
              AI Operating System • Product
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl text-white leading-[1.04] tracking-tight mb-7">
              AI Operating System:{' '}
              <span className="gradient-text">One Platform for AI Storage, Data Pipelines & Vector Search</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/[0.62] max-w-3xl mx-auto leading-relaxed mb-5">
              Run every stage of your AI workload — storage, data pipelines, vector search, and agent orchestration — on a single, <strong className="text-white">unified AI operating system</strong> instead of stitching together separate tools.
            </p>
            <p className="text-base text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
              Built for teams managing structured and unstructured data at GPU scale. Replace fragmented infrastructure with one coherent data foundation for AI.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all text-[15px]"
              >
                Request a Demo
                <ArrowRight size={16} />
              </Link>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass text-white/80 hover:text-white hover:bg-white/[0.08] transition-all text-[15px]"
              >
                How It Works
              </a>
            </div>
          </div>
        </section>

        {/* ── What Is an AI Operating System? ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3">
                <span className="text-[13px] uppercase tracking-wider text-[#a78bfa] font-mono font-medium block mb-3">
                  Definition
                </span>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-6">
                  What Is an AI Operating System?
                </h2>
                <p className="text-white/60 leading-relaxed mb-5 text-[16px]">
                  An <strong className="text-white/80">AI operating system</strong> is a unified infrastructure platform that combines storage, data pipelines, vector search, and AI agent orchestration into a single system — instead of requiring separate tools for each function.
                </p>
                <p className="text-white/60 leading-relaxed text-[16px]">
                  Rather than connecting a storage layer, a vector database, a message bus, and a pipeline tool independently, teams manage one platform that handles data from ingestion through to AI-ready output, at scale.
                </p>
              </div>

              <div className="lg:col-span-2 bg-[#0d0d0d] border border-white/[0.08] rounded-2xl p-7">
                <h3 className="font-heading font-semibold text-lg text-white mb-5 flex items-center gap-3">
                  <Database size={18} className="text-[#a78bfa]" />
                  What It Replaces:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Separate object storage systems',
                    'Standalone vector databases',
                    'Independent message bus / streaming',
                    'External pipeline orchestration tools',
                    'Manual data prep & transformation',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/70 text-[14px]">
                      <span className="w-5 h-5 rounded-full bg-[#a78bfa]/10 text-[#a78bfa] flex items-center justify-center text-[11px] font-bold mt-0.5 shrink-0">
                        ✕
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-5 border-t border-white/[0.06]">
                  <p className="text-[13px] text-[#a78bfa] font-medium flex items-center gap-2">
                    <Check size={14} />
                    Replaced by one unified AI operating system
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Product Overview ── */}
        <section className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[13px] uppercase tracking-wider text-[#a78bfa] font-mono font-medium block mb-3">
                Overview
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-6">
                Why a Unified AI Data Platform?
              </h2>
            </div>

            <div className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-8 sm:p-10">
              <p className="text-white/60 leading-relaxed text-[16px] mb-5">
                Modern AI workloads generate and depend on enormous volumes of structured and unstructured data — and most organizations manage that data across a patchwork of disconnected systems: object storage here, a vector database there, a separate message bus for streaming, and yet another tool for pipeline orchestration. Each additional system adds integration overhead, latency, and operational cost.
              </p>
              <p className="text-white/60 leading-relaxed text-[16px] mb-6">
                An AI operating system removes that fragmentation. It provides a single data foundation that stores data at scale, transforms unstructured content into AI-ready embeddings, supports real-time and similarity search, and lets AI agents and pipelines operate directly on that data — without moving it between systems.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 pt-8 border-t border-white/[0.06]">
                <div className="bg-white/[0.02] rounded-xl p-5">
                  <h3 className="font-heading font-semibold text-white text-[15px] mb-2">Who it&apos;s for</h3>
                  <p className="text-white/50 text-[14px] leading-relaxed">
                    Data architects, platform engineering teams, and technical leaders responsible for supporting AI training, inference, and agentic workloads at scale — particularly in organizations running GPU compute clusters.
                  </p>
                </div>
                <div className="bg-white/[0.02] rounded-xl p-5">
                  <h3 className="font-heading font-semibold text-white text-[15px] mb-2">Core value proposition</h3>
                  <p className="text-white/50 text-[14px] leading-relaxed">
                    Consolidate the storage, database, and pipeline layers AI workloads depend on into one platform — reducing integration complexity and the operational cost of running AI infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Key Features ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#a78bfa] font-mono font-medium block mb-3">
                Capabilities
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                Key Features
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Eight core capabilities that make a unified AI operating system functionally different from assembling separate tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {features.map((f, i) => {
                const IconComponent = f.icon
                return (
                  <div
                    key={i}
                    className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-7 hover:border-white/20 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#a78bfa]/[0.08] text-[#a78bfa] flex items-center justify-center mb-5">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="font-heading font-bold text-[16px] text-white mb-2">{f.title}</h3>
                    <p className="text-white/50 text-[13px] leading-relaxed">{f.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section id="how-it-works" className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#a78bfa] font-mono font-medium block mb-3">
                Architecture
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                How Does an AI Operating System Work?
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Five stages from raw data ingestion to autonomous AI agent action — all within one platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {workflowSteps.map((s) => {
                const IconComponent = s.icon
                return (
                  <div
                    key={s.step}
                    className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-6 hover:border-white/20 transition-all relative"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-2xl font-bold text-[#a78bfa]">{s.step}</span>
                      <div className="p-2.5 rounded-xl bg-white/[0.03] text-white/70">
                        <IconComponent size={18} />
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white mb-2">{s.title}</h3>
                    <p className="text-white/50 text-[13px] leading-relaxed">{s.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Use Cases ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#a78bfa] font-mono font-medium block mb-3">
                Applications
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                Use Cases
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Real infrastructure problems that a unified AI operating system is built to solve.
              </p>
            </div>

            <div className="space-y-5">
              {useCases.map((uc, i) => (
                <div
                  key={i}
                  className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-8 sm:p-10 hover:border-white/20 transition-all"
                >
                  <div className="flex items-start gap-5">
                    <span className="font-mono text-xl font-bold text-[#a78bfa] mt-1 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-white mb-4">{uc.title}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white/[0.02] rounded-xl p-4">
                          <span className="text-[11px] uppercase tracking-wider text-white/40 font-mono block mb-2">Problem</span>
                          <p className="text-white/60 text-[14px] leading-relaxed">{uc.problem}</p>
                        </div>
                        <div className="bg-white/[0.02] rounded-xl p-4">
                          <span className="text-[11px] uppercase tracking-wider text-[#a78bfa] font-mono block mb-2">Solution</span>
                          <p className="text-white/60 text-[14px] leading-relaxed">{uc.solution}</p>
                        </div>
                        <div className="bg-white/[0.02] rounded-xl p-4">
                          <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-mono block mb-2">Value</span>
                          <p className="text-white/60 text-[14px] leading-relaxed">{uc.value}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Industries ── */}
        <section className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#a78bfa] font-mono font-medium block mb-3">
                Verticals
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                Industries & Business Applications
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {industries.map((ind, i) => {
                const IconComponent = ind.icon
                return (
                  <div
                    key={i}
                    className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-6 hover:border-white/20 transition-all text-center"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#a78bfa]/10 text-[#a78bfa] flex items-center justify-center mx-auto mb-4">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="font-heading font-bold text-[15px] text-white mb-2">{ind.name}</h3>
                    <p className="text-white/50 text-[13px] leading-relaxed">{ind.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#a78bfa] font-mono font-medium block mb-3">
                Impact
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                Benefits
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => {
                const IconComponent = b.icon
                return (
                  <div
                    key={i}
                    className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-8 hover:border-white/20 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#a78bfa]/[0.08] text-[#a78bfa] flex items-center justify-center mb-6">
                      <IconComponent size={22} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white mb-3">{b.title}</h3>
                    <p className="text-white/50 text-[14px] leading-relaxed">{b.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Why Choose ── */}
        <section className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[13px] uppercase tracking-wider text-[#a78bfa] font-mono font-medium block mb-3">
                  Why Us
                </span>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-6">
                  Why Choose This AI Operating System?
                </h2>
                <p className="text-white/60 leading-relaxed mb-5 text-[16px]">
                  Most AI infrastructure today is assembled from separate best-of-breed tools — a storage system, a vector database, a message bus, a pipeline orchestrator — each purchased, integrated, and maintained independently. That approach works, but it adds complexity at every layer.
                </p>
                <p className="text-white/60 leading-relaxed text-[16px]">
                  An AI operating system takes a different approach: it treats storage, data pipelines, vector search, and agent orchestration as parts of one system rather than separate products. For teams running AI workloads at scale — particularly GPU-intensive training and inference — that consolidation means less integration work, fewer points of failure, and a more direct path from raw data to AI-ready output.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#a78bfa]/[0.06] to-transparent border border-[#a78bfa]/20 rounded-2xl p-8 sm:p-10">
                <h3 className="font-heading font-bold text-xl text-white mb-6">The Consolidation Advantage</h3>
                <ul className="space-y-4">
                  {[
                    'One platform instead of 4–5 separate tools',
                    'Zero inter-system data movement for AI workloads',
                    'Single operational surface to secure & maintain',
                    'Storage designed to feed GPU compute at scale',
                    'Built-in agent orchestration — not bolted on',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80 text-[15px]">
                      <Check size={16} className="text-[#a78bfa] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[13px] uppercase tracking-wider text-[#a78bfa] font-mono font-medium block mb-3">
                Questions
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <ProductFAQ faqs={faqs} />
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="border-t border-white/[0.06] py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[30vh] bg-[#a78bfa]/[0.06] rounded-full blur-[160px] pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-6">
              Ready to Unify Your AI Infrastructure?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              See how a single AI operating system replaces fragmented storage, pipelines, and vector search — and fits your current infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all text-[16px]"
              >
                Request a Demo
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-xl glass text-white/80 hover:text-white hover:bg-white/[0.08] transition-all text-[15px]"
              >
                Talk to an Expert
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
