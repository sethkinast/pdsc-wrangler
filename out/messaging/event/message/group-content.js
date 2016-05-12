import Model from 'app/api/NotTerribleModel';
import MiniGroup from "app/models/entities/shared/mini-group";

export default class GroupContent extends Model {
  static schema = {
    /**
     * @property group
     * Associate mini group of message
     */
    group: MiniGroup,

    modelType: "messaging/event/message/group-content"
  }
}
