import Model from 'app/api/NotTerribleModel';
import AbiRoute from "app/models/common/heathrow/abi-route";
import PymkRoute from "app/models/common/heathrow/pymk-route";
import FeedRoute from "app/models/common/heathrow/feed-route";

export default class SuggestedRoute extends Model {
  static schema = {
    /**
     * @property route
     * Union which contains information that helps to route member to that specific experience
     */
    route: Model.oneOf(AbiRoute, PymkRoute, FeedRoute),

    modelType: "common/heathrow/suggested-route"
  }
}
