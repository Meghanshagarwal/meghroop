import { Layers, Bot, Palette, Gauge, Handshake } from 'lucide-react'
import Reveal from '@/components/common/Reveal'

const points = [
  { icon: Layers, title: 'Software + Marketing under one roof', desc: 'No agency ping-pong. The team that builds it is the team that grows it.' },
  { icon: Bot, title: 'AI-powered growth systems', desc: 'Automation that compounds — leads, follow-ups, and ops that run on their own.' },
  { icon: Palette, title: 'Modern design and branding', desc: 'Premium identity and creative that makes the work look as good as it performs.' },
  { icon: Gauge, title: 'Performance-first approach', desc: 'We optimise for outcomes — pipeline, conversions, revenue. Not vanity metrics.' },
  { icon: Handshake, title: 'Long-term partnerships', desc: 'We stay. Most of our work comes from clients who never left.' },
]

export default function WhyMeghRoop() {
  return (
    <section id="why" className="section-padding" aria-label="Why MeghRoop">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="mb-14 sm:mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-white/50 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#60a5fa]" />
            Why MeghRoop
          </div>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.05] tracking-tight">
            From awareness to automation.
            <br />
            <span className="gradient-text">From code to customers.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
          {points.map(({ icon: Icon, title, desc }, i) => (
            <Reveal
              key={title}
              delay={Math.min(i + 1, 9)}
              className="bg-[#0d0d0d] p-8 sm:p-10 group hover:bg-[#101010] transition-colors duration-300"
            >
              <span className="inline-flex w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] items-center justify-center mb-6 group-hover:border-[#c084fc]/30 transition-colors">
                <Icon size={20} className="text-[#c084fc]" />
              </span>
              <h3 className="font-heading font-bold text-xl text-white mb-3 leading-snug">{title}</h3>
              <p className="text-[15px] text-white/[0.55] leading-relaxed">{desc}</p>
            </Reveal>
          ))}
          {/* Filler cell to complete the grid on 3-col */}
          <div className="hidden lg:block bg-[#0d0d0d] p-10 relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#c084fc]/10 rounded-full blur-3xl" />
            <p className="relative font-heading font-bold text-2xl text-white/80 leading-snug">
              One partner.
              <br />
              <span className="gradient-text-purple">Every lever of growth.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
