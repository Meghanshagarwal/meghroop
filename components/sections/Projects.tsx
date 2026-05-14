'use client'

import { motion, type Variants } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const projects = [
  {
    title: 'Corporate Business Website',
    description:
      'A premium corporate website with sophisticated design, smooth animations, and strong SEO foundation for a B2B company.',
    gradient: 'from-purple-600 via-violet-600 to-blue-600',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
    accent: 'border-purple-500/30',
    mockup: 'CORP',
  },
  {
    title: 'Sports Court Booking Platform',
    description:
      'Full-stack booking platform with real-time availability, payment integration, and admin dashboard for sports facility management.',
    gradient: 'from-blue-600 via-cyan-600 to-teal-600',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    accent: 'border-blue-500/30',
    mockup: 'BOOK',
  },
  {
    title: 'Coffee Shop Website',
    description:
      'Elegant brand-focused website for a premium coffee shop with animated menu, location finder, and loyalty program integration.',
    gradient: 'from-amber-600 via-orange-600 to-red-600',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'CMS'],
    liveUrl: '#',
    githubUrl: '#',
    accent: 'border-amber-500/30',
    mockup: 'CAFÉ',
  },
  {
    title: 'Modern Business Website',
    description:
      'Conversion-optimized business website with interactive UI, CRM integration, and comprehensive analytics tracking.',
    gradient: 'from-emerald-600 via-green-600 to-teal-600',
    tags: ['React', 'TypeScript', 'GSAP', 'HubSpot'],
    liveUrl: '#',
    githubUrl: '#',
    accent: 'border-emerald-500/30',
    mockup: 'BIZ',
  },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
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
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Featured Work
          </div>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
            Projects we&apos;re{' '}
            <span className="gradient-text">proud of</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A curated selection of our recent work across different industries and technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className={`group relative rounded-2xl border ${project.accent} bg-[#0a0a0a] overflow-hidden hover:border-opacity-80 transition-all duration-300`}
            >
              {/* Project Visual */}
              <div className={`relative h-52 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                {/* Mockup overlay */}
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-3/4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-heading font-bold text-4xl text-white/20 mb-2">{project.mockup}</div>
                      <div className="w-16 h-1 rounded-full bg-white/20 mx-auto mb-2" />
                      <div className="w-10 h-1 rounded-full bg-white/10 mx-auto" />
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink size={15} />
                    Live Preview
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                  >
                    <GithubIcon />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading font-bold text-lg text-white group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0 mt-1"
                  />
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.06] text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
