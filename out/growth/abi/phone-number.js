import Model from 'app/api/NotTerribleModel';

export default class PhoneNumber extends Model {
  static schema = Object.assign({}, Model.foreignUrn(&#39;com.linkedin.common.PhoneNumber&#39;).schema, {
    /**
     * @property type
     * The user generated types of the number like Home, Mobile, custom etc.
     */
    type: Model.STRING,

    /**
     * @property primary
     * Indicates if this number is primary.
     */
    primary: Model.BOOL,

    modelType: "growth/abi/phone-number"
  })
}
