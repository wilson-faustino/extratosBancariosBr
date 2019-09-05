
function extratosBancariosParaJson(options) {
   // **********************************************
   // CALLING NEEDED MODULES
   // **********************************************
   const path = require('path');
   const rootPath = __dirname;
   const bankAccountsDirAbsPath = path.join(rootPath, 'BANKACCOUNTS');
   // ***** BANK ACCOUNTS
   const bankAccounts = [];
   bankAccounts.CEF003 = require(`${bankAccountsDirAbsPath}/CEF003.js`);

   //console.log(CEF003())

   const csv2Json = require('csvjson-csv2json');
   const log = x => console.log(x);
   // **********************************************
   // DEFINING THE DEFAULT ARGUMENTS
   // **********************************************
   const defaultOptions = {
      csvDirPath: './',
      jsonDirPath: './JSON',
      jsonFileName: 'extrato', // whatever name you want
      bankAccount: '', // CEF003 | CEF043 | ITAUPJ
      functionReturn: 'obj', // obj | str
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
   const jsonFromCsv = csv2Json(allCsvData, { parseNumbers: true });
   // **********************************************
   // MAKES A SET TO ELIMINATE DUPLICATES
   // **********************************************
   const jsonSet = new Set(jsonFromCsv.map(item => JSON.stringify(item)));
   // **********************************************
   // CONVERTS THE SET BACK TO OBJECT DATA (NO DUPLICATES ANYMORE)
   // **********************************************

   function returnsJsonObj() {
      const jsonObj = [...jsonSet].map(item => JSON.parse(item));

      log('chegou aqui')
      const cccccc = bankAccounts.CEF003(jsonObj);
      return cccccc;

      // switch (options.bankAccount) {
      //    case 'CEF003':
      //       log('chegou aqui')
      //       CEF003(jsonObj);
      //       break;
      //    case 'CEF043':
      //       log('ggggg');
      //       break;
      //    case 'ITAUPJ':
      //       log('hhhh');
      //       break;
      //    default:
      //       log('jjjjj');
      //       break;
      // };
   }

   const jsonObj = returnsJsonObj();
   log(jsonObj)

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