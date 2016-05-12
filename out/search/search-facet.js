import Model from 'app/api/NotTerribleModel';
import SearchFacetType from "app/models/search/search-facet-type";
import SearchFacetValue from "app/models/search/search-facet-value";

export default class SearchFacet extends Model {
  static schema = {
    /**
     * @property displayName
     * Display name of the facet
     */
    displayName: Model.STRING,

    /**
     * @property facetParameterName
     * Parameter name to construct subsequent search queries
     */
    facetParameterName: Model.STRING,

    /**
     * @property facetType
     * Type of the facet
     */
    facetType: SearchFacetType,

    /**
     * @property facetValues
     * Possible values for the facet
     */
    facetValues: SearchFacetValue,

    modelType: "search/search-facet"
  }
}
