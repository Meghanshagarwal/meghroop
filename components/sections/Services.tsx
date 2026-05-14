'use client'

import { motion, type Variants } from 'framer-motion'
import {
  Code2, Layers, Globe, Palette, Zap, Plug, Smartphone, Sparkles,
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description:
      'End-to-end web application development — from database design to polished frontend, we own the entire stack.',
    gradient: 'from-purple-600/30 to-blue-600/30',
    iconColor: 'text-purple-400',
    borderHover: 'hover:border-purple-500/40',
    span: 'md:col-span-2',
    tag: 'Most Popular',
  },
  {
    icon: Layers,
    title: 'React & Next.js',
    description:
      'Blazing-fast, SEO-friendly apps with the modern React ecosystem.',
    gradient: 'from-blue-600/30 to-cyan-600/30',
    iconColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/40',
    span: 'md:col-span-1',
  },
  {
    icon: Globe,
    title: 'WordPress Development',
    description:
      'Custom themes, plugins, and headless WordPress setups that perform.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40',
    span: 'md:col-span-1',
  },
  {
    icon: Palette,
    title: 'UI/UX Implementation',
    description:
      'Pixel-perfect implementation of your Figma designs with smooth interactions.',
    gradient: 'from-pink-600/30 to-rose-600/30',
    iconColor: 'text-pink-400',
    borderHover: 'hover:border-pink-500/40',
    span: 'md:col-span-1',
  },
  {
    icon: Zap,
    title: 'Website Optimization',
    description:
      'Core Web Vitals, performance tuning, and SEO improvements for measurable results.',
    gradient: 'from-amber-600/30 to-orange-600/30',
    iconColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/40',
    span: 'md:col-span-2',
    tag: 'Performance',
  },
  {
    icon: Plug,
    title: 'API Integration',
    description:
      'Connect your app to any third-party service — payment gateways, CRMs, and more.',
    gradient: 'from-violet-600/30 to-purple-600/30',
    iconColor: 'text-violet-400',
    borderHover: 'hover:border-violet-500/40',
    span: 'md:col-span-1',
  },
  {
    icon: Smartphone,
    title: 'Responsive Web Design',
    description:
      'Mobile-first layouts that look flawless on every screen size and device.',
    gradient: 'from-cyan-600/30 to-blue-600/30',
    iconColor: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40',
    span: 'md:col-span-1',
  },
  {
    icon: Sparkles,
    title: 'Modern Web Experiences',
    description:
      'Interactive animations, micro-interactions, and immersive motion design that captivate users.',
    gradient: 'from-indigo-600/30 to-violet-600/30',
    iconColor: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/40',
    span: 'md:col-span-2',
    tag: 'New',
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

export default function Services() {
  return (
    <section id="services" className="section-padding">
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
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            What We Do
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Services that{' '}
            <span className="gradient-text">scale with you</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From concept to deployment, we handle every layer of your digital product.
          </p>
        </motion.div>

        {/* Bento Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={item}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={`${service.span} relative rounded-2xl border border-white/[0.08] ${service.borderHover} overflow-hidden group cursor-default transition-all duration-300`}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-[#0a0a0a]" />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors duration-300">
                      <Icon size={22} className={service.iconColor} />
                    </div>
                    {service.tag && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-gray-400">
                        {service.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:gradient-text transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
