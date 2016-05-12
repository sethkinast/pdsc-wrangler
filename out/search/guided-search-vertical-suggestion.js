import Model from 'app/api/NotTerribleModel';
import SearchType from "app/models/search/search-type";

export default class GuidedSearchVerticalSuggestion extends Model {
  static schema = {
    /**
     * @property verticalType
     * Search vertical type of suggestion results
     */
    verticalType: SearchType,

    modelType: "search/guided-search-vertical-suggestion"
  }
}
