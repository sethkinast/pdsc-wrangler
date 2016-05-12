import Model from 'app/api/NotTerribleModel';
import MiniGroup from "app/models/entities/shared/mini-group";
import GroupMembershipInfo from "app/models/entities/shared/group-membership-info";

export default class TypeaheadGroup extends Model {
  static schema = {
    /**
     * @property id
     * The id of the group. This field is deprecated. Use the entityUrn in MiniGroup instead.
     */
    id: Model.STRING,

    /**
     * @property backendUrn
     * Backend Urn for the group. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.GroupUrn'),

    /**
     * @property group
     * Basic group information.
     */
    group: MiniGroup,

    /**
     * @property membershipInfo
     * The viewer's membership information for the group. At this time it is only set if the viewer is a group member.
     */
    membershipInfo: GroupMembershipInfo,

    modelType: "typeahead/typeahead-group"
  }
}
