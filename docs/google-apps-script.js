// MeghRoop — Google Apps Script for Contact Form
// ─────────────────────────────────────────────
// Setup:
// 1. Go to https://script.google.com → New Project
// 2. Paste this entire file
// 3. Replace SHEET_ID below with your Google Sheet ID
// 4. Deploy → New deployment → Web app
//    - Execute as: Me
//    - Who has access: Anyone
// 5. Copy the deployment URL into .env as GOOGLE_SHEETS_SCRIPT_URL

const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE'
const SHEET_NAME = 'Contacts'

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME)
      || SpreadsheetApp.openById(SHEET_ID).insertSheet(SHEET_NAME)

    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Project Type', 'Message'])
      sheet.getRange(1, 1, 1, 5).setFontWeight('bold')
    }

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.projectType || '',
      data.message || '',
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

// Allow CORS preflight
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok' }))
    .setMimeType(ContentService.MimeType.JSON)
}
