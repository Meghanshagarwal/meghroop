'use client'

import { motion } from 'framer-motion'
import { MessagesSquare } from 'lucide-react'

export default function AboutHuman() {
  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden bg-white/[0.01] border-y border-white/[0.04]" aria-label="Relatable Human Moment">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Decorative central icon */}
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8 text-gray-400">
          <MessagesSquare size={16} />
        </div>

        {/* Narrative bullet points formatted elegantly */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3 p-6 rounded-2xl border border-white/[0.04] bg-[#050505]/40"
          >
            <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
              01 // Technical Patience
            </h3>
            <p className="font-heading font-bold text-lg sm:text-xl text-white leading-snug">
              &ldquo;Yes, we read unnecessarily long project briefs.&rdquo;
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              We appreciate details. The more context you provide about database schemas, API scopes, and operational bottlenecks, the cleaner the final architecture will be.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3 p-6 rounded-2xl border border-white/[0.04] bg-[#050505]/40"
          >
            <h3 className="text-xs font-mono text-purple-400 uppercase tracking-widest">
              02 // Direct Communication
            </h3>
            <p className="font-heading font-bold text-lg sm:text-xl text-white leading-snug">
              &ldquo;Sometimes a quick call is faster than 17 emails.&rdquo;
            </p>
            <p className="text-xs text-gray-500 leading-relaxed">
              We prefer transparent talk. If you have an experimental concept, we can hop on a rapid sandbox session and map the technical parameters in minutes.
            </p>
          </motion.div>

        </div>

        {/* Quietly confident subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-xs font-mono text-gray-500 max-w-lg mx-auto leading-relaxed"
        >
          Most ideas start in tabs that probably shouldn&apos;t still be open. Let&apos;s close them and build something that works.
        </motion.p>

      </div>
    </section>
  )
}
