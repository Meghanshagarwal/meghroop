'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Code2, Zap, Layers } from 'lucide-react'

const features = [
  {
    title: 'API-First Architecture',
    description: 'WordPress serves content as data. JSON APIs, REST, GraphQL. Your frontend is completely free to be whatever you want.',
    icon: Code2,
  },
  {
    title: 'Decoupled Publishing',
    description: 'Content team uses WordPress. Developers build modern frontends. No plugin conflicts. No theme limitations. Pure separation of concerns.',
    icon: Layers,
  },
  {
    title: 'Frontend Freedom',
    description: 'React, Next.js, Vue, Astro—whatever. Pull WordPress data. Build cutting-edge interfaces. Deploy anywhere, instantly.',
    icon: Zap,
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

export default function WordPressHeadlessCMS() {
  return (
    <section className="section-padding overflow-hidden" aria-label="Headless WordPress and modern CMS architecture">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px]" />
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
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Headless & Modern Architecture
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            WordPress as{' '}
            <span className="gradient-text">content infrastructure.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Separate your content management from your frontend. WordPress powers the editorial system. Modern tech powers the experience. Best of both worlds.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 sm:mb-16"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={item}
                className="rounded-2xl border border-white/[0.08] hover:border-white/[0.15] overflow-hidden group bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 p-7"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center">
                    <Icon size={24} className="text-violet-400" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Diagram section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl border border-white/[0.08] overflow-hidden bg-white/[0.02] p-8 sm:p-10"
        >
          <h3 className="font-heading font-bold text-white text-lg sm:text-xl mb-6">
            How it works:
          </h3>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Content Management', desc: 'Your team manages content in WordPress. Editorial workflows, collaboration, scheduling.' },
              { step: '2', title: 'API Layer', desc: 'WordPress serves content via REST API or GraphQL. Clean, structured, queryable data.' },
              { step: '3', title: 'Frontend Apps', desc: 'Modern frontend frameworks consume the API. React, Next.js, Vue, Astro—anything works.' },
              { step: '4', title: 'Global Delivery', desc: 'Content cached globally. Frontends deploy to CDN. Instant updates when you publish.' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-black text-xs font-bold">{item.step}</span>
                </div>
                <div>
                  <h4 className="text-white font-heading font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why headless */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 sm:mt-16 rounded-2xl border border-white/[0.08] overflow-hidden bg-gradient-to-br from-violet-600/5 to-blue-600/5 p-8 sm:p-10"
        >
          <h3 className="font-heading font-bold text-white text-lg mb-4">
            Why go headless?
          </h3>
          <ul className="space-y-3">
            {[
              'Scale frontend independently from backend',
              'Use modern tech without WordPress theme limitations',
              'Better performance with edge-deployed frontends',
              'Easier to A/B test and iterate',
              'Multi-channel publishing (web, mobile, etc.)',
              'Team independence—editors and developers don\'t interfere',
            ].map((reason) => (
              <li key={reason} className="flex items-start gap-3 text-gray-400">
                <ArrowRight size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{reason}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
