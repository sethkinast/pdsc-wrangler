import Model from 'app/api/NotTerribleModel';

export default class LegoTrackingInfo extends Model {
  static schema = {
    /**
     * @property legoTrackingToken
     * Tracking token for LEGO system
     */
    legoTrackingToken: Model.STRING,

    modelType: "relationships/shared/prop/lego-tracking-info"
  }
}
