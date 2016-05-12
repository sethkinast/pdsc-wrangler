import Model from 'app/api/NotTerribleModel';

export default class NormBasicLocation extends Model {
  static schema = {
    /**
     * @property countryCode
     * 2 letter lower case ISO code of the country or district of this location.
     */
    countryCode: Model.STRING,

    /**
     * @property postalCode
     * Member's postal code. This is optional because the member has the option of not providing a postal code when the member's country or district is very exotic (such as Greenland).
     */
    postalCode: Model.STRING,

    modelType: "common/norm-basic-location"
  }
}
