'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What is AI search optimization (ASO)?',
    a: 'AI search optimization is building websites that are understood and ranked by AI systems—LLMs, AI search engines, and intelligent discovery systems. It goes beyond traditional SEO by focusing on semantic clarity, structured data, entity relationships, and systems that AI can actually comprehend.',
  },
  {
    q: 'How is AI SEO different from traditional SEO?',
    a: 'Traditional SEO optimized for search engines. AI SEO optimizes for AI understanding. Traditional SEO used keyword density and backlinks. AI SEO uses semantic meaning, structured data, and entity relationships. Traditional SEO ranked pages. AI SEO makes your site a source of truth for AI-generated answers.',
  },
  {
    q: 'What is GEO (Generative Engine Optimization)?',
    a: 'Generative Engine Optimization is optimizing for systems like ChatGPT, Claude, and other LLMs. It means structuring your content so it\'s more likely to be indexed by AI systems and more likely to be cited as a source when they generate answers.',
  },
  {
    q: 'Why do I need structured data and schema markup?',
    a: 'Structured data tells AI what your content means. Without it, AI has to guess. With JSON-LD and schema markup, you\'re saying explicitly: "This is a product, this is an article, this is a company, these are the relationships." This makes your content discoverable and usable by AI systems.',
  },
  {
    q: 'How does semantic SEO work?',
    a: 'Semantic SEO means building content and architecture around meaning, not keywords. If you\'re writing about "web development," semantic SEO means covering related topics, explaining relationships, and structuring content so AI understands the full context of what you\'re discussing.',
  },
  {
    q: 'What is entity SEO?',
    a: 'Entities are the "things" on the internet—people, brands, places, concepts. Entity SEO means defining and building your brand, service, or product as a clear entity. It means consistent naming, clear descriptions, and structured relationships to other entities.',
  },
  {
    q: 'How do AI crawlers work, and how do I optimize for them?',
    a: 'AI crawlers are systems that index content for LLMs and AI services. They look for semantic clarity, proper structure, and signals of authority. Optimize by having clean code, semantic HTML, proper robots.txt, JSON-LD markup, and making sure your site loads fast and is easily crawlable.',
  },
  {
    q: 'Will AI search optimization hurt my traditional SEO?',
    a: 'No. AI search optimization builds on technical SEO foundations. Everything that makes your site good for Google also makes it good for AI systems. Clean code, fast loading, semantic HTML, structured data—these all help everywhere. You\'re not choosing; you\'re building systems that work across all discovery channels.',
  },
  {
    q: 'How do I measure AI search visibility?',
    a: 'Track rankings in Google and other search engines (traditional metrics still matter). Monitor inclusion in LLM training data using tools like Perplexity, ChatGPT, and Google\'s new AI Overviews. Use Search Console to see queries and clicks. But focus on quality of visibility, not just quantity.',
  },
  {
    q: 'How long does AI search optimization take to show results?',
    a: 'Quick wins: 2-4 weeks (schema markup, technical fixes). Meaningful visibility: 2-3 months. Compounding results: 6+ months as your authority builds and semantic systems mature. It\'s not instant, but the results compound over time in ways traditional SEO doesn\'t.',
  },
]

export default function AISearchOptimizationFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding" aria-label="Frequently asked questions about AI search optimization">
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
            Questions about AI search optimization, semantic SEO, GEO, and how modern visibility actually works. Answered directly.
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
              Still have questions? Let&apos;s talk about how AI search optimization can help your site.
            </p>
            <p className="text-sm text-gray-500">
              Email us at <a href="mailto:hello@meghroop.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">hello@meghroop.com</a> or reach out using the contact form.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
