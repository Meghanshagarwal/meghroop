'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function CaseStudyGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const go = useCallback(
    (dir: number) => setActive((c) => (c === null ? c : (c + dir + images.length) % images.length)),
    [images.length]
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close, go])

  if (!images.length) return null

  return (
    <>
      {/* Editorial mosaic: first image wide, rest in a 2-col grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {images.map((src, i) => (
          <motion.button
            key={src + i}
            type="button"
            onClick={() => setActive(i)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
            className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0d0d] ${
              i === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
            }`}
          >
            <Image
              src={src}
              alt={`${title} — image ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              sizes={i === 0 ? '(max-width: 1024px) 100vw, 1000px' : '(max-width: 1024px) 50vw, 500px'}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-10"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/[0.08] hover:bg-white/[0.16] flex items-center justify-center text-white transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); go(-1) }}
                  className="absolute left-3 sm:left-6 w-11 h-11 rounded-full bg-white/[0.08] hover:bg-white/[0.16] flex items-center justify-center text-white transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); go(1) }}
                  className="absolute right-3 sm:right-6 w-11 h-11 rounded-full bg-white/[0.08] hover:bg-white/[0.16] flex items-center justify-center text-white transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl aspect-[16/10]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[active]}
                alt={`${title} — image ${active + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/50 tabular-nums">
              {active + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
