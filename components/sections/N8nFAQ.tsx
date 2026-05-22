'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What is n8n workflow automation?',
    a: 'n8n is a workflow automation platform that connects APIs and automates business processes. You can build workflows without writing code, connecting tools like CRMs, ecommerce platforms, databases, and communication systems. We use n8n to build custom automation infrastructure tailored to your business.',
  },
  {
    q: 'How is n8n different from other automation tools like Zapier?',
    a: 'n8n is open-source and self-hostable, giving you complete control over your automation infrastructure. You can build more complex workflows with branching logic and conditional execution. n8n scales better for enterprise use. Zapier is simpler but more limited. We choose n8n for businesses that need real automation infrastructure.',
  },
  {
    q: 'What can we automate with n8n?',
    a: 'Anything that involves connecting systems and processes. CRM automation, lead routing, customer onboarding, ecommerce order processing, internal approvals, reporting systems, data synchronization, customer support workflows, AI-enhanced decision making. If it involves moving data between systems or applying logic to information, we can automate it.',
  },
  {
    q: 'How does AI integration work in n8n workflows?',
    a: 'We embed AI models (OpenAI, Claude, etc.) into workflows at decision points. The AI reads context from your systems via MCP servers, understands the situation, and makes intelligent decisions. AI might classify leads, draft customer responses, determine routing, or analyze data. The AI is grounded in your real data, not hallucinating.',
  },
  {
    q: 'What is MCP and why does it matter for automation?',
    a: 'MCP (Model Context Protocol) is the bridge between AI and your systems. It lets AI safely access your databases, CRMs, and APIs without hallucinating. Instead of guessing, the AI reads truth from your data. We build custom MCP servers that expose the right information to the AI, with proper security and permissions.',
  },
  {
    q: 'How long does it take to build a custom n8n workflow?',
    a: 'Simple workflows (single integration, basic logic): 1-2 weeks. Medium workflows (multiple integrations, AI logic, error handling): 3-6 weeks. Complex systems (enterprise integration, multiple teams, full monitoring): 8-16 weeks. Timeline depends on complexity, integration requirements, and how much of your process needs to be understood first.',
  },
  {
    q: 'How much does n8n workflow automation cost?',
    a: 'Custom workflow development starts around €3,000-€5,000 for simple automations. Complex multi-step workflows with AI integration run €8,000-€25,000+. n8n infrastructure costs are separate (hosting, API calls). Most workflows pay for themselves in weeks through time saved. Email us details about what you need to automate and we provide accurate pricing.',
  },
  {
    q: 'Can we use existing tools and APIs?',
    a: 'Yes, absolutely. That\'s the entire point. We build on top of your existing infrastructure. Shopify, Salesforce, HubSpot, Stripe, custom databases, internal APIs. If it has an endpoint or database connection, we wire it in. No rip-and-replace. Just integration on top of what you have.',
  },
  {
    q: 'What about data privacy and security?',
    a: 'Critical. All your data stays in your systems. The automation just moves data between your systems. We use API authentication, encryption, and fine-grained permissions. You control what the automation can access. If you need compliance (GDPR, HIPAA, SOC2), we build for those requirements from day one.',
  },
  {
    q: 'What happens if an automation fails?',
    a: 'We build error handling into every workflow. If an API call fails, there\'s a retry mechanism. If that fails, there\'s fallback logic. High-stakes decisions get human review. The workflow logs exactly what happened so you can debug it. Not fire-and-forget. Reliable automation with visibility.',
  },
  {
    q: 'Can automations handle edge cases?',
    a: 'Yes, that\'s a big part of good automation design. We build conditional logic and error handling for edge cases. High-volume scenarios. Unusual data formats. Systems going down. Unexpected API responses. Good workflows degrade gracefully when things go wrong. They don\'t just stop.',
  },
  {
    q: 'Can I scale automations as my business grows?',
    a: 'That\'s the whole goal. We design workflows to scale. Adding more CRM records doesn\'t break anything. Processing 10,000 leads instead of 100 just runs longer. The architecture stays stable. Want to add a new integration? Easy. Want to add AI logic? Build that in. Systems designed to grow with you.',
  },
  {
    q: 'Do I need to be technical to use this?',
    a: 'You don\'t need to code, but you do need to understand your business process deeply. We ask lots of questions. Where does work start? Where does it need to go? What decisions get made? Who needs to be involved? The more clearly you can describe your process, the better the automation. We handle the technical build.',
  },
  {
    q: 'What support do you provide after launch?',
    a: 'We monitor your automations. We optimize based on performance. We fix issues. We help you make changes as your business evolves. We\'re not a deploy-and-forget agency. We build systems meant to last and improve over time.',
  },
  {
    q: 'How do we measure if automation is working?',
    a: 'Every workflow includes logging and monitoring. You can see how many times it ran, how many succeeded, where it failed. We build dashboards so you can track metrics. Time saved. Tasks completed. Errors prevented. Revenue impacted. You should be able to measure exactly what the automation delivers.',
  },
]

export default function N8nFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding" aria-label="Frequently asked questions about n8n automation">
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
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Questions people actually ask
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Things worth{' '}
            <span className="gradient-text">answering.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Questions about n8n workflows, automation systems, AI integration, and how this all works. Answered directly. No marketing speak.
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
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.02 }}
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full text-left p-5 md:p-6 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading font-semibold text-base md:text-lg text-white leading-tight">
                    {faq.q}
                  </h3>
                  <div className="flex-shrink-0 w-6 h-6 rounded-full border border-white/[0.2] flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                    {open === index ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </div>
                </div>

                <AnimatePresence>
                  {open === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Schema markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map(faq => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  )
}
