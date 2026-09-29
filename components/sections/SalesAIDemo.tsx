'use client'

import { useState, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Play, RotateCcw, Zap, Search, Send, Reply, CalendarCheck } from 'lucide-react'

type Scenario = {
  id: string
  signalType: string
  signalDetail: string
  company: string
  contact: string
  title: string
  icp: string
  channel: string
  subject: string
  snippet: string
  reply: string
  meetingTime: string
}

const SCENARIOS: Scenario[] = [
  {
    id: 'funding',
    signalType: 'Funding Trigger',
    signalDetail: '$18M Series B announced 42 minutes ago',
    company: 'Northwind Analytics',
    contact: 'Priya Menon',
    title: 'VP RevOps',
    icp: 'B2B SaaS · 120 employees · Series B',
    channel: 'LinkedIn DM + Email',
    subject: 'Congrats on the Series B, Priya',
    snippet: '"Saw Northwind’s $18M raise — usually the RevOps stack gets stress-tested right after a round like this. Worth a 15-min look at where your funnel might crack first?"',
    reply: '"Ha, good timing — we ARE about to scale outbound. Free Thursday?"',
    meetingTime: 'Thu 2:30 PM · Stage-2 Qualified',
  },
  {
    id: 'newvp',
    signalType: 'New-VP Play',
    signalDetail: 'Job change detected 3 hours ago',
    company: 'Cascade Robotics',
    contact: 'Daniel Ortiz',
    title: 'Head of Sales',
    icp: 'B2B SaaS · 340 employees · Series C',
    channel: 'LinkedIn engagement + Email',
    subject: 'Congrats on the new seat at Cascade',
    snippet: '"Most new Heads of Sales inherit a pipeline no one’s audited in a year. Happy to send a 10-min teardown of Cascade’s current outbound signals — no pitch, just the audit."',
    reply: '"Appreciate this — actually exactly what I was about to look into. Send times."',
    meetingTime: 'Tue 11:00 AM · Stage-2 Qualified',
  },
  {
    id: 'churn',
    signalType: 'Competitor-Churn Play',
    signalDetail: 'G2 review + intent spike on "alternative to X"',
    company: 'Fieldstone Logistics',
    contact: 'Anita Raghavan',
    title: 'Director of Ops',
    icp: 'B2B SaaS · 85 employees · Bootstrapped',
    channel: 'Email + LinkedIn',
    subject: 'Saw the G2 thread on switching from X',
    snippet: '"Noticed a few of your team members reviewing alternatives to X this week. We’ve helped 3 similar ops teams migrate without losing a quarter of data — want the 1-pager on how?"',
    reply: '"Yes please, we’re actively evaluating. Can we talk this week?"',
    meetingTime: 'Wed 4:00 PM · Stage-2 Qualified',
  },
]

const STEPS = [
  { key: 'signal', label: 'Signal Detected', icon: Zap },
  { key: 'research', label: 'Auto Research & ICP Match', icon: Search },
  { key: 'outreach', label: 'Personalized Outreach Sent', icon: Send },
  { key: 'reply', label: 'Reply Triaged', icon: Reply },
  { key: 'meeting', label: 'Meeting Auto-Booked', icon: CalendarCheck },
] as const

export default function SalesAIDemo() {
  const [scenario, setScenario] = useState<Scenario>(SCENARIOS[0])
  const [running, setRunning] = useState(false)
  const [stepIndex, setStepIndex] = useState(-1)
  const timers = useRef<number[]>([])

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t))
    timers.current = []
  }

  const run = (s: Scenario) => {
    clearTimers()
    setScenario(s)
    setRunning(true)
    setStepIndex(0)
    STEPS.slice(1).forEach((_, i) => {
      const t = window.setTimeout(() => setStepIndex(i + 1), (i + 1) * 1100)
      timers.current.push(t)
    })
  }

  const reset = () => {
    clearTimers()
    setRunning(false)
    setStepIndex(-1)
  }

  const done = stepIndex === STEPS.length - 1

  return (
    <section className="section-padding border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Live interactive demo
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Watch a buying signal turn into a <span className="gradient-text">booked meeting</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Pick a play. This is exactly what runs in the background for every account in your ICP — signal to meeting, end to end.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              onClick={() => run(s)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                scenario.id === s.id && running
                  ? 'bg-white text-black border-white'
                  : 'border-white/[0.12] text-white/70 hover:bg-white/[0.06] hover:text-white'
              }`}
            >
              {s.signalType}
            </button>
          ))}
          {running && (
            <button
              onClick={reset}
              className="px-4 py-2 rounded-full text-sm font-medium border border-white/[0.12] text-white/50 hover:text-white hover:bg-white/[0.06] transition-colors inline-flex items-center gap-1.5"
            >
              <RotateCcw size={14} /> Reset
            </button>
          )}
        </div>

        {!running ? (
          <div className="flex justify-center">
            <button
              onClick={() => run(SCENARIOS[0])}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-colors shadow-[0_0_50px_rgba(99,102,241,0.25)]"
            >
              <Play size={16} /> Run the demo
            </button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-[1fr_320px]">
            {/* Stepper */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d0d] p-6 md:order-1">
              <div className="flex flex-wrap gap-2 mb-8">
                {STEPS.map((step, i) => {
                  const Icon = step.icon
                  const active = i <= stepIndex
                  return (
                    <div
                      key={step.key}
                      className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-medium border transition-colors ${
                        active ? 'border-indigo-400/40 bg-indigo-400/10 text-indigo-300' : 'border-white/[0.08] text-white/30'
                      }`}
                    >
                      <Icon size={13} /> {step.label}
                    </div>
                  )
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={stepIndex}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.25 }}
                  className="min-h-[180px]"
                >
                  {stepIndex === 0 && (
                    <div>
                      <div className="text-xs uppercase tracking-wider text-indigo-300 mb-2">{scenario.signalType}</div>
                      <p className="text-lg text-white/85">{scenario.signalDetail}</p>
                      <p className="text-sm text-white/40 mt-3">{scenario.company} — flagged and queued for outreach in real time.</p>
                    </div>
                  )}
                  {stepIndex === 1 && (
                    <div>
                      <div className="text-xs uppercase tracking-wider text-indigo-300 mb-2">ICP Match</div>
                      <p className="text-lg text-white/85">{scenario.contact}, {scenario.title} at {scenario.company}</p>
                      <p className="text-sm text-white/40 mt-3">{scenario.icp} — matched against target account list, enriched, and prioritized.</p>
                    </div>
                  )}
                  {stepIndex === 2 && (
                    <div>
                      <div className="text-xs uppercase tracking-wider text-indigo-300 mb-2">{scenario.channel}</div>
                      <p className="text-sm font-semibold text-white/85 mb-2">Subject: {scenario.subject}</p>
                      <p className="text-white/60 italic leading-relaxed">{scenario.snippet}</p>
                      <p className="text-sm text-white/40 mt-3">Human-reviewed, sent within 60 minutes of the signal.</p>
                    </div>
                  )}
                  {stepIndex === 3 && (
                    <div>
                      <div className="text-xs uppercase tracking-wider text-indigo-300 mb-2">Reply received</div>
                      <p className="text-white/85 italic leading-relaxed">{scenario.reply}</p>
                      <p className="text-sm text-white/40 mt-3">Triaged within the hour — routed as an interested reply for human follow-up.</p>
                    </div>
                  )}
                  {stepIndex === 4 && (
                    <div>
                      <div className="text-xs uppercase tracking-wider text-emerald-300 mb-2">Meeting booked</div>
                      <p className="text-lg text-white/85">{scenario.meetingTime}</p>
                      <p className="text-sm text-white/40 mt-3">Auto-added to CRM with full signal + sequence context — no manual entry.</p>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Live deal tracker */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d0d] p-6 md:order-2 h-fit">
              <div className="text-xs uppercase tracking-wider text-white/40 mb-4">Deal tracker</div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-white/40">Company</span><span className="text-white/85 font-medium">{scenario.company}</span></div>
                <div className="flex justify-between"><span className="text-white/40">Contact</span><span className="text-white/85 font-medium">{scenario.contact}</span></div>
                <div className="flex justify-between"><span className="text-white/40">Signal</span><span className="text-white/85 font-medium text-right">{scenario.signalType}</span></div>
                <div className="flex justify-between"><span className="text-white/40">Channel</span><span className="text-white/85 font-medium text-right">{scenario.channel}</span></div>
                <div className="pt-3 border-t border-white/[0.08] flex justify-between">
                  <span className="text-white/40">Status</span>
                  <span className={`font-semibold ${done ? 'text-emerald-300' : 'text-indigo-300'}`}>
                    {done ? 'Meeting Booked' : STEPS[stepIndex]?.label ?? 'Queued'}
                  </span>
                </div>
              </div>
              {done && (
                <a href="/contact" className="mt-6 flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors">
                  Run this for my pipeline
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
