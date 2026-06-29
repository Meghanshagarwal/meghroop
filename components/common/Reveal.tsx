'use client'

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Stagger step 1–9 → maps to a `.reveal-d{n}` transition-delay class. */
  delay?: number
  /** Scale-in (0.92→1) instead of the default fade-up. */
  scale?: boolean
  className?: string
  /** Render as a different element (e.g. 'li', 'section'). Defaults to 'div'. */
  as?: ElementType
}

/**
 * Lightweight scroll-reveal — a CSS + IntersectionObserver replacement for
 * framer-motion's `whileInView`. ~0.5 kB instead of pulling the whole animation
 * library into the homepage bundle. The element is server-rendered with its
 * final content (good for SEO); only the entrance animation is client-side.
 */
export default function Reveal({
  children,
  delay,
  scale,
  className = '',
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Respect users who can't see the page yet (or reduced motion) by revealing
    // immediately if IntersectionObserver is unavailable.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const classes = [
    'reveal',
    scale ? 'reveal-scale' : '',
    delay ? `reveal-d${delay}` : '',
    visible ? 'is-visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag ref={ref} className={classes}>
      {children}
    </Tag>
  )
}
