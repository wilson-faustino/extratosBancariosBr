const fs = require('fs');
const path = require('path');

const absRootPath = require('../app').absRootPath;
const EventEmitter = require('events');
//const csv2json = require('../node_modules/csvjson-csv2json/csv2json');
const log = (w) => console.log(w);
const logD = console.dir.bind(console);
const globalFunctions = require('./functions')
//log(globalFunctions.listAllFilesInThisFolder())
module.exports = {
   fs,
   path,
   absRootPath,
   EventEmitter,
   //csv2json,
   log,
   globalFunctions
};