import Model from 'app/api/NotTerribleModel';
import SearchType from "app/models/search/search-type";
import SearchQuery from "app/models/search/search-query";
import SuggestedEntity from "app/models/typeahead/suggested-entity";

export default class TypeaheadSuggestion extends Model {
  static schema = {
    /**
     * @property type
     * The search vertical of the suggestion, e.g. PEOPLE, JOBS, COMPANIES, GROUPS
     */
    type: SearchType,

    /**
     * @property query
     * Search query that represents the suggestion.
     */
    query: SearchQuery,

    /**
     * @property suggestedEntities
     * The entities in the suggestion, e.g. a skill, company, title, or school.
     */
    suggestedEntities: SuggestedEntity,

    modelType: "typeahead/typeahead-suggestion"
  }
}
