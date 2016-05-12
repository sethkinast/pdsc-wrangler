import Model from 'app/api/NotTerribleModel';
import CityUrn from "app/models/common/city-urn";

export default class TypeaheadCity extends Model {
  static schema = {
    /**
     * @property id
     * The id of the city. e.g., us.1-1-0-39 for mountain view, ca
     */
    id: Model.STRING,

    /**
     * @property cityUrn
     * Urn representing the city.
     */
    cityUrn: CityUrn,

    modelType: "typeahead/typeahead-city"
  }
}
