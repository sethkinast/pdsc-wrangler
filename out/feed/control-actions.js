import Model from 'app/api/NotTerribleModel';
import UpdateAction from "app/models/feed/update-action";

export default class ControlActions extends Model {
  static schema = {
    /**
     * @property actions
     * A list of possible actions on this update.
     */
    actions: UpdateAction,

    modelType: "feed/control-actions"
  }
}
