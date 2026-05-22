'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const reflections = [
  '“Sometimes the best ideas arrive at 2AM.”',
  '“Good projects usually begin with curiosity.”',
  '“Yes, we actually read project briefs.”',
  '“Great codebases are written with emotional intention.”',
]

export default function ContactHumanMoment() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reflections.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" aria-label="Human Reflections">
      {/* Decorative center grid lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Animated quote layout */}
        <div className="min-h-[120px] flex items-center justify-center flex-col">
          <AnimatePresence mode="wait">
            <motion.h3
              key={index}
              initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-light text-2xl sm:text-3xl md:text-4xl text-gray-300 tracking-tight italic"
            >
              {reflections[index]}
            </motion.h3>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 flex justify-center items-center gap-1.5"
        >
          {reflections.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === index ? 'w-4 bg-cyan-400' : 'w-1 bg-white/[0.12] hover:bg-white/30'
              }`}
              aria-label={`Show reflection ${i + 1}`}
            />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
