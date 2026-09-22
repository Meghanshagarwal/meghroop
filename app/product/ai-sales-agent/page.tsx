import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  PhoneCall,
  Users,
  CalendarCheck,
  Target,
  Globe,
  Database,
  TrendingUp,
  Zap,
  Bot,
  Check,
  X,
  Building2,
  ShoppingCart,
  MessageSquare,
  BarChart3,
  ShieldCheck,
  Clock,
  RefreshCcw,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import ProductFAQ from '@/components/sections/ProductFAQ'

export const metadata: Metadata = {
  title: 'AI Sales Agent | Qualify Leads & Book Meetings 24/7',
  description:
    'An AI sales agent calls, qualifies, and follows up with every lead automatically — 24/7, in multiple languages, synced to your CRM. See how it works and what it costs.',
  alternates: { canonical: '/product/ai-sales-agent' },
  openGraph: {
    title: 'AI Sales Agent | Qualify Leads & Book Meetings 24/7 | MeghRoop',
    description:
      'An AI sales agent calls, qualifies, and follows up with every lead automatically — 24/7, in multiple languages, synced to your CRM. See how it works and what it costs.',
  },
}

/* ── Data ── */

const workflowSteps = [
  {
    step: '01',
    title: 'Lead enters the system',
    desc: 'A form submission, abandoned cart, inbound call, or uploaded list. The agent is triggered instantly or on your schedule.',
    icon: Target,
  },
  {
    step: '02',
    title: 'Agent opens the conversation',
    desc: 'By phone, chat, or message — using your positioning, your tone, and your product details. Not a generic template.',
    icon: MessageSquare,
  },
  {
    step: '03',
    title: 'Qualifies against your criteria',
    desc: 'Budget, timeline, use case, company size, decision authority — captured as structured fields, not just a transcript.',
    icon: Target,
  },
  {
    step: '04',
    title: 'Handles objections & questions',
    desc: 'Pricing, features, comparisons. Anything outside its knowledge is flagged rather than guessed at.',
    icon: MessageSquare,
  },
  {
    step: '05',
    title: 'Takes the next action',
    desc: 'Books a slot on the right rep\'s calendar, routes a hot lead for immediate callback, or schedules follow-up.',
    icon: CalendarCheck,
  },
  {
    step: '06',
    title: 'Syncs everything to CRM',
    desc: 'Transcript, recording, qualification answers, lead score, and next step — written to the record automatically.',
    icon: Database,
  },
  {
    step: '07',
    title: 'Follows up persistently',
    desc: 'On schedule, across channels, until the lead responds or the sequence ends. No dropped follow-ups.',
    icon: RefreshCcw,
  },
]

const capabilities = [
  {
    icon: Target,
    title: 'Automated Lead Qualification & Scoring',
    desc: 'Asks your qualification questions on every single lead — not just the ones a rep got to. Scores each lead, prioritises the queue, and routes best-fit prospects first.',
  },
  {
    icon: PhoneCall,
    title: 'AI Cold Calling & Outbound Follow-Up',
    desc: 'Runs outbound calling campaigns at a volume no human team can match. Handles the high-rejection top of the funnel, then hands warm conversations to your reps.',
  },
  {
    icon: CalendarCheck,
    title: 'AI Appointment Scheduling',
    desc: 'Checks live calendar availability, offers slots, confirms the booking, sends invites, and reduces no-shows through automated confirmation calls.',
  },
  {
    icon: RefreshCcw,
    title: 'Lead Nurturing & Re-Engagement',
    desc: 'Re-engages dormant CRM records systematically — checking whether circumstances changed, updating stale data, and surfacing anyone now worth a rep\'s time.',
  },
  {
    icon: Globe,
    title: 'Multilingual Conversations',
    desc: 'Sells into markets where you don\'t have native-speaking staff. The same agent can switch language based on the lead\'s region or preference.',
  },
  {
    icon: BarChart3,
    title: 'Pipeline Analytics & Reporting',
    desc: 'Connect rate, qualification rate, meetings booked, cost per booked meeting — all tracked and visible without listening to recordings manually.',
  },
]

const comparisonTable = [
  {
    capability: 'Availability',
    ai: '24/7, including weekends and holidays',
    human: 'Working hours, one time zone',
  },
  {
    capability: 'Concurrent conversations',
    ai: 'Unlimited parallel calls',
    human: 'One at a time',
  },
  {
    capability: 'Response time to new lead',
    ai: 'Seconds',
    human: 'Minutes to days',
  },
  {
    capability: 'Follow-up consistency',
    ai: 'Every scheduled touch, every time',
    human: 'Varies with workload',
  },
  {
    capability: 'Complex negotiation',
    ai: 'Limited',
    human: 'Strong',
  },
  {
    capability: 'Building long-term relationships',
    ai: 'Limited',
    human: 'Strong',
  },
  {
    capability: 'Cost structure',
    ai: 'Predictable software cost',
    human: 'Salary, commission, tooling, ramp',
  },
  {
    capability: 'Ramp-up time',
    ai: 'Configuration, then live',
    human: 'Weeks to months',
  },
]

const chatbotVsSdrVsAgent = [
  {
    feature: 'Main job',
    chatbot: 'Answer FAQs',
    sdr: 'Generate & qualify outbound pipeline',
    agent: 'Handle full sales conversations, inbound & outbound',
  },
  {
    feature: 'Channels',
    chatbot: 'Website chat',
    sdr: 'Email, sometimes calls',
    agent: 'Voice, chat, SMS, email',
  },
  {
    feature: 'Conversation style',
    chatbot: 'Rule-based, scripted',
    sdr: 'Templated sequences',
    agent: 'Open-ended and adaptive',
  },
  {
    feature: 'Books meetings',
    chatbot: 'Rarely',
    sdr: 'Yes',
    agent: 'Yes',
  },
  {
    feature: 'Best for',
    chatbot: 'Support deflection',
    sdr: 'Top-of-funnel outbound',
    agent: 'End-to-end lead handling',
  },
]

const audiences = [
  {
    icon: Users,
    title: 'Small Businesses & Lean Sales Teams',
    desc: 'If one or two people handle both selling and delivery, leads go cold while you\'re doing the work. An AI sales agent gives you coverage without a second hire.',
  },
  {
    icon: TrendingUp,
    title: 'High-Volume Inbound Lead Flow',
    desc: 'When marketing generates more leads than the team can call the same day, the agent handles first contact on all of them and passes through only what\'s worth a rep\'s time.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce & Online Stores',
    desc: 'Pre-purchase questions, abandoned carts, and order-status enquiries at all hours. The agent answers, recovers carts, and flags high-value cases for a person.',
  },
  {
    icon: Building2,
    title: 'Outbound & SDR Teams',
    desc: 'The agent absorbs the dialling and the first-touch conversation. Your SDRs step in once there\'s genuine interest, changing what a day of SDR work looks like.',
  },
]

const evaluationChecklist = [
  'Conversation quality — listen to real recordings, not a scripted demo',
  'Latency — on voice, delays over ~1 second feel wrong and people hang up',
  'Interruption handling — can a caller cut in mid-sentence and still be understood?',
  'Human handoff — how does escalation work, and how fast?',
  'CRM depth — which fields sync, and in which directions?',
  'Compliance — call-recording consent, opt-outs, and regional calling rules',
  'Data handling — where conversation data is stored and for how long',
  'Setup effort — days or weeks? Who does the configuration work?',
  'Control — can you edit the agent\'s knowledge yourself, or is every change a support ticket?',
  'Reporting — connect rate, qualification rate, meetings booked, cost per meeting',
]

const pricingModels = [
  {
    model: 'Per minute / per conversation',
    how: 'Usage-based',
    suits: 'Variable or seasonal volume',
  },
  {
    model: 'Monthly subscription',
    how: 'Flat fee, often with a usage allowance',
    suits: 'Steady, predictable volume',
  },
  {
    model: 'Per outcome',
    how: 'Charged on qualified leads or booked meetings',
    suits: 'Teams wanting cost tied to results',
  },
]

const faqs = [
  {
    q: 'What is an AI sales agent?',
    a: 'An AI sales agent is software that holds real sales conversations with prospects over voice, chat, or messaging. It qualifies leads, answers product questions, books meetings, and follows up automatically, then records the outcome in your CRM.',
  },
  {
    q: 'How does an AI sales agent work?',
    a: 'It connects to your lead sources and CRM, then uses conversational AI trained on your product information and qualification rules to speak with each lead. It captures structured answers, decides the next step, books meetings, and syncs everything back to your CRM.',
  },
  {
    q: 'Is an AI sales agent better than a human sales rep?',
    a: 'Neither is better — they\'re good at different things. AI agents win on availability, response speed, volume, and consistency of follow-up. Human reps win on complex negotiation, nuance, and long-term relationships. Most teams use both.',
  },
  {
    q: 'Can an AI sales agent make outbound cold calls?',
    a: 'Yes. An AI agent can run outbound calling campaigns continuously, handle the opening conversation, log every outcome, and pass interested prospects to a human rep. You must follow the calling and consent regulations in each region you dial.',
  },
  {
    q: 'Does an AI sales agent integrate with my CRM?',
    a: 'Most do, though the depth varies. Look for two-way sync that writes structured qualification fields, transcripts, and next steps back to the lead record — not just a summary note.',
  },
  {
    q: 'Can an AI sales agent book meetings on my calendar?',
    a: 'Yes. It checks live availability, offers slots during the conversation, confirms the booking, and sends invites and reminders — which avoids the scheduling back-and-forth where interest often fades.',
  },
  {
    q: 'How much does an AI sales agent cost?',
    a: 'Pricing is usually per minute, per monthly subscription, or per outcome. Compare on cost per qualified meeting rather than monthly fee, and check for setup fees, telephony charges, and overage rates.',
  },
  {
    q: 'Is an AI sales agent suitable for a small business?',
    a: 'Often especially so. Small teams lose the most revenue to slow response times and inconsistent follow-up, and an AI agent provides after-hours coverage without adding headcount.',
  },
  {
    q: 'Will leads know they\'re talking to an AI?',
    a: 'That depends on your configuration and your local law — some jurisdictions require disclosure. Disclosing it regardless is the safer choice. Prospects generally react well to a fast, useful conversation and badly to feeling misled.',
  },
  {
    q: 'What happens if the AI can\'t answer a question?',
    a: 'A well-configured agent acknowledges the limit and escalates rather than guessing — transferring to a human, scheduling a callback, or flagging the question for review.',
  },
  {
    q: 'How long does it take to set up?',
    a: 'It depends on integration complexity and how much product knowledge the agent needs. Typical setups range from a few days for simple qualification flows to a couple of weeks for fully integrated voice campaigns.',
  },
  {
    q: 'Can it handle multiple languages?',
    a: 'A multilingual AI voice agent can switch language based on the lead\'s region or preference, letting you sell into markets without native-speaking staff.',
  },
]

export default function AISalesAgentPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-28 sm:pt-32">
        {/* ── Hero ── */}
        <section className="grid-bg relative overflow-hidden">
          <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[80vw] h-[45vh] bg-[#22d3ee]/[0.08] rounded-full blur-[170px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-6 pt-6 pb-16 sm:pb-24 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[13px] text-white/70 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee]" />
              AI Sales Agent • Product
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl text-white leading-[1.04] tracking-tight mb-7">
              AI Sales Agent:{' '}
              <span className="gradient-text">Qualify Leads, Make Calls & Book Meetings Automatically</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/[0.62] max-w-3xl mx-auto leading-relaxed mb-5">
              An <strong className="text-white">AI sales agent</strong> is software that speaks with your leads the way a sales rep would — answering questions, asking qualifying questions, and booking meetings — without a person on the line. It works around the clock, handles unlimited conversations at once, and writes everything back to your CRM.
            </p>
            <p className="text-base text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
              Most sales teams don&apos;t lose deals because their pitch is weak. They lose them because nobody called back fast enough. An AI sales agent closes that gap.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all text-[15px]"
              >
                See it in Action
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

        {/* ── What Is an AI Sales Agent? ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <span className="text-[13px] uppercase tracking-wider text-[#22d3ee] font-mono font-medium block mb-3">
                  Overview
                </span>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-6">
                  What Is an AI Sales Agent?
                </h2>
                <p className="text-white/60 leading-relaxed mb-5 text-[16px]">
                  An AI sales agent is a software system that holds real sales conversations with prospects over voice, chat, or messaging — qualifying leads, answering product questions, following up, and scheduling meetings — without human involvement in each interaction.
                </p>
                <p className="text-white/60 leading-relaxed mb-5 text-[16px]">
                  Unlike a scripted chatbot that matches keywords to canned replies, a modern AI sales agent understands context. It can handle an interruption, answer a question you didn&apos;t anticipate, and pick up a conversation where it left off three days ago.
                </p>
                <p className="text-white/60 leading-relaxed text-[16px]">
                  Think of it as a <strong className="text-white/80">virtual sales agent</strong> that handles the repeatable 80% of sales conversations — the first call, the qualification questions, the fourth follow-up nobody got around to — so your human reps spend their time on the deals that need judgement.
                </p>
              </div>

              {/* Chatbot vs SDR vs AI Sales Agent */}
              <div className="bg-[#0d0d0d] border border-white/[0.08] rounded-2xl overflow-hidden">
                <div className="p-6 pb-4 border-b border-white/[0.06]">
                  <h3 className="font-heading font-semibold text-lg text-white flex items-center gap-3">
                    <Bot size={18} className="text-[#22d3ee]" />
                    AI Sales Agent vs. Chatbot vs. AI SDR
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-[13px]">
                    <thead>
                      <tr className="bg-white/[0.03]">
                        <th className="text-left px-5 py-3 font-semibold text-white/80">Feature</th>
                        <th className="text-left px-5 py-3 font-semibold text-white/50">Chatbot</th>
                        <th className="text-left px-5 py-3 font-semibold text-white/50">AI SDR</th>
                        <th className="text-left px-5 py-3 font-semibold text-[#22d3ee]">AI Sales Agent</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.06]">
                      {chatbotVsSdrVsAgent.map((row, i) => (
                        <tr key={i}>
                          <td className="px-5 py-3 font-medium text-white">{row.feature}</td>
                          <td className="px-5 py-3 text-white/40">{row.chatbot}</td>
                          <td className="px-5 py-3 text-white/50">{row.sdr}</td>
                          <td className="px-5 py-3 text-white/90 font-medium">{row.agent}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section id="how-it-works" className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#22d3ee] font-mono font-medium block mb-3">
                Architecture
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                How Does an AI Sales Agent Work?
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                From new lead to booked meeting — seven automated steps that deliver speed-to-lead in seconds instead of hours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {workflowSteps.map((s) => {
                const IconComponent = s.icon
                return (
                  <div
                    key={s.step}
                    className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-7 hover:border-white/20 transition-all"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-2xl font-bold text-[#22d3ee]">{s.step}</span>
                      <div className="p-2.5 rounded-xl bg-white/[0.03] text-white/70">
                        <IconComponent size={18} />
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white mb-2">{s.title}</h3>
                    <p className="text-white/50 text-[14px] leading-relaxed">{s.desc}</p>
                  </div>
                )
              })}

              {/* Speed-to-lead callout card */}
              <div className="bg-gradient-to-br from-[#22d3ee]/[0.06] to-transparent border border-[#22d3ee]/20 rounded-2xl p-7 flex flex-col justify-center">
                <Zap size={28} className="text-[#22d3ee] mb-4" />
                <p className="text-white font-heading font-bold text-lg mb-2">The practical effect</p>
                <p className="text-white/60 text-[14px] leading-relaxed">
                  Speed-to-lead measured in <strong className="text-white">seconds instead of hours</strong>, and follow-up that doesn&apos;t quietly stop after attempt two.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What Can It Do ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#22d3ee] font-mono font-medium block mb-3">
                Capabilities
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                What Can an AI Sales Agent Actually Do?
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Every capability maps to a real outcome your sales team cares about — not feature theatre.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, i) => {
                const IconComponent = cap.icon
                return (
                  <div
                    key={i}
                    className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-8 hover:border-white/20 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#22d3ee]/[0.08] text-[#22d3ee] flex items-center justify-center mb-6">
                      <IconComponent size={22} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white mb-3">{cap.title}</h3>
                    <p className="text-white/50 text-[14px] leading-relaxed">{cap.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── AI vs Human Comparison ── */}
        <section className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#22d3ee] font-mono font-medium block mb-3">
                Comparison
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                AI Sales Agent vs. Human Sales Rep
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                An AI sales agent isn&apos;t a replacement for a skilled closer. It&apos;s a replacement for the work that stops closers from closing.
              </p>
            </div>

            <div className="border border-white/[0.08] rounded-2xl overflow-hidden bg-[#0d0d0d]">
              <div className="grid grid-cols-12 bg-white/[0.04] p-5 font-heading font-semibold text-[14px] text-white/80 border-b border-white/[0.08]">
                <div className="col-span-4">Capability</div>
                <div className="col-span-4 text-[#22d3ee]">AI Sales Agent</div>
                <div className="col-span-4 text-white/40">Human Sales Rep</div>
              </div>

              <div className="divide-y divide-white/[0.06]">
                {comparisonTable.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-12 p-5 text-[14px] items-center">
                    <div className="col-span-4 font-medium text-white">{row.capability}</div>
                    <div className="col-span-4 text-white/90 font-medium flex items-center gap-2">
                      <Check size={14} className="text-[#22d3ee] shrink-0" />
                      {row.ai}
                    </div>
                    <div className="col-span-4 text-white/40 flex items-center gap-2">
                      <span className="w-3.5 h-0.5 rounded bg-white/20 shrink-0" />
                      {row.human}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-white/50 text-[14px] mt-6 max-w-2xl mx-auto">
              Use the AI agent for <strong className="text-white/80">volume, speed, and consistency</strong>. Use your people for <strong className="text-white/80">judgement, negotiation, and relationships</strong>. Teams that try to automate the closing conversation usually regret it.
            </p>
          </div>
        </section>

        {/* ── Who Benefits ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#22d3ee] font-mono font-medium block mb-3">
                Fit
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                Who Gets the Most Value From an AI Sales Agent?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {audiences.map((a, i) => {
                const IconComponent = a.icon
                return (
                  <div
                    key={i}
                    className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-8 sm:p-10 hover:border-white/20 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] text-white flex items-center justify-center mb-6">
                      <IconComponent size={22} />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-white mb-3">{a.title}</h3>
                    <p className="text-white/60 text-[15px] leading-relaxed">{a.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── CRM Integration ── */}
        <section className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[13px] uppercase tracking-wider text-[#22d3ee] font-mono font-medium block mb-3">
                  Integration
                </span>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-6">
                  CRM Integration & Your Existing Sales Stack
                </h2>
                <p className="text-white/60 leading-relaxed mb-6 text-[16px]">
                  An AI sales agent is only useful if its output lands where your team already works. A CRM integration that only pushes a summary note isn&apos;t integrated in any way that matters.
                </p>
              </div>

              <div className="bg-[#0d0d0d] border border-white/[0.08] rounded-2xl p-8">
                <h3 className="font-heading font-semibold text-lg text-white mb-6 flex items-center gap-3">
                  <Database size={18} className="text-[#22d3ee]" />
                  Minimum Integration Checklist:
                </h3>
                <ul className="space-y-4">
                  {[
                    'Two-way CRM sync — reads context before calling, writes outcomes after',
                    'Calendar integration for live availability and direct booking',
                    'Transcripts and recordings attached to the contact record',
                    'Structured field capture, not just a block of conversation text',
                    'Webhooks or an API for anything custom in your stack',
                    'Real-time routing so hot leads reach a human immediately',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80 text-[15px]">
                      <span className="w-5 h-5 rounded-full bg-[#22d3ee]/10 text-[#22d3ee] flex items-center justify-center text-[12px] font-bold mt-0.5 shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[13px] uppercase tracking-wider text-[#22d3ee] font-mono font-medium block mb-3">
                Investment
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                How Much Does an AI Sales Agent Cost?
              </h2>
            </div>

            <div className="border border-white/[0.08] rounded-2xl overflow-hidden bg-[#0d0d0d] mb-8">
              <div className="grid grid-cols-3 bg-white/[0.04] p-5 font-heading font-semibold text-[14px] text-white/80 border-b border-white/[0.08]">
                <div>Model</div>
                <div>How It&apos;s Charged</div>
                <div>Best For</div>
              </div>

              <div className="divide-y divide-white/[0.06]">
                {pricingModels.map((p, idx) => (
                  <div key={idx} className="grid grid-cols-3 p-5 text-[14px]">
                    <div className="font-medium text-white">{p.model}</div>
                    <div className="text-white/60">{p.how}</div>
                    <div className="text-white/60">{p.suits}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#22d3ee]/[0.04] border border-[#22d3ee]/20 rounded-xl p-6 text-center">
              <p className="text-white/70 text-[15px] leading-relaxed">
                The more useful comparison is <strong className="text-white">cost per qualified meeting booked</strong>, not cost per month. Run that number against what the same outcome costs you today through a human rep.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-4 text-[#22d3ee] hover:underline font-medium text-[15px]"
              >
                Request Pricing Breakdown <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Evaluation Checklist ── */}
        <section className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[13px] uppercase tracking-wider text-[#22d3ee] font-mono font-medium block mb-3">
                Decision Framework
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                How to Choose the Right AI Sales Agent Software
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                One test that tells you a lot: ask the vendor what their agent <em>can&apos;t</em> handle. A straight answer is a good sign.
              </p>
            </div>

            <div className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-8 sm:p-10">
              <h3 className="font-heading font-bold text-xl text-white mb-6 flex items-center gap-3">
                <ShieldCheck size={20} className="text-[#22d3ee]" />
                Evaluation Checklist
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {evaluationChecklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-white/70 text-[14px]">
                    <span className="font-mono text-[#22d3ee] text-[12px] mt-0.5 shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Getting Started ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-[13px] uppercase tracking-wider text-[#22d3ee] font-mono font-medium block mb-3">
                Kickoff
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                Getting Started
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
              {[
                { n: '1', t: 'Pick one use case', d: 'Inbound speed-to-lead, outbound first touch, or dormant-lead re-engagement. Not all three at once.' },
                { n: '2', t: 'Define criteria', d: 'Qualification rules and what happens for each outcome (book, route, nurture, disqualify).' },
                { n: '3', t: 'Connect CRM & calendar', d: 'Two-way sync so the agent reads context and writes outcomes.' },
                { n: '4', t: 'Test on a small segment', d: 'Review real transcripts before scaling. Adjust scripts and rules.' },
                { n: '5', t: 'Measure after 30 days', d: 'Set a baseline for the metric you care about, then compare.' },
              ].map((step) => (
                <div key={step.n} className="bg-[#0d0d0d] border border-white/[0.06] rounded-xl p-5 text-center hover:border-white/20 transition-all">
                  <span className="font-mono text-2xl font-bold text-[#22d3ee] block mb-2">{step.n}</span>
                  <h3 className="font-heading font-bold text-[15px] text-white mb-2">{step.t}</h3>
                  <p className="text-white/50 text-[13px] leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[13px] uppercase tracking-wider text-[#22d3ee] font-mono font-medium block mb-3">
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
        <section className="border-t border-white/[0.06] bg-[#070707] py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[30vh] bg-[#22d3ee]/[0.06] rounded-full blur-[160px] pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-6">
              Ready to See Your AI Sales Agent in Action?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a demo to see how an AI sales agent qualifies your real leads, books meetings on your calendar, and syncs every outcome directly to your CRM.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all text-[16px]"
              >
                Book a Demo
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-xl glass text-white/80 hover:text-white hover:bg-white/[0.08] transition-all text-[15px]"
              >
                Talk to Our Team
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
