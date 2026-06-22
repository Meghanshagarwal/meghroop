'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, Bot, Code2, ShoppingBag, Palette, Plus } from 'lucide-react'

const categories = [
  {
    icon: TrendingUp,
    title: 'Growth & Marketing',
    outcome: 'More qualified leads. Lower cost per acquisition. Predictable pipeline.',
    star: true,
    accent: 'text-[#c084fc]',
    items: [
      'Meta & Google Ads', 'SEO', 'Social Media Management', 'Content Creation',
      'Brand Marketing', 'Performance Marketing', 'Lead Gen Funnels',
      'Landing Pages', 'Conversion Optimization',
    ],
  },
  {
    icon: Bot,
    title: 'AI & Automation',
    outcome: 'Work that runs itself — leads qualified, follow-ups sent, hours given back.',
    accent: 'text-[#60a5fa]',
    items: [
      'AI Agents', 'n8n Automation', 'CRM Automation', 'WhatsApp Automation',
      'Workflow Automation', 'Lead Generation Systems',
    ],
  },
  {
    icon: Code2,
    title: 'Software Development',
    outcome: 'Products that ship, scale, and hold up under real users.',
    accent: 'text-emerald-400',
    items: [
      'Custom Software', 'SaaS Products', 'Web Applications',
      'Mobile Apps', 'Dashboards', 'APIs',
    ],
  },
  {
    icon: ShoppingBag,
    title: 'Shopify & WordPress',
    outcome: 'Stores and sites that load fast and convert faster.',
    accent: 'text-amber-400',
    items: [
      'Shopify Stores', 'Shopify Custom Apps', 'Headless Commerce',
      'WordPress Websites', 'Performance Optimization',
    ],
  },
  {
    icon: Palette,
    title: 'Branding & Creative',
    outcome: 'A brand people remember — and content that earns attention.',
    accent: 'text-pink-400',
    items: [
      'Brand Identity', 'Social Media Design', 'Video Editing',
      'Motion Graphics', 'Content Strategy', 'Creative Direction',
    ],
  },
]

export default function Services() {
  const [open, setOpen] = useState<number>(0)

  return (
    <section id="services" className="section-padding" aria-label="What MeghRoop offers">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-white/50 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc]" />
            What we do
          </div>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.05] tracking-tight max-w-2xl">
            Five ways we move{' '}
            <span className="gradient-text">the number that matters.</span>
          </h2>
        </motion.div>

        <div className="border-t border-white/[0.06]">
          {categories.map((cat, i) => {
            const Icon = cat.icon
            const isOpen = open === i
            return (
              <div key={cat.title} className="border-b border-white/[0.06]">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center gap-5 py-7 sm:py-8 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-sm text-[#52525b] tabular-nums w-8 flex-shrink-0">
                    0{i + 1}
                  </span>
                  <span className={`w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-white/[0.07]`}>
                    <Icon size={20} className={cat.accent} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="flex items-center gap-2.5">
                      <span className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight">
                        {cat.title}
                      </span>
                      {cat.star && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#c084fc]/15 text-[#c084fc] font-medium uppercase tracking-wider">
                          Priority
                        </span>
                      )}
                    </span>
                  </span>
                  <Plus
                    size={22}
                    className={`text-white/40 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45 text-white' : ''}`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-[5.25rem] pr-8 pb-9 -mt-1">
                        <p className="text-lg text-white/[0.7] max-w-xl mb-6 leading-relaxed">
                          {cat.outcome}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {cat.items.map((item) => (
                            <span
                              key={item}
                              className="text-[13px] px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-white/55"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
