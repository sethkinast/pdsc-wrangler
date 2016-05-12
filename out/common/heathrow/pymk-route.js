import Model from 'app/api/NotTerribleModel';

export default class PymkRoute extends Model {
  static schema = {
    /**
     * @property legoTrackingToken
     * LEGO Tracking Token that is passed to the client to fire impression and action tracking. No need to pass the token if this is a default route and impression need not be tracked
     */
    legoTrackingToken: Model.STRING,

    modelType: "common/heathrow/pymk-route"
  }
}
