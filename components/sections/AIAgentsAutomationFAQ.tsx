'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import ObfuscatedEmail from '@/components/common/ObfuscatedEmail'

const faqs = [
  {
    q: 'What exactly is an AI agent?',
    a: "An AI agent is an autonomous system that can think, plan, and execute tasks. Unlike a chatbot that just responds, an agent can reason about a problem, use tools to gather information, make decisions, and take actions across your systems. It's software that actually works without being told every step.",
  },
  {
    q: 'How are AI agents different from automation platforms like n8n?',
    a: "n8n is a workflow automation tool — great for connecting APIs and automating repetitive processes. AI agents add intelligence on top of that. They can reason about what to do next, handle unexpected situations, and make judgment calls. n8n is the plumbing. Agents are the thinking. We often combine both for best results.",
  },
  {
    q: 'What can an AI agent actually do?',
    a: "Anything that involves thinking and action. Customer support (reading tickets, finding answers, resolving issues), sales outreach (qualifying leads, writing personalized emails, following up), operations (data entry, reporting, scheduling), research (browsing, extracting, synthesizing information), commerce workflows. If a human does it repetitively, an agent probably can too.",
  },
  {
    q: 'How is this different from ChatGPT?',
    a: "ChatGPT is a chatbot — you ask it something, it answers. It can't access your systems, can't remember past conversations meaningfully, can't take actions. An AI agent is wired to your databases, APIs, and tools. It remembers context across sessions. It can do work, not just answer questions.",
  },
  {
    q: 'Will an AI agent hallucinate or make things up?',
    a: "Generic AI can hallucinate because it's just pattern matching without grounding. Our agents don't because they're wired to your real data via MCP servers. They can look things up. They have access to truth. If they don't know something, they say so. No made-up information.",
  },
  {
    q: 'What is MCP and why does it matter?',
    a: "MCP (Model Context Protocol) is the bridge between AI and your systems. It lets AI securely access your databases, CRMs, and APIs without hallucinating. Instead of guessing about customer data, the agent actually reads it. We build custom MCP servers that expose the right information to the AI.",
  },
  {
    q: 'How much does this cost?',
    a: "It varies. Simple automation systems (n8n workflows) might be €500-€2,000. Custom AI agents start around €5,000-€15,000 depending on complexity and integrations. Multi-agent systems with full MCP infrastructure go higher. Most projects pay for themselves in weeks or months through time saved. Email us specifics and we quote accurately.",
  },
  {
    q: 'How long does it take to build a working AI agent?',
    a: "A simple agent connected to one or two systems: 2-4 weeks. More complex multi-agent systems with full integrations: 6-12 weeks. We move fast and do real development, not template nonsense. The timeline depends on your specific needs, integrations, and testing requirements.",
  },
  {
    q: 'Can I use my existing tools and APIs?',
    a: "Yes. That's the whole point. We integrate with whatever you have — Shopify, Salesforce, Stripe, custom databases, internal APIs. If it has an endpoint or a database, we wire it. No rip-and-replace. We build on top of your existing infrastructure.",
  },
  {
    q: 'What about data privacy and security?',
    a: "Important questions. All your data stays in your systems. The AI never sees more than it needs to. We use fine-grained permissions, rate limiting, and audit logging. You maintain full control. If you need compliance (GDPR, etc), we build for that.",
  },
  {
    q: 'What happens if the agent makes a mistake?',
    a: "We design guardrails. High-stakes decisions get human review. Low-risk tasks run autonomously. The agent logs what it did so you can audit it. If it fails, there's error handling and fallback logic. Not fire-and-forget. Well-designed systems degrade gracefully.",
  },
  {
    q: 'Can I combine multiple agents to work together?',
    a: "Absolutely. Multi-agent systems are powerful. One agent might handle customer qualification, another does personalized outreach, another manages follow-ups. They share context and coordinate. More complex than single agents but way more powerful for big problems.",
  },
  {
    q: 'Do I need to be technical to use this?',
    a: "You don't need to code, but you do need to understand your business process deeply. We'll ask lots of questions about how work actually flows through your company. The more detailed you can be, the better the system. We handle the technical work.",
  },
  {
    q: 'What if I want to add more agents later?',
    a: "Easy. We build the infrastructure so you can expand. First agent might be customer support. Second could be sales outreach. Third could be operations. The foundation scales. And we can help with each new agent.",
  },
]

export default function AIAgentsAutomationFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding" aria-label="Frequently asked questions about AI agents and automation">
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
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Questions people actually ask
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Things worth{' '}
            <span className="gradient-text">actually answering.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Questions about AI agents, automation, MCP servers, and how this all works. Answered like humans, not marketing copy.
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
                transition={{ duration: 0.4, delay: i * 0.02 }}
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

        {/* CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] text-center"
        >
          <p className="text-sm text-gray-500 mb-1">More specific questions?</p>
          <p className="text-white font-semibold mb-3">We actually read emails. Not auto-reply bots.</p>
          <p className="text-sm text-gray-400">
            Email{' '}
            <ObfuscatedEmail className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2" />{' '}
            — we&apos;ll answer thoughtfully.
          </p>
        </motion.div>

        {/* Semantic content for SEO and AI crawlers */}
        <p className="sr-only">
          Frequently asked questions about AI agents and automation cover: what is an AI agent, differences between AI agents and
          automation platforms like n8n, capabilities of AI agents including customer support and sales, differences from ChatGPT,
          hallucination prevention via MCP servers and real data access, Model Context Protocol, pricing and timelines, integration
          with existing tools and APIs, data privacy and security, error handling and guardrails, multi-agent systems, technical
          requirements, scalability and expansion of agent systems. MeghRoop builds custom AI agents using GPT-4o, Claude, and
          Gemini, with MCP server integration, vector database memory, and production-grade infrastructure.
        </p>
      </div>
    </section>
  )
}
