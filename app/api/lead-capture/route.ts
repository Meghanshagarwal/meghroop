import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { getSupabase } from '@/lib/supabase'

export const runtime = 'nodejs'

// Lightweight lead capture for the exit-intent popup.
// Stores into the same `client_leads_data` array the Contact form / Chatbot use,
// so every lead shows up and is managed in the admin Leads CRM (/admin/leads).
export async function POST(req: NextRequest) {
  try {
    const { email, brand, source } = await req.json()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'A valid email is required' }, { status: 400 })
    }

    const brandName = (brand && String(brand).trim()) || 'Unknown brand'
    const via = source === 'exit_intent' ? 'exit-intent popup' : 'site popup'

    // Save into the shared leads array (settings → client_leads_data)
    try {
      const db = getSupabase()
      const { data: dbData } = await db
        .from('settings')
        .select('value')
        .eq('key', 'client_leads_data')
        .single()

      let leads = []
      if (dbData && dbData.value) leads = JSON.parse(dbData.value)
      if (!Array.isArray(leads)) leads = []

      const newLead = {
        id: 'lead_' + Math.random().toString(36).substring(2, 9),
        name: brandName,
        email,
        projectType: 'Exit-Intent Popup',
        message: `Quick lead captured via ${via}. Brand: ${brandName}. Visitor was about to leave the site — follow up with a relevant growth/AI/build plan.`,
        status: 'new',
        notes: '',
        createdAt: new Date().toISOString(),
      }

      leads = [newLead, ...leads]

      await db
        .from('settings')
        .upsert({ key: 'client_leads_data', value: JSON.stringify(leads) }, { onConflict: 'key' })
    } catch (err) {
      console.error('[LeadCapture] Supabase save error:', err)
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
        await transporter.sendMail({
          from: `"MeghRoop Popup" <${emailUser}>`,
          to: notifyEmail,
          subject: `New popup lead — ${brandName}`,
          html: `<div style="font-family:Arial,sans-serif;background:#080808;color:#e4e4e7;padding:24px">
            <h2 style="color:#fff;margin:0 0 12px">New popup lead 👋</h2>
            <p style="margin:0 0 6px"><strong style="color:#a1a1aa">Brand:</strong> ${brandName}</p>
            <p style="margin:0 0 6px"><strong style="color:#a1a1aa">Email:</strong> <a href="mailto:${email}" style="color:#60a5fa">${email}</a></p>
            <p style="margin:0 0 16px"><strong style="color:#a1a1aa">Source:</strong> ${via}</p>
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
