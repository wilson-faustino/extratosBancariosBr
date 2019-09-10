const convertExtract = require('extratosBancariosBr').convert;

const jsonBankExtract = convertExtract(
   {
      csvDirPath: './',          // where the bank extracts are
      jsonDirPath: './JSON',     // where the json file wil be placed
      jsonFileName: 'extrato',   // json file name
      bankAccount: 'CEF003',     // CEF003 || CEF043 || ITAUPJ
      functionReturn: 'obj',     // obj    || str
   }
);

console.log(jsonBankExtract)
