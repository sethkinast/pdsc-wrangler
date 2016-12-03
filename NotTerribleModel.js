import { decamelize } from 'humps';

const PRIMITIVES = {
  long: 'Model.INT',
  int: 'Model.INT',
  fixed: 'Model.STRING',
  string: 'Model.STRING',
  double: 'Model.FLOAT',
  float: 'Model.FLOAT',
  boolean: 'Model.BOOL',
  map: 'Model.MAP'
};

/**
 * NotTerribleModel thanks to @mhackmann
 * https://rb.corp.linkedin.com/r/451827/diff/14?page=1#18
 *
 * A very tiny munger to normalize out pegasus-serialized objects (but not unnest them)
 */

class NotTerribleModel {

  static STRING = 'NotTerribleString'
  static INT = 'NotTerribleInteger'
  static BOOL = 'NotTerribleBoolean'
  static FLOAT = 'NotTerribleFloat'
  static OBJECT = 'NotTerribleObject'
  static MAP = 'NotTerribleMap'

  static schema = {};

  /**
   * Opaque union type
   * @param types {Array<NotTerribleModel|String>} one or more types that this field may be
   * @return {Function} validator function that will be invoked as a FormatFunction
   */
  static oneOf(...types) {
    return (unwrappedObj) => {
      if (typeof unwrappedObj === 'object') {
        const modelType = unwrappedObj.modelType || NotTerribleModel._formatJavaObjectType(unwrappedObj.javaObjectType);
        const model = types.find(type => type.modelType === modelType);

        if (model && model._isNotTerribleModel) {
          const instance = new model(unwrappedObj);
          return instance;
        }

        // If we get here, the type passed wasn't supported by the oneOf
        // We'll minimally process it by unwrapping it, but won't recurse down
        // because we have no idea what's inside.
        // This error means API is out of date with what the server is sending
        if (modelType) {
          unwrappedObj.modelType = modelType;
        }
      } else {
        /**
         * Image is an example (right now the ONLY one) of a union of complex and a simple type (string)
         * Restli handles this union type by typereffing to string ({ string: '/p0/123' })
         * We trust that it will be unwrapped by the time it gets here and that this isn't
         * a union type of more than one primitive type
         *
         * Wrangle these into { id: '/p0/123' } because this seems to be what Restli would do
         */
        let primitiveUnionType = types.find(type => typeof type === 'string');
        if (primitiveUnionType) {
          return {
            id: NotTerribleModel._processBasicType(unwrappedObj, primitiveUnionType)
          };
        }
      }

      console.warn('Received', unwrappedObj, 'not supported by', types.map(type => type.modelType));
      return unwrappedObj;
    };
  }

  static tryDeserializeJavaObject(obj) {
    if (typeof obj !== 'object') {
      return obj;
    }

    let keys = NotTerribleModel._isBad(obj) ? null : Object.keys(obj);
    if (keys &&
        keys.length === 1 && (
          keys[0].indexOf('com.linkedin') === 0 ||
          PRIMITIVES.hasOwnProperty(keys[0])
        )
      ) {
        const retVal = obj[keys[0]];
        if (typeof retVal === 'object') {
          retVal.javaObjectType = keys[0];
        }
        return retVal;
      }
    return obj;
  }

  /**
   * Creates an object of this model. If initFrom is passed, parses down the tree to force properties/types
   * @param {Object} initFrom The data object to instantiate from
   */
  constructor(initFrom) {
    if (!this.constructor.schema) {
      throw new Error("You cannot instantiate a NotTerribleModel. Extend a subclass first.");
    }
    if (typeof initFrom !== 'object') {
      throw new Error("You should pass a schema to hydrate this model.");
    }
    NotTerribleModel._initProperties(initFrom, this.constructor.schema, this);
    this.modelType = this.constructor.modelType;
  }

  /**
   * Crawls the obj tree and makes it adhere to the schema
   * @method _initProperties
   * @private
   * @param {Object} obj The object to pull data from
   * @param {Object} schema The schema to parse against
   * @param {Object} out The object to add the parsed data to
   */
  static _initProperties(obj, schema, out) {
    for (let key in schema) {
      if (schema.hasOwnProperty(key) && obj.hasOwnProperty(key)) {
        let type = schema[key];

        if (typeof type === 'function') {
          out[key] = NotTerribleModel._copyProperty(obj[key], type);
          continue;
        }

        out[key] = NotTerribleModel._processBasicType(obj[key], type);
      }
    }
  }

  static _processBasicType(item, type) {
    switch (type) {
      case NotTerribleModel.STRING:
        return NotTerribleModel._copyProperty(item, NotTerribleModel._formatString);
      case NotTerribleModel.INT:
        return NotTerribleModel._copyProperty(item, NotTerribleModel._formatInteger);
      case NotTerribleModel.FLOAT:
        return NotTerribleModel._copyProperty(item, NotTerribleModel._formatFloat);
      case NotTerribleModel.BOOL:
        return NotTerribleModel._copyProperty(item, NotTerribleModel._formatBoolean);
      case NotTerribleModel.OBJECT:
      case NotTerribleModel.MAP:
        return item;
    }
    console.warn('Received unknown type', type, 'for item', item);
    return item;
  }

  /**
   * Takes in a value/object and formats it against the provided formatter function
   * Handles java serialized objects, arrays, primitives, and other NotTerribleModel objects
   * @method _copyProperty
   * @private
   * @param {Object} obj The value/object in question
   * @param {Function} formatFunction The function to run the value/object through
   * @return {Mixed} The formatted value
   */
  static _copyProperty(obj, formatFunction) {
    var retVal = null,
        isNotTerribleModel = formatFunction._isNotTerribleModel;

    // Unwrap any java serialization weirdness
    obj = NotTerribleModel.tryDeserializeJavaObject(obj);

    if (Array.isArray(obj)) {
      retVal = obj.map(elem => NotTerribleModel._copyProperty(elem, formatFunction));
    } else {
      if (isNotTerribleModel) {
        retVal = new formatFunction(obj);
      } else {
        retVal = formatFunction(obj);
      }
    }

    return retVal;
  }

  /**
   * Given a Rest.li type like 'com.linkedin.voyager.search.SearchHit', format to 'search/search-hit'
   */
  static _formatJavaObjectType(type) {
    if (!type) return;
    type = type.slice('com.linkedin.'.length).split('.');
    if (type[0] === 'voyager') { type.shift(); }
    type[type.length - 1] = decamelize(type[type.length - 1], { separator: '-' });
    return type.join('/');
  }

  /**
   * Formats the value to a string
   * @method _formatString
   * @param {Mixed} obj The value to format
   * @return {String} String representation of the object
   */
  static _formatString(obj) {
    return NotTerribleModel._isBad(obj) ? null : obj.toString();
  }

  /**
   * Formats the value to an integer
   * @method _formatInteger
   * @param {Mixed} obj The value to format
   * @return {Number} Integer representation of the object
   */
  static _formatInteger(obj) {
    return NotTerribleModel._isBad(obj) || isNaN(obj) ? null : parseInt(obj);
  }

  /**
   * Formats the value to a floating number
   * @method _formatFloat
   * @param {Mixed} obj The value to format
   * @return {Number} Decimal representation of the object
   */
  static _formatFloat(obj) {
    return NotTerribleModel._isBad(obj) || isNaN(obj) ? null : parseFloat(obj);
  }

  /**
   * Formats the value as a boolean. Handles string 'true' or otherwise truthy/falsey values
   * @method _formatBoolean
   * @param {Mixed} obj The value to format
   * @return {Boolean}
   */
  static _formatBoolean(obj) {
    return typeof obj === 'string' ? obj === 'true' : !!obj;
  }

  /**
   * Just like Michael Jackson
   * @method _isBad
   * @private
   * @param {Mixed} obj The value to check for undefined/null
   * @return {Boolean}
   */
  static _isBad(obj) {
    return typeof obj === 'undefined' || null === obj;
  }

  // A little flag so that NotTerribleModel knows when a type coming in is another NotTerribleModel
  static _isNotTerribleModel = true
}

const { STRING, INT, BOOL, FLOAT, OBJECT, MAP, oneOf } = NotTerribleModel;

export { STRING, INT, BOOL, FLOAT, OBJECT, MAP, oneOf };
export default NotTerribleModel;
