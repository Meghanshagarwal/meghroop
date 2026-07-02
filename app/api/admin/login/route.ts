import { NextResponse } from 'next/server'
import { signAdminToken } from '@/lib/admin-auth'
import { clientIp } from '@/lib/utils'
import { rateLimit } from '@/lib/rate-limit'
import { safeEqual } from '@/lib/crypto'

export async function POST(req: Request) {
  // Throttle brute-force attempts: max 10 tries per IP per 15 minutes.
  const limit = rateLimit(`admin-login:${clientIp(req)}`, 10, 15 * 60 * 1000)
  if (!limit.ok) {
    return NextResponse.json(
      { error: 'Too many attempts. Please try again later.' },
      { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } }
    )
  }

  const { password } = await req.json()

  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: 'Server is missing ADMIN_PASSWORD configuration' },
      { status: 500 }
    )
  }

  if (!password || typeof password !== 'string' || !safeEqual(password, process.env.ADMIN_PASSWORD)) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }

  const token = await signAdminToken()

  const res = NextResponse.json({ ok: true })
  res.cookies.set('admin_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
  })
  return res
}
