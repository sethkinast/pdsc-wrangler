/**
 * Walk a file tree and call the callback with the contents of JSON files found
 */

const walk = require('walkdir');
const fs = require('fs');
const json5 = require('json5');

module.exports = function(root, cb) {
  let walker = walk(root);
  walker.on('file', function(filePath) {
    fs.readFile(filePath, function(err, data) {
      cb(json5.parse(data));
    });
  });
};
