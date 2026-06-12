'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What are AI services and how are they different from AI tools?',
    a: 'AI services are end-to-end engagements — strategy, build, integration, deployment, and ongoing ops. AI tools are software licenses. Services are what you need when AI has to fit your workflow, your data, and the tools you already run.',
  },
  {
    q: 'How is this different from a big consultancy like Deloitte or Accenture?',
    a: "We actually build what we recommend. Our engagements end in production systems, not decks — and we're 30–60% of the cost because we're India-delivered with US-grade engineering.",
  },
  {
    q: 'Do you only work with our existing stack, or do we have to migrate?',
    a: 'We work with what you have. Most engagements extend your current tools (Salesforce, HubSpot, Zoho, Zendesk, SAP, Tally) rather than replacing them.',
  },
  {
    q: 'Who owns the code and the AI agents you build for us?',
    a: 'You do. Code, prompts, configs, data — all yours. We deliver clean handoff documentation on every project.',
  },
  {
    q: 'What AI models do you use — are we locked in?',
    a: 'No lock-in. We pick the model, framework, and cloud that fits your use case — and you can swap later without a rebuild.',
  },
  {
    q: 'How do you handle data security and compliance?',
    a: 'We deploy in your cloud (AWS/Azure/GCP/VPC) where required. We are GDPR-compliant and engineer each solution to meet the specific compliance requirements of your engagement (e.g. DPDP India). No training on your data.',
  },
  {
    q: "What's the typical engagement size and timeline?",
    a: 'Audits: 3–4 weeks, fixed fee. Builds: 4–12 weeks depending on complexity. Ongoing managed services available monthly.',
  },
  {
    q: 'Can you work with our internal team, or do you need to own the whole thing?',
    a: 'Both. We embed with internal teams or run end-to-end — depending on what you need. Clean handoff in either case.',
  },
]

export default function AgenticAIPageFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding" aria-label="Frequently asked questions about our AI services">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
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
            The questions we get most about AI services, ownership, security, and how we work. Answered directly, not
            as marketing copy.
          </p>
        </motion.div>

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
                transition={{ duration: 0.4, delay: i * 0.04 }}
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
                  <span className="text-sm sm:text-base text-white group-hover:text-white/90 transition-colors" itemProp="name">
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/[0.06] flex items-center justify-center transition-colors duration-200 group-hover:bg-white/[0.1]">
                    {isOpen ? <Minus size={16} className="text-gray-400" /> : <Plus size={16} className="text-gray-400" />}
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
      </div>
    </section>
  )
}
