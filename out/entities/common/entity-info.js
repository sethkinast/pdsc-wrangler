import Model from 'app/api/NotTerribleModel';
import Base64EncodedTrackingId from "app/models/common/base64-encoded-tracking-id";

export default class EntityInfo extends Model {
  static schema = {
    /**
     * @property trackingId
     * A unique id which represents this particular instance of an entity.
     */
    trackingId: Base64EncodedTrackingId,

    /**
     * @property objectUrn
     * Pointer to the backend object underlying this entity page.
     */
    objectUrn: Model.STRING,

    modelType: "entities/common/entity-info"
  }
}
