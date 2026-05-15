'use client'

import { motion, type Variants } from 'framer-motion'

const aiTechs = [
  { name: 'OpenAI', icon: '⬡', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  { name: 'Claude AI', icon: '◈', color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
  { name: 'LangChain', icon: '⛓', color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
  { name: 'n8n', icon: '⚡', color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' },
  { name: 'MCP Servers', icon: '◉', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  { name: 'AI Agents', icon: '🤖', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  { name: 'Vector DBs', icon: '◆', color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
  { name: 'RAG Systems', icon: '◈', color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
]

const webTechs = [
  { name: 'React.js', icon: '⚛', color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20' },
  { name: 'Next.js', icon: '▲', color: 'text-white', bg: 'bg-white/5', border: 'border-white/10' },
  { name: 'Node.js', icon: '⬡', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
  { name: 'TypeScript', icon: 'TS', color: 'text-blue-300', bg: 'bg-blue-500/10', border: 'border-blue-400/20' },
  { name: 'Tailwind CSS', icon: '◈', color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/20' },
  { name: 'Framer Motion', icon: '◉', color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
  { name: 'PostgreSQL', icon: '🐘', color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
  { name: 'MongoDB', icon: '🌿', color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
  { name: 'WordPress', icon: 'W', color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { name: 'Docker', icon: '🐳', color: 'text-blue-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
  { name: 'Supabase', icon: '⚡', color: 'text-teal-400', bg: 'bg-teal-500/10', border: 'border-teal-500/20' },
  { name: 'GraphQL', icon: '◈', color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
]


const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

function TechCard({ tech }: { tech: typeof aiTechs[0] }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.06, transition: { duration: 0.15 } }}
      className={`relative rounded-2xl border ${tech.border} ${tech.bg} p-4 flex flex-col items-center gap-3 cursor-default group transition-all duration-300`}
    >
      <div className={`w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center font-heading font-bold text-lg ${tech.color}`}>
        {tech.icon}
      </div>
      <span className="text-xs text-gray-400 font-medium text-center group-hover:text-white transition-colors duration-200">
        {tech.name}
      </span>
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${tech.bg}`} />
    </motion.div>
  )
}

export default function TechStack() {
  return (
    <section id="tech" className="section-padding overflow-hidden">
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
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Tech Stack
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Tools we{' '}
            <span className="gradient-text">master</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            From AI frameworks to modern web infrastructure — we use the best tools for every layer of your system.
          </p>
        </motion.div>

        {/* AI Stack label */}
        <div className="hidden sm:flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-purple-400 uppercase tracking-widest">AI & Automation</span>
          <div className="flex-1 h-px bg-purple-500/20" />
        </div>

        {/* AI Tech Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden sm:grid grid-cols-4 md:grid-cols-8 gap-3 mb-10"
        >
          {aiTechs.map((tech) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </motion.div>

        {/* Web Stack label */}
        <div className="hidden sm:flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Web Development</span>
          <div className="flex-1 h-px bg-cyan-500/20" />
        </div>

        {/* Web Tech Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="hidden sm:grid grid-cols-4 md:grid-cols-6 gap-3"
        >
          {webTechs.map((tech) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </motion.div>

        {/* Marquee — mobile only */}
        <div className="sm:hidden space-y-3">
          {/* AI row */}
          <div className="relative overflow-hidden">
            <div className="flex gap-3 animate-marquee w-max">
              {[...aiTechs, ...aiTechs].map((tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className={`flex-shrink-0 rounded-xl border ${tech.border} ${tech.bg} px-3 py-2.5 flex items-center gap-2`}
                >
                  <span className={`font-heading font-bold text-sm ${tech.color}`}>{tech.icon}</span>
                  <span className="text-xs text-gray-400 whitespace-nowrap">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Web row */}
          <div className="relative overflow-hidden">
            <div className="flex gap-3 animate-marquee w-max" style={{ animationDirection: 'reverse' }}>
              {[...webTechs, ...webTechs].map((tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className={`flex-shrink-0 rounded-xl border ${tech.border} ${tech.bg} px-3 py-2.5 flex items-center gap-2`}
                >
                  <span className={`font-heading font-bold text-sm ${tech.color}`}>{tech.icon}</span>
                  <span className="text-xs text-gray-400 whitespace-nowrap">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
