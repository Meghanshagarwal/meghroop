'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What kind of agency is MeghRoop?',
    a: 'A premium Software + AI + Growth agency. We bring performance marketing, AI automation, custom software, branding, and content under one roof — so the team that builds your product is the same team that grows it. No handoffs, no finger-pointing between vendors.',
  },
  {
    q: 'Do you only do marketing, or development too?',
    a: 'Both — and that\'s the point. Most businesses juggle a dev shop, a marketing agency, and a creative freelancer. We do all three together: we build the software, run the ads, automate the operations, and design the brand. One partner, every lever of growth.',
  },
  {
    q: 'What does "performance marketing" actually mean here?',
    a: 'Marketing we hold accountable to numbers. Meta Ads, Google Ads, SEO, funnels, and landing pages — all optimised for qualified leads, cost per acquisition, and revenue. Not impressions and likes. We report on the metrics that move your business.',
  },
  {
    q: 'How do AI agents and automation help my business?',
    a: 'They remove the repetitive work that slows your team down. AI agents qualify leads, send follow-ups, and answer customers. n8n and CRM/WhatsApp automations connect your tools so things happen on their own. Most clients reclaim 10–15 hours a week and stop losing leads in the gaps.',
  },
  {
    q: 'Can you build a custom product or SaaS?',
    a: 'Yes. Web apps, SaaS products, dashboards, mobile apps, and APIs — engineered properly to ship fast and scale under real users. We own it end to end, from database to deployment.',
  },
  {
    q: 'Do you handle Shopify and WordPress?',
    a: 'Absolutely. Shopify stores, custom Shopify apps, headless commerce, WordPress websites, and deep performance optimization. Fast stores convert better — we make sure yours does, technically and commercially.',
  },
  {
    q: 'Do you work with clients outside India?',
    a: 'Yes. Based in India, working worldwide — US, UK, Europe, the Middle East, and Southeast Asia. We work async across time zones and keep communication direct and fast.',
  },
  {
    q: 'How do we get started?',
    a: 'Book a discovery call or email hello@meghroop.tech. Tell us where you want to grow and what\'s in the way. We reply within 24 hours and come back with a clear plan across software, AI, and marketing.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding" aria-label="Frequently asked questions">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            Questions people actually ask
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Things worth{' '}
            <span className="gradient-text">actually answering.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            The questions we get the most. Answered like humans, not a terms-of-service page.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-white/[0.08] overflow-hidden"
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-200 group"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-sm sm:text-base font-semibold text-white group-hover:text-white/90 transition-colors"
                    itemProp="name"
                  >
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/[0.06] flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
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
                      <p
                        className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-gray-400 leading-relaxed border-t border-white/[0.06] pt-4"
                        itemProp="text"
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        {/* GEO signal block — crawlable, semantic, conversational */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center"
        >
          <p className="text-sm text-gray-500 mb-1">Still have questions?</p>
          <p className="text-white font-semibold mb-1">Sometimes a quick message is faster than reading everything.</p>
          <p className="text-sm text-gray-400">
            Email{' '}
            <a
              href="mailto:hello@meghroop.tech"
              className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2"
            >
              hello@meghroop.tech
            </a>{' '}
            — we actually read those.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
