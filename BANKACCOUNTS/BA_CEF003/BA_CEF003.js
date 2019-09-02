
const { fs, absRootPath, log, globalFunctions, path } = require('../../GLOBAL/modules');

const allCsvFilesArray = globalFunctions.listAllCsvInThisFolder('./CSV');

const allCsvData = globalFunctions.returnsAllCsvData(allCsvFilesArray, './CSV');

const objAllJsonData = globalFunctions.returnsAllJsonDataObj(allCsvData, './JSON/BA_CEF003.json');

const jsonDataReadyToSaveToLocalJsonFile = JSON.stringify(globalFunctions.eliminateDuplicates(objAllJsonData));
//log(jsonDataReadyToSaveToLocalJsonFile)

const callCef003 = globalFunctions.saveJsonDataToJsonLocalFile('./JSON/BA_CEF003.json',
   jsonDataReadyToSaveToLocalJsonFile);

// function exportsSanitizedCEF003JsonToDb(jsonFileFullPath, fs = require('fs')) {
//    let jsonFileContent = fs.readFileSync(jsonFileFullPath, 'utf8');


// }

module.exports = {
   callCef003
}