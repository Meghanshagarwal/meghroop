'use client'

import { motion, type Variants } from 'framer-motion'
import { Globe, Shield, Network, Link2 } from 'lucide-react'

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const entities = [
  {
    icon: Globe,
    title: 'Brand Entities',
    description: 'Your company is an entity. It has a name, description, logo, and story. Structure it so AI knows exactly who you are.',
    gradient: 'from-cyan-600/30 to-blue-600/30',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Shield,
    title: 'Digital Trust & E-E-A-T',
    description: 'Experience, Expertise, Authoritativeness, Trustworthiness. Build signals that establish you as a credible source.',
    gradient: 'from-blue-600/30 to-sky-600/30',
    iconColor: 'text-blue-400',
  },
  {
    icon: Network,
    title: 'Knowledge Graphs',
    description: 'Connect entities logically. Your brand connects to topics, services, locations, and people. Build a web AI can traverse.',
    gradient: 'from-purple-600/30 to-violet-600/30',
    iconColor: 'text-purple-400',
  },
  {
    icon: Link2,
    title: 'Cross-Platform Consistency',
    description: 'Same name, description, and branding across your website, socials, directories, and profiles. Consistency signals authority.',
    gradient: 'from-pink-600/30 to-rose-600/30',
    iconColor: 'text-pink-400',
  },
]

function EntityCard({ entity }: { entity: typeof entities[0] }) {
  const Icon = entity.icon
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative rounded-2xl border border-white/[0.08] overflow-hidden p-6 sm:p-7 group cursor-default transition-all duration-300 hover:border-white/[0.12]`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${entity.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-xl bg-white/[0.08] flex items-center justify-center mb-4 group-hover:bg-white/[0.12] transition-colors duration-200`}>
          <Icon size={24} className={`${entity.iconColor} group-hover:scale-110 transition-transform duration-200`} />
        </div>
        <h3 className="font-heading font-bold text-lg text-white mb-2">
          {entity.title}
        </h3>
        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200 leading-relaxed">
          {entity.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function AISearchOptimizationEntity() {
  return (
    <section id="entity-seo" className="section-padding" aria-label="Entity SEO and brand systems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Brand architecture
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Entity SEO &{' '}
            <span className="gradient-text">brand systems.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Your brand is more than a website. It&apos;s an entity in the AI-powered internet. Build systems that establish who you are across every discovery channel.
          </p>
        </motion.div>

        {/* Entity Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
        >
          {entities.map((entity) => (
            <EntityCard key={entity.title} entity={entity} />
          ))}
        </motion.div>

        {/* Why it matters */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 rounded-2xl border border-white/[0.08] overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-blue-600/5" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-lg text-white mb-3">
              Why entity SEO is the future of brand visibility.
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Google and other AI systems now treat brands as entities. They track your presence across platforms, verify your information, and build a digital identity of who you are. When your brand is consistent, well-documented, and semantically clear across all touchpoints, you become more discoverable, more trusted, and more likely to appear in AI-generated answers about topics related to your space.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
