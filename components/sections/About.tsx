'use client'

import { motion, type Variants } from 'framer-motion'
import { Users, Rocket, Clock, Star, Code2, Zap, CheckCircle2 } from 'lucide-react'

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            About Us
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            A studio built for{' '}
            <span className="gradient-text">results</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Meet Meghansh &amp; Roop — a tight-knit two-person team that moves fast, communicates clearly, and ships quality digital products.
          </p>
        </motion.div>

        {/* Bento Grid
            Mobile  (1-col xs, 2-col sm): stats half-width, wide cards full-width
            Desktop (4-col): Row1: [stat][stat][Team ×2]  Row2: [Tech ×2][stat][stat]
        */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {/* Stat — Years */}
          <StatCard
            icon={Clock}
            value="2+"
            label="Years Experience"
            sub="Shipping quality since 2022"
            gradient="from-purple-500/20 to-blue-500/20"
            iconColor="text-purple-400"
            bullets={['2022 — Studio founded', '2023 — 15+ projects', '2024 — 30+ projects']}
          />

          {/* Stat — Projects */}
          <StatCard
            icon={Rocket}
            value="30+"
            label="Projects Delivered"
            sub="Startups to enterprises"
            gradient="from-blue-500/20 to-cyan-500/20"
            iconColor="text-blue-400"
            bullets={['Corporate websites', 'SaaS & web apps', 'E-commerce & booking']}
          />

          {/* Wide card — Team (full width on mobile, 2-col on desktop) */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            className="col-span-2 md:col-span-2 relative rounded-2xl overflow-hidden group cursor-default"
          >
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 to-purple-500/15" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }} />

            <div className="relative z-10 p-5 sm:p-6 h-full flex flex-col justify-between gap-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center mb-4">
                    <Users size={20} className="text-cyan-400" />
                  </div>
                  <div className="font-heading font-bold text-4xl sm:text-5xl text-white mb-1">2</div>
                  <div className="text-sm font-semibold text-white/70">Core Team Members</div>
                </div>
                <div className="flex gap-2 mt-1">
                  {[
                    { initial: 'M', gradient: 'from-purple-500 to-violet-600' },
                    { initial: 'R', gradient: 'from-cyan-500 to-blue-600' },
                  ].map(({ initial, gradient }) => (
                    <div
                      key={initial}
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center font-heading font-bold text-white text-sm`}
                    >
                      {initial}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                  We&apos;re Meghansh &amp; Roop — two developers with a shared obsession for building beautiful, fast, and functional web experiences. No project managers, no handoffs. Just direct collaboration from idea to launch.
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

          {/* Wide card — Technologies (full width on mobile, 2-col on desktop) */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            className="col-span-2 md:col-span-2 relative rounded-2xl overflow-hidden group cursor-default"
          >
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 to-blue-500/15" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }} />

            <div className="relative z-10 p-5 sm:p-6 h-full flex flex-col justify-between gap-4 sm:gap-5">
              {/* Top */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center mb-4">
                    <Code2 size={20} className="text-emerald-400" />
                  </div>
                  <div className="font-heading font-bold text-4xl sm:text-5xl text-white mb-1">15+</div>
                  <div className="text-sm font-semibold text-white/70">Technologies mastered</div>
                </div>
                <div className="flex flex-col gap-1 items-end mt-1">
                  {['Frontend', 'Backend', 'Tools'].map((cat) => (
                    <span key={cat} className="text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">{cat}</span>
                  ))}
                </div>
              </div>

              {/* Categorised stack — 1 col on xs, 3 cols on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                {[
                  {
                    label: 'Frontend',
                    color: 'text-blue-400',
                    border: 'border-blue-500/20',
                    bg: 'bg-blue-500/[0.05]',
                    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
                  },
                  {
                    label: 'Backend',
                    color: 'text-emerald-400',
                    border: 'border-emerald-500/20',
                    bg: 'bg-emerald-500/[0.05]',
                    techs: ['Node.js', 'Express', 'REST API', 'MongoDB', 'PostgreSQL'],
                  },
                  {
                    label: 'Tools & CMS',
                    color: 'text-purple-400',
                    border: 'border-purple-500/20',
                    bg: 'bg-purple-500/[0.05]',
                    techs: ['WordPress', 'Git', 'Vercel', 'Figma', 'Stripe'],
                  },
                ].map(({ label, color, border, bg, techs }) => (
                  <div key={label} className={`rounded-xl border ${border} ${bg} p-3`}>
                    <div className={`text-[10px] font-semibold ${color} mb-2`}>{label}</div>
                    <ul className="space-y-1">
                      {techs.map((t) => (
                        <li key={t} className="flex items-center gap-1.5">
                          <CheckCircle2 size={10} className={color} />
                          <span className="text-[10px] text-gray-400">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">
                We pick the right tool for every job — not the trendiest one. Our stack is chosen for performance, reliability, and developer experience.
              </p>
            </div>
          </motion.div>

          {/* Stat — Satisfaction */}
          <StatCard
            icon={Star}
            value="100%"
            label="Client Satisfaction"
            sub="Zero unhappy clients, ever"
            gradient="from-amber-500/20 to-orange-500/20"
            iconColor="text-amber-400"
            bullets={['5★ rated on every project', 'Long-term relationships', 'Repeat business rate: high']}
          />

          {/* Stat — Support */}
          <StatCard
            icon={Zap}
            value="24h"
            label="Avg. Response Time"
            sub="We reply fast, always"
            gradient="from-rose-500/20 to-pink-500/20"
            iconColor="text-rose-400"
            bullets={['Mon – Sat, 9AM – 9PM IST', 'WhatsApp & email support', 'Post-launch maintenance']}
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
  bullets,
}: {
  icon: React.ElementType
  value: string
  label: string
  sub: string
  gradient: string
  iconColor: string
  bullets?: string[]
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

      <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-between h-full gap-4">
        <div>
          <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center mb-3 sm:mb-4">
            <Icon size={20} className={iconColor} />
          </div>
          <div className="font-heading font-bold text-3xl sm:text-4xl text-white">{value}</div>
          <div className="text-xs sm:text-sm font-semibold text-white/70 mt-0.5">{label}</div>
          <div className="text-xs text-gray-500 mt-1">{sub}</div>
        </div>

        {bullets && (
          <ul className="space-y-1.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span className={`mt-[3px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${iconColor.replace('text-', 'bg-')} opacity-70`} />
                <span className="text-xs text-gray-500 leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}
