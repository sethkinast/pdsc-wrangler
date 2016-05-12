/**
 * Convert a PDSC-JSON into a normalized JSON format that we can use to render a model template
 */
const humps = require('humps');

const pdscToModelUtils = require('./util/pdsc-to-model');
const PRIMITIVES = require('./primitives');
const processAndWrite = require('./process-and-write-pdsc');

function normalizeName(name, namespace) {
  // Try to normalize the name of the type to its fully-qualified name
  if (typeof name === 'string' && name.indexOf('.') === -1) {
    return namespace + '.' + name;
  }
  return name;
}

function processField(field, { collectedImports, namespace }) {
  const ret = {
    name: field.name,
    doc: field.doc
  };

  ret.type = processFieldType(field.type, namespace, collectedImports);

  return ret;
}

/**
 * type: one of
 *  - a type local to current namespace (FooType)
 *  - a type in another namespace (com.linkedin.BarType)
 *  - an object with type and items fields
 *
 * side effects: adds items to collectedImports
 * returns: the field type (Model.STRING, FooType, Model.oneOf(FooType, BarType))
 */
function processFieldType(type, namespace, collectedImports) {
  // Simple types like "int" and "string"
  if (PRIMITIVES.hasOwnProperty(type)) {
    return PRIMITIVES[type];
  }

  type = normalizeName(type, namespace);

  // NotTerribleModel doesn't distinguish between arrays of a type and a single one
  if (Array.isArray(type) && type.length === 1) {
    type = type.pop();
  }

  if (typeof type === 'string') {
    let typeName = type.split('.').pop();
    collectedImports[typeName] = pdscToModelUtils.pdscPackageNameToModelPath(type);
    return typeName;
  }

  if (Array.isArray(type)) {
    let types = type.map((type) => processFieldType(type, namespace, collectedImports));
    return `Model.oneOf(${types.join(', ')})`;
  }

  if (typeof type === 'object') {
    if (type.type === 'array') {
      return processFieldType(type.items, namespace, collectedImports);
    }
    if (type.type === 'map') {
      return processFieldType(type.values, namespace, collectedImports);
    }
    if (type.type === 'enum') {
      return processFieldType('string');
    }
    if (type.type === 'record') {
      // Give it the same namespace as its containing type
      type.namespace = namespace;
      processAndWrite(convert(type));
      return processFieldType(type.name, namespace, collectedImports);
    }
  }

  return `Model.foreignUrn('${type}')`;
}

function convert(pdsc) {
  const ret = Object.assign({}, pdsc);
  const collectedImports = {};

  if (ret.type === 'enum') {
    ret.typeref = 'Model.STRING';
  }

  if (ret.type === 'array') {
    ret.typeref = processFieldType(ret.items, ret.namespace, collectedImports);
    if (!ret.name) {
      // This is a horrible top-level type that has no name (e.g. CityUrn)
      ret.name = ret.items + humps.pascalize(ret.type);
    }
  }

  if (ret.type === 'map') {
    ret.typeref = 'Model.MAP';
    if (!ret.name) {
      // This is a horrible top-level type that has no name (e.g. CityUrn)
      ret.name = ret.values + humps.pascalize(ret.type);
    }
  }

  if (ret.type === 'typeref') {
    ret.typeref = processFieldType(ret.ref, ret.namespace, collectedImports);
  }

  if (ret.include) {
    ret.includes = ret.include.map(
      type => processFieldType(type, ret.namespace, collectedImports)
    );
  }

  if (ret.fields) {
    ret.fields = ret.fields.map(
      field => processField(field, { collectedImports, namespace: ret.namespace })
    );
  }

  ret.imports = [];
  for (let item in collectedImports) {
    ret.imports.push({ name: item, path: collectedImports[item] });
  }

  ret.modelName = pdscToModelUtils.pdscPackageNameToModelPath(ret.namespace + '.' + ret.name);

  return ret;
}

module.exports = convert;
