const modules = require('./moduleExports');
const { fs, absRootPath, chokidar, csv2json, log } = modules;


const csvToJson = function (bankAccount) { // BA_CEF003

   const path = (`${absRootPath}/BANKACCOUNTS/${bankAccount}`)

   const files = fs.readdirSync(path)
      .filter(csv => csv.match(/.csv$|.txt$/))
      .map(csv => `${path}/${csv}`)

   for (let file of files) {
      let fs.readFile(file)
   }

   log(files)
   log(typeof files)
}

csvToJson('BA_CEF003') 