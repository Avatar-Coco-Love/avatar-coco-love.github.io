// Email list for avatar-coco-love.github.io (the "Get updates" form).
// Lives in the "Email list (projects page)" Sheet: Extensions > Apps Script.
// Deploy > New deployment > Web app: Execute as Me, Who has access: Anyone.
// Columns: email, name, joined_at, source, status, token.

function sheet_() { return SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]; }
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

// Sign-up from the form.
function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p.website) return json_({ ok: true });            // hidden field: only bots fill it
  const email = String(p.email || '').trim().toLowerCase().slice(0, 254);
  if (!/^[a-z0-9][^\s@]*@[^\s@]+\.[^\s@]{2,}$/.test(email)) return json_({ ok: false, error: 'email' });
  const name = String(p.name || '').trim().slice(0, 80).replace(/^[=+\-@]/, "'$&");
  const source = String(p.source || '').slice(0, 100);
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sh = sheet_(), rows = sh.getDataRange().getValues();
    for (let i = 1; i < rows.length; i++) {
      if (rows[i][0] === email) {                       // already on the list: re-subscribe
        sh.getRange(i + 1, 5).setValue('subscribed');
        return json_({ ok: true, already: true });
      }
    }
    sh.appendRow([email, name, new Date(), source, 'subscribed', Utilities.getUuid()]);
  } finally {
    lock.releaseLock();
  }
  return json_({ ok: true });
}

// Unsubscribe link in every update email: <web app URL>?unsubscribe=<token>
function doGet(e) {
  const t = String((e && e.parameter && e.parameter.unsubscribe) || '');
  let done = false;
  if (/^[0-9a-f-]{36}$/.test(t)) {
    const sh = sheet_(), rows = sh.getDataRange().getValues();
    for (let i = 1; i < rows.length; i++) {
      if (rows[i][5] === t) { sh.getRange(i + 1, 5).setValue('unsubscribed'); done = true; break; }
    }
  }
  const msg = done ? "You're unsubscribed. You won't get any more updates."
    : "That unsubscribe link didn't work. Reply to any update email and you'll be removed by hand.";
  return HtmlService.createHtmlOutput('<p style="font:18px/1.5 sans-serif;padding:24px">' + msg + '</p>')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
