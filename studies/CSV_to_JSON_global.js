// IMPORTED MODULES
const fs = require('fs');
/*************************** BANCOS COMPATÍVEIS ***************************/
const CSV_folders = {
   cef: 'CSV_CEF',
   itau: 'CSV_ITAU'
};

const csv2json = require('csvjson-csv2json');

/*************************** FUNCTION getCsvFiles ***************************/
function getCsvFiles(dir) {
   const CSV_allFiles = fs.readdirSync(dir);
   const CSV_bankExtractsFiles = CSV_allFiles
      .filter(file => file.match(/.csv$|.txt$/));
   const CSV_bankExtractsPathFiles = CSV_bankExtractsFiles
      .map(item => `${dir}/${item}`);
   return CSV_bankExtractsPathFiles;
}

/*************************** FUNCTION csvDataImport() ***************************/
function csvDataImport(filesArr) {
   let importedExtract = '';
   for (let file of filesArr) {
      importedExtract += fs.readFileSync(file, 'utf8'); // 
   }
   return importedExtract;
}
/*************************** FUNCTION csvToJson() ***************************/
function csvToJson(csv) {
   let json = csv2json(csv, { parseNumbers: true });
   return json;
}

/*************************** module.exports ***************************/
module.exports = {
   CSV_folders: CSV_folders,
   csv2json: csv2json,
   getCsvFiles: getCsvFiles,
   csvDataImport: csvDataImport,
   csvToJson: csvToJson
}