const path = require('path');
const log = console.log;

const dir = __dirname;
const pp = path.join(dir, '../')

const p = path.normalize('/this//is/a/')

log(dir)
log(pp)