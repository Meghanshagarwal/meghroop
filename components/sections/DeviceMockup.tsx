'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

function LiveFrame({
  url,
  baseWidth,
  baseHeight,
  fallbackImage,
  alt,
}: {
  url: string
  baseWidth: number
  baseHeight: number
  fallbackImage: string
  alt: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0)
  const [inView, setInView] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => setScale(el.clientWidth / baseWidth)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [baseWidth])

  // Only start loading the external site once this frame is about to scroll
  // into view — keeps the initial page load fast (screenshot shows instantly).
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin: '400px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden bg-white">
      {/* Screenshot shows immediately; swapped out once the live site finishes loading */}
      <Image
        src={fallbackImage}
        alt={alt}
        fill
        className={`object-cover object-top transition-opacity duration-500 ${loaded ? 'opacity-0' : 'opacity-100'}`}
        sizes={`${baseWidth}px`}
      />
      {inView && scale > 0 && (
        <iframe
          src={url}
          title="Live preview"
          onLoad={() => setLoaded(true)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: baseWidth,
            height: baseHeight,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            border: 0,
            opacity: loaded ? 1 : 0,
            transition: 'opacity 500ms',
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
            <LiveFrame url={url!} baseWidth={1440} baseHeight={900} fallbackImage={desktopImage} alt={`${title} — desktop view`} />
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
            <LiveFrame url={url!} baseWidth={390} baseHeight={844} fallbackImage={mobileImage} alt={`${title} — mobile view`} />
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
