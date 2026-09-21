'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

interface FAQ {
  q: string
  a: string
}

export default function ProductFAQ({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={i} className="rounded-2xl border border-white/[0.08] overflow-hidden">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              aria-expanded={isOpen}
            >
              <span className="text-sm sm:text-base font-semibold text-white">{f.q}</span>
              <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/[0.06] flex items-center justify-center text-white/60">
                {isOpen ? <Minus size={14} /> : <Plus size={14} />}
              </span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <p className="px-5 sm:px-6 pb-6 text-sm text-white/[0.6] leading-relaxed border-t border-white/[0.06] pt-4">
                {f.a}
              </p>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}
