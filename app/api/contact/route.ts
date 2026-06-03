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
          html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Inquiry from ${name} — MeghRoop</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" type="text/css" />
  <style type="text/css">
    body, table, td, a { -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
    table, td { mso-table-lspace:0pt; mso-table-rspace:0pt; }
    img { -ms-interpolation-mode:bicubic; }
    body { height:100% !important; margin:0 !important; padding:0 !important; width:100% !important; background-color:#080808; }
    table { border-collapse:collapse !important; }
    
    @media only screen and (max-width: 620px) {
      .wrapper { width: 100% !important; padding: 10px !important; }
      .column { width: 100% !important; display: block !important; box-sizing: border-box !important; padding: 0 0 20px 0 !important; }
      .center-mobile { text-align: center !important; }
      .hide-mobile { display: none !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #080808; font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">

  <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#080808" style="background-color: #080808;">
    <tr>
      <td align="center" style="padding: 24px 0 60px 0;">
        
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="wrapper" style="width: 100%; max-width: 600px; background-color: #080808; border-collapse: collapse;">
          
          <!-- BRAND HEADER -->
          <tr>
            <td style="padding: 20px 24px 32px 24px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <!-- Logo Badge -->
                  <td valign="middle" style="width: 44px;">
                    <img src="https://meghroop.tech/icon-96.png" width="44" height="44" alt="M" style="display: block; border-radius: 10px; background-color: #0d0d0d; border: 1px solid rgba(255,255,255,0.1); width: 44px; height: 44px;" />
                  </td>
                  
                  <!-- Separator -->
                  <td valign="middle" style="padding: 0 14px; width: 2px; text-align: center;">
                    <div style="width: 2px; height: 36px; background-color: #c084fc; border-radius: 1px; font-size: 1px; line-height: 1px;">&nbsp;</div>
                  </td>
                  
                  <!-- Brand Name -->
                  <td valign="middle" align="left">
                    <p style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.03em; color: #ffffff; line-height: 1.1;">MeghRoop</p>
                    <p style="margin: 3px 0 0 0; font-size: 9px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: #71717a; line-height: 1.0;">Creative Technology Studio</p>
                  </td>
                  
                  <!-- Web Link -->
                  <td valign="middle" align="right" class="center-mobile">
                    <a href="https://meghroop.tech" style="font-size: 12px; font-weight: 600; color: #c084fc; text-decoration: none; letter-spacing: 0.05em;">meghroop.tech &rarr;</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CARD CONTENT -->
          <tr>
            <td style="padding: 0 16px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#0d0d0d" style="background-color: #0d0d0d; border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; overflow: hidden; border-collapse: collapse;">
                
                <!-- Glow Header Banner -->
                <tr>
                  <td style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.12), rgba(59, 130, 246, 0.12)); padding: 40px 32px 32px 32px; text-align: center;">
                    <!-- Glowing Envelope -->
                    <div style="width: 48px; height: 48px; line-height: 46px; background-color: rgba(168, 85, 247, 0.08); border: 1px solid rgba(168, 85, 247, 0.2); border-radius: 50%; color: #c084fc; font-size: 20px; font-weight: bold; margin: 0 auto 16px; text-align: center; box-sizing: border-box;">
                      &#9993;&#65038;
                    </div>
                    <h1 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: -0.03em;">New Project Inquiry</h1>
                    <p style="margin: 0; color: #a1a1aa; font-size: 14px; font-weight: 400;">You have received a new contact submission.</p>
                  </td>
                </tr>

                <!-- Content Body -->
                <tr>
                  <td style="padding: 32px 32px 40px 32px;">
                    
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#080808" style="background-color: #080808; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; margin-bottom: 24px; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 20px;">
                          <p style="margin: 0 0 16px 0; font-size: 10px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #71717a;">Inquiry Parameters</p>
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <!-- Client Name -->
                            <tr>
                              <td valign="top" width="110" style="width: 110px; padding-bottom: 14px; font-size: 13px; color: #71717a; font-weight: 500;">Client Name</td>
                              <td valign="top" style="padding-bottom: 14px; font-size: 13px; color: #ffffff; font-weight: 600;">
                                ${name}
                              </td>
                            </tr>
                            
                            <!-- Email -->
                            <tr>
                              <td valign="top" width="110" style="width: 110px; padding-bottom: 14px; font-size: 13px; color: #71717a; font-weight: 500;">Email Address</td>
                              <td valign="top" style="padding-bottom: 14px; font-size: 13px; font-weight: 500;">
                                <a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a>
                              </td>
                            </tr>

                            <!-- Project Type -->
                            <tr>
                              <td valign="top" width="110" style="width: 110px; padding-bottom: 14px; font-size: 13px; color: #71717a; font-weight: 500;">Project Type</td>
                              <td valign="top" style="padding-bottom: 14px;">
                                <span style="display: inline-block; background-color: rgba(168, 85, 247, 0.08); border: 1px solid rgba(168, 85, 247, 0.2); border-radius: 20px; padding: 2px 10px; color: #c084fc; font-size: 12px; font-weight: 600;">
                                  ${projectType || 'Not specified'}
                                </span>
                              </td>
                            </tr>

                            <!-- Message Content -->
                            <tr>
                              <td valign="top" width="110" style="width: 110px; font-size: 13px; color: #71717a; font-weight: 500; padding-top: 4px;">Message Body</td>
                              <td valign="top" style="padding-top: 4px;">
                                <div style="background-color: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 8px; padding: 12px 16px; font-size: 13px; color: #e4e4e7; line-height: 1.6; font-weight: 400; min-height: 40px; word-break: break-word;">
                                  ${message.replace(/\n/g, '<br>')}
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <!-- Action Button -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td align="center" style="padding-top: 10px;">
                          <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #7c3aed, #2563eb); color: #ffffff; font-size: 14px; font-weight: 600; text-decoration: none; padding: 14px 28px; border-radius: 10px; letter-spacing: 0.02em;">Reply to ${name}</a>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- Card Footer -->
                <tr>
                  <td style="padding: 24px 32px; border-top: 1px solid rgba(255,255,255,0.06); text-align: center; background-color: #0c0c0c;">
                    <p style="margin: 0 0 6px 0; color: #71717a; font-size: 12px;">Manage all leads in the <a href="${req.nextUrl.origin}/admin/leads" style="color: #c084fc; text-decoration: none; font-weight: 600;">CRM Leads Manager &rarr;</a></p>
                    <p style="margin: 0; color: #52525b; font-size: 11px;">Sent via MeghRoop Contact Form &middot; ${date}</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

        </table>
        
      </td>
    </tr>
  </table>

</body>
</html>`,
        })

        // ── Auto-reply to sender ─────────────────────────────────────────
        await transporter.sendMail({
          from: `"MeghRoop Studio" <${emailUser}>`,
          to: email,
          subject: `We received your message, ${name} — MeghRoop`,
          html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We received your message — MeghRoop</title>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" type="text/css" />
  <style type="text/css">
    body, table, td, a { -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
    table, td { mso-table-lspace:0pt; mso-table-rspace:0pt; }
    img { -ms-interpolation-mode:bicubic; }
    body { height:100% !important; margin:0 !important; padding:0 !important; width:100% !important; background-color:#080808; }
    table { border-collapse:collapse !important; }
    
    @media only screen and (max-width: 620px) {
      .wrapper { width: 100% !important; padding: 10px !important; }
      .column { width: 100% !important; display: block !important; box-sizing: border-box !important; padding: 0 0 20px 0 !important; }
      .center-mobile { text-align: center !important; }
      .hide-mobile { display: none !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #080808; font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">

  <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#080808" style="background-color: #080808;">
    <tr>
      <td align="center" style="padding: 24px 0 60px 0;">
        
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="wrapper" style="width: 100%; max-width: 600px; background-color: #080808; border-collapse: collapse;">
          
          <!-- BRAND HEADER -->
          <tr>
            <td style="padding: 20px 24px 32px 24px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <!-- Logo Badge -->
                  <td valign="middle" style="width: 44px;">
                    <img src="https://meghroop.tech/icon-96.png" width="44" height="44" alt="M" style="display: block; border-radius: 10px; background-color: #0d0d0d; border: 1px solid rgba(255,255,255,0.1); width: 44px; height: 44px;" />
                  </td>
                  
                  <!-- Separator -->
                  <td valign="middle" style="padding: 0 14px; width: 2px; text-align: center;">
                    <div style="width: 2px; height: 36px; background-color: #c084fc; border-radius: 1px; font-size: 1px; line-height: 1px;">&nbsp;</div>
                  </td>
                  
                  <!-- Brand Name -->
                  <td valign="middle" align="left">
                    <p style="margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.03em; color: #ffffff; line-height: 1.1;">MeghRoop</p>
                    <p style="margin: 3px 0 0 0; font-size: 9px; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: #71717a; line-height: 1.0;">Creative Technology Studio</p>
                  </td>
                  
                  <!-- Web Link -->
                  <td valign="middle" align="right" class="center-mobile">
                    <a href="https://meghroop.tech" style="font-size: 12px; font-weight: 600; color: #c084fc; text-decoration: none; letter-spacing: 0.05em;">meghroop.tech &rarr;</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CARD CONTENT -->
          <tr>
            <td style="padding: 0 16px;">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#0d0d0d" style="background-color: #0d0d0d; border: 1px solid rgba(255,255,255,0.08); border-radius: 20px; overflow: hidden; border-collapse: collapse;">
                
                <!-- Glow Header Banner -->
                <tr>
                  <td style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.12), rgba(59, 130, 246, 0.12)); padding: 40px 32px 32px 32px; text-align: center;">
                    {/* Glowing Checkmark */}
                    <div style="width: 48px; height: 48px; line-height: 46px; background-color: rgba(192, 132, 252, 0.08); border: 1px solid rgba(192, 132, 252, 0.2); border-radius: 50%; color: #c084fc; font-size: 20px; font-weight: bold; margin: 0 auto 16px; text-align: center; box-sizing: border-box;">
                      &#10003;&#65038;
                    </div>
                    <h1 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 700; color: #ffffff; letter-spacing: -0.03em;">Message received!</h1>
                    <p style="margin: 0; color: #a1a1aa; font-size: 14px; font-weight: 400;">Thanks for reaching out, ${name}.</p>
                  </td>
                </tr>

                <!-- Content Body -->
                <tr>
                  <td style="padding: 32px 32px 40px 32px;">
                    <p style="margin: 0 0 24px 0; color: #a1a1aa; font-size: 14px; line-height: 1.7; font-weight: 400;">
                      We have captured your inquiry in our workspace. Our core studio developers will review the parameters of your project. Expect an engineering response within <strong style="color: #ffffff;">24 hours</strong>.
                    </p>

                    <!-- Summary Box -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#080808" style="background-color: #080808; border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; margin-bottom: 32px; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 20px;">
                          <p style="margin: 0 0 14px 0; font-size: 10px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #71717a;">Your Inquiry Summary</p>
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td valign="top" width="110" style="width: 110px; padding-bottom: 12px; font-size: 13px; color: #71717a; font-weight: 500;">Project Type</td>
                              <td valign="top" style="padding-bottom: 12px;">
                                <span style="display: inline-block; background-color: rgba(168, 85, 247, 0.08); border: 1px solid rgba(168, 85, 247, 0.2); border-radius: 20px; padding: 2px 10px; color: #c084fc; font-size: 12px; font-weight: 600;">
                                  ${projectType || 'Not specified'}
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td valign="top" style="font-size: 13px; color: #71717a; font-weight: 500;">Message</td>
                              <td valign="top" style="font-size: 13px; color: #e4e4e7; line-height: 1.6; font-weight: 400;">
                                ${message.length > 150 ? message.substring(0, 150).replace(/\n/g, ' ') + '...' : message.replace(/\n/g, '<br>')}
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <!-- Next steps -->
                    <p style="margin: 0 0 16px 0; font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #60a5fa;">What happens next</p>
                    
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <!-- Step 1 -->
                      <tr>
                        <td valign="top" style="padding-bottom: 18px;">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td valign="top" width="24" style="width: 24px;">
                                <div style="width: 22px; height: 22px; line-height: 20px; background-color: rgba(192, 132, 252, 0.08); border: 1px solid rgba(192, 132, 252, 0.2); border-radius: 50%; text-align: center; color: #c084fc; font-family: monospace; font-size: 11px; font-weight: bold; box-sizing: border-box;">1</div>
                              </td>
                              <td valign="top" style="padding-left: 12px;">
                                <h4 style="margin: 0 0 2px 0; font-size: 14px; font-weight: 700; color: #ffffff;">Review</h4>
                                <p style="margin: 0; font-size: 12px; color: #71717a; line-height: 1.5;">We will carefully analyze your requirements and tech stack options.</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      
                      <!-- Step 2 -->
                      <tr>
                        <td valign="top" style="padding-bottom: 18px;">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td valign="top" width="24" style="width: 24px;">
                                <div style="width: 22px; height: 22px; line-height: 20px; background-color: rgba(96, 165, 250, 0.08); border: 1px solid rgba(96, 165, 250, 0.2); border-radius: 50%; text-align: center; color: #60a5fa; font-family: monospace; font-size: 11px; font-weight: bold; box-sizing: border-box;">2</div>
                              </td>
                              <td valign="top" style="padding-left: 12px;">
                                <h4 style="margin: 0 0 2px 0; font-size: 14px; font-weight: 700; color: #ffffff;">Response</h4>
                                <p style="margin: 0; font-size: 12px; color: #71717a; line-height: 1.5;">You will receive an engineering brief outlining our proposal within 24 hours.</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Step 3 -->
                      <tr>
                        <td valign="top">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td valign="top" width="24" style="width: 24px;">
                                <div style="width: 22px; height: 22px; line-height: 20px; background-color: rgba(52, 211, 153, 0.08); border: 1px solid rgba(52, 211, 153, 0.2); border-radius: 50%; text-align: center; color: #34d399; font-family: monospace; font-size: 11px; font-weight: bold; box-sizing: border-box;">3</div>
                              </td>
                              <td valign="top" style="padding-left: 12px;">
                                <h4 style="margin: 0 0 2px 0; font-size: 14px; font-weight: 700; color: #ffffff;">Kickoff</h4>
                                <p style="margin: 0; font-size: 12px; color: #71717a; line-height: 1.5;">We will schedule a direct video call to map out implementation details.</p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                  </td>
                </tr>

                <!-- Card Footer -->
                <tr>
                  <td style="padding: 24px 32px; border-top: 1px solid rgba(255,255,255,0.06); text-align: center; background-color: #0c0c0c;">
                    <p style="margin: 0 0 6px 0; color: #71717a; font-size: 12px;">Explore our systems at <a href="https://meghroop.tech" style="color: #c084fc; text-decoration: none;">meghroop.tech</a></p>
                    <p style="margin: 0; color: #52525b; font-size: 11px;">— The MeghRoop Founders</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

        </table>
        
      </td>
    </tr>
  </table>

</body>
</html>`,
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
