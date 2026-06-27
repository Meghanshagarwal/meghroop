'use client'

import { useEffect, useState } from 'react'

/**
 * Renders the contact email without ever placing a scrapable, plain-text
 * address (or `mailto:` link) in the server-rendered HTML. The address is
 * assembled from parts on the client after mount, so bots that read the raw
 * markup never see `hello@meghroop.tech`.
 */
const USER = 'hello'
const DOMAIN = 'meghroop.tech'

export default function ObfuscatedEmail({
  className = '',
  subject,
}: {
  className?: string
  subject?: string
}) {
  const [email, setEmail] = useState('')

  useEffect(() => {
    setEmail(`${USER}@${DOMAIN}`)
  }, [])

  if (!email) {
    // Placeholder before hydration — not a real address.
    return (
      <span className={className} aria-label="Email address loading">
        {USER}&#8203;[at]&#8203;{DOMAIN}
      </span>
    )
  }

  const href = subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`

  return (
    <a href={href} className={className}>
      {email}
    </a>
  )
}
