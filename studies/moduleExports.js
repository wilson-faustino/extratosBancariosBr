(function () {
   //*** FILE SYSTEM
   const fs = require('fs');
   //*** ROOT ABSOLUTE PATH
   const absRootPath = require('../index').absRootPath;
   //*** 
   // const bankAccountsDirPath = (absRootPath, bankAccount) => {
   //    CEF003: `${absRootPath}/${bankAccount}`
   // }
   const eventEmitter = require('events');
   // const emitter = new eventEmitter;
   const chokidar = require('chokidar');
   const csv2json = require('csvjson-csv2json');
   //const globalFunctions = require('./csvInJsonOut');
   const log = console.log.bind(console);


   return module.exports = {
      fs,
      absRootPath,
      eventEmitter,
      chokidar,
      csv2json,
      log
   };
})()
