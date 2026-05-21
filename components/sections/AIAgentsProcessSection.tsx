'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Systems Audit',
    description: 'We map your current workflows, identify friction points, and spot automation opportunities. Not guessing. Documenting.',
    details: [
      'Process mapping and workflow analysis',
      'Integration ecosystem audit',
      'Data flow and quality assessment',
      'Opportunity prioritization',
    ],
  },
  {
    number: '02',
    title: 'Architecture & Design',
    description: 'We design the AI infrastructure. Agent types, model selection, tool integration strategy, and error handling.',
    details: [
      'Agent architecture design',
      'Model selection and testing',
      'MCP server planning',
      'Integration roadmap',
    ],
  },
  {
    number: '03',
    title: 'Build & Integration',
    description: 'We build custom agents, wire them to your systems via APIs and MCP servers, and establish the infrastructure.',
    details: [
      'Custom agent development',
      'Tool integration and testing',
      'MCP server implementation',
      'Error handling and retries',
    ],
  },
  {
    number: '04',
    title: 'Training & Optimization',
    description: 'We train the agent on your specific context, tune prompts, and optimize for your use cases.',
    details: [
      'RAG system setup',
      'Prompt engineering',
      'Vector database training',
      'Performance optimization',
    ],
  },
  {
    number: '05',
    title: 'Testing & Validation',
    description: 'Real data, real scenarios, real edge cases. Not a sandbox. Production conditions.',
    details: [
      'Integration testing',
      'Load testing',
      'Error scenario testing',
      'Safety and compliance checks',
    ],
  },
  {
    number: '06',
    title: 'Launch & Monitoring',
    description: 'We deploy to production with monitoring, observability, and guardrails. Then we watch and iterate.',
    details: [
      'Gradual rollout strategy',
      'Real-time monitoring',
      'Alert systems',
      'Continuous improvement',
    ],
  },
]

export default function AIAgentsProcessSection() {
  return (
    <section id="process" className="section-padding" aria-label="Our process for building AI agents and automation systems">
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
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            From idea to production
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            How we build it.{' '}
            <span className="gradient-text">Technical + intentional.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Not generic agency steps. Engineering workflow. Real process. Designed for systems that ship and actually work.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-6">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              <div className="group relative rounded-2xl border border-white/[0.08] hover:border-white/[0.12] overflow-hidden transition-all duration-300 cursor-default">
                <div className="absolute inset-0 bg-[#0a0a0a]" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 p-6 sm:p-8">
                  <div className="flex items-start gap-6">
                    {/* Step number */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors duration-300">
                        <span className="font-heading font-bold text-2xl gradient-text-purple">{step.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="font-heading font-bold text-xl text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed mb-4">{step.description}</p>

                      {/* Details list */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.details.map((detail) => (
                          <div key={detail} className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                            <span className="text-sm text-gray-400">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                timeframe: '2-3 weeks',
                label: 'Initial system & integration',
                desc: 'From kickoff to first agent in production',
              },
              {
                timeframe: '1-2 months',
                label: 'Full optimization',
                desc: 'Tuning, training, and scaling to full capacity',
              },
              {
                timeframe: 'Ongoing',
                label: 'Monitoring & improvement',
                desc: 'Continuous refinement based on real usage',
              },
            ].map(({ timeframe, label, desc }) => (
              <div key={label}>
                <div className="text-2xl font-heading font-bold gradient-text-purple mb-1">{timeframe}</div>
                <div className="text-sm font-semibold text-white mb-2">{label}</div>
                <div className="text-xs text-gray-400">{desc}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Important note */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] text-center"
        >
          <p className="text-sm text-gray-400">
            <span className="text-white font-semibold">No fixed timeline templates.</span> Every system is different. Some ship in
            weeks. Complex integrations take longer. We estimate accurately because we actually do the work.
          </p>
        </motion.div>

        {/* Semantic content for crawlers */}
        <p className="sr-only">
          Our process for building AI agents and automation systems includes six phases: discovery and systems audit to understand
          workflows and identify opportunities, architecture and design to plan AI infrastructure and integrations, build and
          integration to develop agents and wire systems, training and optimization for RAG systems and performance tuning, testing
          and validation with real data and production scenarios, and launch and monitoring for deployment and continuous improvement.
        </p>
      </div>
    </section>
  )
}
