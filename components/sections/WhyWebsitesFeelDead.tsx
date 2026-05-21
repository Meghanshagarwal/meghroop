'use client'

import { motion } from 'framer-motion'

const reasons = [
  {
    title: 'Most websites look finished.',
    subtitle: 'Very few feel intentional.',
    description: 'There&apos;s a difference between built and designed. Built means functional. Designed means every choice matters.',
  },
  {
    title: 'Templates flatten personality.',
    subtitle: 'Your brand deserves better.',
    description: 'Generic layouts turn unique brands into look-alikes. Custom engineering is how identity survives.',
  },
  {
    title: 'Slow feels like disrespect.',
    subtitle: 'Speed matters more than we admit.',
    description: 'A one-second delay isn&apos;t just slower—it&apos;s a different experience. Performance is brand.',
  },
  {
    title: 'People remember experiences.',
    subtitle: 'Not layouts. Not designs. Experiences.',
    description: 'Your website lives in someone&apos;s memory. Make that memory sharp. Make it intentional.',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
})

export default function WhyWebsitesFeelDead() {
  return (
    <section id="why-dead" className="section-padding" aria-label="Why most websites feel dead and how we approach this differently">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            The truth about websites
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Why most websites{' '}
            <span className="gradient-text">feel dead.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            An opinionated take on why so many sites feel lifeless, generic, and forgettable. And why that doesn&apos;t have to be your fate.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="space-y-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              {...fadeUp(i * 0.1)}
              whileInView="animate"
              initial="initial"
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative rounded-2xl border border-white/[0.08] hover:border-red-500/40 overflow-hidden p-8 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="font-heading font-bold text-xl text-white mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">
                    <span className="text-white">{reason.subtitle}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 rounded-2xl border border-white/[0.08] overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-cyan-600/5" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-2xl text-white mb-6">
              How we build differently.
            </h3>
            <div className="space-y-4 text-gray-400">
              <p>
                <span className="text-white">We don&apos;t use templates.</span> Every project starts with strategy. Who is your audience? What do they actually care about? What should they feel when they land on your site?
              </p>
              <p>
                <span className="text-white">We build for performance.</span> A beautiful website that&apos;s slow is just a pretty loading screen. We optimize from day one. Code is clean. Assets are optimized. Every interaction is smooth.
              </p>
              <p>
                <span className="text-white">We build custom systems.</span> Not just pages. Design systems. Motion systems. Component libraries. Code that scales with your business, not against it.
              </p>
              <p>
                <span className="text-white">We care about details.</span> The hover state that nobody asked for. The loading animation that makes you smile. The footer that makes as much sense as the hero. The kind of attention that makes your website feel different.
              </p>
              <p>
                The result? Websites that don&apos;t feel finished. They feel intentional. Your brand isn&apos;t just expressed—it&apos;s embodied. And people remember it.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
