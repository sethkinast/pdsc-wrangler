import Model from 'app/api/NotTerribleModel';
import GuidedSearchKeywordsSuggestion from "app/models/search/guided-search-keywords-suggestion";
import GuidedSearchVerticalSuggestion from "app/models/search/guided-search-vertical-suggestion";
import GuidedSearchFacetSuggestion from "app/models/search/guided-search-facet-suggestion";
import SearchQuery from "app/models/search/search-query";

export default class GuidedSearchSuggestion extends Model {
  static schema = {
    /**
     * @property hitInfo
     * The detailed information of the different types of suggestions.
     */
    hitInfo: Model.oneOf(GuidedSearchKeywordsSuggestion, GuidedSearchVerticalSuggestion, GuidedSearchFacetSuggestion),

    /**
     * @property query
     * Search query needed to fetch search results, e.g. 'facetCurrentCompany=1234, q=people, keywords=square'.
     */
    query: SearchQuery,

    /**
     * @property displayText
     * Localized name for this suggestion.
     */
    displayText: Model.STRING,

    /**
     * @property selected
     * Indicate user already selected this suggestion or not.
     */
    selected: Model.BOOL,

    /**
     * @property guideKey
     * Key of a key-value pair for encoding selected guides in a search request.
     */
    guideKey: Model.STRING,

    /**
     * @property guideValue
     * Value of a key-value pair for encoding selected guides in a search request.
     */
    guideValue: Model.STRING,

    modelType: "search/guided-search-suggestion"
  }
}
