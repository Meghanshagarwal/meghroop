import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  PhoneCall,
  Mic,
  Volume2,
  Globe,
  Database,
  ShieldCheck,
  BarChart3,
  Bot,
  CalendarCheck,
  Headphones,
  PhoneForwarded,
  Check,
  X,
  Building2,
  HeartPulse,
  ShieldAlert,
  Landmark,
  Zap,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import ProductFAQ from '@/components/sections/ProductFAQ'

export const metadata: Metadata = {
  title: 'AI Voice Agent for Business | 24/7 Voice AI Platform',
  description:
    'Automate inbound and outbound calls with an AI voice agent built for support, sales, and reception. Natural voice, multilingual, CRM-ready. Book a demo.',
  alternates: { canonical: '/product/ai-voice-agent' },
  openGraph: {
    title: 'AI Voice Agent for Business | 24/7 Voice AI Platform | MeghRoop',
    description:
      'Automate inbound and outbound calls with an AI voice agent built for support, sales, and reception. Natural voice, multilingual, CRM-ready. Book a demo.',
  },
}

/* ── Data ── */

const workflowSteps = [
  {
    step: '01',
    title: 'Call comes in or goes out',
    desc: 'The agent connects over your existing phone number or telephony provider seamlessly.',
    icon: PhoneCall,
  },
  {
    step: '02',
    title: 'Speech understood in real time',
    desc: 'Converts speech to text, interprets intent, and decides how to respond in sub-second latency to keep conversations natural.',
    icon: Mic,
  },
  {
    step: '03',
    title: 'Agent responds and acts',
    desc: 'Replies in a human-like voice, checking calendars, updating CRM records, or triggering real-time actions.',
    icon: Volume2,
  },
  {
    step: '04',
    title: 'Humans get the edge cases',
    desc: 'Calls needing judgment or empathy are handed off to a live rep with full transcript and context attached.',
    icon: PhoneForwarded,
  },
]

const features = [
  {
    icon: Zap,
    title: 'Low-latency Response',
    desc: 'Conversations only feel natural if the agent doesn’t make callers wait — sub-second response time is the baseline for a usable voice agent.',
  },
  {
    icon: Volume2,
    title: 'Natural-sounding Voice',
    desc: 'Human-like voice quality, pacing, and dynamic turn-taking ensure callers experience empathy and smooth conversation.',
  },
  {
    icon: Globe,
    title: 'Multilingual Support',
    desc: 'Handles multiple languages fluently and can switch mid-call for global and diverse customer bases.',
  },
  {
    icon: Database,
    title: 'CRM & Telephony Integration',
    desc: 'Reads and writes directly to your CRM, calendars, ticketing systems, and existing phone infrastructure in real time.',
  },
  {
    icon: BarChart3,
    title: 'Call Analytics & Transcripts',
    desc: 'Every call produces an automated transcript, summary, and outcome tag so you review performance effortlessly.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security & Compliance',
    desc: 'Strict call recording security, data residency, and protocol standards tailored for regulated industry requirements.',
  },
]

const useCases = [
  {
    icon: Headphones,
    title: 'AI Receptionist',
    desc: 'Answers and routes inbound calls 24/7, ensuring zero calls hit voicemail outside business hours.',
    tag: 'Inbound 24/7',
  },
  {
    icon: Bot,
    title: 'AI Customer Support Agent',
    desc: 'Resolves common questions, checks order status, and escalates complex issues to human reps with full context.',
    tag: 'Support & Tickets',
  },
  {
    icon: PhoneCall,
    title: 'AI Sales Agent & Cold Calling',
    desc: 'Runs outbound qualification calls, freeing sales reps to focus on warm closing conversations.',
    tag: 'Outbound & Sales',
  },
  {
    icon: CalendarCheck,
    title: 'AI Appointment Booking Agent',
    desc: 'Handles scheduling, rescheduling, and reminder calls directly against your calendar to reduce no-shows.',
    tag: 'Scheduling',
  },
]

const industries = [
  {
    icon: Building2,
    name: 'Real Estate',
    desc: 'Lead follow-up, showing scheduling, and buyer inquiry qualification.',
  },
  {
    icon: HeartPulse,
    name: 'Healthcare',
    desc: 'Appointment reminders, patient intake, and front-desk triage.',
  },
  {
    icon: ShieldAlert,
    name: 'Insurance',
    desc: 'First notice of loss (FNOL), claims intake routing, and policy inquiries.',
  },
  {
    icon: Landmark,
    name: 'Banking & Financials',
    desc: 'Account balance checks, appointment booking, and verification workflows.',
  },
]

const comparisonRows = [
  {
    capability: 'Understands open-ended speech',
    voiceAgent: 'Yes — full conversational AI',
    ivr: 'No — menu-based only ("Press 1")',
  },
  {
    capability: 'Natural conversation flow',
    voiceAgent: 'Yes — human-like turn-taking',
    ivr: 'No — rigid robotic audio trees',
  },
  {
    capability: 'Real-time actions (CRM/Booking)',
    voiceAgent: 'Yes — live API integrations',
    ivr: 'Limited or static data lookup',
  },
  {
    capability: 'Multilingual adaptability',
    voiceAgent: 'Fluent & dynamic mid-call switching',
    ivr: 'Rarely, usually pre-recorded audio',
  },
  {
    capability: 'Caller experience',
    voiceAgent: 'Conversational & effortless',
    ivr: 'Frustrating menu navigation',
  },
]

const faqs = [
  {
    q: 'What is an AI voice agent?',
    a: 'An AI voice agent is software that can hold real-time phone conversations, understand what a caller wants, and take action — such as booking an appointment or answering a question — without a human on the line.',
  },
  {
    q: 'How is an AI voice agent different from an IVR system?',
    a: 'An IVR relies on fixed menus ("press 1 for..."), while an AI voice agent understands natural, open-ended speech and can carry a real conversation, including tasks like checking a calendar or updating a record mid-call.',
  },
  {
    q: 'Can an AI voice agent integrate with my CRM?',
    a: 'Most AI voice agent platforms support CRM integration so call outcomes, notes, and follow-ups sync automatically — confirm the specific integrations supported before choosing a provider.',
  },
  {
    q: 'Does the AI voice agent support multiple languages?',
    a: 'Multilingual support varies by platform. If you serve customers in more than one language, confirm which languages are supported and whether the agent can switch languages mid-call.',
  },
  {
    q: 'How much does an AI voice agent cost?',
    a: 'Pricing typically depends on call volume or minutes used, plus the features included (such as CRM integration or custom voice). Ask for a clear breakdown before committing.',
  },
  {
    q: 'Is an AI voice agent secure enough for regulated industries?',
    a: 'Security and compliance depend entirely on the vendor. If you are in healthcare, finance, or insurance, ask directly about data residency, call recording storage, and relevant certifications before deploying.',
  },
]

export default function AIVoiceAgentPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-28 sm:pt-32">
        {/* ── Section 1: Hero ── */}
        <section className="grid-bg relative overflow-hidden">
          <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[80vw] h-[45vh] bg-[#38bdf8]/[0.08] rounded-full blur-[170px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-6 pt-6 pb-16 sm:pb-24 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[13px] text-white/70 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
              AI Voice Agent • Product
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl text-white leading-[1.04] tracking-tight mb-7">
              AI Voice Agents for Business:{' '}
              <span className="gradient-text">Automate Calls, Support & Sales — 24/7</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/[0.62] max-w-3xl mx-auto leading-relaxed mb-10">
              Answering every call, qualifying every lead, and booking every appointment shouldn’t require a bigger headcount. An <strong className="text-white">AI voice agent</strong> handles phone conversations the way a trained human would — understanding what a caller wants, responding naturally, and taking action — so your team only steps in when a call genuinely needs a person.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all text-[15px]"
              >
                Book a Demo
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

        {/* ── Section 2: What Is an AI Voice Agent? ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="text-[13px] uppercase tracking-wider text-[#38bdf8] font-mono font-medium block mb-3">
                  Overview
                </span>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-6">
                  What Is an AI Voice Agent?
                </h2>
                <p className="text-white/60 leading-relaxed mb-6 text-[16px]">
                  An AI voice agent is a conversational AI system that can answer, place, and hold real-time phone calls on behalf of a business. Unlike a traditional IVR (&ldquo;press 1 for sales&rdquo;), it understands open-ended speech, responds in a natural voice, and can complete tasks — booking an appointment, pulling up an order, escalating to a human — inside the same call.
                </p>
                <p className="text-white/60 leading-relaxed text-[16px]">
                  Businesses use AI voice agents (also called AI phone agents or AI calling agents) to scale customer interactions seamlessly without multiplying operational costs.
                </p>
              </div>

              <div className="bg-[#0d0d0d] border border-white/[0.08] rounded-2xl p-8 sm:p-10">
                <h3 className="font-heading font-semibold text-xl text-white mb-6 flex items-center gap-3">
                  <PhoneCall size={20} className="text-[#38bdf8]" />
                  What AI Voice Agents Automate:
                </h3>
                <ul className="space-y-4">
                  {[
                    'Inbound customer support and FAQs',
                    'Reception and call routing 24/7',
                    'Outbound sales and lead qualification',
                    'Appointment scheduling and reminders',
                    'Context-aware transfer to live reps',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80 text-[15px]">
                      <span className="w-5 h-5 rounded-full bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center text-[12px] font-bold mt-0.5 shrink-0">
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

        {/* ── Section 3: How It Works ── */}
        <section id="how-it-works" className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#38bdf8] font-mono font-medium block mb-3">
                Architecture
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                How an AI Voice Agent Works
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Four automated steps to deliver ultra-low latency, human-grade telephone interactions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflowSteps.map((s) => {
                const IconComponent = s.icon
                return (
                  <div
                    key={s.step}
                    className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-7 hover:border-white/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-2xl font-bold text-[#38bdf8]">{s.step}</span>
                        <div className="p-3 rounded-xl bg-white/[0.03] text-white/70">
                          <IconComponent size={20} />
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-lg text-white mb-3">{s.title}</h3>
                      <p className="text-white/50 text-[14px] leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Section 4: Key Features ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#38bdf8] font-mono font-medium block mb-3">
                Capabilities
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                Key Features of Enterprise Voice AI
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Engineered for speed, empathy, and seamless integration with existing business tech stacks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => {
                const IconComponent = f.icon
                return (
                  <div
                    key={i}
                    className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-8 hover:border-white/20 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#38bdf8]/[0.08] text-[#38bdf8] flex items-center justify-center mb-6">
                      <IconComponent size={22} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white mb-3">{f.title}</h3>
                    <p className="text-white/50 text-[14px] leading-relaxed">{f.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Section 5: Use Cases ── */}
        <section className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#38bdf8] font-mono font-medium block mb-3">
                Applications
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                AI Voice Agent Use Cases
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Tailored call flows built for high impact across critical customer touchpoints.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((uc, i) => {
                const IconComponent = uc.icon
                return (
                  <div
                    key={i}
                    className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-8 sm:p-10 hover:border-white/20 transition-all"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.04] text-white flex items-center justify-center">
                        <IconComponent size={22} />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[12px] font-mono bg-[#38bdf8]/10 text-[#38bdf8]">
                        {uc.tag}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-white mb-3">{uc.title}</h3>
                    <p className="text-white/60 text-[15px] leading-relaxed">{uc.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Section 6: Industry Solutions ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#38bdf8] font-mono font-medium block mb-3">
                Verticals
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                Industry Solutions
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Deployed across high-volume call sectors with compliance and workflow customization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, i) => {
                const IconComponent = ind.icon
                return (
                  <div
                    key={i}
                    className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-7 hover:border-white/20 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center mb-5">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white mb-2">{ind.name}</h3>
                    <p className="text-white/50 text-[14px] leading-relaxed">{ind.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Section 7: AI Voice Agent vs. IVR ── */}
        <section className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#38bdf8] font-mono font-medium block mb-3">
                Comparison
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                AI Voice Agent vs. Traditional IVR
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Why modern buyers are abandoning rigid telephone keypads for conversational voice AI.
              </p>
            </div>

            <div className="border border-white/[0.08] rounded-2xl overflow-hidden bg-[#0d0d0d]">
              <div className="grid grid-cols-12 bg-white/[0.04] p-5 font-heading font-semibold text-[14px] text-white/80 border-b border-white/[0.08]">
                <div className="col-span-4 sm:col-span-4">Capability</div>
                <div className="col-span-4 sm:col-span-4 text-[#38bdf8]">AI Voice Agent</div>
                <div className="col-span-4 sm:col-span-4 text-white/40">Traditional IVR</div>
              </div>

              <div className="divide-y divide-white/[0.06]">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-12 p-5 text-[14px] items-center">
                    <div className="col-span-4 sm:col-span-4 font-medium text-white">{row.capability}</div>
                    <div className="col-span-4 sm:col-span-4 text-white/90 font-medium flex items-center gap-2">
                      <Check size={16} className="text-[#38bdf8] shrink-0" />
                      {row.voiceAgent}
                    </div>
                    <div className="col-span-4 sm:col-span-4 text-white/40 flex items-center gap-2">
                      <X size={16} className="text-white/30 shrink-0" />
                      {row.ivr}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 8: Integrations & Pricing ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-8 sm:p-10">
                <span className="text-[13px] uppercase tracking-wider text-[#38bdf8] font-mono font-medium block mb-3">
                  Ecosystem
                </span>
                <h3 className="font-heading font-bold text-2xl text-white mb-4">Integrations</h3>
                <p className="text-white/60 leading-relaxed text-[15px] mb-6">
                  Connects directly with your CRM, calendar, ticketing tools, and existing phone system via REST APIs, webhooks, and SIP telephony protocols.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-white/70">
                  {['Salesforce', 'HubSpot', 'Zendesk', 'Twilio', 'Retell AI', 'Vapi', 'Google Calendar', 'SIP Trunking'].map(
                    (tag, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-8 sm:p-10">
                <span className="text-[13px] uppercase tracking-wider text-[#38bdf8] font-mono font-medium block mb-3">
                  Investment
                </span>
                <h3 className="font-heading font-bold text-2xl text-white mb-4">Transparent Pricing</h3>
                <p className="text-white/60 leading-relaxed text-[15px] mb-6">
                  Pricing typically depends on call volume, per-minute usage, and custom voice models. Contact our team for a tailored quote built for your expected call volume.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#38bdf8] hover:underline font-medium text-[15px]"
                >
                  Request Pricing Breakdown <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 9: FAQs ── */}
        <section className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[13px] uppercase tracking-wider text-[#38bdf8] font-mono font-medium block mb-3">
                Questions
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <ProductFAQ faqs={faqs} />
          </div>
        </section>

        {/* ── Section 10: Final CTA ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[30vh] bg-[#38bdf8]/[0.06] rounded-full blur-[160px] pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-6">
              Ready to See AI Voice Agents in Action?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a live demo to hear how an AI voice agent handles your real business call flows, answers FAQs, and syncs directly with your CRM.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all text-[16px]"
            >
              Book a Demo
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
