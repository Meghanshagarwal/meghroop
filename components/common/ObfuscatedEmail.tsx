'use client'

import { useEffect, useState, type ReactNode } from 'react'

/**
 * Renders the contact email without ever placing a scrapable, plain-text
 * address (or `mailto:` link) in the server-rendered HTML. The address is
 * assembled from parts on the client after mount, so bots that read the raw
 * markup never see `hello@meghroop.tech` — neither as visible text nor inside
 * a `mailto:` href.
 *
 * Two modes:
 *  - No `children`  → renders the address itself as the link label (contact
 *    blocks, footers).
 *  - With `children` → renders your own label (e.g. an "Email us" button with
 *    icons) while still wiring up the mailto link on the client only.
 */
const USER = 'hello'
const DOMAIN = 'meghroop.tech'

export default function ObfuscatedEmail({
  className = '',
  subject,
  onClick,
  children,
}: {
  className?: string
  subject?: string
  onClick?: () => void
  children?: ReactNode
}) {
  const [email, setEmail] = useState('')

  useEffect(() => {
    setEmail(`${USER}@${DOMAIN}`)
  }, [])

  // Before hydration: never emit a real address or mailto: into the HTML.
  if (!email) {
    if (children) {
      // Button/label mode — show the label, but with no href yet so the raw
      // markup carries no email. It becomes clickable right after hydration.
      return (
        <span className={className} role="link" aria-label="Email us">
          {children}
        </span>
      )
    }
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
    <a href={href} className={className} onClick={onClick}>
      {children ?? email}
    </a>
  )
}
