import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";
import MemberDistance from "app/models/common/member-distance";

export default class TypeaheadProfile extends Model {
  static schema = {
    /**
     * @property miniProfile
     * Basic profile information.
     */
    miniProfile: MiniProfile,

    /**
     * @property id
     * The non-iterable id of the profile. This field will be deprecated. Use miniProfileUrn instead.
     */
    id: Model.STRING,

    /**
     * @property backendUrn
     * Backend Urn for profile. Contains member id. eg urn:li:member:123. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.MemberUrn'),

    /**
     * @property distance
     * Distance between the viewer and profile owner in a network. Only goes up to second degree.
     */
    distance: MemberDistance,

    modelType: "typeahead/typeahead-profile"
  }
}
