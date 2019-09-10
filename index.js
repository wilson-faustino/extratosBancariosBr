
function extratosBancariosParaJson(options) {
   // **********************************************
   const log = x => console.log(x);
   // CALLING NEEDED MODULES
   // **********************************************
   const csv2Json = require('csvjson-csv2json');
   const fs = require('fs');
   const path = require('path');
   const rootPath = __dirname;
   const bankAccountsDirAbsPath = path.join(rootPath, 'BANKACCOUNTS');
   // **********************************************
   // ********************** BANK ACCOUNTS
   const bankAccounts = {};
   bankAccounts.CEF003 = require(`${bankAccountsDirAbsPath}/CEF003.js`);
   bankAccounts.CEF043 = bankAccounts.CEF003;
   bankAccounts.ITAUPJ = require(`${bankAccountsDirAbsPath}/ITAUPJ.js`);

   const bankAccountsKeys = Object.keys(bankAccounts);
   // **********************************************
   // DEFINING THE DEFAULT ARGUMENTS
   // **********************************************

   const defaultOptions = {
      csvDirPath: './CSV',
      jsonDirPath: './JSON',
      jsonFileName: 'extrato', // whatever name you want
      bankAccount: '', // CEF003 | CEF043 | ITAUPJ
      functionReturn: 'obj', // obj | str
      fs: require('fs')
   }
   options = Object.assign(defaultOptions, options)

   const isDir = (path) => {
      try {
         var stat = fs.lstatSync(path);
         return stat.isDirectory();
      } catch (e) {
         // lstatSync throws an error if path doesn't exist
         return false;
      }
   }
   createMissingFolder = (dir) => fs.mkdirSync(`./${dir}`);

   if (isDir(options.csvDirPath) === false) { createMissingFolder(options.csvDirPath) };
   if (isDir(options.jsonDirPath) === false) { createMissingFolder(options.jsonDirPath) };

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
   // TREATING CSV DATA (insert header if needed)
   // **********************************************

   // log(allCsvFiles)
   // **********************************************
   // COMBINING ALL THE CSV DATA IN ONE SINGLE FILE
   // **********************************************
   let allCsvData = '';
   for (let csvFile of allCsvFiles) {
      csvData = options.fs.readFileSync(csvFile, 'utf8');
      allCsvData += csvData;
      allCsvData += '\n';
   }
   allCsvData = InsertHeaderIntoCsvData(allCsvData);

   function InsertHeaderIntoCsvData(noHeaderCsvData) {
      const itaupjHeader = 'Data_Mov;Historico;Valor\n';
      const csvWithHeaders = itaupjHeader.concat(noHeaderCsvData);
      return csvWithHeaders;
   }

   //log(allCsvData) // É AQUI!!!!!
   // **********************************************
   // CONVERTING THE CSV FILE DATA INTO JSON DATA
   // **********************************************
   const jsonFromCsv = csv2Json(allCsvData, { parseNumbers: true });
   // **********************************************
   // MAKES A SET TO ELIMINATE DUPLICATES
   // **********************************************
   const jsonSet = new Set(jsonFromCsv.map(item => JSON.stringify(item)));
   // **********************************************
   // CONVERTS THE SET BACK TO OBJECT DATA (NO DUPLICATES ANYMORE)
   // **********************************************
   const jsonObj = [...jsonSet].map(item => JSON.parse(item));
   // **********************************************
   // eturns an extract obj  after being standardized
   // **********************************************
   function returnsStandardizedJsonObj(jsonObj) {

      const bankAccountExists = bankAccountsKeys.includes(options.bankAccount);
      log(bankAccountExists)
      log(jsonObj)
      if (!bankAccountExists) {
         return jsonObj
      } else {
         return bankAccounts[options.bankAccount](jsonObj)
      }
   }
   const stdJsonObj = returnsStandardizedJsonObj(jsonObj);
   // **********************************************
   // MAKES A STRING VERSION TO MAKE IT POSSIBLE TO SAVE THIS DATA INTO A JSON LOCAL FILE
   // **********************************************
   const jsonStr = JSON.stringify(stdJsonObj);
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