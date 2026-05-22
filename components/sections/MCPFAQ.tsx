'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'What is MCP (Model Context Protocol) and why does it matter?',
    answer: 'Model Context Protocol (MCP) is an open-source standard created to safely connect AI models directly to enterprise files, databases, and APIs. Previously, developers had to build messy, ad-hoc integrations for every unique model run. MCP defines a structured, secure gateway, enabling AI agents to query and write to internal databases reliably without hallucinating schemas.',
  },
  {
    question: 'How do context systems improve AI accuracy?',
    answer: 'AI hallucinations happen because models operate with incomplete context and guess details to fill the gap. Context systems bridge this gap by querying relational databases and semantic vector stores dynamically. By feeding the model grounded system truths and specific operational states mid-task, accuracy increases to near-100%, and errors are eliminated.',
  },
  {
    question: 'What is the difference between an MCP server and standard APIs?',
    answer: 'A standard API exposes data formats meant for traditional web consumers. An MCP server wraps those exact APIs in machine-digestible schemas that describe what the tool does, what parameters it accepts, and how models should parse outputs. It serves as an interpreter layer specifically designed for LLM context injection.',
  },
  {
    question: 'Is my data secure when using an MCP infrastructure?',
    answer: 'Absolutely. We architect our MCP servers with fine-grained authorization layers, strict parameter validation guardrails, and real-time request audits. The AI agent only accesses the narrow context scope it requires for that specific operation, and your primary database credentials are never exposed directly to external models.',
  },
  {
    question: 'How do memory-aware agents handle session states?',
    answer: 'We deploy persistent vector cache indexes and key-value state layers that store recent action histories and operational contexts. When an agent wakes up to execute a new workflow step, it queries its memory pool to recall what was done previously, escaping the amnesia loop that limits generic chat systems.',
  },
]

export default function MCPFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding relative overflow-hidden" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Common Inquiries
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Frequently Asked{' '}
            <span className="gradient-text">Questions.</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/[0.08] bg-[#0a0a0a] overflow-hidden group hover:border-white/[0.12] transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 sm:py-6 flex items-center justify-between text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 sm:text-lg">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/10 transition-colors duration-300">
                    {isOpen ? (
                      <Minus size={14} className="text-cyan-400" />
                    ) : (
                      <Plus size={14} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-sm sm:text-base text-gray-400 leading-relaxed border-t border-white/[0.05] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>

      {/* Structured data for SEO crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  )
}
