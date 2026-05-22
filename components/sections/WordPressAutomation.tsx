'use client'

import { motion, type Variants } from 'framer-motion'
import { Zap, GitBranch, Filter, Send, BarChart3, Clock } from 'lucide-react'

const automations = [
  {
    icon: Zap,
    title: 'Publishing Workflows',
    description: 'Content scheduled and published automatically. Draft → Review → Publish on schedule. Social media sync. Multi-channel distribution.',
  },
  {
    icon: GitBranch,
    title: 'Editorial Approvals',
    description: 'Multi-level approval workflows. Writers → Editors → Publishers. Comments and feedback integrated. Status tracking at every stage.',
  },
  {
    icon: Filter,
    title: 'Content Operations',
    description: 'Tag automation, category assignment, metadata generation. Workflows that handle repetitive tasks so your team focuses on what matters.',
  },
  {
    icon: Send,
    title: 'CRM Integrations',
    description: 'New posts trigger email campaigns. Content syncs to your CRM. Lead scoring based on engagement. Marketing automation powered by content.',
  },
  {
    icon: BarChart3,
    title: 'Performance Monitoring',
    description: 'Track content performance automatically. Notifications when posts go viral or underperform. Data-driven content decisions.',
  },
  {
    icon: Clock,
    title: 'Scheduled Distribution',
    description: 'Publish once. Distribute everywhere. WordPress, social media, email, RSS—all synchronized and scheduled automatically.',
  },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function WordPressAutomation() {
  return (
    <section className="section-padding overflow-hidden" aria-label="WordPress automation and content operations">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Automation & Publishing Workflows
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Publishing infrastructure{' '}
            <span className="gradient-text">that works for you.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Automate the repetitive. Free your team to focus on creating. WordPress workflows that handle publishing, approvals, distribution, and analytics automatically.
          </p>
        </motion.div>

        {/* Automations Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 sm:mb-16"
        >
          {automations.map((automation) => {
            const Icon = automation.icon
            return (
              <motion.div
                key={automation.title}
                variants={item}
                className="rounded-2xl border border-white/[0.08] hover:border-white/[0.15] overflow-hidden group bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors duration-300 mb-4">
                  <Icon size={22} className="text-emerald-400" />
                </div>
                <h3 className="font-heading font-bold text-white mb-2">
                  {automation.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{automation.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Workflow Example */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-white/[0.08] overflow-hidden bg-white/[0.02] p-8 sm:p-10"
        >
          <h3 className="font-heading font-bold text-white text-lg sm:text-xl mb-8">
            Example: Editorial workflow
          </h3>
          <div className="space-y-4">
            {[
              {
                step: '1',
                title: 'Writer creates draft',
                desc: 'Saves to WordPress. Assigned to editor automatically.',
              },
              {
                step: '2',
                title: 'Editor reviews & comments',
                desc: 'Feedback synced. Writer gets notifications.',
              },
              {
                step: '3',
                title: 'Revisions submitted',
                desc: 'Publisher notified. Ready for review.',
              },
              {
                step: '4',
                title: 'Scheduled & published',
                desc: 'Goes live at optimal time. Social media posts automatically. Email campaign triggered.',
              },
              {
                step: '5',
                title: 'Performance tracked',
                desc: 'Analytics monitored. Team alerted if it goes viral. Data informs next content.',
              },
            ].map((stage, idx) => (
              <div key={idx} className="flex items-start gap-4 relative">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center flex-shrink-0 z-10">
                  <span className="text-black text-xs font-bold">{stage.step}</span>
                </div>
                {idx < 4 && (
                  <div className="absolute left-[15px] top-12 w-0.5 h-8 bg-gradient-to-b from-emerald-400/50 to-transparent" />
                )}
                <div>
                  <h4 className="text-white font-heading font-bold mb-1">{stage.title}</h4>
                  <p className="text-gray-400 text-sm">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-16 rounded-2xl border border-white/[0.08] overflow-hidden bg-gradient-to-br from-emerald-600/5 to-cyan-600/5 p-8 sm:p-10"
        >
          <h3 className="font-heading font-bold text-white text-lg mb-6">
            What automation gives you:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Consistent publishing schedules',
              'Fewer manual handoffs between teams',
              'Better content quality with approval workflows',
              'Coordinated multi-channel distribution',
              'Performance data in real-time',
              'Reduced time on repetitive tasks',
            ].map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-400">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
