'use client'

import { motion, type Variants } from 'framer-motion'
import { Users, Rocket, Clock, Star, Code2, Zap } from 'lucide-react'

const stats = [
  {
    icon: Clock,
    value: '2+',
    label: 'Years of Experience',
    description: 'Crafting digital experiences since 2022',
    gradient: 'from-purple-500/20 to-blue-500/20',
    iconColor: 'text-purple-400',
    span: 'col-span-1',
  },
  {
    icon: Rocket,
    value: '30+',
    label: 'Projects Completed',
    description: 'From startups to established businesses',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-400',
    span: 'col-span-1',
  },
  {
    icon: Users,
    value: '2',
    label: 'Core Team Members',
    description: 'Focused, dedicated, and passionate duo bringing your vision to life with precision and creativity',
    gradient: 'from-cyan-500/20 to-purple-500/20',
    iconColor: 'text-cyan-400',
    span: 'md:col-span-2',
    large: true,
  },
  {
    icon: Code2,
    value: '15+',
    label: 'Technologies',
    description: 'Modern stack, modern solutions',
    gradient: 'from-emerald-500/20 to-blue-500/20',
    iconColor: 'text-emerald-400',
    span: 'md:col-span-2',
    large: true,
  },
  {
    icon: Star,
    value: '100%',
    label: 'Client Satisfaction',
    description: 'Every client leaves happy',
    gradient: 'from-amber-500/20 to-orange-500/20',
    iconColor: 'text-amber-400',
    span: 'col-span-1',
  },
  {
    icon: Zap,
    value: '24/7',
    label: 'Support',
    description: 'Always available when you need us',
    gradient: 'from-rose-500/20 to-pink-500/20',
    iconColor: 'text-rose-400',
    span: 'col-span-1',
  },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            About Us
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            A studio built for{' '}
            <span className="gradient-text">results</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We&apos;re not a big agency. We&apos;re a tight-knit two-person team that moves fast, communicates clearly, and ships quality.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                variants={item}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={`${stat.span} relative rounded-2xl card-border overflow-hidden group cursor-default`}
              >
                {/* Gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-[#0a0a0a] group-hover:bg-[#0d0d0d] transition-colors duration-300" />
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-30`} />

                <div className={`relative z-10 p-6 ${stat.large ? 'flex items-center gap-6' : ''}`}>
                  <div className={`${stat.large ? 'flex-shrink-0' : 'mb-4'}`}>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center mb-4">
                      <Icon size={20} className={stat.iconColor} />
                    </div>
                    <div className="font-heading font-bold text-4xl text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-white/80">{stat.label}</div>
                  </div>
                  {stat.description && (
                    <p className="text-sm text-gray-500 leading-relaxed mt-2">
                      {stat.description}
                    </p>
                  )}
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(139, 92, 246, 0.3)' }}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
