'use client'

import { cn } from '@/lib/utils'

interface AuthorAvatarProps {
  name: string
  className?: string
}

export default function AuthorAvatar({ name, className }: AuthorAvatarProps) {
  const normalizedName = name.toLowerCase().trim()

  if (normalizedName.includes('meghansh')) {
    // Meghansh Avatar: Tech, AI, Cyan-Blue
    return (
      <div
        className={cn(
          'relative rounded-full overflow-hidden flex items-center justify-center border border-cyan-500/30 bg-[#0a1226] select-none group',
          className
        )}
      >
        {/* Futuristic Grid & Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,transparent_70%)] animate-pulse duration-3000" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-purple-600/20 opacity-80" />
        
        {/* Subtle Tech Pattern (Circuit Grid) */}
        <svg className="absolute inset-0 w-full h-full opacity-30 stroke-cyan-500/20" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="12" fill="none" strokeWidth="0.5" strokeDasharray="2 1" />
          <path d="M 0 20 L 40 20 M 20 0 L 20 40" strokeWidth="0.5" />
        </svg>

        {/* Initials / Icon */}
        <span className="relative z-10 font-heading font-bold text-white text-[13px] tracking-wide select-none drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
          M
        </span>
      </div>
    )
  }

  if (normalizedName.includes('roop') && !normalizedName.includes('meghroop')) {
    // Roop Avatar: Systems, Emerald-Teal
    return (
      <div
        className={cn(
          'relative rounded-full overflow-hidden flex items-center justify-center border border-emerald-500/30 bg-[#051812] select-none group',
          className
        )}
      >
        {/* Futuristic Grid & Glow Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)] animate-pulse duration-4000" />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-teal-600/10 to-cyan-600/20 opacity-80" />
        
        {/* Subtle Tech Pattern (Orbital Rings) */}
        <svg className="absolute inset-0 w-full h-full opacity-30 stroke-emerald-500/20" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="10" fill="none" strokeWidth="0.5" />
          <line x1="8" y1="8" x2="32" y2="32" strokeWidth="0.5" />
          <circle cx="20" cy="20" r="15" fill="none" strokeWidth="0.5" strokeDasharray="3 2" />
        </svg>

        {/* Initials / Icon */}
        <span className="relative z-10 font-heading font-bold text-white text-[13px] tracking-wide select-none drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]">
          R
        </span>
      </div>
    )
  }

  // Default / MeghRoop Avatar: Studio, Fuchsia-Purple
  return (
    <div
      className={cn(
        'relative rounded-full overflow-hidden flex items-center justify-center border border-purple-500/30 bg-[#12081f] select-none group',
        className
      )}
    >
      {/* Futuristic Grid & Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)] animate-pulse duration-2500" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-fuchsia-600/10 to-pink-600/20 opacity-80" />
      
      {/* Brand Monogram M shape */}
      <svg
        viewBox="0 0 20 16"
        fill="none"
        className="relative z-10 w-[11px] h-[9px] drop-shadow-[0_0_6px_rgba(192,132,252,0.5)] transition-transform duration-300 group-hover:scale-110"
        aria-hidden
      >
        <path
          d="M1 15V1L10 9.5L19 1V15"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
