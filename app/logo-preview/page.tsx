import type { Metadata } from 'next'
import MeghRoopLogo from '@/components/common/MeghRoopLogo'

export const metadata: Metadata = { robots: { index: false, follow: false } }

const variants = [
  {
    id: 'primary',
    label: 'Primary',
    description: 'Hero sections, footers, about pages. Full wordmark + brand accent dot.',
    bg: 'bg-black',
    border: 'border-white/[0.06]',
    labelColor: 'text-zinc-500',
  },
  {
    id: 'navbar',
    label: 'Navbar',
    description: 'Top navigation bar. Compact, no accent dot — optimised for tight headers.',
    bg: 'bg-black',
    border: 'border-white/[0.06]',
    labelColor: 'text-zinc-500',
  },
  {
    id: 'monochrome',
    label: 'Monochrome',
    description: 'Print, single-colour contexts, light overlays. Pure white, no tint.',
    bg: 'bg-black',
    border: 'border-white/[0.06]',
    labelColor: 'text-zinc-500',
  },
  {
    id: 'dark',
    label: 'Dark — Luminous',
    description: 'Feature callouts, pull-quotes, emphasis placements. Identical to Primary with a barely-there purple glow.',
    bg: 'bg-[#050505]',
    border: 'border-white/[0.04]',
    labelColor: 'text-zinc-600',
  },
  {
    id: 'favicon',
    label: 'Favicon / Icon Mark',
    description: 'Square monogram mark. Used beside the wordmark in the navbar, browser tab, and any icon slot.',
    bg: 'bg-black',
    border: 'border-white/[0.06]',
    labelColor: 'text-zinc-500',
  },
] as const

export default function LogoPreviewPage() {
  return (
    <div className="min-h-screen bg-[#080808] py-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-[11px] font-mono tracking-[0.18em] uppercase text-zinc-600 mb-4">
            Brand / Identity
          </p>
          <h1 className="font-heading font-bold text-white text-4xl tracking-tight mb-3"
            style={{ letterSpacing: '-0.04em' }}>
            MeghRoop Logo System
          </h1>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-md">
            Space Grotesk 700 · tracking −0.042em · five variants · dark-mode native
          </p>
        </div>

        {/* Variants */}
        <div className="flex flex-col gap-3">
          {variants.map((v) => (
            <div
              key={v.id}
              className={`rounded-xl border ${v.border} ${v.bg} overflow-hidden`}
            >
              {/* Preview area */}
              <div className="flex items-center justify-center px-8 py-14 min-h-[140px]">
                <MeghRoopLogo variant={v.id} />
              </div>

              {/* Meta strip */}
              <div className={`border-t ${v.border} px-6 py-4 flex items-start justify-between gap-6`}>
                <div>
                  <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-zinc-600 block mb-1">
                    {v.id}
                  </span>
                  <p className="text-white/80 text-sm font-medium font-heading">{v.label}</p>
                </div>
                <p className="text-zinc-500 text-xs leading-relaxed text-right max-w-[280px]">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navbar context preview */}
        <div className="mt-12">
          <p className="text-[11px] font-mono tracking-[0.18em] uppercase text-zinc-600 mb-4">
            In-context — Navbar
          </p>
          <div className="rounded-xl border border-white/[0.06] bg-black overflow-hidden">
            {/* Simulated navbar */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.06] backdrop-blur-xl bg-black/70">
              <div className="flex items-center gap-2.5">
                <MeghRoopLogo variant="favicon" />
                <MeghRoopLogo variant="navbar" />
              </div>
              <div className="hidden sm:flex items-center gap-1">
                {['Home', 'Services', 'Projects', 'Contact'].map((item) => (
                  <span key={item} className="px-4 py-2 text-sm text-zinc-500 rounded-lg">
                    {item}
                  </span>
                ))}
              </div>
              <span className="px-4 py-2 text-sm font-medium text-white bg-white/[0.08] border border-white/[0.1] rounded-lg">
                Let&apos;s Talk
              </span>
            </div>
            <div className="px-6 py-4">
              <p className="text-zinc-600 text-xs font-mono">navbar · h-16 · favicon mark + navbar variant</p>
            </div>
          </div>
        </div>

        {/* Side-by-side: all three text variants */}
        <div className="mt-12">
          <p className="text-[11px] font-mono tracking-[0.18em] uppercase text-zinc-600 mb-4">
            Side-by-side comparison
          </p>
          <div className="rounded-xl border border-white/[0.06] bg-black overflow-hidden">
            <div className="grid grid-cols-3 divide-x divide-white/[0.06]">
              {(['primary', 'monochrome', 'dark'] as const).map((v) => (
                <div key={v} className="flex flex-col items-center justify-center py-12 gap-6 px-4">
                  <MeghRoopLogo variant={v} />
                  <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-zinc-600">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Token reference */}
        <div className="mt-12 rounded-xl border border-white/[0.06] bg-black p-6">
          <p className="text-[11px] font-mono tracking-[0.18em] uppercase text-zinc-600 mb-5">
            Design tokens
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm font-mono">
            {[
              ['font-family', 'Space Grotesk'],
              ['font-weight', '700'],
              ['letter-spacing', '−0.042em'],
              ['line-height', '1 (none)'],
              ['wordmark / Megh', '#FFFFFF'],
              ['wordmark / Roop', '#FFFFFF · opacity 88%'],
              ['accent dot', 'purple-400 → blue-400'],
              ['favicon bg', '#0d0d0d'],
              ['icon stroke', '#FFFFFF · width 2px'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-white/[0.04] pb-3">
                <span className="text-zinc-600">{k}</span>
                <span className="text-zinc-300 text-right">{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-zinc-700 text-xs font-mono tracking-wide">
          /logo-preview · MeghRoop brand system
        </p>
      </div>
    </div>
  )
}
