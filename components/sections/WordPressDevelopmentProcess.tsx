'use client'

import { motion, type Variants } from 'framer-motion'
import { BookOpen, Layers as LayersIcon, Code2, Zap, Search, TrendingUp } from 'lucide-react'

const processSteps = [
  {
    icon: BookOpen,
    title: 'Content Strategy',
    description: 'Understand your content. Your audience. Your goals. How will people find and use your content? What experience matters most?',
    details: ['Audience research', 'Content audit', 'Goal mapping', 'Competitor analysis'],
  },
  {
    icon: LayersIcon,
    title: 'Information Architecture',
    description: 'Structure your content intelligently. Taxonomy, hierarchy, relationships. Systems that make sense to users and to search engines.',
    details: ['Content taxonomy', 'URL structure', 'Navigation design', 'Metadata strategy'],
  },
  {
    icon: Code2,
    title: 'CMS Engineering',
    description: 'Build WordPress as a system, not a tool. Custom post types, taxonomies, APIs, workflows. Infrastructure that supports your strategy.',
    details: ['Custom architectures', 'API design', 'Database optimization', 'Workflow automation'],
  },
  {
    icon: Zap,
    title: 'Frontend & UX',
    description: 'Modern interfaces powered by WordPress. React, Next.js, or headless architecture. Interfaces that feel intentional and perform beautifully.',
    details: ['Component systems', 'Responsive design', 'Interaction design', 'Animation & motion'],
  },
  {
    icon: Search,
    title: 'SEO Infrastructure',
    description: 'Content infrastructure engineered for discovery. Semantic HTML, schema markup, site architecture. Built for search and AI from day one.',
    details: ['Schema implementation', 'Technical SEO', 'Content optimization', 'Performance tuning'],
  },
  {
    icon: TrendingUp,
    title: 'Optimization & Scaling',
    description: 'Launch and learn. Monitor performance. Optimize based on real user data. Systems that grow and improve with your business.',
    details: ['Performance monitoring', 'A/B testing', 'Analytics integration', 'Continuous improvement'],
  },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function WordPressDevelopmentProcess() {
  return (
    <section className="section-padding overflow-hidden" aria-label="WordPress development process">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            How we work
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Our WordPress{' '}
            <span className="gradient-text">engineering workflow.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Not generic agency steps. Real WordPress engineering. From strategy to scale, we build systems that stay with you.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 sm:mb-16"
        >
          {processSteps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                variants={item}
                className="rounded-2xl border border-white/[0.08] hover:border-white/[0.15] overflow-hidden group bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center">
                    <Icon size={24} className="text-indigo-400" />
                  </div>
                  <span className="text-2xl font-heading font-bold text-indigo-400/50">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-xs text-gray-400">
                      <span className="w-1 h-1 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Timeline visualization */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl border border-white/[0.08] overflow-hidden bg-white/[0.02] p-8 sm:p-10"
        >
          <h3 className="font-heading font-bold text-white text-lg sm:text-xl mb-8">
            Timeline & engagement:
          </h3>
          <div className="space-y-6">
            {[
              {
                phase: 'Discovery',
                duration: '1-2 weeks',
                desc: 'Understanding your business, goals, and requirements. Not paperwork. Real conversations.',
              },
              {
                phase: 'Planning & Architecture',
                duration: '2-3 weeks',
                desc: 'Strategy, structure, technical architecture. Whiteboarding. Planning. Getting alignment.',
              },
              {
                phase: 'Development',
                duration: '4-8 weeks',
                desc: 'Building WordPress, frontend, automations. Iterative delivery. Regular demos.',
              },
              {
                phase: 'Optimization & Launch',
                duration: '1-2 weeks',
                desc: 'Performance tuning, SEO optimization, final testing. Ship with confidence.',
              },
              {
                phase: 'Support & Improvement',
                duration: 'Ongoing',
                desc: 'Maintenance, updates, monitoring. Your systems improve over time, not decay.',
              },
            ].map((phase, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400">
                    <span className="text-black text-xs font-bold">{idx + 1}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-baseline gap-4 mb-1">
                    <h4 className="font-heading font-bold text-white">{phase.phase}</h4>
                    <span className="text-xs text-gray-500">{phase.duration}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 sm:mt-16 rounded-2xl border border-white/[0.08] overflow-hidden bg-gradient-to-br from-indigo-600/5 to-purple-600/5 p-8 sm:p-10"
        >
          <h3 className="font-heading font-bold text-white text-lg mb-6">
            Our principles:
          </h3>
          <ul className="space-y-2">
            {[
              'Direct communication. No middlemen.',
              'Iterative delivery. You see progress weekly.',
              'Transparent timeline. You know the schedule and costs.',
              'Systems over shortcuts. Built to scale.',
              'Performance first. Core Web Vitals matter.',
              'SEO ready from day one.',
            ].map((principle) => (
              <li key={principle} className="flex items-start gap-3 text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0" />
                <span className="text-sm">{principle}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
