'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What is custom web development vs. using a template?',
    a: 'Templates are pre-built designs that fit lots of people okay but nobody perfectly. Custom development means your website is built specifically for your business, your goals, and your audience. It scales with you, performs better, and actually represents your brand instead of hiding it under generic design.',
  },
  {
    q: 'How is web engineering different from web design?',
    a: 'Web design focuses on how things look. Web engineering focuses on how things work, scale, and perform. We do both. Our designers understand code. Our engineers understand design. The result is websites that are both beautiful and built to last.',
  },
  {
    q: 'What is Next.js and why does it matter?',
    a: 'Next.js is a React framework that makes building fast, scalable web applications significantly easier. It gives us server-side rendering for SEO, static generation for performance, API routes built-in, and automatic code splitting. Basically, it lets us build better websites faster and ship them more reliably.',
  },
  {
    q: 'How do you ensure websites perform well?',
    a: 'Performance is baked into our architecture from day one. We optimize images, split code, cache strategically, and test against Core Web Vitals continuously. We don\'t ship websites until Lighthouse scores are 95+. Performance is part of the brand, not something we fix later.',
  },
  {
    q: 'What does UI/UX engineering mean?',
    a: 'UX is about how your website makes people feel. UI is how it looks and works. Engineering is building it to scale. UI/UX engineering means designing systems that are beautiful, intuitive, and built on clean, scalable code. Design systems, component libraries, and motion systems all work together.',
  },
  {
    q: 'Do you build mobile apps?',
    a: 'We focus on web. But modern web apps work great on mobile with responsive design. If you need a native app, we can help you think through it, but we specialize in web experiences that work beautifully everywhere.',
  },
  {
    q: 'How long does a typical web project take?',
    a: 'It depends on scope. A landing page might take 3–4 weeks. A full web application might take 2–3 months. We work iteratively, so you see progress throughout. The timeline is determined by what you\'re building, not by a fixed template.',
  },
  {
    q: 'Do you handle ongoing maintenance and updates?',
    a: 'Yes. We support the websites we build. Ongoing optimization, feature additions, performance monitoring, and security updates. Your website gets better over time, not abandoned after launch.',
  },
  {
    q: 'How do I get started?',
    a: 'Reach out. Tell us what you\'re building or what\'s not working with your current site. We\'ll have a real conversation about your goals, timeline, and budget. No discovery calls before we know if it\'s a fit. Just humans talking.',
  },
]

export default function WebEngineeringFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="section-padding" aria-label="Frequently asked questions about web engineering">
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
            The questions we get most about web engineering, custom development, and how we approach building. Answered directly, not as marketing copy.
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
