const convertExtract = require('./index').convert
const jsonBankExtract = convertExtract(
   {
      csvDirPath: './CSV', // where the bank extracts are
      jsonDirPath: './JSON', // where the json file wil be placed
      jsonFileName: 'extrato2', // json file name
      bankAccount: '', // CEF003 | CEF043 | ITAUPJ
      functionReturn: 'obj', //obj || str
   }
);

console.log(jsonBankExtract)



