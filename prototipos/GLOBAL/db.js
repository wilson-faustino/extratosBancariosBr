//const { fs, absRootPath, log, globalFunctions, path, bankAccounts, callCef003 } = require('./modules');

//log(callCef003())

/*

const allBankAccountsDirPath = path.join(__dirname, '../', 'BANKACCOUNTS')
const jsonDirPath = path.join(allBankAccountsDirPath)
const allBankAccountsJsonFileFullPathArray = fs.readdirSync(allBankAccountsDirPath)
   .filter(ba => ba !== '.DS_Store')
   .map(ba => `${allBankAccountsDirPath}/${ba}/JSON/${ba}.json`);

log(allBankAccountsJsonFileFullPathArray)

let allJson = '';
allBankAccountsJsonFileFullPathArray.forEach(json => {

   allJson += fs.readFileSync(json, 'utf8')
   log(allJson)
})

*/
