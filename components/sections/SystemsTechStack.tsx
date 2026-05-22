'use client'

import { motion } from 'framer-motion'
import { Layout, Server, Sliders } from 'lucide-react'

const stackGroups = [
  {
    title: 'Creative Frontends',
    icon: Layout,
    color: 'text-cyan-400',
    border: 'border-cyan-500/10',
    bg: 'group-hover:border-cyan-500/30',
    items: [
      { name: 'Next.js 14', desc: 'Pre-rendered static & dynamic routing runtime' },
      { name: 'React 18', desc: 'Component lifecycle & virtual mount management' },
      { name: 'Framer Motion', desc: 'GPU-accelerated hardware spring UI animation layers' },
      { name: 'Tailwind CSS', desc: 'Consistent utility-first token layout spacing' },
    ],
  },
  {
    title: 'Intelligent Backends',
    icon: Server,
    color: 'text-purple-400',
    border: 'border-purple-500/10',
    bg: 'group-hover:border-purple-500/30',
    items: [
      { name: 'Node.js & TypeScript', desc: 'Highly performant asynchronous operations runtime' },
      { name: 'Supabase / PostgreSQL', desc: 'Structured schema relational database index layers' },
      { name: 'Vector DB Cache', desc: 'Semantic contextual search memory matrices' },
      { name: 'Docker Containers', desc: 'Isolated system sandboxes for secure tools execution' },
    ],
  },
  {
    title: 'Workflow Integration',
    icon: Sliders,
    color: 'text-blue-400',
    border: 'border-blue-500/10',
    bg: 'group-hover:border-blue-500/30',
    items: [
      { name: 'n8n Workflows', desc: 'Visual cluster pipeline automation workflows' },
      { name: 'Shopify Storefront API', desc: 'Headless storefront data fetch logic integrations' },
      { name: 'Model Context Protocol', desc: 'Standard host-client database security bridges' },
      { name: 'Stripe Merchant Connect', desc: 'Secure custom server transaction nodes' },
    ],
  },
]

export default function SystemsTechStack() {
  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden bg-white/[0.01] border-y border-white/[0.04]" aria-label="Technology Stack Grouping">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Active Integrations
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            The technologies we weave <br className="hidden sm:inline" />
            <span className="gradient-text">to construct systems.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            We operate at the interface of creative expression and structural integrity. Every framework we use is selected for its performance, stability, and utility.
          </p>
        </div>

        {/* Tech Groups */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stackGroups.map((group, groupIdx) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: groupIdx * 0.1 }}
                className={`rounded-2xl border ${group.border} bg-[#050505] p-6 sm:p-8 flex flex-col justify-between group transition-colors duration-300 relative overflow-hidden cursor-default`}
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                      <Icon size={18} className={group.color} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white">{group.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {group.items.map((item) => (
                      <div key={item.name} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] group-hover:bg-white/[0.03] transition-colors duration-200">
                        <div className="text-sm font-semibold text-white mb-0.5">{item.name}</div>
                        <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
