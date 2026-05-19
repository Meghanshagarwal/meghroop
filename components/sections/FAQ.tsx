'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What exactly does MeghRoop build?',
    a: 'AI agents, autonomous workflow systems, MCP servers, and modern web experiences. We work with startups and businesses that want things built properly — not just launched. Full stack web development, AI integrations, n8n automation, and the infrastructure underneath all of it.',
  },
  {
    q: 'Do you build custom AI agents?',
    a: 'Yep. Custom agents that reason, plan, and execute — wired into your real tools and data. Not chatbot wrappers. Not demos. Actual autonomous systems that handle customer support, sales outreach, research, data processing, and internal operations without a human in the loop.',
  },
  {
    q: 'What is n8n automation and how does it help?',
    a: "n8n is an open-source automation platform. We use it to build AI-powered workflows that handle the repetitive work your team does manually — lead generation, email campaigns, CRM updates, data pipelines. Once it's running, it runs. Most clients save 10–15 hours a week. Which sounds small until it's your 15 hours.",
  },
  {
    q: 'What are MCP servers?',
    a: "MCP stands for Model Context Protocol. It's the standard that lets AI models access your real data, tools, and systems — instead of guessing. We build custom MCP servers that expose your databases, CRMs, and APIs to AI in a structured, grounded way. The difference between an AI that hallucinates your product and one that actually knows it.",
  },
  {
    q: "What's GEO — Generative Engine Optimization?",
    a: "People don't just search anymore. They ask. ChatGPT, Perplexity, Claude, Google AI Overviews — these systems generate answers, and they pull from content they can understand and trust. GEO is the practice of structuring your content and website so AI systems actually cite you in those answers. Traditional SEO gets you ranked in search results. GEO gets you mentioned inside the answer itself.",
  },
  {
    q: 'Do you build Shopify stores?',
    a: "Yes — but we call it Shopify engineering, not 'store building'. We build custom Shopify storefronts, headless Shopify experiences, and AI-powered commerce systems. Abandoned cart automations, inventory workflows, AI customer support agents wired into your Shopify backend, Shopify SEO. If you sell online and want your store to actually perform — technically and commercially — that's what we do.",
  },
  {
    q: 'How is MeghRoop different from a web agency?',
    a: "Two people. No account managers. No handoffs. You talk directly to the engineers building your product. We're not a massive agency and not trying to be one. We specialize in AI-first systems and modern web — not templates, not no-code tools. If we build it, we built all of it.",
  },
  {
    q: 'Do you work with clients outside India?',
    a: 'Yes. Based in India, working everywhere. US, UK, Europe, Southeast Asia — we work async across time zones and keep communication direct. Sometimes a timezone difference means you wake up to finished work. Not the worst thing.',
  },
  {
    q: 'How do I get started?',
    a: "Just reach out. Email hello@meghroop.com or use the contact form. Tell us what you're building or what's broken. We reply within 24 hours — usually much sooner. No discovery calls before a discovery call. Just a real conversation.",
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
              href="mailto:hello@meghroop.com"
              className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2"
            >
              hello@meghroop.com
            </a>{' '}
            — we actually read those.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
