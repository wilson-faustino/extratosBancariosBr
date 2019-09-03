const { fs, globalFunctions, path } = require('./modules');

function listAllCsvInThisFolder(csvFolder = './', fs = require('fs')) {
   const allCsvArray = fs.readdirSync(csvFolder, 'utf8');
   return allCsvArray.filter(file => file.match(/\.txt$|\.csv$/));
}

function returnsCsvData(csvFolder = './', csvFile, fs = require('fs')) {

   let csvData = fs.readFileSync(`${csvFolder}/${csvFile}`, 'utf8');
   return csvData;
}

function returnsAllCsvData(CsvFilesArray, csvFolder) {

   let csvDataCombinedTogether = '';

   CsvFilesArray.forEach(csv => {
      let csvData = returnsCsvData(csvFolder, csv);
      csvDataCombinedTogether += csvData;
   });

   return csvDataCombinedTogether;
}

function csvToJson(csv, csv2json = require('../node_modules/csvjson-csv2json/csv2json')) {
   const json = csv2json(csv, { parseNumbers: false });
   return json;
}

function returnsStrJsonDataFromDbJsonFile(pathFile, fs = require('fs')) {
   let jsonContentStr = fs.readFileSync(pathFile, 'utf8');
   return jsonContentStr;
};

function returnsAllJsonDataObj(allCsvData, pathFile, fs = require('fs')) {
   // csv
   const objJsonDataFromCsv = csvToJson(allCsvData);
   const strJsonDataFromDbJsonFile = returnsStrJsonDataFromDbJsonFile(pathFile);

   const allJsonDataObj = () => {
      if (strJsonDataFromDbJsonFile == '') {
         return objJsonDataFromCsv
      } else {
         const objJsonDataFromDbJsonFile = JSON.parse(strJsonDataFromDbJsonFile);
         console.log(objJsonDataFromCsv, 'pppppppppppppppppppppppp', objJsonDataFromDbJsonFile)
         return [...objJsonDataFromDbJsonFile, ...objJsonDataFromCsv]
      }
   }

   return allJsonDataObj();
}
function eliminateDuplicates(arr) {
   const jsonSet = new Set(arr.map(item => JSON.stringify(item)));
   const jsonData = [...jsonSet].map(item => JSON.parse(item));
   return jsonData
}

function saveJsonDataToJsonLocalFile(jsonFilePath, dataToBeSavedStr, fs = require('fs')) {
   fs.writeFileSync(jsonFilePath, dataToBeSavedStr);
}

module.exports = {
   listAllCsvInThisFolder: listAllCsvInThisFolder,
   returnsCsvData: returnsCsvData,
   returnsAllCsvData: returnsAllCsvData,
   csvToJson: csvToJson,
   returnsAllJsonDataObj: returnsAllJsonDataObj,
   eliminateDuplicates: eliminateDuplicates,
   saveJsonDataToJsonLocalFile: saveJsonDataToJsonLocalFile
}

