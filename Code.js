// --- KONFIGURACE ---
const MASTER_FOLDER_ID = '1_e5ulgT-EYk8Oa67FZ25msmXE_oA5RUO'; 
const SPREADSHEET_ID = '10fs7DYRTXwsfxE9dJ9HYRMrgy0IbQUDcEu8orUDtQDo'; 

function doGet() {
  var template = HtmlService.createTemplateFromFile('Index');
  template.seznamSkupin = getGroupsFromSheet();
  return template.evaluate()
      .setTitle('Nahrávání fotek - Mezi námi')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getGroupsFromSheet() {
  try {
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName('SKUPINY'); 
    if (!sheet) return ["CHYBA: List 'SKUPINY' nenalezen!"];
    var lastRow = sheet.getLastRow();
    if (lastRow < 1) return [];
    var values = sheet.getRange(1, 1, lastRow, 1).getValues();
    return values.flat().filter(function(item) { return item && item.toString().trim() !== ""; });
  } catch (e) {
    return ["Chyba načítání dat: " + e.toString()]; 
  }
}

function processForm(formObject) {
  try {
    var groupName = formObject.groupName;
    var actionName = formObject.actionName;
    var dateOfMeeting = formObject.dateOfMeeting;
    var filesToUpload = formObject.files || []; // Tady přijímáme to pole 1-15 fotek

    if (!groupName || !actionName) {
      return { success: false, message: "⚠️ Chybí název skupiny nebo akce." };
    }

    var masterFolder = DriveApp.getFolderById(MASTER_FOLDER_ID);
    var groupFolder;
    
    var existingFolders = masterFolder.getFoldersByName(groupName);
    if (existingFolders.hasNext()) groupFolder = existingFolders.next();
    else groupFolder = masterFolder.createFolder(groupName);
    
    if (!dateOfMeeting) dateOfMeeting = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd");

    var finalSubFolderName = dateOfMeeting + " - " + actionName;
    var targetFolder;
    var existingSubFolders = groupFolder.getFoldersByName(finalSubFolderName);
    
    if (existingSubFolders.hasNext()) targetFolder = existingSubFolders.next();
    else targetFolder = groupFolder.createFolder(finalSubFolderName);

    // SMYČKA PRO ULOŽENÍ VÍCE SOUBORŮ
    var savedFilesCount = 0;
    for (var i = 0; i < filesToUpload.length; i++) {
      var fileData = filesToUpload[i];
      if (fileData && fileData.data && fileData.name) {
        var contentType = fileData.type.substring(5).split(';')[0];
        var bytes = Utilities.base64Decode(fileData.data);
        var blob = Utilities.newBlob(bytes, contentType, fileData.name);
        targetFolder.createFile(blob);
        savedFilesCount++;
      }
    }
    
    if (savedFilesCount === 0) return { success: true, message: "📁 Složka vytvořena, ale nebyly vybrány žádné fotky." };

    return { success: true, message: "✅ Hotovo! Uloženo " + savedFilesCount + " fotek." };

  } catch (e) {
    return { success: false, message: "❌ Chyba: " + e.toString() };
  }
}
function vynutitPovoleni() {
  // Toto je jen pro vyvolání autorizačního okna
  SpreadsheetApp.openById(SPREADSHEET_ID);
  DriveApp.getRootFolder();
}