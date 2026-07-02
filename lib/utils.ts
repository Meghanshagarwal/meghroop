import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Escape user-supplied values before interpolating them into notification
// email HTML, so a lead's name/email/message can't inject markup or links.
export function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

// Best-effort client IP for rate-limiting keys.
//
// On Vercel the platform sets `x-real-ip` to the true connecting client IP,
// which a client cannot forge (Vercel overwrites it at the edge). The leftmost
// entry of `x-forwarded-for`, by contrast, is attacker-controlled — a request
// can arrive with `X-Forwarded-For: 1.2.3.4` and Vercel only *appends* the real
// IP, so trusting the first entry lets anyone rotate their rate-limit key.
// Prefer the trusted header; only fall back to XFF when x-real-ip is absent
// (e.g. local dev), and there take the LAST hop, which is the closest proxy.
export function clientIp(req: Request): string {
  const real = req.headers.get('x-real-ip')
  if (real) return real.trim()
  const xff = req.headers.get('x-forwarded-for')
  if (xff) {
    const parts = xff.split(',').map((p) => p.trim()).filter(Boolean)
    if (parts.length) return parts[parts.length - 1]
  }
  return 'unknown'
}
