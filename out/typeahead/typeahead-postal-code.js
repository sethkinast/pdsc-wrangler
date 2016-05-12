import Model from 'app/api/NotTerribleModel';
import CityUrn from "app/models/common/city-urn";

export default class TypeaheadPostalCode extends Model {
  static schema = {
    /**
     * @property id
     * The id of the postal code. e.g., postal.1-1-0-39 for 94043 in mountain view, ca
     */
    id: Model.STRING,

    /**
     * @property cityUrn
     * Urn representing the city that this postal code maps to.
     */
    cityUrn: CityUrn,

    modelType: "typeahead/typeahead-postal-code"
  }
}
