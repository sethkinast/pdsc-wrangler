import Model from 'app/api/NotTerribleModel';
import UnfollowType from "app/models/feed/actions/unfollow-type";

export default class UnfollowActions extends Model {
  static schema = {
    /**
     * @property actions
     * A list of possible unfollow actions.
     */
    actions: UnfollowType,

    modelType: "feed/actions/unfollow-actions"
  }
}
