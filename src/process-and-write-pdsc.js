const path = require('path');
const dust = require('dustjs-helpers');
const write = require('then-write-file');

const pdscToModelUtils = require('./util/pdsc-to-model');

const modelTemplate = require('./templates/model')(dust);

module.exports = function processAndWrite(model) {
  if (!model) {
    return;
  }
if(!model.name) { console.log(model)}
  modelTemplate(model, function(err, data) {
    let modelPath = model.namespace? model.namespace + '.' + model.name : model.name;
    write(
      path.join(
        'out',
        pdscToModelUtils.pdscPackageNameToModelPath(modelPath, { extension: '.js'})
      ),
      data
    );
  });
};
