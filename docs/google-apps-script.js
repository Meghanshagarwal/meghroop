// MeghRoop — Google Apps Script for Contact Form
// ─────────────────────────────────────────────
// Setup:
// 1. Open your Google Sheet → Extensions → Apps Script
// 2. Paste this entire file (replace everything)
// 3. Deploy → New deployment → Web app
//    - Execute as: Me
//    - Who has access: Anyone
// 4. Copy the deployment URL into Vercel env as GOOGLE_SHEETS_SCRIPT_URL

const SHEET_ID = '1qjhNSVFMhgpBZDmUxOZdnc3AYhpG-RJDnA6l4S6KiXI'
const SHEET_NAME = 'Sheet1'

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME)

    sheet.appendRow([
      data.timestamp ? new Date(data.timestamp) : new Date(),
      data.name || '',
      data.email || '',
      data.projectType || 'Not specified',
      data.message || '',
      'New'
    ])

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON)
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.message }))
      .setMimeType(ContentService.MimeType.JSON)
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON)
}
