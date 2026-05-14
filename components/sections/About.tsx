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
            Meet Meghansh &amp; Roop — a tight-knit two-person team that moves fast, communicates clearly, and ships quality digital products.
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
            sub="Shipping quality since 2022"
            gradient="from-purple-500/20 to-blue-500/20"
            iconColor="text-purple-400"
          />

          {/* Stat — Projects */}
          <StatCard
            icon={Rocket}
            value="30+"
            label="Projects Delivered"
            sub="Startups to enterprises"
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

            <div className="relative z-10 p-6 h-full flex flex-col justify-between gap-5">
              {/* Top row */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center mb-4">
                    <Users size={20} className="text-cyan-400" />
                  </div>
                  <div className="font-heading font-bold text-5xl text-white mb-1">2</div>
                  <div className="text-sm font-semibold text-white/70">Core Team Members</div>
                </div>
                <div className="flex gap-2 mt-1">
                  {[
                    { initial: 'M', gradient: 'from-purple-500 to-violet-600' },
                    { initial: 'R', gradient: 'from-cyan-500 to-blue-600' },
                  ].map(({ initial, gradient }) => (
                    <div
                      key={initial}
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center font-heading font-bold text-white text-sm shadow-lg`}
                    >
                      {initial}
                    </div>
                  ))}
                </div>
              </div>

              {/* Member profiles */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3">
                  <div className="text-xs font-semibold text-purple-400 mb-1">Meghansh</div>
                  <div className="text-xs text-gray-500 leading-relaxed">
                    Full stack developer &amp; UI architect. Obsessed with performance, clean code, and pixel-perfect interfaces.
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {['React', 'Next.js', 'UI/UX'].map(t => (
                      <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3">
                  <div className="text-xs font-semibold text-cyan-400 mb-1">Roop</div>
                  <div className="text-xs text-gray-500 leading-relaxed">
                    Backend engineer &amp; systems thinker. Builds robust APIs, databases, and scalable architectures that just work.
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {['Node.js', 'MongoDB', 'APIs'].map(t => (
                      <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom */}
              <p className="text-xs text-gray-500 leading-relaxed">
                No middlemen, no account managers. When you work with MeghRoop, you talk directly to the people building your product — from the first brief to the final deploy.
              </p>
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

            <div className="relative z-10 p-6 h-full flex flex-col justify-between gap-5">
              {/* Top */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center mb-4">
                    <Code2 size={20} className="text-emerald-400" />
                  </div>
                  <div className="font-heading font-bold text-5xl text-white mb-1">15+</div>
                  <div className="text-sm font-semibold text-white/70">Technologies mastered</div>
                </div>
                <div className="flex flex-col gap-1 items-end mt-1">
                  {['Frontend', 'Backend', 'Tools'].map((cat) => (
                    <span key={cat} className="text-[10px] px-2 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">{cat}</span>
                  ))}
                </div>
              </div>

              {/* Categorised stack */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    label: 'Frontend',
                    color: 'text-blue-400',
                    border: 'border-blue-500/20',
                    bg: 'bg-blue-500/10',
                    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
                  },
                  {
                    label: 'Backend',
                    color: 'text-emerald-400',
                    border: 'border-emerald-500/20',
                    bg: 'bg-emerald-500/10',
                    techs: ['Node.js', 'Express', 'REST API', 'MongoDB', 'PostgreSQL'],
                  },
                  {
                    label: 'Tools & CMS',
                    color: 'text-purple-400',
                    border: 'border-purple-500/20',
                    bg: 'bg-purple-500/10',
                    techs: ['WordPress', 'Git', 'Vercel', 'Figma', 'Stripe'],
                  },
                ].map(({ label, color, border, bg, techs }) => (
                  <div key={label} className={`rounded-xl border ${border} ${bg.replace('10', '5')} p-3`}>
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
          />

          {/* Stat — Support */}
          <StatCard
            icon={Zap}
            value="24h"
            label="Avg. Response Time"
            sub="We reply fast, always"
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
