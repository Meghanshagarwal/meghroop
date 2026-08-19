import Link from 'next/link'
import { ArrowRight, Check, MapPin } from 'lucide-react'
import type { ServicePage } from '@/data/services'
import type { SeoLocation, SeoServiceLink } from '@/data/localSeo'

export default function LocalSeoTemplate({
  service,
  location,
  data,
}: {
  service: SeoServiceLink
  location: SeoLocation
  data: ServicePage
}) {
  const inOrAcross = location.isCountry ? 'across' : 'in'

  return (
    <main id="main-content" className="pt-28 sm:pt-32">
      {/* ── Hero ── */}
      <section className="grid-bg relative overflow-hidden">
        <div
          className="absolute -top-44 left-1/2 -translate-x-1/2 w-[80vw] h-[45vh] rounded-full blur-[170px] pointer-events-none"
          style={{ background: data.glow }}
        />
        <div className="relative max-w-5xl mx-auto px-6 pb-16 sm:pb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[13px] text-white/70 mb-8">
            <MapPin size={13} className={data.accent} />
            {service.keyword} {inOrAcross} {location.name}
          </div>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.05] tracking-tight mb-7">
            {service.keyword} {inOrAcross}{' '}
            <span className="gradient-text">{location.name}</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/[0.62] max-w-2xl mx-auto leading-relaxed mb-10">
            {service.intro}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-black font-semibold text-[15px] hover:bg-white/90 transition-all duration-200 shadow-[0_0_50px_rgba(192,132,252,0.18)]"
            >
              Book a Call
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href={`/${data.slug}`}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/[0.12] text-white font-semibold text-[15px] hover:bg-white/[0.05] transition-all duration-200"
            >
              See full {data.eyebrow} service
            </Link>
          </div>
        </div>
      </section>

      {/* ── Local context ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20">
          <h2 className="font-heading font-bold text-2xl sm:text-4xl text-white leading-[1.1] tracking-tight mb-6">
            {service.keyword} for {location.name} businesses
          </h2>
          <p className="text-lg text-white/[0.62] leading-relaxed max-w-3xl">
            MeghRoop is a {data.eyebrow.toLowerCase()} studio working with businesses {inOrAcross} {location.name}
            {location.isCountry ? '' : `, ${location.region}`}. For {location.name}, that means {location.context}.
            {' '}{data.problemBody}
          </p>
        </div>
      </section>

      {/* ── Offerings (reused from the main service page) ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-xs uppercase tracking-[0.2em] text-[#52525b] mb-10">
            What we do in {location.name}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
            {data.offerings.map((o) => (
              <div key={o.title} className="bg-[#0a0a0a] p-7">
                <div className="flex items-start gap-3 mb-2">
                  <Check size={16} className={`${data.accent} mt-1 flex-shrink-0`} />
                  <h3 className="font-heading font-semibold text-white text-lg">{o.title}</h3>
                </div>
                <p className="text-white/[0.55] text-sm leading-relaxed pl-7">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {data.outcomes.map((stat) => (
            <div key={stat.label}>
              <div className={`font-heading font-bold text-4xl sm:text-5xl mb-2 ${data.accent}`}>{stat.value}</div>
              <div className="text-white/[0.55] text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-10">
            {service.keyword} in {location.name} — FAQ
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-white mb-2">
                Do you work with {location.name}-based businesses in person, or remotely?
              </h3>
              <p className="text-white/[0.6] leading-relaxed">
                {location.isCountry
                  ? "We work with businesses across India primarily remotely, from our studio in Jaipur, Rajasthan — with calls and delivery on IST hours."
                  : location.slug === 'jaipur'
                  ? 'Jaipur is our home base, so we work with local businesses both in person and remotely, whichever fits your team.'
                  : `We work with ${location.name} clients remotely — ${location.context}.`}
              </p>
            </div>
            {data.faqs.slice(0, 2).map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold text-white mb-2">{f.q}</h3>
                <p className="text-white/[0.6] leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related services ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-xs uppercase tracking-[0.2em] text-[#52525b] mb-8">Related services</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.related.slice(0, 4).map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group block p-5 rounded-2xl border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.02] transition-all"
              >
                <div className="flex items-center justify-between text-white font-medium mb-1">
                  {r.label}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-white/[0.5] text-sm">{r.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-20 sm:py-28 text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-6">
            Ready to {data.ctaAccent.replace(/\?$/, '')} in {location.name}?
          </h2>
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-black font-semibold text-[15px] hover:bg-white/90 transition-all duration-200"
          >
            {data.ctaButton}
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </main>
  )
}
