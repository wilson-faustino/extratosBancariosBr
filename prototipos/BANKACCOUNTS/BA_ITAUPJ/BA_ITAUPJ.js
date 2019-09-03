
const { fs, absRootPath, log, globalFunctions, path } = require('../../GLOBAL/modules');

const allCsvFilesArray = globalFunctions.listAllCsvInThisFolder('./CSV');

const allCsvData = globalFunctions.returnsAllCsvData(allCsvFilesArray, './CSV');

const objAllJsonData = globalFunctions.returnsAllJsonDataObj(allCsvData, './JSON/BA_ITAUPJ.json');

const jsonDataReadyToSaveToLocalJsonFile = JSON.stringify(globalFunctions.eliminateDuplicates(objAllJsonData));
//log(jsonDataReadyToSaveToLocalJsonFile)

globalFunctions.saveJsonDataToJsonLocalFile('./JSON/BA_ITAUPJ.json',
   jsonDataReadyToSaveToLocalJsonFile);
