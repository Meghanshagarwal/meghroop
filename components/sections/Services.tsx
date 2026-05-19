'use client'

import { motion, type Variants } from 'framer-motion'
import {
  Code2, Layers, ShoppingBag, Palette, Zap, Plug, Sparkles, Search, Store,
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description:
      'Database to deployment — we own the whole thing. No handoffs. No dropped context. No &ldquo;that&apos;s the other team&apos;s part.&rdquo; One team. One product. Shipped properly.',
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
      'The React ecosystem, used by people who actually read the docs. Fast by default. Optimized on purpose. Boring in the best possible way.',
    gradient: 'from-blue-600/30 to-cyan-600/30',
    iconColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/40',
    span: 'md:col-span-1',
  },
  {
    icon: ShoppingBag,
    title: 'Shopify Engineering',
    description:
      'Not "building a store". Engineering a commerce system. Custom Shopify storefronts, headless setups, AI-powered automation — abandoned cart flows, inventory triggers, order ops — all wired into your backend. Fast websites are nice. Fast stores make money.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40',
    span: 'md:col-span-2',
    tag: 'Commerce',
  },
  {
    icon: Store,
    title: 'Intelligent Commerce Systems',
    description:
      'Shopify + AI. Abandoned carts recovered automatically. Inventory managed without spreadsheets. Customer support that actually resolves. Commerce that runs itself — mostly.',
    gradient: 'from-teal-600/30 to-cyan-600/30',
    iconColor: 'text-teal-400',
    borderHover: 'hover:border-teal-500/40',
    span: 'md:col-span-1',
    tag: 'AI-Powered',
  },
  {
    icon: Palette,
    title: 'UI/UX Implementation',
    description:
      'Your Figma file, brought to life without excuses. The micro-interactions your designer annotated as &ldquo;just a vibe&rdquo; — we build those too.',
    gradient: 'from-pink-600/30 to-rose-600/30',
    iconColor: 'text-pink-400',
    borderHover: 'hover:border-pink-500/40',
    span: 'md:col-span-1',
  },
  {
    icon: Plug,
    title: 'API Integration',
    description:
      'Stripe, Shopify APIs, CRMs, AI APIs, webhooks, third-party everything. Has an endpoint? We wire it. Doesn&apos;t? We figure it out anyway.',
    gradient: 'from-violet-600/30 to-purple-600/30',
    iconColor: 'text-violet-400',
    borderHover: 'hover:border-violet-500/40',
    span: 'md:col-span-1',
  },
  {
    icon: Zap,
    title: 'Website Optimization',
    description:
      'Core Web Vitals you&apos;ll want to screenshot. Fast pages rank better, convert better, and make everyone less frustrated. Real gains from real profiling — not guesswork, not hope.',
    gradient: 'from-amber-600/30 to-orange-600/30',
    iconColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/40',
    span: 'md:col-span-1',
    tag: 'Performance',
  },
  {
    icon: Search,
    title: 'GEO & AI Search Optimization',
    description:
      "People don't just search anymore. They ask. We make sure your brand shows up in both places — the Google result, and the AI-generated answer that's slowly replacing it. Yes, that includes Shopify SEO.",
    gradient: 'from-rose-600/30 to-pink-600/30',
    iconColor: 'text-rose-400',
    borderHover: 'hover:border-rose-500/40',
    span: 'md:col-span-2',
    tag: 'AI-First',
  },
  {
    icon: Sparkles,
    title: 'Modern Web Experiences',
    description:
      'Some things deserve better than another template. Scroll-triggered reveals. Cinematic transitions. The motion that makes people stop mid-scroll and send the link to someone.',
    gradient: 'from-indigo-600/30 to-violet-600/30',
    iconColor: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/40',
    span: 'md:col-span-1',
    tag: 'Premium',
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
    <section id="services" className="section-padding" aria-label="Services offered by MeghRoop">
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
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Okay so what do you actually do?
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            From blank file{' '}
            <span className="gradient-text">to something people open twice.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Web, AI, automation, and everything that connects them. One team. No handoffs. No &ldquo;that&apos;s another department.&rdquo; We handle the whole thing.
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
                  <h3 className="font-heading font-bold text-lg text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{service.description}</p>
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Crawlable semantic summary — GEO signal for AI search discoverability */}
        <p className="sr-only">
          MeghRoop offers full stack web development, React and Next.js application development,
          Shopify development and Shopify engineering, headless Shopify storefronts, Shopify automation,
          AI-powered commerce systems, intelligent commerce automation, UI/UX implementation,
          API integration, website performance optimization, Shopify SEO, GEO and AI search optimization,
          and modern web experiences with cinematic motion design. MeghRoop is a Shopify development
          studio and AI engineering studio based in India, working with clients worldwide.
        </p>
      </div>
    </section>
  )
}
