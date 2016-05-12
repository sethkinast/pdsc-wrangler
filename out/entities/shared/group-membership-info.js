import Model from 'app/api/NotTerribleModel';
import GroupMembershipInfoUrn from "app/models/common/group-membership-info-urn";
import GroupMembershipStatus from "app/models/entities/shared/group-membership-status";

export default class GroupMembershipInfo extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this GroupMembershipInfo.
     */
    entityUrn: GroupMembershipInfoUrn,

    /**
     * @property status
     * Membership status in the group.
     */
    status: GroupMembershipStatus,

    modelType: "entities/shared/group-membership-info"
  }
}
