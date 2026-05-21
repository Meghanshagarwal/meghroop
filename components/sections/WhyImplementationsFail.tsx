'use client'

import { motion } from 'framer-motion'
import {
  AlertCircle, TrendingDown, Users, Zap, Database, Target,
} from 'lucide-react'

const failures = [
  {
    icon: AlertCircle,
    title: 'No Real Tool Integration',
    description:
      'AI that only talks to itself. Can&apos;t access your CRM, your databases, your actual tools. So it hallucinates. It makes things up. Looks good in demos. Fails in production.',
    solution: 'Wire it to your systems. MCP servers. Real integrations. Actual tool use.',
  },
  {
    icon: TrendingDown,
    title: 'Wrong Model for the Job',
    description:
      'Using GPT-4 for customer support when Claude excels there. Using an expensive model when a smaller one works fine. Picking based on hype instead of performance metrics.',
    solution: 'Right tool, right task. We profile and test. Pick the model that wins, not the one that&apos;s popular.',
  },
  {
    icon: Database,
    title: 'No Memory or Context',
    description:
      'Agents that forget everything after each request. Can&apos;t maintain context across conversations. Can&apos;t learn. Can&apos;t improve. Just repeat the same mistakes.',
    solution: 'Vector databases. Persistent memory. RAG systems. AI that actually remembers.',
  },
  {
    icon: Users,
    title: 'Skipping Human Judgment',
    description:
      'Full automation where humans should review. Escalating decisions that need judgment. Removing the guardrails. Then everything breaks.',
    solution: 'Build the right loop. Some decisions need human judgment. Some don&apos;t. Design for both.',
  },
  {
    icon: Zap,
    title: 'Ignoring Production Realities',
    description:
      'Works great in controlled tests. Falls apart under real load. No error handling. No retries. No fallbacks. When it fails, everything fails.',
    solution: 'Build for production. Error handling. Observability. Graceful degradation. Monitoring.',
  },
  {
    icon: Target,
    title: 'Too Much Automation, Too Soon',
    description:
      'Trying to automate everything at once. 80% of workflows could automate tomorrow. Trying to automate the last 20% costs 10x more. Burns teams out.',
    solution: 'Start with high-impact, low-risk automation. Build expertise. Expand methodically.',
  },
]

export default function WhyImplementationsFail() {
  return (
    <section
      id="why-failures"
      className="section-padding"
      aria-label="Why AI automation implementations fail and how to avoid it"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
            The pattern we keep seeing
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Why most AI projects fail.{' '}
            <span className="gradient-text">And how not to.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            We&apos;ve seen this movie before. Great demos. Confident timelines. Then reality happens. Here&apos;s what actually
            breaks, and how to build systems that don&apos;t.
          </p>
        </motion.div>

        {/* Failures Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {failures.map((failure) => {
            const Icon = failure.icon
            return (
              <motion.div
                key={failure.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl border border-white/[0.08] hover:border-white/[0.12] overflow-hidden group cursor-default transition-all duration-300"
              >
                <div className="absolute inset-0 bg-[#0a0a0a]" />
                <div className="absolute inset-0 bg-gradient-to-br from-rose-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors duration-300 flex-shrink-0">
                      <Icon size={22} className="text-rose-400" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white mb-3">{failure.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{failure.description}</p>

                  <div className="pt-4 border-t border-white/[0.06]">
                    <div className="text-xs font-semibold text-emerald-400 mb-1">The fix:</div>
                    <p className="text-xs text-gray-400">{failure.solution}</p>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Core principles callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-50" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-2xl text-white mb-6">How we think about it</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Real Integration First',
                  desc: 'If the AI can&apos;t touch your systems, it&apos;s not automation. It&apos;s a chatbot.',
                },
                {
                  title: 'Gradual Expansion',
                  desc: 'Start with high-impact, low-risk processes. Prove value. Then scale methodically.',
                },
                {
                  title: 'Production Mindset',
                  desc: 'Not a demo. Build for observability, errors, failures, and recovery from day one.',
                },
              ].map(({ title, desc }) => (
                <div key={title}>
                  <div className="text-sm font-semibold text-white mb-2">{title}</div>
                  <div className="text-sm text-gray-400 leading-relaxed">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom insight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            <span className="text-white font-semibold">The pattern that works:</span> Start small. Build right. Measure
            impact. Expand confidently. Most AI projects fail because they&apos;re built for demos instead of production.
            We build the opposite.
          </p>
        </motion.div>

        {/* Semantic content for crawlers */}
        <p className="sr-only">
          Common reasons AI automation projects fail include lack of real tool integration causing hallucinations, using wrong
          AI models, poor context management and memory systems, automation without human oversight, ignoring production
          requirements, and attempting to automate too much too quickly. Successful implementations require real system
          integration via MCP servers, appropriate model selection, persistent memory via vector databases, proper human-in-the-loop
          design, production-grade error handling and observability, and gradual expansion from high-impact low-risk processes.
        </p>
      </div>
    </section>
  )
}
