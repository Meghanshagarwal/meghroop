'use client'

import { motion, type Variants } from 'framer-motion'
import { Users, Rocket, Clock, Star, Code2, Zap } from 'lucide-react'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
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

        {/* Bento Grid — 4 columns on desktop
            Row 1: [stat] [stat] [Team — wide (2)]
            Row 2: [Technologies — wide (2)] [stat] [stat]
        */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {/* Stat — Years */}
          <StatCard
            icon={Clock}
            value="2+"
            label="Years Experience"
            sub="Since 2022"
            gradient="from-purple-500/20 to-blue-500/20"
            iconColor="text-purple-400"
          />

          {/* Stat — Projects */}
          <StatCard
            icon={Rocket}
            value="30+"
            label="Projects Delivered"
            sub="Across industries"
            gradient="from-blue-500/20 to-cyan-500/20"
            iconColor="text-blue-400"
          />

          {/* Wide card — Team (col-span-2) */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            className="md:col-span-2 relative rounded-2xl overflow-hidden group cursor-default"
          >
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 to-purple-500/15" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }} />

            <div className="relative z-10 p-6 h-full flex flex-col justify-between gap-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center mb-4">
                    <Users size={20} className="text-cyan-400" />
                  </div>
                  <div className="font-heading font-bold text-5xl text-white mb-1">2</div>
                  <div className="text-sm font-semibold text-white/70">Core Team Members</div>
                </div>
                <div className="flex gap-2 mt-1">
                  {['M', 'R'].map((initial) => (
                    <div
                      key={initial}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center font-heading font-bold text-white text-sm"
                    >
                      {initial}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  We&apos;re Megh &amp; Roop — two developers with a shared obsession for building beautiful, fast, and functional web experiences. No project managers, no handoffs, just direct collaboration from idea to launch.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Design', 'Frontend', 'Backend', 'Deployment'].map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.06] text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Wide card — Technologies (col-span-2) */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            className="md:col-span-2 relative rounded-2xl overflow-hidden group cursor-default"
          >
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 to-blue-500/15" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }} />

            <div className="relative z-10 p-6 h-full flex flex-col justify-between gap-4">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center mb-4">
                  <Code2 size={20} className="text-emerald-400" />
                </div>
                <div className="font-heading font-bold text-5xl text-white mb-1">15+</div>
                <div className="text-sm font-semibold text-white/70">Technologies in our stack</div>
              </div>

              <div>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  From pixel-perfect frontends to scalable backends — we work across the full modern web stack, choosing the right tool for every layer of your product.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'Tailwind', 'WordPress', 'Framer Motion'].map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stat — Satisfaction */}
          <StatCard
            icon={Star}
            value="100%"
            label="Client Satisfaction"
            sub="Every project, every time"
            gradient="from-amber-500/20 to-orange-500/20"
            iconColor="text-amber-400"
          />

          {/* Stat — Support */}
          <StatCard
            icon={Zap}
            value="24/7"
            label="Support"
            sub="Mon – Sat, always on"
            gradient="from-rose-500/20 to-pink-500/20"
            iconColor="text-rose-400"
          />
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({
  icon: Icon,
  value,
  label,
  sub,
  gradient,
  iconColor,
}: {
  icon: React.ElementType
  value: string
  label: string
  sub: string
  gradient: string
  iconColor: string
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      }}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
      className="relative rounded-2xl overflow-hidden group cursor-default"
    >
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-40`} />
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="absolute inset-0 rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }} />

      <div className="relative z-10 p-6 flex flex-col gap-3">
        <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center">
          <Icon size={20} className={iconColor} />
        </div>
        <div>
          <div className="font-heading font-bold text-4xl text-white">{value}</div>
          <div className="text-sm font-semibold text-white/70 mt-0.5">{label}</div>
          <div className="text-xs text-gray-500 mt-1">{sub}</div>
        </div>
      </div>
    </motion.div>
  )
}
