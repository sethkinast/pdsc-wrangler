import Model from 'app/api/NotTerribleModel';
import SearchType from "app/models/search/search-type";

export default class SecondaryResult extends Model {
  static schema = {
    /**
     * @property type
     * Search type of the secondary search result
     */
    type: SearchType,

    /**
     * @property total
     * Number of results matched in the secondary search result
     */
    total: Model.INT,

    modelType: "search/secondary-result"
  }
}
