/************************************************************
 * 
 * IMPORTING THE NEEDED MODULE
 * 
____________________________________________________________*/
const modules = require('./moduleExports');
const { fs, absRootPath, eventEmitter, chokidar, csv2json, log } = modules;
/************************************************************
 * 
 * function csvWatcher()
 * 
____________________________________________________________*/
(function csvWatcher() {
   //chokidarWatch();
   const allBankAccountsFullAbsPath = // all bank accounts directories full absolute path
      returnAllBankAccountsFullAbsPath();
   const allBankAccountsCsvDirFullPath =
      returnsArrayAllCsvFullPath(allBankAccountsFullAbsPath);
   //log(allBankAccountsCsvDirFullPath)
   const csvConvertedToJson =
      returnsCsvConvertedToJson(allBankAccountsCsvDirFullPath);
   //savesJsonToHd(csvConvertedToJson);

})();
/*

function chokidarWatch() {
   chokidar.watch(csvDirAbsPath, { ignored: /(^|[\/\\])\../ }) //ignores .dotfiles
      .on('add', (path, stats) => {
         log(`FILE HAS BEEN ADDED: ${path} SIZE: ${stats.size} bytes`);// LOGS WHAT HAS BEEN ADDED
         toggle.emit(1);
      })
}; */
/************************************************************
 * 1-
 * * * function returnAllBankAccountsFullAbsPath()
 * every bank account has its own folder.
 * this function gets all bank accounts full absolute path in a array and returns it */
//STARTS:
function returnAllBankAccountsFullAbsPath() {

   // bankAccountsDirPath: stores the absolut path all the way up to BANKACCOUNTS directory
   const bankAccountsDirPath = `${absRootPath}/BANKACCOUNTS`;
   log(bankAccountsDirPath)

   const allBankAccountsFullAbsPath = //full absolute path
      fs.readdirSync(bankAccountsDirPath) // stores in a array whatever is inside the BANKACCOUNTS directory
         .filter(ba => ba.match(/^BA\_/)) // filter to keep in the array only the bank accounts directories
         .map(item => `${bankAccountsDirPath}/${item}`) // map the array to get the full path

   //log(allBankAccountsFullAbsPath)
   return allBankAccountsFullAbsPath; // ARRAY WITH THE FULL ABSOLUTE PATH TO ALL BANK ACCOUNTS DIRECTORIES
}//ENDS

/************************************************************
 * 2-
 * * * function returnsAllCsvFullPath(arrAbsPath)
 * this function gets the bank accounts folder array as an argument
 * then it gets the content of each banck account folder
 * */
//STARTS:
function returnsArrayAllCsvFullPath(arrAbsPath) {

   arrAbsPath.forEach(bankAccount => {
      // *********** begins: FOR EACH BANK ACCOUNT FOLDER ******************************
      const arrayAllCsvFullPathInsideBankAccountFolder =
         returnsAllCsvInsideBankAccountFolder(bankAccount);

      fs.writeFileSync('./exemplo.txt', 'um exemplo');

      log(arrayAllCsvFullPathInsideBankAccountFolder)



   });
}


/************************************************************
____________________________________________________________*/

function returnsAllCsvInsideBankAccountFolder(bankAccount) {
   const allFilesArray = // EACH BANK ACCOUNT FOLDER BECOMES A ARRAY CONTAINING ITSs CSVs
      fs.readdirSync(bankAccount, 'utf8')
         .filter(csv => csv.match(/.csv$|.txt$/));
   //log(allFilesArray)
   //const csvFilesArray = allFilesArray.filter(csv => csv.match(/.csv$|.txt$/))

   const csvFilesFullPathArray = allFilesArray
      .map(csv => `${bankAccount}/${csv}`)

   return csvFilesFullPathArray;
}

function returnsAllCsvData(csvFullPathArray) {

   for (let csv of csvFullPathArray) {

      let json = csv2json(fs.readFileSync(csv, 'utf8'), { parseNumbers: false });
      //log(csvData)
   }

}

function returnsCsvConvertedToJson(e) {
   log(e)
}

/*
1- array com todos txt e cvs
2- identificar cada item de qual banco é
3- retornar arrays separadas para cada conta
4- JSON
*/


