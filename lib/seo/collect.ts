import type { SeoSignals } from './types'

const UA =
  'Mozilla/5.0 (compatible; MeghRoopSEOBot/1.0; +https://meghroop.tech/seo-checker)'

function countMatches(html: string, re: RegExp): number {
  const m = html.match(re)
  return m ? m.length : 0
}

function attr(tagHtml: string, name: string): string | null {
  const re = new RegExp(`${name}\\s*=\\s*["']([^"']*)["']`, 'i')
  const m = tagHtml.match(re)
  return m ? m[1].trim() : null
}

function firstTag(html: string, re: RegExp): string | null {
  const m = html.match(re)
  return m ? m[0] : null
}

/** Normalise a user-supplied URL into something fetchable. */
export function normalizeUrl(raw: string): string {
  let u = raw.trim()
  if (!/^https?:\/\//i.test(u)) u = 'https://' + u
  return u
}

async function exists(url: string, signal: AbortSignal): Promise<boolean> {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'User-Agent': UA },
      signal,
      redirect: 'follow',
    })
    return res.ok
  } catch {
    return false
  }
}

/**
 * Fetch the target page and extract real, verifiable on-page SEO signals.
 * These are fed to the AI step so the report is grounded in actual findings.
 */
export async function collectSignals(rawUrl: string): Promise<SeoSignals> {
  const url = normalizeUrl(rawUrl)
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15000)
  const startedAt = Date.now()

  let res: Response
  try {
    res = await fetch(url, {
      headers: { 'User-Agent': UA },
      signal: controller.signal,
      redirect: 'follow',
    })
  } catch (e) {
    clearTimeout(timeout)
    throw new Error('Could not reach the website. Check the URL and try again.')
  }

  const responseTimeMs = Date.now() - startedAt
  const html = await res.text()
  clearTimeout(timeout)

  const finalUrl = res.url || url
  const origin = new URL(finalUrl).origin
  const domain = new URL(finalUrl).hostname.replace(/^www\./, '')

  // ---- Head tags ----
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
  const title = titleMatch ? titleMatch[1].replace(/\s+/g, ' ').trim() : null

  const metaDescTag = firstTag(html, /<meta[^>]+name\s*=\s*["']description["'][^>]*>/i)
  const metaDescription = metaDescTag ? attr(metaDescTag, 'content') : null

  const canonicalTag = firstTag(html, /<link[^>]+rel\s*=\s*["']canonical["'][^>]*>/i)
  const canonical = canonicalTag ? attr(canonicalTag, 'href') : null

  const robotsTag = firstTag(html, /<meta[^>]+name\s*=\s*["']robots["'][^>]*>/i)
  const robotsMeta = robotsTag ? attr(robotsTag, 'content') : null

  const viewportTag = firstTag(html, /<meta[^>]+name\s*=\s*["']viewport["'][^>]*>/i)
  const viewport = viewportTag ? attr(viewportTag, 'content') : null

  const htmlTag = firstTag(html, /<html[^>]*>/i)
  const lang = htmlTag ? attr(htmlTag, 'lang') : null

  // ---- Headings ----
  const h1Matches = Array.from(html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)).map((m) =>
    m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
  )
  const h2Count = countMatches(html, /<h2[\s>]/gi)
  const h3Count = countMatches(html, /<h3[\s>]/gi)

  // ---- Body text word count ----
  const bodyText = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  const wordCount = bodyText ? bodyText.split(' ').length : 0

  // ---- Images / alt ----
  const imgTags = Array.from(html.matchAll(/<img\b[^>]*>/gi)).map((m) => m[0])
  const imgCount = imgTags.length
  const imgMissingAlt = imgTags.filter((t) => !/\balt\s*=/i.test(t)).length

  // ---- Links ----
  const anchors = Array.from(html.matchAll(/<a\b[^>]*href\s*=\s*["']([^"']+)["']/gi)).map((m) => m[1])
  let internalLinks = 0
  let externalLinks = 0
  for (const href of anchors) {
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) continue
    try {
      const abs = new URL(href, finalUrl)
      if (abs.origin === origin) internalLinks++
      else externalLinks++
    } catch {
      internalLinks++
    }
  }

  // ---- Social / structured data ----
  const hasOpenGraph = /<meta[^>]+property\s*=\s*["']og:/i.test(html)
  const hasTwitterCard = /<meta[^>]+name\s*=\s*["']twitter:/i.test(html)
  const jsonLdBlocks = Array.from(
    html.matchAll(/<script[^>]+type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)
  ).map((m) => m[1])
  const hasJsonLd = jsonLdBlocks.length > 0
  const jsonLdTypes = Array.from(
    new Set(
      jsonLdBlocks.flatMap((block) => {
        const types = Array.from(block.matchAll(/"@type"\s*:\s*"([^"]+)"/g)).map((m) => m[1])
        return types
      })
    )
  )

  const hasFavicon = /<link[^>]+rel\s*=\s*["'][^"']*icon[^"']*["']/i.test(html)
  const hasHreflang = /<link[^>]+hreflang\s*=/i.test(html)
  const hasInlineStyles = /<[^>]+\sstyle\s*=\s*["']/i.test(html)

  // ---- robots.txt + sitemap.xml (best-effort, parallel) ----
  const probe = new AbortController()
  const probeTimeout = setTimeout(() => probe.abort(), 8000)
  const [hasRobotsTxt, hasSitemap] = await Promise.all([
    exists(`${origin}/robots.txt`, probe.signal),
    exists(`${origin}/sitemap.xml`, probe.signal),
  ])
  clearTimeout(probeTimeout)

  return {
    url,
    finalUrl,
    domain,
    statusCode: res.status,
    fetchedAt: new Date().toISOString(),
    https: finalUrl.startsWith('https://'),
    title,
    titleLength: title ? title.length : 0,
    metaDescription,
    metaDescriptionLength: metaDescription ? metaDescription.length : 0,
    canonical,
    robotsMeta,
    viewport,
    lang,
    h1: h1Matches,
    h1Count: h1Matches.length,
    h2Count,
    h3Count,
    wordCount,
    imgCount,
    imgMissingAlt,
    internalLinks,
    externalLinks,
    hasOpenGraph,
    hasTwitterCard,
    hasJsonLd,
    jsonLdTypes,
    hasFavicon,
    hasViewport: !!viewport,
    hasRobotsTxt,
    hasSitemap,
    hasHreflang,
    hasInlineStyles,
    htmlSizeKb: Math.round((html.length / 1024) * 10) / 10,
    responseTimeMs,
  }
}
