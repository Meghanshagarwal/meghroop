'use client'

import { motion } from 'framer-motion'

export default function ServicesPageWhatAre() {
  return (
    <section id="what-are-ai-services" className="section-padding" aria-label="What are AI services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — explanation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-5">
              What are <span className="gradient-text">AI services?</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-5">
              AI services are engagements where a specialist team scopes, builds, integrates, and runs AI systems
              inside your business — strategy audits, custom AI agent development, voice AI, AI-powered automation,
              AI integration with your existing CRM/ERP/helpdesk, and AI-native knowledge and sales systems.
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-5">
              The difference between AI tools and AI services: tools are software you buy and try to figure out.
              Services are teams that build the AI that fits your workflow, deploy it with guardrails, and make sure
              it works.
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              Most companies know AI can transform their operations. Far fewer know where to start, what&apos;s worth
              building, or how to make it talk to the tools they already run on. That&apos;s the gap we close.
            </p>
          </motion.div>

          {/* Right — problem card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl border border-white/[0.08] overflow-hidden p-8 sm:p-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/[0.07] to-cyan-600/[0.07]" />
            <div className="relative z-10">
              <h3 className="font-heading font-bold text-2xl text-white mb-5">The problem we solve</h3>
              <ul className="space-y-3 text-gray-400">
                {[
                  'A ChatGPT Enterprise license that barely anyone uses',
                  'A "pilot" that stalled after the demo',
                  "Tools with AI features that don't talk to each other",
                  'A consulting firm that shipped a 120-slide deck and no working product',
                ].map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-400 mt-6 leading-relaxed">
                Most AI services firms don&apos;t actually build what they recommend. We do — agents, MCP servers, and
                automations running in production, every day. That&apos;s the difference.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
