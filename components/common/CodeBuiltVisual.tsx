'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  Cpu, Database, Network, Terminal, Search, Share2, Compass, Zap,
  Activity, Workflow, RefreshCw, Server, Globe, Code2, Braces,
  BrainCircuit, Bot, Layers, ShieldCheck, Gauge, Rocket, Sparkles,
  Cable, Cloud, Lock, Boxes, BarChart3, FileCode, GitBranch,
  Webhook, Puzzle, Cog, Eye, Link2, type LucideIcon
} from 'lucide-react'

/* ──────────────────────────────────────────────────────────
   Props — now accepts `title` for content-aware generation
   ────────────────────────────────────────────────────────── */
interface CodeBuiltVisualProps {
  category: string
  slug: string
  title?: string
}

/* ──────────────────────────────────────────────────────────
   Deterministic hash → consistent visuals per article
   ────────────────────────────────────────────────────────── */
function hashStr(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0
  }
  return Math.abs(h)
}

/** Pull a seeded float 0–1 from a hash + index */
function seeded(hash: number, index: number): number {
  return ((hash * (index + 1) * 9301 + 49297) % 233280) / 233280
}

/* ──────────────────────────────────────────────────────────
   Keyword → Icon mapping
   ────────────────────────────────────────────────────────── */
const KEYWORD_ICONS: [string[], LucideIcon][] = [
  [['ai', 'artificial', 'intelligence', 'llm', 'gpt', 'model', 'neural'], BrainCircuit],
  [['agent', 'autonomous', 'bot', 'chatbot'], Bot],
  [['mcp', 'protocol', 'context', 'grounded'], Network],
  [['api', 'graphql', 'rest', 'endpoint'], Webhook],
  [['database', 'supabase', 'postgres', 'sql', 'data'], Database],
  [['search', 'seo', 'geo', 'optimization', 'indexing'], Search],
  [['web', 'frontend', 'next', 'react', 'nextjs'], Code2],
  [['server', 'backend', 'deploy', 'hosting', 'edge'], Server],
  [['cloud', 'aws', 'vercel', 'docker', 'kubernetes'], Cloud],
  [['security', 'auth', 'encryption', 'secure'], Lock],
  [['automation', 'workflow', 'n8n', 'pipeline', 'zapier'], Workflow],
  [['speed', 'performance', 'latency', 'fast', 'lighthouse'], Gauge],
  [['shopify', 'commerce', 'ecommerce', 'store', 'headless'], Boxes],
  [['analytics', 'metrics', 'tracking', 'telemetry'], BarChart3],
  [['code', 'engineering', 'build', 'architecture'], FileCode],
  [['git', 'version', 'branch', 'cicd'], GitBranch],
  [['integration', 'connect', 'plugin', 'module'], Puzzle],
  [['config', 'settings', 'system', 'infrastructure'], Cog],
  [['monitor', 'observe', 'watch', 'visibility'], Eye],
  [['network', 'link', 'chain', 'connect'], Link2],
  [['launch', 'deploy', 'ship', 'release', 'production'], Rocket],
]

const FALLBACK_ICONS: LucideIcon[] = [
  Cpu, Terminal, Sparkles, Cable, Layers, ShieldCheck, Compass, Share2, Globe, Zap, Activity, RefreshCw, Braces
]

function extractIcons(title: string, slug: string, hash: number): LucideIcon[] {
  const text = `${title} ${slug}`.toLowerCase()
  const matched: LucideIcon[] = []
  const seen = new Set<LucideIcon>()

  for (const [keywords, icon] of KEYWORD_ICONS) {
    if (keywords.some(kw => text.includes(kw)) && !seen.has(icon)) {
      matched.push(icon)
      seen.add(icon)
      if (matched.length >= 3) break
    }
  }

  // Fill remaining with hash-based fallbacks
  while (matched.length < 3) {
    const idx = (hash + matched.length * 7) % FALLBACK_ICONS.length
    const icon = FALLBACK_ICONS[idx]
    if (!seen.has(icon)) {
      matched.push(icon)
      seen.add(icon)
    } else {
      // Skip collision
      matched.push(FALLBACK_ICONS[(idx + 3) % FALLBACK_ICONS.length])
    }
  }
  return matched.slice(0, 3)
}

/* ──────────────────────────────────────────────────────────
   Color palette generation (HSL-based harmony)
   ────────────────────────────────────────────────────────── */
interface Palette {
  hue1: number
  hue2: number
  primary: string      // main accent  hsl
  secondary: string    // complementary accent
  glow1: string        // bg glow rgba
  glow2: string        // bg glow rgba
  nodeBorder: string   // border for icon nodes
  nodeHover: string    // hover border
  textAccent: string   // small text color
  dotColor: string     // animated dot
}

function buildPalette(hash: number): Palette {
  const hue1 = hash % 360
  const hue2 = (hue1 + 40 + (hash % 60)) % 360

  return {
    hue1,
    hue2,
    primary: `hsl(${hue1}, 70%, 65%)`,
    secondary: `hsl(${hue2}, 60%, 55%)`,
    glow1: `hsla(${hue1}, 80%, 50%, 0.10)`,
    glow2: `hsla(${hue2}, 70%, 45%, 0.06)`,
    nodeBorder: `hsla(${hue1}, 60%, 60%, 0.30)`,
    nodeHover: `hsla(${hue1}, 70%, 65%, 0.50)`,
    textAccent: `hsl(${hue1}, 55%, 60%)`,
    dotColor: `hsl(${hue1}, 75%, 65%)`,
  }
}

/* ──────────────────────────────────────────────────────────
   Background pattern variants
   ────────────────────────────────────────────────────────── */
type PatternType = 'grid' | 'dots' | 'hexagons' | 'circuits' | 'diagonal'

function pickPattern(hash: number): PatternType {
  const patterns: PatternType[] = ['grid', 'dots', 'hexagons', 'circuits', 'diagonal']
  return patterns[hash % patterns.length]
}

function PatternSVG({ type, uid, hue }: { type: PatternType; uid: string; hue: number }) {
  const strokeColor = `hsla(${hue}, 40%, 50%, 0.04)`

  switch (type) {
    case 'dots':
      return (
        <svg className="absolute inset-0 w-full h-full [mask-image:radial-gradient(100%_100%_at_center,white,transparent)]" aria-hidden>
          <defs>
            <pattern id={`pat-${uid}`} width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill={strokeColor} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#pat-${uid})`} />
        </svg>
      )
    case 'hexagons':
      return (
        <svg className="absolute inset-0 w-full h-full [mask-image:radial-gradient(100%_100%_at_center,white,transparent)]" aria-hidden>
          <defs>
            <pattern id={`pat-${uid}`} width="28" height="32" patternUnits="userSpaceOnUse">
              <path d="M14 0 L28 8 L28 24 L14 32 L0 24 L0 8 Z" fill="none" stroke={strokeColor} strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#pat-${uid})`} />
        </svg>
      )
    case 'circuits':
      return (
        <svg className="absolute inset-0 w-full h-full [mask-image:radial-gradient(100%_100%_at_center,white,transparent)]" aria-hidden>
          <defs>
            <pattern id={`pat-${uid}`} width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20h15M25 20h15M20 0v15M20 25v15" fill="none" stroke={strokeColor} strokeWidth="0.5" />
              <circle cx="20" cy="20" r="2" fill="none" stroke={strokeColor} strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#pat-${uid})`} />
        </svg>
      )
    case 'diagonal':
      return (
        <svg className="absolute inset-0 w-full h-full [mask-image:radial-gradient(100%_100%_at_center,white,transparent)]" aria-hidden>
          <defs>
            <pattern id={`pat-${uid}`} width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="16" stroke={strokeColor} strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#pat-${uid})`} />
        </svg>
      )
    default: // grid
      return (
        <svg className="absolute inset-0 w-full h-full stroke-white/[0.015] [mask-image:radial-gradient(100%_100%_at_center,white,transparent)]" aria-hidden>
          <defs>
            <pattern id={`pat-${uid}`} width="24" height="24" patternUnits="userSpaceOnUse" x="-1" y="-1">
              <path d="M.5 24V.5H24" fill="none" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#pat-${uid})`} />
        </svg>
      )
  }
}

/* ──────────────────────────────────────────────────────────
   Extract short display words from title
   ────────────────────────────────────────────────────────── */
const STOP_WORDS = new Set([
  'the', 'a', 'an', 'and', 'or', 'of', 'to', 'in', 'on', 'for', 'with',
  'is', 'at', 'by', 'from', 'how', 'what', 'why', 'this', 'that', 'are',
  'was', 'be', 'has', 'had', 'do', 'does', 'your', 'our', 'its', 'here',
])

function extractKeywords(title: string): string[] {
  return title
    .replace(/[^a-zA-Z0-9\s-]/g, '')
    .split(/[\s-]+/)
    .filter(w => w.length > 2 && !STOP_WORDS.has(w.toLowerCase()))
    .slice(0, 4)
}

/* ──────────────────────────────────────────────────────────
   Node layout variants
   ────────────────────────────────────────────────────────── */
type LayoutType = 'horizontal' | 'triangle' | 'central'

function pickLayout(hash: number): LayoutType {
  const layouts: LayoutType[] = ['horizontal', 'triangle', 'central']
  return layouts[(hash >> 3) % layouts.length]
}

/* ──────────────────────────────────────────────────────────
   Main Component
   ────────────────────────────────────────────────────────── */
export default function CodeBuiltVisual({ category, slug, title }: CodeBuiltVisualProps) {
  const uid = slug || 'visual'
  const displayTitle = title || slug.replace(/-/g, ' ')

  const visual = useMemo(() => {
    const hash = hashStr(`${slug}-${category}`)
    const palette = buildPalette(hash)
    const icons = extractIcons(displayTitle, slug, hash)
    const pattern = pickPattern(hash)
    const layout = pickLayout(hash)
    const keywords = extractKeywords(displayTitle)
    const animDuration = 3 + seeded(hash, 0) * 4 // 3-7s
    const floatOffset = seeded(hash, 1) > 0.5 ? -4 : -6

    return { hash, palette, icons, pattern, layout, keywords, animDuration, floatOffset }
  }, [slug, category, displayTitle])

  const { palette, icons, pattern, layout, keywords, animDuration, floatOffset } = visual
  const [Icon1, Icon2, Icon3] = icons

  return (
    <div className="relative w-full h-full min-h-[inherit] overflow-hidden bg-[#050505] flex items-center justify-center select-none">
      {/* Background Pattern */}
      <PatternSVG type={pattern} uid={uid} hue={palette.hue1} />

      {/* Dual glow orbs */}
      <div
        className="absolute w-72 h-72 rounded-full blur-[100px] pointer-events-none"
        style={{ background: palette.glow1, top: '10%', left: '20%' }}
      />
      <div
        className="absolute w-60 h-60 rounded-full blur-[100px] pointer-events-none"
        style={{ background: palette.glow2, bottom: '10%', right: '15%' }}
      />

      {/* Content Layer */}
      <div className="relative w-full h-full flex flex-col justify-between p-5 sm:p-7 z-10">

        {/* Top telemetry bar */}
        <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono" style={{ color: `hsla(${palette.hue1}, 55%, 60%, 0.80)` }}>
          <span className="flex items-center gap-1.5 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: palette.primary }} />
            {category.toUpperCase().replace(/\s+/g, '_')}
          </span>
          <span className="opacity-70">{keywords.slice(0, 2).join(' · ').toUpperCase()}</span>
        </div>

        {/* Center: Icon Nodes + Connection Lines */}
        <div className="flex-1 flex items-center justify-center relative w-full h-full max-h-[220px] sm:max-h-[300px]">
          
          {/* Animated connection path */}
          <svg className="absolute w-[75%] h-16 fill-none z-0" viewBox="0 0 200 40">
            {layout === 'horizontal' && (
              <>
                <path d="M 10 20 Q 50 5 100 20 T 190 20" stroke="white" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="4,4" />
                <path d="M 10 20 Q 50 5 100 20 T 190 20" stroke={palette.dotColor} strokeWidth="1.5" strokeDasharray="6,194" strokeDashoffset="0">
                  <animate attributeName="stroke-dashoffset" values="200;0" dur={`${animDuration}s`} repeatCount="indefinite" />
                </path>
              </>
            )}
            {layout === 'triangle' && (
              <>
                <path d="M 100 5 L 25 35 L 175 35 Z" stroke="white" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="4,4" />
                <path d="M 100 5 L 25 35 L 175 35 Z" stroke={palette.dotColor} strokeWidth="1.5" strokeDasharray="8,400" strokeDashoffset="0">
                  <animate attributeName="stroke-dashoffset" values="420;0" dur={`${animDuration}s`} repeatCount="indefinite" />
                </path>
              </>
            )}
            {layout === 'central' && (
              <>
                <path d="M 30 20 H 170" stroke="white" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="4,4" />
                <path d="M 100 5 V 35" stroke="white" strokeOpacity="0.06" strokeWidth="1" strokeDasharray="4,4" />
                <circle cx="100" cy="20" r="15" stroke={palette.dotColor} strokeWidth="1" strokeDasharray="4,90" strokeDashoffset="0" opacity="0.5">
                  <animate attributeName="stroke-dashoffset" values="94;0" dur={`${animDuration}s`} repeatCount="indefinite" />
                </circle>
              </>
            )}
          </svg>

          {/* Icon Nodes */}
          {layout === 'horizontal' && (
            <div className="w-full flex justify-between items-center z-10 px-4 sm:px-10">
              <NodeIcon Icon={Icon1} palette={palette} size="sm" animDelay={0} />
              <NodeIcon Icon={Icon2} palette={palette} size="lg" animDelay={0.2} floatY={floatOffset} animDuration={animDuration} />
              <NodeIcon Icon={Icon3} palette={palette} size="sm" animDelay={0.4} />
            </div>
          )}
          {layout === 'triangle' && (
            <div className="relative w-full h-full flex items-center justify-center z-10">
              <div className="absolute top-2 left-1/2 -translate-x-1/2">
                <NodeIcon Icon={Icon1} palette={palette} size="lg" animDelay={0} floatY={floatOffset} animDuration={animDuration} />
              </div>
              <div className="absolute bottom-4 left-[15%]">
                <NodeIcon Icon={Icon2} palette={palette} size="sm" animDelay={0.15} />
              </div>
              <div className="absolute bottom-4 right-[15%]">
                <NodeIcon Icon={Icon3} palette={palette} size="sm" animDelay={0.3} />
              </div>
            </div>
          )}
          {layout === 'central' && (
            <div className="relative w-full h-full flex items-center justify-center z-10">
              <div className="absolute left-[10%] top-1/2 -translate-y-1/2">
                <NodeIcon Icon={Icon1} palette={palette} size="sm" animDelay={0.1} />
              </div>
              <div className="relative">
                <NodeIcon Icon={Icon2} palette={palette} size="xl" animDelay={0} floatY={floatOffset} animDuration={animDuration} />
              </div>
              <div className="absolute right-[10%] top-1/2 -translate-y-1/2">
                <NodeIcon Icon={Icon3} palette={palette} size="sm" animDelay={0.2} />
              </div>
            </div>
          )}
        </div>

        {/* Bottom terminal bar */}
        <div className="z-10 bg-white/[0.02] border border-white/[0.06] rounded-xl p-2.5 sm:p-3 font-mono text-[9px] sm:text-xs flex items-center justify-between gap-2">
          <span className="flex items-center gap-2 text-gray-300 truncate">
            <Terminal size={12} style={{ color: palette.primary }} />
            <span style={{ color: `hsla(${palette.hue1}, 55%, 60%, 0.80)` }}>studio:~$</span>
            <span className="text-gray-500 truncate">{keywords.join('_').toLowerCase()}</span>
          </span>
          <span className="font-semibold shrink-0" style={{ color: palette.primary }}>[READY]</span>
        </div>
      </div>

      {/* Overlay textures */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none opacity-50" />
      <div className="absolute inset-0 border border-white/[0.06] rounded-2xl pointer-events-none" />
    </div>
  )
}

/* ──────────────────────────────────────────────────────────
   Reusable Node Icon
   ────────────────────────────────────────────────────────── */
function NodeIcon({
  Icon,
  palette,
  size = 'sm',
  animDelay = 0,
  floatY,
  animDuration,
}: {
  Icon: LucideIcon
  palette: Palette
  size?: 'sm' | 'lg' | 'xl'
  animDelay?: number
  floatY?: number
  animDuration?: number
}) {
  const sizeMap = {
    sm: { box: 'w-11 h-11 sm:w-14 sm:h-14 rounded-xl', icon: 'w-5 h-5 sm:w-7 sm:h-7' },
    lg: { box: 'w-14 h-14 sm:w-18 sm:h-18 rounded-2xl', icon: 'w-7 h-7 sm:w-9 sm:h-9' },
    xl: { box: 'w-16 h-16 sm:w-20 sm:h-20 rounded-3xl', icon: 'w-8 h-8 sm:w-10 sm:h-10' },
  }
  const s = sizeMap[size]

  const inner = (
    <div
      className={`${s.box} border bg-black/60 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-300 cursor-pointer hover:scale-105`}
      style={{
        borderColor: size === 'sm' ? 'rgba(255,255,255,0.08)' : palette.nodeBorder,
        boxShadow: size !== 'sm' ? `0 8px 30px ${palette.glow1}` : undefined,
        color: size === 'sm' ? '#9ca3af' : palette.primary,
      }}
    >
      <Icon className={s.icon} />
    </div>
  )

  if (floatY && animDuration) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, y: [0, floatY, 0] }}
        transition={{
          opacity: { duration: 0.4, delay: animDelay },
          scale: { duration: 0.4, delay: animDelay },
          y: { duration: animDuration, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="flex flex-col items-center gap-1.5"
      >
        {inner}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: animDelay }}
      className="flex flex-col items-center gap-1.5"
    >
      {inner}
    </motion.div>
  )
}
