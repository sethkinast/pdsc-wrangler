import Model from 'app/api/NotTerribleModel';
import SearchHit from "app/models/search/search-hit";
import SearchQuery from "app/models/search/search-query";
import GuidedSearchSuggestion from "app/models/search/guided-search-suggestion";

export default class GuidedSearchCluster extends Model {
  static schema = {
    /**
     * @property title
     * Localized title to describe the cluster.
     */
    title: Model.STRING,

    /**
     * @property totalResultCount
     * Total number of results the full search performed by the cluster could return.
     */
    totalResultCount: Model.INT,

    /**
     * @property elements
     * List of search results.
     */
    elements: SearchHit,

    /**
     * @property query
     * If the cluster can lead to a full search, the query parameters for that search. Experimental, may be overlapping with guides field.
     */
    query: SearchQuery,

    /**
     * @property guides
     * If the cluster can lead to a full search, the guide values for that search. Experimental, may be overlapping with query field.
     */
    guides: GuidedSearchSuggestion,

    /**
     * @property clusterType
     * Indicates the type of the cluster.
     */
    clusterType: Model.STRING,

    modelType: "search/guided-search-cluster"
  }
}
