
// *****************IMPORTED MODULES*****************************
const fs = require('fs');
const path = require('path');
// *****************PATH MODULE STRUCTURE*****************************
const CSV = path.parse(__filename);
//                     __filename == __dirname + name (file.js)
//    CSV === {root; dir; base; ext; name} 
// *****************IMPORTED FILES - CSV_to_JSON_Global.js*****************************
const CSV_to_JSON_Global = require('./CSV_to_JSON_Global');
const CSV_folders = CSV_to_JSON_Global.CSV_folders;
const getCsvFiles = CSV_to_JSON_Global.getCsvFiles;
const csvDataImport = CSV_to_JSON_Global.csvDataImport;
const csvToJson = CSV_to_JSON_Global.csvToJson;
// *****************IMPORTED FILES - CSV_to_JSON_cef.js*****************************
const CSV_to_JSON_cef = require('./CSV_to_JSON_cef');
const sanitize_JSON_data_cef = CSV_to_JSON_cef.sanitize_JSON_data_cef
// *****************IMPORTED FILES - CSV_to_JSON_itau.js*****************************
const CSV_to_JSON_itau = require('./CSV_to_JSON_Itau');
const insertHeaderOnCsv = CSV_to_JSON_itau.insertHeaderOnCsv;
const sanitize_JSON_data_itau = CSV_to_JSON_itau.sanitize_JSON_data_itau;

/*************************** EXTRATO CEF ***************************/

const extrato_CSV_CEF = () => {
   const CSV_dir_CEF = `${CSV.dir}/${CSV_folders.cef}`; // == __dirname
   //************ */ getCsvFiles()  GET ONLY THE CSV file names in the folder and returns an array
   let filesListed = getCsvFiles(CSV_dir_CEF);
   //console.log(filesListed);
   //********* */ csvImport() get all the csv data inside the constante
   let CSV_data = csvDataImport(filesListed);
   //********* */ csvToJson() convert the csv data into json data and stores it in a variable
   let JSON_data = csvToJson(CSV_data);

   let JSON_data_cef = sanitize_JSON_data_cef(JSON_data);

   return JSON.stringify(JSON_data_cef);
};

/*************************** EXTRATO ITAU ***************************/

const extrato_CSV_ITAU = () => {

   const CSV_dir_ITAU = `${CSV.dir}/${CSV_folders.itau}`; // == __dirname
   //************ */ getCsvFiles()  GET ONLY THE CSV file names in the folder and returns an array
   let filesListed = getCsvFiles(CSV_dir_ITAU);

   //** */insertHeaderOnCsv(filesListed);

   //console.log(filesListed);
   //********* */ csvImport() get all the csv data inside the constante
   let CSV_data = csvDataImport(filesListed);
   //console.log(CSV_data);
   //********* */ csvToJson() convert the csv data into json data and stores it in a variable
   let JSON_data = csvToJson(CSV_data);
   //console.log(JSON_data);
   let JSON_data_itau = sanitize_JSON_data_itau(JSON_data);
   return JSON.stringify(JSON_data_itau);

}

const extratosJson = extrato_CSV_ITAU().concat(extrato_CSV_CEF())

fs.appendFileSync('../../_DB/extratos.json', extratosJson);

console.log(extratosJson);

// extrato_CSV_CEF();
// extrato_CSV_ITAU();

module.exports = {
   extratosJson,
   extrato_CSV_CEF: extrato_CSV_CEF,
   extrato_CSV_ITAU: extrato_CSV_ITAU
}



