import Model from 'app/api/NotTerribleModel';
import Image from "app/models/common/image";

export default class SearchHistoryEntity extends Model {
  static schema = {
    /**
     * @property id
     * Unique identifier for the entity.
     */
    id: Model.STRING,

    /**
     * @property backendUrn
     * urn describing the entity. This should be used only for tracking.
     */
    backendUrn: Model.STRING,

    /**
     * @property image
     * Image of the entity. eg Profile picture or company logo. 
     */
    image: Image,

    modelType: "search/search-history-entity"
  }
}
