import Link from 'next/link'
import { ArrowRight, Check, MapPin } from 'lucide-react'

const offerings = [
  {
    title: 'AI Agents',
    desc: 'Custom agents that reason through a task instead of following a fixed script — reading messages, checking data, deciding what to do next, and only pinging a human when the decision genuinely needs one.',
  },
  {
    title: 'n8n Workflow Automation',
    desc: 'We connect the tools you already use — WhatsApp, your CRM, Sheets, Tally, email — into workflows that move data and trigger actions on their own, end to end.',
  },
  {
    title: 'WhatsApp Automation',
    desc: 'Most enquiries in Jaipur still start on WhatsApp. We build automated replies that qualify a lead, answer real questions, and hand off to a human at the right moment — not generic bots.',
  },
  {
    title: 'CRM Automation',
    desc: 'Leads captured, tagged, and routed automatically. Follow-ups that go out on time even when nobody remembers to send them.',
  },
  {
    title: 'Invoice & Back-Office Agents',
    desc: 'Agents that read invoices, match them against purchase orders, and post them — the kind of process automation finance and ops teams usually do by hand in Excel.',
  },
  {
    title: 'Support & Ticket Triage',
    desc: 'Incoming tickets and queries get read, categorised, and routed automatically, with the routine ones resolved end to end and only the hard cases escalated.',
  },
]

const process = [
  { title: 'Map the workflow', desc: 'We sit with your team — in person if you’re in Jaipur, on a call if you’re not — and map exactly where time is going and where an agent could take over.' },
  { title: 'Design the agent', desc: 'We decide what the agent should read, what it should decide on its own, and what needs a human sign-off before anything happens.' },
  { title: 'Build and test', desc: 'We wire it into your real tools and run it against real scenarios before it ever touches production.' },
  { title: 'Launch with guardrails', desc: 'The first weeks run with humans reviewing key actions, so trust is earned before the agent runs fully unsupervised.' },
  { title: 'Monitor and expand', desc: 'Once it’s proven on one workflow, we extend it to the next — most clients start with one process, not ten.' },
]

const industries = [
  {
    title: 'Manufacturing & Export',
    desc: 'Jaipur and the surrounding belt run a lot of export-oriented manufacturing. Automation here usually starts with order processing, vendor communication, and inventory reconciliation.',
  },
  {
    title: 'Jewellery & Gems',
    desc: 'A high-order-volume, detail-heavy trade. Agents help with order intake, customer follow-up, and keeping stock and pricing data consistent across channels.',
  },
  {
    title: 'Tourism & Hospitality',
    desc: 'Jaipur runs on tourism. WhatsApp automation for booking enquiries, instant responses outside business hours, and CRM follow-ups make a real difference here.',
  },
  {
    title: 'Real Estate',
    desc: 'Lead volume is high and response speed decides deals. Automated qualification and instant follow-up keep leads from going cold before a broker even calls back.',
  },
  {
    title: 'D2C & E-commerce Brands',
    desc: 'Order support, abandoned-cart follow-up, and customer queries at a volume no small team can keep up with manually.',
  },
]

const faqs = [
  {
    q: 'Why work with a Jaipur-based AI automation agency instead of a freelancer or an overseas firm?',
    a: 'A local team can sit in your office, understand how your business actually runs, and stay reachable long after launch. Overseas firms add time-zone lag and handoffs; freelancers rarely stick around for support. We’re based in Jaipur and can meet in person when it helps.',
  },
  {
    q: 'What exactly is AI automation, and how is it different from a chatbot?',
    a: 'A chatbot answers questions with scripted replies. AI automation — agents — reason through a task and take real actions: reading data, updating your CRM, sending a follow-up, or routing a ticket. The output is work done, not just a reply typed.',
  },
  {
    q: 'How is this different from RPA (robotic process automation)?',
    a: 'RPA follows fixed rules and breaks the moment something unexpected happens — a new field, a slightly different invoice format. AI agents reason through exceptions instead of failing on them, so they hold up better as your processes change.',
  },
  {
    q: 'How much does AI automation cost?',
    a: 'It depends on scope — one workflow automated end to end costs far less than a multi-agent system across your whole operation. We scope a fixed price per project after understanding what you actually need, not an open-ended hourly retainer.',
  },
  {
    q: 'How long does it take to see something working?',
    a: 'A single automated workflow — WhatsApp lead qualification, or a CRM automation, for example — can be live within 2–4 weeks. Larger, multi-agent systems typically take 4–12 weeks depending on how many processes are involved.',
  },
  {
    q: 'What tools and platforms do you build with?',
    a: 'n8n for workflow orchestration, WhatsApp Business API, and direct integrations with CRMs, Google Sheets, Tally, and most tools that expose an API. For reasoning-heavy agents we pick the right AI stack for the job rather than forcing one platform on every project.',
  },
  {
    q: 'Do you work with businesses outside Jaipur too?',
    a: 'Yes. Jaipur is our home base, so local clients get in-person meetings when useful. Outside Jaipur, we deliver the same builds fully remote, on IST hours.',
  },
  {
    q: 'Is my business too small, or not “technical” enough, for AI automation?',
    a: 'No. Most of the businesses that benefit most are exactly the ones without an in-house tech team — a WhatsApp automation or a CRM follow-up flow doesn’t need any technical knowledge from you to run once it’s built.',
  },
  {
    q: 'Which industries in Jaipur and Rajasthan do you work with?',
    a: 'Manufacturing and export, jewellery and gems, tourism and hospitality, real estate, and D2C/e-commerce are the industries we see the most automation demand from in this region — but the underlying agent and workflow patterns apply to almost any business with repetitive, rule-based work.',
  },
  {
    q: 'Will an AI agent make mistakes with my customer data or money?',
    a: 'We build in guardrails on anything irreversible — payments, data deletion, customer-facing commitments — so the agent either acts within safe limits or asks for human approval first. Reasoning happens in the agent; risky actions stay reviewable.',
  },
]

export default function AiAutomationJaipurPage() {
  return (
    <main id="main-content" className="pt-28 sm:pt-32">
      {/* ── Hero ── */}
      <section className="grid-bg relative overflow-hidden">
        <div
          className="absolute -top-44 left-1/2 -translate-x-1/2 w-[80vw] h-[45vh] rounded-full blur-[170px] pointer-events-none"
          style={{ background: 'rgba(96,165,250,0.09)' }}
        />
        <div className="relative max-w-5xl mx-auto px-6 pb-16 sm:pb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[13px] text-white/70 mb-8">
            <MapPin size={13} className="text-[#60a5fa]" />
            Home base: Jaipur, Rajasthan
          </div>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.05] tracking-tight mb-7">
            AI Automation Agency in <span className="gradient-text">Jaipur</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/[0.62] max-w-2xl mx-auto leading-relaxed mb-10">
            MeghRoop is an AI agent development company based in Jaipur. We build AI agents, n8n workflows, and
            WhatsApp/CRM automation that run your repetitive work around the clock — designed, built, and supported
            from the same city you operate in.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-black font-semibold text-[15px] hover:bg-white/90 transition-all duration-200 shadow-[0_0_50px_rgba(192,132,252,0.18)]"
            >
              Book a Call
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/ai-automation"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/[0.12] text-white font-semibold text-[15px] hover:bg-white/[0.05] transition-all duration-200"
            >
              See our full AI Automation service
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why local ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20">
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white leading-[1.1] tracking-tight mb-6">
            Why work with an AI automation company based in Jaipur
          </h2>
          <div className="text-lg text-white/[0.62] leading-relaxed max-w-3xl space-y-4">
            <p>
              Most AI automation vendors are either a freelancer working alone, or a large team on the other side of
              the world that never sees how your business actually runs. Neither is a great fit for the kind of work
              this is — automation only works well when someone understands your real process, not a generic version
              of it.
            </p>
            <p>
              We&apos;re based in Jaipur, and this is our home city, not a branch office. That means we can sit with
              your team in person, watch how a workflow actually breaks down day to day, and build the automation
              around that — not around assumptions made over email. It also means when something needs a fix or a
              tweak after launch, you&apos;re not waiting on a support ticket routed across time zones.
            </p>
            <p>
              Outsourcing overseas usually means time-zone lag, a handoff-heavy process, and a team that disappears
              once the project ships. We stay reachable, and because we&apos;re local, ongoing support is a call or a
              visit away, not a ticket queue.
            </p>
          </div>
        </div>
      </section>

      {/* ── Offerings ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white leading-[1.1] tracking-tight mb-4">
            What our Jaipur AI automation team builds
          </h2>
          <p className="text-white/[0.55] max-w-2xl mb-10">
            Custom AI agents and automation, not off-the-shelf chatbot templates. Every build starts with a real
            workflow you want off your team&apos;s plate.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
            {offerings.map((o) => (
              <div key={o.title} className="bg-[#0a0a0a] p-7">
                <div className="flex items-start gap-3 mb-2">
                  <Check size={16} className="text-[#60a5fa] mt-1 flex-shrink-0" />
                  <h3 className="font-heading font-semibold text-white text-lg">{o.title}</h3>
                </div>
                <p className="text-white/[0.55] text-sm leading-relaxed pl-7">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="font-heading font-bold text-4xl sm:text-5xl mb-2 text-[#60a5fa]">2 min</div>
            <div className="text-white/[0.55] text-sm">Lead response time</div>
          </div>
          <div>
            <div className="font-heading font-bold text-4xl sm:text-5xl mb-2 text-[#60a5fa]">15 hrs</div>
            <div className="text-white/[0.55] text-sm">Saved per week, typical</div>
          </div>
          <div>
            <div className="font-heading font-bold text-4xl sm:text-5xl mb-2 text-[#60a5fa]">24/7</div>
            <div className="text-white/[0.55] text-sm">Autonomous operation</div>
          </div>
        </div>
      </section>

      {/* ── How we work ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white leading-[1.1] tracking-tight mb-10">
            How we work
          </h2>
          <div className="space-y-8">
            {process.map((step, i) => (
              <div key={step.title} className="flex gap-5">
                <div className="font-heading font-bold text-2xl text-[#60a5fa]/60 w-10 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white text-lg mb-1">{step.title}</h3>
                  <p className="text-white/[0.55] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white leading-[1.1] tracking-tight mb-4">
            Industries we automate for in Jaipur and Rajasthan
          </h2>
          <p className="text-white/[0.55] max-w-2xl mb-10">
            Every region has its own mix of industries, and automation needs differ accordingly. Here&apos;s where we
            see the most real demand around Jaipur.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {industries.map((ind) => (
              <div key={ind.title} className="p-6 rounded-2xl border border-white/[0.06]">
                <h3 className="font-heading font-semibold text-white text-lg mb-2">{ind.title}</h3>
                <p className="text-white/[0.55] text-sm leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-10">
            AI Automation Agency in Jaipur — FAQ
          </h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold text-white mb-2">{f.q}</h3>
                <p className="text-white/[0.6] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related services ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-xs uppercase tracking-[0.2em] text-[#52525b] mb-8">Related services</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/ai-automation"
              className="group block p-5 rounded-2xl border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.02] transition-all"
            >
              <div className="flex items-center justify-between text-white font-medium mb-1">
                AI Agents & Automation
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-white/[0.5] text-sm">Our full AI agents and automation service overview.</p>
            </Link>
            <Link
              href="/agentic-ai"
              className="group block p-5 rounded-2xl border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.02] transition-all"
            >
              <div className="flex items-center justify-between text-white font-medium mb-1">
                Agentic AI
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-white/[0.5] text-sm">Bespoke autonomous agents for complex, multi-step workflows.</p>
            </Link>
            <Link
              href="/ai-agents/agentic-automation"
              className="group block p-5 rounded-2xl border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.02] transition-all"
            >
              <div className="flex items-center justify-between text-white font-medium mb-1">
                Agentic Process Automation
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-white/[0.5] text-sm">Invoice-to-pay, ticket triage, reconciliation, and vendor onboarding agents.</p>
            </Link>
            <Link
              href="/contact"
              className="group block p-5 rounded-2xl border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.02] transition-all"
            >
              <div className="flex items-center justify-between text-white font-medium mb-1">
                Talk to us
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-white/[0.5] text-sm">Tell us what&apos;s eating your team&apos;s time — we&apos;ll tell you if an agent can take it.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-20 sm:py-28 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-6">
            Ready to automate smarter, right here in Jaipur?
          </h2>
          <p className="text-white/[0.6] max-w-lg mx-auto mb-9">
            Tell us one workflow that&apos;s eating your team&apos;s time. We&apos;ll tell you honestly whether an
            agent can take it off your plate — and what that would take to build.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-black font-semibold text-[15px] hover:bg-white/90 transition-all duration-200"
          >
            Book a Call
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </main>
  )
}
