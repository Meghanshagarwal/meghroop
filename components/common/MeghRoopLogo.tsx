'use client'

import { cn } from '@/lib/utils'

export type LogoVariant = 'primary' | 'navbar' | 'monochrome' | 'dark' | 'favicon'

interface MeghRoopLogoProps {
  variant?: LogoVariant
  className?: string
}

// Favicon mark — used as the square monogram icon
function FaviconMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center shrink-0',
        'w-8 h-8 rounded-[7px]',
        'bg-[#0d0d0d] border border-white/[0.1]',
        className
      )}
      aria-hidden
    >
      {/* Geometric M mark as SVG paths — no font dependency, crisp at all sizes */}
      <svg
        viewBox="0 0 20 16"
        fill="none"
        className="w-[13px] h-[11px]"
        aria-hidden
      >
        <path
          d="M1 15V1L10 9.5L19 1V15"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}

export default function MeghRoopLogo({ variant = 'primary', className }: MeghRoopLogoProps) {
  // Favicon: standalone mark, no wordmark
  if (variant === 'favicon') {
    return <FaviconMark className={className} />
  }

  const isNavbar = variant === 'navbar'
  const isMonochrome = variant === 'monochrome'
  const isDark = variant === 'dark'

  // Dot: appears on primary and dark variants only
  const showDot = !isNavbar && !isMonochrome

  return (
    <span className={cn('inline-flex items-center gap-[6px]', className)}>
      <span
        className={cn(
          'font-heading font-bold leading-none select-none tracking-tight',
          // Size
          isNavbar ? 'text-[17px]' : 'text-[22px]',
          // Color treatment
          isMonochrome ? 'text-white' : 'text-white',
          // Dark variant: barely-there glow that reads as "luminous"
          isDark && '[text-shadow:0_0_20px_rgba(167,139,250,0.25)]'
        )}
        style={{ letterSpacing: '-0.042em' }}
      >
        {/*
          Two spans for visual rhythm — "Megh" anchors left, "Roop" anchors right.
          The capital R acts as a natural caesura, creating the dual-syllable beat
          without any visual separator. Identical color: the rhythm is typographic only.
        */}
        <span className="text-white">Megh</span>
        <span className={cn(isMonochrome ? 'text-white' : 'text-white/[0.88]')}>Roop</span>
      </span>

      {/* Accent mark — a 5×5 rounded pixel in the brand gradient */}
      {showDot && (
        <span
          className={cn(
            'inline-block shrink-0 rounded-[2px]',
            'bg-gradient-to-br from-purple-400 to-blue-400',
            isDark ? 'w-[5px] h-[5px]' : 'w-[4px] h-[4px]',
            // Optical alignment: sits at cap-height, not at dead-center
            '-translate-y-[2px]'
          )}
          aria-hidden
        />
      )}
    </span>
  )
}
