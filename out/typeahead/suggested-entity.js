import Model from 'app/api/NotTerribleModel';
import SuggestedEntityType from "app/models/typeahead/suggested-entity-type";

export default class SuggestedEntity extends Model {
  static schema = {
    /**
     * @property type
     * The entity type.
     */
    type: SuggestedEntityType,

    /**
     * @property value
     * The entity value, e.g. skill or company name.  If the suggestion is for a standardized entity, then we will populate the backendUrn instead.
     */
    value: Model.STRING,

    /**
     * @property backendUrn
     * urn describing the entity. This is usually available if the backend gives us a standardized entity. Otherwise we expect the value field to be populated with the entity name. This should be used only for tracking.
     */
    backendUrn: Model.STRING,

    modelType: "typeahead/suggested-entity"
  }
}
