import Model from 'app/api/NotTerribleModel';
import SearchType from "app/models/search/search-type";
import SearchWarning from "app/models/search/search-warning";

export default class SearchMetadata extends Model {
  static schema = {
    /**
     * @property id
     * The id of the search
     */
    id: Model.STRING,

    /**
     * @property type
     * The type of search call
     */
    type: SearchType,

    /**
     * @property origin
     * Search origin from the request which generated the search result.
     */
    origin: Model.STRING,

    /**
     * @property warnings
     * List of warning codes provided to the caller to help refine search.
     */
    warnings: SearchWarning,

    /**
     * @property keywords
     * Keywords used in the search request.
     */
    keywords: Model.STRING,

    /**
     * @property location
     * Location used in the search request.
     */
    location: Model.STRING,

    modelType: "search/search-metadata"
  }
}
