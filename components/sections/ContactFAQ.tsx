'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'How fast can we kick off a project?',
    a: 'Usually within one to two weeks. Once we align on your technical specifications and approve the architectural blueprint, we initialize repository connections and begin shipping live changes to production immediately.',
  },
  {
    q: 'What does the discovery phase look like?',
    a: 'Frictionless and zero-fluff. You send us your message or brief. We audit your existing tech stack, API boundaries, and database layouts. We return a concrete engineering approach proposal. No introductory meetings just to schedule another meeting.',
  },
  {
    q: 'How do you handle project pricing?',
    a: 'We work with clear, value-based fixed pricing tied directly to the engineering complexity of the system. You get a transparent flat-fee blueprint detailing exactly what will be built. Zero hidden fees, zero hourly creep, and full operational clarity.',
  },
  {
    q: 'Do you build both frontends and backend automations?',
    a: 'Yes. We specialize in cohesive digital ecosystems. We handle the entire spectrum: from custom high-fidelity Next.js frontends and headless Shopify commerce architectures to complex n8n automation pipelines, secure database syncs, and custom MCP integrations.',
  },
  {
    q: 'How do we communicate during development?',
    a: 'We are completely internet-native. We set up direct communication channels inside your Slack, Discord, or WhatsApp. We deliver weekly commit summaries, async Loom screencasts, and secure deployment previews. You talk directly with the engineers coding your system.',
  },
  {
    q: 'Can you optimize or audit our existing architectures?',
    a: 'Yes. We run complete speed audits, map out bottlenecks in manual team workflows, evaluate discoverability for Generative Engine Optimization (GEO), and refactor legacy WordPress or Shopify layers into lightweight static setups.',
  },
]

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            FAQ SYSTEM
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Answers for the <span className="gradient-text">technically curious.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            The details of how we work, scope, build, and deliver. Answered like real builders, not sales representatives.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.06] bg-[#050505]/40 backdrop-blur-sm overflow-hidden hover:border-white/[0.1] transition-colors duration-200"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left group"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-400 transition-colors"
                    itemProp="name"
                  >
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-gray-500 group-hover:text-white transition-colors">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-white/[0.04]">
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed" itemProp="text">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
