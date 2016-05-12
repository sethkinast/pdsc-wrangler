import Model from 'app/api/NotTerribleModel';
import MiniGroup from "app/models/entities/shared/mini-group";

export default class LeaveGroup extends Model {
  static schema = {
    /**
     * @property miniGroup
     * Information about the group.
     */
    miniGroup: MiniGroup,

    modelType: "feed/actions/leave-group"
  }
}
