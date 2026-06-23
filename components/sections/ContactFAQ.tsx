'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What services do you actually offer?',
    a: 'Five things, under one roof: (1) Growth & marketing — Meta Ads, Google Ads, SEO, social, and content; (2) AI agents & automation — custom agents, n8n, WhatsApp and CRM automation, voice agents; (3) Software development — custom software, web and mobile apps, and SaaS; (4) Shopify and WordPress development; and (5) branding & creative.',
  },
  {
    q: 'How fast can we get started?',
    a: 'Usually within one to two weeks. Growth campaigns can go live within days. For builds, once we align on scope and approve a plan, we start shipping immediately — you see results in production early, not at the end.',
  },
  {
    q: 'How does pricing work?',
    a: 'Growth and marketing run on monthly retainers. Software, AI agents, Shopify/WordPress, and branding are fixed-fee per project — clear scope, no hidden fees, no hourly creep. You work directly with the founders, so there is no agency markup.',
  },
  {
    q: 'Do you only build, or do you run growth too?',
    a: 'Both — and that is the point. We run growth, AI automation, software, and branding under one roof, so your ads, your site, your automation, and your brand reinforce each other instead of being stitched together by three vendors.',
  },
  {
    q: 'How do we communicate during the project?',
    a: 'Directly with the founders, Meghansh & Roop — no account managers, no handoffs. We plug into your Slack, WhatsApp, or email, send regular updates, and keep everything async-friendly so you stay updated without endless calls.',
  },
  {
    q: 'Do you work with our existing tools — and outside India?',
    a: 'Yes to both. We extend the tools you already run (Salesforce, HubSpot, Zoho, Shopify, WordPress, your CRM) instead of forcing a migration, and you own all the code and IP. We are based in India and work with clients worldwide across the US, UK, Europe, and Asia.',
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
