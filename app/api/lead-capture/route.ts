import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { insertLead } from '@/lib/leads'
import { escapeHtml, clientIp } from '@/lib/utils'
import { rateLimit } from '@/lib/rate-limit'

export const runtime = 'nodejs'

const MAX_EMAIL = 200
const MAX_BRAND = 200

// Lightweight lead capture for the exit-intent popup.
// Each submission is a single row INSERT into the `leads` table, surfaced in the
// admin Leads CRM (/admin/leads) alongside contact-form and chatbot leads.
export async function POST(req: NextRequest) {
  try {
    // Rate limit: max 5 submissions per IP per 10 minutes.
    const limit = rateLimit(`lead-capture:${clientIp(req)}`, 5, 10 * 60 * 1000)
    if (!limit.ok) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } }
      )
    }

    const body = await req.json()
    const { email, brand, source } = body

    // Honeypot: bots fill hidden fields; real users leave them empty.
    if (body.website || body.company_url) {
      return NextResponse.json({ success: true }) // silently drop
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || typeof email !== 'string' || email.length > MAX_EMAIL || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'A valid email is required' }, { status: 400 })
    }

    const brandName = (brand && String(brand).trim().slice(0, MAX_BRAND)) || 'Unknown brand'
    const via = source === 'exit_intent' ? 'exit-intent popup' : 'site popup'

    // Save lead — single row INSERT (no read-modify-write race).
    try {
      await insertLead({
        name: brandName,
        email,
        projectType: 'Exit-Intent Popup',
        message: `Quick lead captured via ${via}. Brand: ${brandName}. Visitor was about to leave the site — follow up with a relevant growth/AI/build plan.`,
      })
    } catch (err) {
      console.error('[LeadCapture] Lead save error:', err)
      return NextResponse.json({ error: 'Could not save lead' }, { status: 500 })
    }

    // Best-effort founder notification (only if SMTP env is configured)
    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASS
    const notifyEmail = process.env.NOTIFY_EMAIL || emailUser
    if (emailUser && emailPass && notifyEmail) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: { user: emailUser, pass: emailPass },
        })
        const safeBrand = escapeHtml(brandName)
        const safeEmail = escapeHtml(email)
        const safeVia = escapeHtml(via)
        await transporter.sendMail({
          from: `"MeghRoop Popup" <${emailUser}>`,
          to: notifyEmail,
          subject: `New popup lead — ${brandName}`,
          html: `<div style="font-family:Arial,sans-serif;background:#080808;color:#e4e4e7;padding:24px">
            <h2 style="color:#fff;margin:0 0 12px">New popup lead 👋</h2>
            <p style="margin:0 0 6px"><strong style="color:#a1a1aa">Brand:</strong> ${safeBrand}</p>
            <p style="margin:0 0 6px"><strong style="color:#a1a1aa">Email:</strong> <a href="mailto:${safeEmail}" style="color:#60a5fa">${safeEmail}</a></p>
            <p style="margin:0 0 16px"><strong style="color:#a1a1aa">Source:</strong> ${safeVia}</p>
            <a href="${req.nextUrl.origin}/admin/leads" style="display:inline-block;background:linear-gradient(135deg,#7c3aed,#2563eb);color:#fff;text-decoration:none;padding:10px 18px;border-radius:8px;font-weight:600">Manage in Leads CRM →</a>
          </div>`,
        })
      } catch (err) {
        console.error('[LeadCapture] Email error:', err)
      }
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[LeadCapture] Error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
