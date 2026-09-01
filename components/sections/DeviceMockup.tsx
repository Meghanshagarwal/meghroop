'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

function LiveFrame({ url, baseWidth, baseHeight }: { url: string; baseWidth: number; baseHeight: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => setScale(el.clientWidth / baseWidth)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [baseWidth])

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden bg-white">
      {scale > 0 && (
        <iframe
          src={url}
          title="Live preview"
          loading="lazy"
          style={{
            width: baseWidth,
            height: baseHeight,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            border: 0,
          }}
        />
      )}
    </div>
  )
}

export default function DeviceMockup({
  desktopImage,
  mobileImage,
  url,
  title,
  liveEmbed = false,
}: {
  desktopImage: string
  mobileImage: string
  url?: string
  title: string
  liveEmbed?: boolean
}) {
  const displayUrl = url ? url.replace(/^https?:\/\//, '').replace(/\/$/, '') : title
  const canEmbed = liveEmbed && !!url

  return (
    <div className="relative flex flex-col lg:flex-row items-center lg:items-end justify-center gap-10 lg:gap-16 py-6">
      {/* Ambient glow behind the frames */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="w-[70%] h-[70%] bg-[#c084fc]/[0.08] rounded-full blur-[120px]" />
      </div>

      {/* Desktop browser frame */}
      <div className="w-full max-w-[720px] rounded-xl overflow-hidden border border-white/[0.08] bg-[#151515] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.6)]">
        <div className="h-9 bg-[#1c1c1c] border-b border-white/[0.06] flex items-center gap-2 px-3.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 flex-1 max-w-[280px] truncate text-[11px] text-white/40 bg-black/30 rounded-md px-3 py-1">
            {displayUrl}
          </span>
          {canEmbed && (
            <span className="flex-shrink-0 flex items-center gap-1.5 text-[10px] text-emerald-400/80">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </span>
          )}
        </div>
        <div className="relative w-full aspect-[16/10]">
          {canEmbed ? (
            <LiveFrame url={url!} baseWidth={1440} baseHeight={900} />
          ) : (
            <Image
              src={desktopImage}
              alt={`${title} — desktop view`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 720px"
            />
          )}
        </div>
      </div>

      {/* Mobile phone frame */}
      <div className="w-[190px] sm:w-[220px] flex-shrink-0 rounded-[2.2rem] bg-[#111] border border-white/[0.08] p-[10px] shadow-[0_40px_90px_-20px_rgba(0,0,0,0.6)]">
        <div className="relative w-full aspect-[9/19.5] rounded-[1.6rem] overflow-hidden bg-white">
          <span className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-4 rounded-full bg-[#111] z-10" />
          {canEmbed ? (
            <LiveFrame url={url!} baseWidth={390} baseHeight={844} />
          ) : (
            <Image
              src={mobileImage}
              alt={`${title} — mobile view`}
              fill
              className="object-cover object-top"
              sizes="220px"
            />
          )}
        </div>
      </div>
    </div>
  )
}
