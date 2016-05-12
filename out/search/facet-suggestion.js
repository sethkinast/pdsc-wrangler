import Model from 'app/api/NotTerribleModel';
import SearchFacetType from "app/models/search/search-facet-type";
import AnnotatedText from "app/models/relationships/shared/annotation/annotated-text";
import FacetValue from "app/models/search/facet-value";

export default class FacetSuggestion extends Model {
  static schema = {
    /**
     * @property facetParameterName
     * Parameter name to construct subsequent search queries
     */
    facetParameterName: Model.STRING,

    /**
     * @property facetType
     * Type of the suggested facet
     */
    facetType: SearchFacetType,

    /**
     * @property suggestedText
     * Text to display for the facet suggestion
     */
    suggestedText: AnnotatedText,

    /**
     * @property suggestedValues
     * List of suggested facet values
     */
    suggestedValues: FacetValue,

    modelType: "search/facet-suggestion"
  }
}
