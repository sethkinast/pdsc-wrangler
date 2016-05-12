const walker = require('./src/json-walker');
const convert = require('./src/pdsc-converter');
const processAndWrite = require('./src/process-and-write-pdsc');

walker('pdsc', data => processAndWrite(convert(data)));
