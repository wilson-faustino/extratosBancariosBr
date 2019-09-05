const convertExtract = require('./index').convert
const jsonBankExtract = convertExtract(
   {
      csvDirPath: './CSV', // where the bank extracts are
      jsonDirPath: './JSON', // where the json file wil be placed
      jsonFileName: 'extrato', // json file name
      bankAccount: '',
      functionReturn: 'obj', //obj || str
   }
);

console.log(jsonBankExtract)



