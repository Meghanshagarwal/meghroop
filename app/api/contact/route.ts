import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

export async function POST(req: NextRequest) {
  try {
    const { name, email, projectType, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
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

    // 2. Send email notification via Gmail SMTP
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
          from: `"MeghRoop Contact" <${emailUser}>`,
          to: notifyEmail,
          subject: `New Inquiry from ${name} — MeghRoop`,
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#fff;padding:32px;border-radius:12px;border:1px solid rgba(255,255,255,0.08)">
              <h2 style="color:#a78bfa;margin-bottom:24px">New Project Inquiry</h2>
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:10px 0;color:#9ca3af;width:130px">Name</td><td style="padding:10px 0;color:#fff">${name}</td></tr>
                <tr><td style="padding:10px 0;color:#9ca3af">Email</td><td style="padding:10px 0;color:#60a5fa"><a href="mailto:${email}" style="color:#60a5fa">${email}</a></td></tr>
                <tr><td style="padding:10px 0;color:#9ca3af">Project Type</td><td style="padding:10px 0;color:#fff">${projectType || 'Not specified'}</td></tr>
                <tr><td style="padding:10px 0;color:#9ca3af;vertical-align:top">Message</td><td style="padding:10px 0;color:#fff;line-height:1.6">${message.replace(/\n/g, '<br>')}</td></tr>
              </table>
              <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:24px 0">
              <p style="color:#6b7280;font-size:12px">Sent from MeghRoop contact form</p>
            </div>
          `,
        })

        // Auto-reply to sender
        await transporter.sendMail({
          from: `"MeghRoop Studio" <${emailUser}>`,
          to: email,
          subject: 'We received your message — MeghRoop',
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#fff;padding:32px;border-radius:12px;border:1px solid rgba(255,255,255,0.08)">
              <h2 style="color:#a78bfa;margin-bottom:8px">Thanks, ${name}!</h2>
              <p style="color:#9ca3af;margin-bottom:24px">We&apos;ve received your message and will get back to you within 24 hours.</p>
              <p style="color:#6b7280;font-size:13px">In the meantime, feel free to check out our work at <a href="https://meghroop.com" style="color:#60a5fa">meghroop.com</a></p>
              <hr style="border:none;border-top:1px solid rgba(255,255,255,0.08);margin:24px 0">
              <p style="color:#6b7280;font-size:12px">— The MeghRoop Team</p>
            </div>
          `,
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
