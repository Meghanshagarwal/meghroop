import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { getSupabase } from '@/lib/supabase'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const { name, email, projectType, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // 0. Save lead to Supabase database
    try {
      const db = getSupabase()
      const { data: dbData } = await db
        .from('settings')
        .select('value')
        .eq('key', 'client_leads_data')
        .single()
      
      let leads = []
      if (dbData && dbData.value) {
        leads = JSON.parse(dbData.value)
      }
      if (!Array.isArray(leads)) {
        leads = []
      }

      const newLead = {
        id: 'lead_' + Math.random().toString(36).substring(2, 9),
        name,
        email,
        projectType: projectType || 'Not specified',
        message,
        status: 'new',
        notes: '',
        createdAt: new Date().toISOString(),
      }

      leads = [newLead, ...leads]

      await db
        .from('settings')
        .upsert({ key: 'client_leads_data', value: JSON.stringify(leads) }, { onConflict: 'key' })
    } catch (err) {
      console.error('[Contact] Supabase lead save error:', err)
    }

    // 1. Send to Google Sheets via Apps Script
    const sheetsUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL
    if (sheetsUrl) {
      try {
        await fetch(sheetsUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            projectType: projectType || 'Not specified',
            message,
            timestamp: new Date().toISOString(),
          }),
        })
      } catch (err) {
        console.error('[Contact] Google Sheets error:', err)
      }
    }

    // 2. Send email notifications via Gmail SMTP
    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASS
    const notifyEmail = process.env.NOTIFY_EMAIL || emailUser

    if (emailUser && emailPass && notifyEmail) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: { user: emailUser, pass: emailPass },
        })

        const date = new Date().toLocaleDateString('en-IN', {
          day: 'numeric', month: 'long', year: 'numeric',
        })

        // ── Notification email to MeghRoop ──────────────────────────────
        await transporter.sendMail({
          from: `"MeghRoop Contact" <${emailUser}>`,
          to: notifyEmail,
          subject: `New Inquiry from ${name} — MeghRoop`,
          html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#000;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#000;padding:40px 16px;">
  <tr><td align="center">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

    <!-- Logo -->
    <tr><td style="padding-bottom:24px;" align="center">
      <table cellpadding="0" cellspacing="0"><tr>
        <td style="width:32px;height:32px;background:linear-gradient(135deg,#a855f7,#3b82f6);border-radius:8px;text-align:center;line-height:32px;">
          <span style="color:#fff;font-weight:700;font-size:14px;">M</span>
        </td>
        <td style="padding-left:10px;color:#fff;font-size:16px;font-weight:700;">MeghRoop</td>
      </tr></table>
    </td></tr>

    <!-- Card -->
    <tr><td style="background:#0a0a0a;border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;">

      <!-- Gradient header -->
      <tr><td style="background:linear-gradient(135deg,rgba(168,85,247,0.18),rgba(59,130,246,0.18));padding:28px 32px 24px;">
        <p style="margin:0 0 4px;color:#a78bfa;font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;">New Project Inquiry</p>
        <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700;">You have a new message</h1>
      </td></tr>

      <!-- Fields -->
      <tr><td style="padding:28px 32px;">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr><td style="padding-bottom:18px;">
            <p style="margin:0 0 4px;color:#6b7280;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">From</p>
            <p style="margin:0;color:#fff;font-size:15px;font-weight:600;">${name}</p>
          </td></tr>
          <tr><td style="padding-bottom:18px;">
            <p style="margin:0 0 4px;color:#6b7280;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Email</p>
            <a href="mailto:${email}" style="color:#60a5fa;font-size:15px;text-decoration:none;">${email}</a>
          </td></tr>
          <tr><td style="padding-bottom:20px;">
            <p style="margin:0 0 6px;color:#6b7280;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Project Type</p>
            <span style="display:inline-block;background:rgba(168,85,247,0.12);border:1px solid rgba(168,85,247,0.25);border-radius:20px;padding:4px 14px;color:#c4b5fd;font-size:13px;font-weight:500;">${projectType || 'Not specified'}</span>
          </td></tr>
          <tr><td>
            <p style="margin:0 0 8px;color:#6b7280;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Message</p>
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:16px;">
              <p style="margin:0;color:#d1d5db;font-size:14px;line-height:1.7;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </td></tr>
        </table>
        <table cellpadding="0" cellspacing="0" style="margin-top:24px;">
          <tr><td>
            <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#7c3aed,#2563eb);color:#fff;font-size:14px;font-weight:600;text-decoration:none;padding:12px 24px;border-radius:10px;">Reply to ${name}</a>
          </td></tr>
        </table>
      </td></tr>

      <!-- Footer -->
      <tr><td style="padding:18px 32px;border-top:1px solid rgba(255,255,255,0.05);">
        <p style="margin:0;color:#374151;font-size:12px;">Sent via MeghRoop contact form &middot; ${date}</p>
      </td></tr>

    </td></tr>

  </table>
  </td></tr>
</table>
</body></html>`,
        })

        // ── Auto-reply to sender ─────────────────────────────────────────
        await transporter.sendMail({
          from: `"MeghRoop Studio" <${emailUser}>`,
          to: email,
          subject: `We received your message, ${name} — MeghRoop`,
          html: `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#000;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#000;padding:40px 16px;">
  <tr><td align="center">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

    <!-- Logo -->
    <tr><td style="padding-bottom:24px;" align="center">
      <table cellpadding="0" cellspacing="0"><tr>
        <td style="width:32px;height:32px;background:linear-gradient(135deg,#a855f7,#3b82f6);border-radius:8px;text-align:center;line-height:32px;">
          <span style="color:#fff;font-weight:700;font-size:14px;">M</span>
        </td>
        <td style="padding-left:10px;color:#fff;font-size:16px;font-weight:700;">MeghRoop</td>
      </tr></table>
    </td></tr>

    <!-- Card -->
    <tr><td style="background:#0a0a0a;border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;">

      <!-- Header -->
      <tr><td style="background:linear-gradient(135deg,rgba(168,85,247,0.18),rgba(59,130,246,0.18));padding:32px;text-align:center;">
        <div style="width:52px;height:52px;background:rgba(52,211,153,0.12);border:1px solid rgba(52,211,153,0.3);border-radius:50%;margin:0 auto 16px;text-align:center;line-height:52px;color:#34d399;font-size:22px;font-weight:700;">&#10003;</div>
        <h1 style="margin:0 0 8px;color:#fff;font-size:22px;font-weight:700;">Message received!</h1>
        <p style="margin:0;color:#9ca3af;font-size:14px;">Thanks for reaching out, ${name}.</p>
      </td></tr>

      <!-- Body -->
      <tr><td style="padding:28px 32px;">

        <p style="margin:0 0 22px;color:#d1d5db;font-size:14px;line-height:1.7;">
          We've received your inquiry and our team will review it shortly. Expect a reply within <strong style="color:#fff;">24 hours</strong>.
        </p>

        <!-- Summary -->
        <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:10px;padding:18px 20px;margin-bottom:24px;">
          <p style="margin:0 0 12px;color:#6b7280;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;">Your Inquiry Summary</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="color:#6b7280;font-size:13px;padding-bottom:8px;width:110px;vertical-align:top;">Project Type</td>
              <td style="padding-bottom:8px;">
                <span style="display:inline-block;background:rgba(168,85,247,0.1);border:1px solid rgba(168,85,247,0.2);border-radius:20px;padding:2px 10px;color:#c4b5fd;font-size:12px;">${projectType || 'Not specified'}</span>
              </td>
            </tr>
            <tr>
              <td style="color:#6b7280;font-size:13px;vertical-align:top;">Message</td>
              <td style="color:#e5e7eb;font-size:13px;line-height:1.6;">${message.length > 120 ? message.substring(0, 120).replace(/\n/g, ' ') + '...' : message.replace(/\n/g, '<br>')}</td>
            </tr>
          </table>
        </div>

        <!-- What's next -->
        <p style="margin:0 0 14px;color:#6b7280;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;">What happens next</p>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding-bottom:14px;vertical-align:top;width:28px;">
              <div style="width:22px;height:22px;background:rgba(168,85,247,0.12);border:1px solid rgba(168,85,247,0.25);border-radius:50%;text-align:center;line-height:22px;color:#a78bfa;font-size:11px;font-weight:700;">1</div>
            </td>
            <td style="padding-bottom:14px;padding-left:10px;vertical-align:top;">
              <p style="margin:0;color:#fff;font-size:13px;font-weight:600;">Review</p>
              <p style="margin:2px 0 0;color:#6b7280;font-size:12px;">We'll carefully review your project details</p>
            </td>
          </tr>
          <tr>
            <td style="padding-bottom:14px;vertical-align:top;width:28px;">
              <div style="width:22px;height:22px;background:rgba(168,85,247,0.12);border:1px solid rgba(168,85,247,0.25);border-radius:50%;text-align:center;line-height:22px;color:#a78bfa;font-size:11px;font-weight:700;">2</div>
            </td>
            <td style="padding-bottom:14px;padding-left:10px;vertical-align:top;">
              <p style="margin:0;color:#fff;font-size:13px;font-weight:600;">Response</p>
              <p style="margin:2px 0 0;color:#6b7280;font-size:12px;">Expect our reply within 24 hours</p>
            </td>
          </tr>
          <tr>
            <td style="vertical-align:top;width:28px;">
              <div style="width:22px;height:22px;background:rgba(168,85,247,0.12);border:1px solid rgba(168,85,247,0.25);border-radius:50%;text-align:center;line-height:22px;color:#a78bfa;font-size:11px;font-weight:700;">3</div>
            </td>
            <td style="padding-left:10px;vertical-align:top;">
              <p style="margin:0;color:#fff;font-size:13px;font-weight:600;">Kickoff</p>
              <p style="margin:2px 0 0;color:#6b7280;font-size:12px;">We'll schedule a discovery call to get started</p>
            </td>
          </tr>
        </table>

      </td></tr>

      <!-- Footer -->
      <tr><td style="padding:20px 32px;border-top:1px solid rgba(255,255,255,0.05);text-align:center;">
        <p style="margin:0 0 6px;color:#4b5563;font-size:12px;">Explore our work at <a href="https://meghroop.tech" style="color:#60a5fa;text-decoration:none;">meghroop.tech</a></p>
        <p style="margin:0;color:#374151;font-size:11px;">— The MeghRoop Team</p>
      </td></tr>

    </td></tr>

  </table>
  </td></tr>
</table>
</body></html>`,
        })
      } catch (err) {
        console.error('[Contact] Email error:', err)
      }
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact] Error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
