'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'What is Shopify engineering, and how is it different from template agencies?',
    answer:
      'Shopify engineering is custom development built specifically for your store and business goals—not templates. We architect systems, optimize for conversion, and build automation infrastructure. Most Shopify agencies apply themes and call it done. We engineer modern ecommerce platforms.',
  },
  {
    question: 'Do you work with Shopify Plus stores?',
    answer:
      'Yes. We build for everything from small Shopify stores to enterprise Shopify Plus installations. Our architecture scales. For Plus, we implement advanced features: custom checkout, multi-currency, complex workflows, and high-volume automation.',
  },
  {
    question: 'What\'s the difference between Shopify, Hydrogen, and headless commerce?',
    answer:
      'Shopify is the platform. Hydrogen is Shopify\'s React framework for custom frontends. Headless means your frontend is completely separate from Shopify—you get Shopify\'s commerce backend with total frontend freedom. We build all three depending on your needs.',
  },
  {
    question: 'How long does a Shopify store build take?',
    answer:
      'Depends on complexity. Small custom stores: 6-8 weeks. Complex multi-feature platforms: 3-4 months. We work in phases—launch core quickly, add features iteratively. You\'re selling while we\'re optimizing.',
  },
  {
    question: 'Can you help with store migration from other platforms?',
    answer:
      'Yes. We migrate from Shopify to headless, from WooCommerce to Shopify, from BigCommerce to Shopify. We handle data migration, URL redirects, SEO preservation, and zero-downtime deployments.',
  },
  {
    question: 'Do you optimize stores for conversion?',
    answer:
      'Conversion optimization is core to everything we do. We design checkout flows for lower abandonment. We optimize product pages for higher AOV. We implement analytics frameworks for data-driven iteration. Performance, UX, and psychology all affect conversions.',
  },
  {
    question: 'How do you handle Shopify automation and integrations?',
    answer:
      'We use n8n for powerful workflow automation. We integrate with CRMs, email platforms, inventory systems, accounting software. Every integration is tested and monitored. Your store runs on automated workflows, not manual processes.',
  },
  {
    question: 'Can you improve my existing Shopify store?',
    answer:
      'Absolutely. We audit stores for performance, UX, and conversion issues. We implement improvements: custom sections, Liquid optimization, app rationalization, performance tuning, and checkout flow refinement. Many stores just need thoughtful optimization.',
  },
  {
    question: 'What about ongoing support and maintenance?',
    answer:
      'We don\'t disappear after launch. We offer monitoring, optimization, updates, and feature additions. We track Core Web Vitals. We catch and fix issues before customers notice. Your store improves over time.',
  },
  {
    question: 'How do you ensure SEO compatibility?',
    answer:
      'SEO is built in from day one. We implement structured data, optimize metadata, ensure mobile responsiveness, and maintain crawlability. Custom frontends need careful SEO work—we handle it all. Your store ranks in search.',
  },
]

const FAQItem = ({ faq, index }: { faq: { question: string; answer: string }; index: number }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="rounded-2xl border border-white/[0.08] overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 sm:p-6 flex items-start justify-between gap-4 hover:bg-white/[0.02] transition-colors duration-200"
      >
        <h3 className="font-heading font-bold text-left text-white text-base sm:text-lg">
          {faq.question}
        </h3>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t border-white/[0.08] px-6 py-4 sm:p-6"
        >
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
        </motion.div>
      )}
    </motion.div>
  )
}

export default function ShopifyEngineeringFAQ() {
  return (
    <section id="faq" className="section-padding" aria-label="Frequently asked questions about Shopify engineering">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
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
            Questions answered
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Common questions about{' '}
            <span className="gradient-text">Shopify engineering.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
            Everything you need to know about custom Shopify development, automation, and modern ecommerce systems.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* Semantic markup for SEO */}
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
      </div>
    </section>
  )
}
