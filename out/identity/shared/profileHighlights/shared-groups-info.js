import Model from 'app/api/NotTerribleModel';
import MiniGroup from "app/models/entities/shared/mini-group";

export default class SharedGroupsInfo extends Model {
  static schema = {
    /**
     * @property sharedGroups
     * A list of shared groups between the viewer and viewee
     */
    sharedGroups: MiniGroup,

    modelType: "identity/shared/profileHighlights/shared-groups-info"
  }
}
