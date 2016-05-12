import Model from 'app/api/NotTerribleModel';
import PhoneNumberType from "app/models/identity/profile/phone-number-type";

export default class PhoneNumber extends Model {
  static schema = Object.assign({}, Model.foreignUrn(&#39;com.linkedin.common.PhoneNumber&#39;).schema, {
    /**
     * @property type
     * Work, home, mobile, fax, pager type of phone number.
     */
    type: PhoneNumberType,

    modelType: "identity/profile/phone-number"
  })
}
