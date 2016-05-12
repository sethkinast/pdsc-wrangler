import Model from 'app/api/NotTerribleModel';
import SearchQuery from "app/models/search/search-query";
import SuggestedEntity from "app/models/typeahead/suggested-entity";

export default class EntityAwareSearchQuery extends Model {
  static schema = {
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

    modelType: "search/entity-aware-search-query"
  }
}
