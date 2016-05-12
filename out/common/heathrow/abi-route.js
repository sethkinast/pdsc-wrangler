import Model from 'app/api/NotTerribleModel';

export default class AbiRoute extends Model {
  static schema = {
    /**
     * @property splashOperation
     * How should splash page be operated on the client. client can chose to show the default behavior if CLIENT_DECISION is returned.
     */
    splashOperation: Model.STRING,

    /**
     * @property legoTrackingToken
     * LEGO Tracking Token that is passed to the client to fire impression and action tracking. No need to pass the token, if this is a default route and impression need not be tracked
     */
    legoTrackingToken: Model.STRING,

    modelType: "common/heathrow/abi-route"
  }
}
