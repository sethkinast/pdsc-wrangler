import Model from 'app/api/NotTerribleModel';
import MiniGroup from "app/models/entities/shared/mini-group";

export default class SearchHistoryGroup extends Model {
  static schema = {
    /**
     * @property backendUrn
     * Backend Urn for group. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.GroupUrn'),

    /**
     * @property group
     * Basic group information.
     */
    group: MiniGroup,

    modelType: "search/search-history-group"
  }
}
