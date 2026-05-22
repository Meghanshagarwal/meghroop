'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'What is the definition of a "custom digital system"?',
    answer: 'A custom digital system is a tailored backend and frontend solution built from the ground up to solve an operational or brand challenge. This includes Model Context Protocol context layers for AI, complex multi-tool automation pipelines, headless storefronts (like custom Shopify architectures), and highly optimized dashboards rather than generic themes.',
  },
  {
    question: 'How do you ensure AI systems do not make up records (hallucinate)?',
    answer: 'We secure AI workflows by implementing Model Context Protocol (MCP) servers. The MCP bridges AI models with real-world databases in real time, validating parameters against strict schema requirements and injecting grounded, verified data directly into the prompt envelope before processing.',
  },
  {
    question: 'Why choose headless Shopify over custom Liquid themes?',
    answer: 'Headless Shopify storefronts (built on Next.js) completely decouple the visual layer from Shopify\'s standard backend. This eliminates liquid loading latencies, enables custom React animations (via Framer Motion), and results in ultra-fast speeds (Lighthouse scores of 99+), raising checkout conversion rates.',
  },
  {
    question: 'What automation frameworks do you specialize in?',
    answer: 'We utilize n8n workflow cluster architectures for scalable, deterministic automations. This is paired with custom Node.js microservices and RESTful webhooks to synchronize CRMs, inventory data, transaction records, and active client logging safely.',
  },
  {
    question: 'How do you handle system failovers and operational scaling?',
    answer: 'We engineer absolute resilience into backends. All pipelines feature distributed container hosting (Docker), real-time tracing logs, synchronous message queues, and automated API retry triggers that route workflows to backup models if a crash occurs.',
  },
]

export default function SystemsFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  // Construct JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  }

  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden font-sans" aria-label="Frequently Asked Questions">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <HelpCircle size={12} className="text-purple-400" />
            Curated Answers
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            System & Engineering{' '}
            <span className="gradient-text-purple">questions, answered.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to know about custom AI workflows, headless architectures, and automation layers.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/[0.06] bg-[#050505] overflow-hidden hover:border-white/[0.1] transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 sm:py-6 flex items-center justify-between text-left gap-4 font-heading font-bold text-white text-base sm:text-lg hover:text-cyan-400 transition-colors"
                >
                  <span>{faq.question}</span>
                  <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-gray-400 flex-shrink-0">
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed font-sans border-t border-white/[0.04] pt-4">
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
    </section>
  )
}
