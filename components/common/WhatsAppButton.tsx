'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { trackEvent } from '@/lib/analytics'

export default function WhatsAppButton() {
  const [number, setNumber] = useState('919876543210')

  useEffect(() => {
    fetch('/api/settings')
      .then((res) => res.json())
      .then((data) => {
        if (data.whatsapp_number) {
          setNumber(data.whatsapp_number)
        }
      })
      .catch(() => {})
  }, [])

  const message = encodeURIComponent('Hi MeghRoop! I would like to discuss a project.')
  const href = `https://wa.me/${number}?text=${message}`

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onClick={() => trackEvent('whatsapp_click', 'Contact', { method: 'whatsapp' })}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.4, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-[0_4px_30px_rgba(37,211,102,0.4)] flex items-center justify-center"
    >
      {/* WhatsApp SVG icon */}
      <svg
        viewBox="0 0 32 32"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
      >
        <path d="M16 2C8.28 2 2 8.28 2 16c0 2.45.65 4.74 1.76 6.74L2 30l7.46-1.73A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5c-2.22 0-4.3-.6-6.1-1.63l-.44-.26-4.42 1.03 1.04-4.3-.28-.47A11.47 11.47 0 014.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5zm6.29-8.56c-.34-.17-2.02-.99-2.33-1.1-.31-.11-.54-.17-.77.17s-.88 1.1-1.08 1.33c-.2.23-.4.26-.74.09-.34-.17-1.43-.53-2.72-1.68-1-.9-1.68-2-1.88-2.34-.2-.34-.02-.52.15-.69l.49-.57c.16-.19.2-.34.31-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59l-.65-.01c-.23 0-.6.09-.91.43-.31.34-1.18 1.15-1.18 2.81s1.21 3.26 1.38 3.49c.17.23 2.38 3.63 5.77 5.09.81.35 1.44.56 1.93.71.81.26 1.55.22 2.13.13.65-.1 2.02-.82 2.3-1.62.29-.79.29-1.47.2-1.62-.08-.14-.31-.22-.65-.39z" />
      </svg>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </motion.a>
  )
}
