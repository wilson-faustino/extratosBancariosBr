
function extratosBancariosParaJson(options) {
   // **********************************************
   // CALLING NEEDED MODULES
   // **********************************************
   const path = require('path');
   const rootPath = __dirname;
   const csv2Json = require('csvjson-csv2json');
   const log = x => console.log(x);
   // **********************************************
   // DEFINING THE DEFAULT ARGUMENTS
   // **********************************************
   const defaultOptions = {
      csvDirPath: './',
      jsonDirPath: './JSON',
      jsonFileName: 'extrato',
      bankAccount: '',
      functionReturn: 'obj',
      fs: require('fs')
   }
   options = Object.assign(defaultOptions, options)
   // **********************************************
   // GETTING ALL CSV FILES FULL PATH IN AN ARRAY
   // **********************************************
   const returnsAllCsvFiles = () => {
      const filtered = options.fs.readdirSync(options.csvDirPath, 'utf8')
         .filter(file => file.match(/csv$|txt$/))
         .map(csv => `${options.csvDirPath}/${csv}`)

      return filtered;
   };

   const allCsvFiles = returnsAllCsvFiles();

   // **********************************************
   // COMBINING ALL THE CSV DATA IN ONE SINGLE FILE
   // **********************************************
   let allCsvData = '';
   for (let csvFile of allCsvFiles) {
      csvData = options.fs.readFileSync(csvFile, 'utf8');
      allCsvData += csvData;
      allCsvData += '\n';
   }
   // **********************************************
   // CONVERTING THE CSV FILE DATA INTO JSON DATA
   // **********************************************
   const jsonFromCsv = csv2Json(allCsvData, { parseNumbers: true })
   // **********************************************
   // MAKES A SET TO ELIMINATE DUPLICATES
   // **********************************************
   const jsonSet = new Set(jsonFromCsv.map(item => JSON.stringify(item)))
   // **********************************************
   // CONVERTS THE SET BACK TO OBJECT DATA (NO DUPLICATES ANYMORE)
   // **********************************************
   const jsonObj = [...jsonSet].map(item => JSON.parse(item))
   // **********************************************
   // MAKES A STRING VERSION TO MAKE IT POSSIBLE TO SAVE THIS DATA INTO A JSON LOCAL FILE
   // **********************************************
   const jsonStr = JSON.stringify(jsonObj);
   // **********************************************
   // SAVES THE DATA IN A LOCAL JSON FILE
   // **********************************************
   options.fs.writeFileSync(`${options.jsonDirPath}/${options.jsonFileName}.json`, jsonStr, 'utf8');
   // **********************************************
   // RETURNS JSON EITHER OBJECT OR STRING
   // **********************************************
   switch (options.functionReturn) {
      case 'str':
         return jsonStr;
         break;
      case 'obj':
      default:
         return jsonObj;
         break;
   }
   // **********************************************
   // IMPORTS JSONFILE EITHER AS AN OBJECT OR A STRING
   // **********************************************
   //const jsonFileDataStr = options.fs.readFileSync(`${options.jsonDirPath}/${options.jsonFileName}.json`, 'utf8');
   //const jsonFileDataObj = JSON.parse(jsonFileDataStr);
}

module.exports = {
   convert: extratosBancariosParaJson
}