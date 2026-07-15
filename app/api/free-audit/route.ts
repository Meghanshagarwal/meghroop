import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { insertLead } from '@/lib/leads'
import { escapeHtml, clientIp } from '@/lib/utils'
import { rateLimit } from '@/lib/rate-limit'

export const runtime = 'nodejs'

const MAX_EMAIL = 200
const MAX_NAME = 120
const MAX_URL = 300
const MAX_PHONE = 30
const MAX_GOAL = 600

// "Free Website Audit" lead magnet. Each submission is a single row INSERT into
// the `leads` table (project_type = 'Free Website Audit'), surfaced in the admin
// Leads CRM (/admin/leads), plus a best-effort founder email notification.
export async function POST(req: NextRequest) {
  try {
    // Rate limit: max 5 submissions per IP per 10 minutes.
    const limit = rateLimit(`free-audit:${clientIp(req)}`, 5, 10 * 60 * 1000)
    if (!limit.ok) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a bit.' },
        { status: 429, headers: { 'Retry-After': String(limit.retryAfter) } }
      )
    }

    const body = await req.json()
    const { name, email, url, phone, goal } = body

    // Honeypot: bots fill hidden fields; real users leave them empty.
    if (body.company_url || body.fax) {
      return NextResponse.json({ success: true }) // silently drop
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || typeof email !== 'string' || email.length > MAX_EMAIL || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'A valid email is required' }, { status: 400 })
    }
    if (!url || typeof url !== 'string' || !url.trim() || url.length > MAX_URL) {
      return NextResponse.json({ error: 'Please enter your website URL' }, { status: 400 })
    }

    const cleanName = (name && String(name).trim().slice(0, MAX_NAME)) || 'Website owner'
    const cleanUrl = String(url).trim().slice(0, MAX_URL)
    const cleanPhone = (phone && String(phone).trim().slice(0, MAX_PHONE)) || ''
    const cleanGoal = (goal && String(goal).trim().slice(0, MAX_GOAL)) || ''

    const message =
      `Free Website Audit requested.\n` +
      `Website: ${cleanUrl}\n` +
      (cleanPhone ? `Phone/WhatsApp: ${cleanPhone}\n` : '') +
      (cleanGoal ? `Biggest challenge / goal: ${cleanGoal}\n` : '') +
      `\nAudit the site (speed, SEO, design, mobile, conversion) and send back a personalised report + next steps.`

    // Save lead — single row INSERT (no read-modify-write race).
    try {
      await insertLead({
        name: cleanName,
        email,
        projectType: 'Free Website Audit',
        message,
      })
    } catch (err) {
      console.error('[FreeAudit] Lead save error:', err)
      return NextResponse.json({ error: 'Could not submit your request. Please try again.' }, { status: 500 })
    }

    // Best-effort founder notification (only if SMTP env is configured).
    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASS
    const notifyEmail = process.env.NOTIFY_EMAIL || emailUser
    if (emailUser && emailPass && notifyEmail) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: { user: emailUser, pass: emailPass },
        })
        const s = {
          name: escapeHtml(cleanName),
          email: escapeHtml(email),
          url: escapeHtml(cleanUrl),
          phone: escapeHtml(cleanPhone),
          goal: escapeHtml(cleanGoal),
        }
        await transporter.sendMail({
          from: `"MeghRoop Audit" <${emailUser}>`,
          to: notifyEmail,
          subject: `New Free Website Audit request — ${cleanName}`,
          html: `<div style="font-family:Arial,sans-serif;background:#080808;color:#e4e4e7;padding:24px">
            <h2 style="color:#fff;margin:0 0 12px">New Free Website Audit request 🔍</h2>
            <p style="margin:0 0 6px"><strong style="color:#a1a1aa">Name:</strong> ${s.name}</p>
            <p style="margin:0 0 6px"><strong style="color:#a1a1aa">Email:</strong> <a href="mailto:${s.email}" style="color:#60a5fa">${s.email}</a></p>
            <p style="margin:0 0 6px"><strong style="color:#a1a1aa">Website:</strong> <a href="${s.url}" style="color:#60a5fa">${s.url}</a></p>
            ${s.phone ? `<p style="margin:0 0 6px"><strong style="color:#a1a1aa">Phone/WhatsApp:</strong> ${s.phone}</p>` : ''}
            ${s.goal ? `<p style="margin:0 0 16px"><strong style="color:#a1a1aa">Challenge/goal:</strong> ${s.goal}</p>` : ''}
            <a href="${req.nextUrl.origin}/admin/leads" style="display:inline-block;background:linear-gradient(135deg,#7c3aed,#2563eb);color:#fff;text-decoration:none;padding:10px 18px;border-radius:8px;font-weight:600">Manage in Leads CRM →</a>
          </div>`,
        })
      } catch (err) {
        console.error('[FreeAudit] Email error:', err)
      }
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[FreeAudit] Error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
