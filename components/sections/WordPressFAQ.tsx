'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What\'s the difference between regular WordPress and your WordPress?',
    a: 'Most WordPress sites use themes, page builders, and plugins that weren\'t built together. Ours is engineered. Clean code, proper architecture, performance optimization, and semantic structure from the ground up. It\'s the difference between an assembled car and an engineered one.',
  },
  {
    q: 'What is headless WordPress and why would I want it?',
    a: 'Headless WordPress separates your content management from your frontend. WordPress powers your editorial system. A modern frontend (React, Next.js, etc.) powers the experience. You get editorial flexibility without theme limitations, and frontend developers can build whatever they want.',
  },
  {
    q: 'How do you ensure WordPress sites perform well?',
    a: 'Performance is architecture, not afterthought. We optimize images, cache strategically, minimize database queries, use global CDN delivery, and monitor Core Web Vitals continuously. We don\'t launch until Lighthouse scores are 95+. Performance degrades? We fix it before you notice.',
  },
  {
    q: 'How much does a WordPress project cost?',
    a: 'It depends on scope. A simple business site might be $15k–$30k. A publishing platform with custom workflows could be $40k–$100k+. A headless WordPress system could be anything depending on scale. We\'ll give you a clear estimate after understanding your project. No surprise bills.',
  },
  {
    q: 'How long does WordPress development take?',
    a: 'Most projects take 6–16 weeks from start to launch. Small sites: 4–6 weeks. Complex systems with automation: 8–16 weeks. We work iteratively, so you see progress weekly. The timeline depends on what you\'re building, not templates.',
  },
  {
    q: 'Will I be locked into WordPress?',
    a: 'No. With proper architecture, your content is portable. Structured data, clean APIs, semantic content. You can migrate or integrate with other systems if needed. We build for flexibility, not lock-in.',
  },
  {
    q: 'Can you migrate my existing WordPress site?',
    a: 'Yes. We audit your current site, optimize it, fix performance issues, improve SEO, or rebuild it on modern architecture. Migration is usually a good time to rethink structure and improve everything.',
  },
  {
    q: 'Do you provide ongoing support?',
    a: 'Yes. We support every site we build. Ongoing optimization, security updates, performance monitoring, feature additions. Your site improves over time, not decays. Maintenance plans start at $500–$1500/month depending on complexity.',
  },
  {
    q: 'How do you optimize WordPress for SEO?',
    a: 'Semantic HTML, schema markup, technical SEO baked in. Proper heading hierarchy, metadata optimization, content structure. Clean code means search engines understand your site better. Performance optimization too—Core Web Vitals are ranking factors.',
  },
  {
    q: 'Can you integrate WordPress with other tools?',
    a: 'Yes. CRMs, email platforms, analytics, payment processors, automation tools. WordPress as content infrastructure means it can connect to anything. Custom APIs, webhooks, and integrations are part of modern WordPress architecture.',
  },
]

export default function WordPressFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding" aria-label="Frequently asked questions about WordPress engineering">
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
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Questions people ask
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Things worth{' '}
            <span className="gradient-text">actually answering.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            The questions we get most about WordPress engineering, headless CMS, performance, and how we approach building modern publishing systems. Answered directly, not as marketing copy.
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
                    className="text-sm sm:text-base text-white group-hover:text-white/90 transition-colors"
                    itemProp="name"
                  >
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/[0.06] flex items-center justify-center transition-colors duration-200 group-hover:bg-white/[0.1]">
                    {isOpen ? (
                      <Minus size={16} className="text-gray-400" />
                    ) : (
                      <Plus size={16} className="text-gray-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 bg-white/[0.02] border-t border-white/[0.04]">
                        <p className="text-sm sm:text-base text-gray-400 leading-relaxed" itemProp="text">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA after FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 rounded-2xl border border-white/[0.08] overflow-hidden p-8 sm:p-10 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-blue-600/5" />
          <div className="relative z-10">
            <p className="text-gray-400 mb-4">
              Still have questions? Let&apos;s talk about what you&apos;re building.
            </p>
            <p className="text-sm text-gray-500">
              Email us at <a href="mailto:hello@meghroop.tech" className="text-cyan-400 hover:text-cyan-300 transition-colors">hello@meghroop.tech</a> or use the contact form below.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
