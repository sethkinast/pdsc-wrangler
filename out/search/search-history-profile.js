import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class SearchHistoryProfile extends Model {
  static schema = {
    /**
     * @property profile
     * Basic profile information.
     */
    profile: MiniProfile,

    /**
     * @property backendUrn
     * Backend Urn for profile. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.MemberUrn'),

    modelType: "search/search-history-profile"
  }
}
