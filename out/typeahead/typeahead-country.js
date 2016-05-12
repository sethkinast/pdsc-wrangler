import Model from 'app/api/NotTerribleModel';
import CountryUrn from "app/models/common/country-urn";

export default class TypeaheadCountry extends Model {
  static schema = {
    /**
     * @property id
     * The id of the country. e.g., us:0 for united states
     */
    id: Model.STRING,

    /**
     * @property countryUrn
     * Urn representing the country.
     */
    countryUrn: CountryUrn,

    modelType: "typeahead/typeahead-country"
  }
}
