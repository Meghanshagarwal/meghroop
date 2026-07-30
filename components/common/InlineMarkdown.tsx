import Link from 'next/link'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'

// Splits on **bold** and [text](url) so AI-generated article bodies (which use
// standard markdown inline syntax) actually render as real links/bold instead
// of literal bracket text — this is what turns in-content brand mentions into
// clickable internal links (search-engine-visible backlinks to service pages).
const INLINE_PATTERN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g

function toInternalHref(url: string): string | null {
  try {
    if (url.startsWith('/')) return url
    const u = new URL(url)
    if (u.hostname === 'meghroop.tech' || u.hostname === 'www.meghroop.tech' || u.hostname === new URL(SITE_URL).hostname) {
      return u.pathname + u.search + u.hash || '/'
    }
  } catch {
    // not a valid absolute URL — treat as external/relative text
  }
  return null
}

export default function InlineMarkdown({ text }: { text: string }) {
  const parts = text.split(INLINE_PATTERN).filter((p) => p !== '')

  return (
    <>
      {parts.map((part, i) => {
        const boldMatch = part.match(/^\*\*([^*]+)\*\*$/)
        if (boldMatch) {
          return (
            <strong key={i} className="font-semibold text-white">
              {boldMatch[1]}
            </strong>
          )
        }

        const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (linkMatch) {
          const [, label, url] = linkMatch
          const internalHref = toInternalHref(url)
          if (internalHref) {
            return (
              <Link key={i} href={internalHref} className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors">
                {label}
              </Link>
            )
          }
          return (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline underline-offset-2 transition-colors"
            >
              {label}
            </a>
          )
        }

        return <span key={i}>{part}</span>
      })}
    </>
  )
}
