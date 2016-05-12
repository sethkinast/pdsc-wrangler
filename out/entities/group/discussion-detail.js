import Model from 'app/api/NotTerribleModel';
import DiscussionDetailUrn from "app/models/common/discussion-detail-urn";
import MiniGroup from "app/models/entities/shared/mini-group";
import GroupMembershipInfo from "app/models/entities/shared/group-membership-info";
import Update from "app/models/feed/update";

export default class DiscussionDetail extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this discussion detail page.
     */
    entityUrn: DiscussionDetailUrn,

    /**
     * @property miniGroup
     * Contains basic information of the group.
     */
    miniGroup: MiniGroup,

    /**
     * @property membershipInfo
     * Information about the membership of the viewer in the group.
     */
    membershipInfo: GroupMembershipInfo,

    /**
     * @property discussion
     * The group discussion wrapped in feed Update model.
     */
    discussion: Update,

    modelType: "entities/group/discussion-detail"
  }
}
