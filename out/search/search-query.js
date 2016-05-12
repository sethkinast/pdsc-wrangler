import Model from 'app/api/NotTerribleModel';
import SearchQueryParam from "app/models/search/search-query-param";

export default class SearchQuery extends Model {
  static schema = {
    /**
     * @property parameters
     * parameters used to make the search with their values. Also includes Facets. eg keywords, country code, facetNetwork
     */
    parameters: SearchQueryParam,

    modelType: "search/search-query"
  }
}
