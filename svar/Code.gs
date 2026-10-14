/* Mottak for kortsorteringen. Legg dette i et Google Apps Script-prosjekt som
   er knyttet til et regneark (Utvidelser → Apps Script), og publiser det som
   web-app med tilgang «Alle». Hvert svar blir én rad; gruppene lagres som JSON
   i egen kolonne, pluss én kolonne per kort med gruppenavnet kortet fikk. */
function doPost(e) {
  var ark = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var svar = JSON.parse(e.postData.contents);
  if (ark.getLastRow() === 0) {
    ark.appendRow(["sendt", "alias", "bor", "kjenner", "sett", "antallGrupper", "antallFlyttinger", "kommentar", "grupper (JSON)", "kort → gruppe (JSON)"]);
  }
  var kortTilGruppe = {};
  (svar.grupper || []).forEach(function (g) { (g.kort || []).forEach(function (k) { kortTilGruppe[k] = g.navn; }); });
  ark.appendRow([
    svar.sendt || new Date().toISOString(),
    (svar.deltaker || {}).alias || "",
    (svar.deltaker || {}).bor || "",
    (svar.deltaker || {}).kjenner || "",
    svar.sett || "",
    (svar.grupper || []).length,
    svar.antallFlyttinger || 0,
    svar.kommentar || "",
    JSON.stringify(svar.grupper || []),
    JSON.stringify(kortTilGruppe)
  ]);
  return ContentService.createTextOutput(JSON.stringify({ok: true})).setMimeType(ContentService.MimeType.JSON);
}
function doGet() {
  return ContentService.createTextOutput("Kortsortering-mottak er oppe.");
}
