// Tiny in-memory fixed-window rate limiter. Good enough for a single-instance
// Node deployment to stop loop/spam abuse on public endpoints. For multi-instance
// hosting this should be swapped for a shared store (e.g. Upstash Redis).

type Bucket = { count: number; resetAt: number }

const buckets = new Map<string, Bucket>()

export interface RateLimitResult {
  ok: boolean
  remaining: number
  retryAfter: number // seconds until window reset
}

/**
 * @param key       unique key, e.g. `contact:<ip>`
 * @param limit     max requests allowed per window
 * @param windowMs  window length in milliseconds
 */
export function rateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now()
  const existing = buckets.get(key)

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return { ok: true, remaining: limit - 1, retryAfter: 0 }
  }

  if (existing.count >= limit) {
    return { ok: false, remaining: 0, retryAfter: Math.ceil((existing.resetAt - now) / 1000) }
  }

  existing.count += 1
  return { ok: true, remaining: limit - existing.count, retryAfter: 0 }
}

// Opportunistically drop expired buckets so the map doesn't grow forever.
function sweep() {
  const now = Date.now()
  buckets.forEach((bucket, key) => {
    if (bucket.resetAt <= now) buckets.delete(key)
  })
}

if (typeof setInterval !== 'undefined') {
  const t = setInterval(sweep, 10 * 60 * 1000)
  // Don't keep the process alive just for the sweeper.
  if (typeof t === 'object' && t && 'unref' in t) (t as { unref: () => void }).unref()
}
