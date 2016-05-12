import Model from 'app/api/NotTerribleModel';
import TakeoverType from "app/models/common/takeover-type";

export default class Takeover extends Model {
  static schema = {
    /**
     * @property takeoverType
     * The type of takeover to show
     */
    takeoverType: TakeoverType,

    /**
     * @property legoTrackingToken
     * The tracking token to cool off the specific takeover so the user won't see this takeover again for a while.
     */
    legoTrackingToken: Model.STRING,

    /**
     * @property globalLegoTrackingToken
     * The tracking token to cool off all takeovers so the user won't see another takeover for a while.
     */
    globalLegoTrackingToken: Model.STRING,

    modelType: "common/takeover"
  }
}
