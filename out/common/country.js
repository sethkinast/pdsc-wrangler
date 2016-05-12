import Model from 'app/api/NotTerribleModel';
import CountryUrn from "app/models/common/country-urn";

export default class Country extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this country.
     */
    entityUrn: CountryUrn,

    /**
     * @property countryCode
     * 2 character country code in lower case.
     */
    countryCode: Model.foreignUrn('com.linkedin.common.CountryCode'),

    /**
     * @property countryName
     * The localized country name corresponding to the country code.
     */
    countryName: Model.STRING,

    modelType: "common/country"
  }
}
