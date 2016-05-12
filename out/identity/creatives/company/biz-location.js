import Model from 'app/api/NotTerribleModel';
import BizEmployeeCountRange from "app/models/identity/creatives/company/biz-employee-count-range";

export default class BizLocation extends Model {
  static schema = {
    /**
     * @property active
     * whether this address is still in use
     */
    active: Model.BOOL,

    /**
     * @property headquarters
     * whether this location is headquarters
     */
    headquarters: Model.BOOL,

    /**
     * @property street1
     * first line of address
     */
    street1: Model.STRING,

    /**
     * @property street2
     * second line of address
     */
    street2: Model.STRING,

    /**
     * @property city
     * city of this location
     */
    city: Model.STRING,

    /**
     * @property state
     * state of this location
     */
    state: Model.STRING,

    /**
     * @property postalCode
     * postal code for this location
     */
    postalCode: Model.STRING,

    /**
     * @property countryCode
     * country code for this location
     */
    countryCode: Model.STRING,

    /**
     * @property regionCode
     * linkedin region code for this location
     */
    regionCode: Model.INT,

    /**
     * @property phone1
     * first phone number
     */
    phone1: Model.STRING,

    /**
     * @property phone2
     * second phone number
     */
    phone2: Model.STRING,

    /**
     * @property fax
     * fax number
     */
    fax: Model.STRING,

    /**
     * @property description
     * description
     */
    description: Model.STRING,

    /**
     * @property employeeCountRange
     * employee count range
     */
    employeeCountRange: BizEmployeeCountRange,

    modelType: "identity/creatives/company/biz-location"
  }
}
