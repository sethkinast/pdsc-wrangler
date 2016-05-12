import Model from 'app/api/NotTerribleModel';
import MiniGroup from "app/models/entities/shared/mini-group";

export default class BasicGroupInfo extends Model {
  static schema = {
    /**
     * @property miniGroup
     * Contains basic information of the group.
     */
    miniGroup: MiniGroup,

    /**
     * @property memberCount
     * The exact number of members in this group.
     */
    memberCount: Model.INT,

    modelType: "entities/group/basic-group-info"
  }
}
