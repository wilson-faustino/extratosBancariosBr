const { fs, absRootPath, log, globalFunctions, path } = require('./modules');

const allBankAccountsDirPath = path.join(__dirname, '../', 'BANKACCOUNTS')

log(allBankAccountsDirPath)

//const allBankAccounts = fs.readdirSync(