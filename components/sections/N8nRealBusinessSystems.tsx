'use client'

import { motion, type Variants } from 'framer-motion'
import {
  GitMerge, Brain, Bell, Workflow, BarChart3, MessageSquare, ShoppingCart, Users,
} from 'lucide-react'

const businessSystems = [
  {
    icon: GitMerge,
    title: 'Lead Routing Intelligence',
    description: 'Leads come in → Analyzed for fit → Routed to best rep → Follow-up scheduled → CRM updated → Team notified. Entire process automatic.',
    gradient: 'from-blue-600/30 to-cyan-600/30',
    iconColor: 'text-blue-400',
    use_case: 'SaaS, Agencies, B2B Services',
  },
  {
    icon: Brain,
    title: 'AI Support Workflows',
    description: 'Customer question → Classified by AI → Routed to right department or auto-answered → Escalation if needed → Ticket tracked. Support that scales.',
    gradient: 'from-purple-600/30 to-violet-600/30',
    iconColor: 'text-purple-400',
    use_case: 'Support Teams, Ecommerce',
  },
  {
    icon: Users,
    title: 'Customer Onboarding',
    description: 'Sign-up → Welcome sent → Account setup → Training scheduled → Progress tracked → Success team alerted. Entire customer journey automated.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
    use_case: 'SaaS, Agencies, Services',
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce Order Processing',
    description: 'Order placed → Payment verified → Inventory updated → Shipping notified → Customer notified → Analytics recorded. Complete fulfillment pipeline.',
    gradient: 'from-pink-600/30 to-rose-600/30',
    iconColor: 'text-pink-400',
    use_case: 'Ecommerce, Retail',
  },
  {
    icon: BarChart3,
    title: 'Daily Reporting Systems',
    description: 'Data gathered → Metrics calculated → Report formatted → Team notified → Archived. Executive insights delivered automatically every morning.',
    gradient: 'from-amber-600/30 to-orange-600/30',
    iconColor: 'text-amber-400',
    use_case: 'Operations, Analytics',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    description: 'Event triggers → Context added → Right people notified → Acknowledgment tracked → Escalation if needed. Information that gets action.',
    gradient: 'from-cyan-600/30 to-blue-600/30',
    iconColor: 'text-cyan-400',
    use_case: 'All Teams',
  },
  {
    icon: MessageSquare,
    title: 'Feedback Loops',
    description: 'Feedback collected → Categorized by AI → Assigned to teams → Tracked for follow-up → Improvements measured. Voice of customer on repeat.',
    gradient: 'from-violet-600/30 to-purple-600/30',
    iconColor: 'text-violet-400',
    use_case: 'Product, Operations',
  },
  {
    icon: Workflow,
    title: 'Internal Approval Workflows',
    description: 'Request submitted → Routed for approval → Notifications sent → Decision logged → System updated. Business processes that move fast.',
    gradient: 'from-indigo-600/30 to-blue-600/30',
    iconColor: 'text-indigo-400',
    use_case: 'All Departments',
  },
]

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function N8nRealBusinessSystems() {
  return (
    <section id="real-systems" className="section-padding" aria-label="Real business automation systems and use cases">
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
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Automation in the real world
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Real business systems.{' '}
            <span className="gradient-text">Actually working.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Not theoretical. Not template-based. Real workflows solving real problems. Systems we&apos;ve built for companies that needed to move faster.
          </p>
        </motion.div>

        {/* Systems Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {businessSystems.map((system, index) => {
            const Icon = system.icon
            return (
              <motion.div key={index} variants={item}>
                <div
                  className={`group relative p-6 rounded-2xl border border-white/[0.08] bg-gradient-to-br ${system.gradient} hover:border-white/[0.15] transition-all duration-500 h-full`}
                  style={{
                    boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.05)`,
                  }}
                >
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-lg bg-black/20 flex items-center justify-center ${system.iconColor} transition-transform duration-300 group-hover:scale-110 mb-3`}>
                    <Icon size={20} />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-base text-white mb-2 group-hover:text-white transition-colors duration-300">
                    {system.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-3">
                    {system.description}
                  </p>

                  {/* Use case */}
                  <div className="text-xs text-gray-500 border-t border-white/[0.05] pt-3 mt-3">
                    <span className="text-gray-400">{system.use_case}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Pattern insight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 relative p-8 md:p-10 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-green-600/15 to-emerald-600/10"
          style={{
            boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
          }}
        >
          <h3 className="font-heading font-bold text-2xl text-white mb-4">
            The pattern in well-engineered systems
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-gray-300 leading-relaxed">
                <span className="text-white font-semibold">Clarity of purpose.</span> Every step serves a clear goal. No wasted actions. No &quot;because we can automate it&quot; logic. Just focused automation that moves work forward.
              </p>
            </div>
            <div>
              <p className="text-gray-300 leading-relaxed">
                <span className="text-white font-semibold">Proper boundaries.</span> Systems know what they can handle automatically and where humans need to decide. High-risk decisions get review. Low-risk tasks run autonomously. Smart delegation.
              </p>
            </div>
            <div>
              <p className="text-gray-300 leading-relaxed">
                <span className="text-white font-semibold">Measurable outcomes.</span> Every automated workflow produces metrics. You know it&apos;s working. You can improve it. You can measure the impact on your business.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
