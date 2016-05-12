import Model from 'app/api/NotTerribleModel';

export default class TrackableEntity extends Model {
  static schema = {
    /**
     * @property trackingId
     * a unique id which represents this particular instance of an entity, created when the entity is materialized
     */
    trackingId: Model.STRING,

    modelType: "common/trackable-entity"
  }
}
