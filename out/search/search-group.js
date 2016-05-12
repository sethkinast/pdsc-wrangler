import Model from 'app/api/NotTerribleModel';
import MiniGroup from "app/models/entities/shared/mini-group";
import AnnotatedText from "app/models/relationships/shared/annotation/annotated-text";
import DiscussionActivityInfo from "app/models/search/discussion-activity-info";
import GroupMembershipInfo from "app/models/entities/shared/group-membership-info";

export default class SearchGroup extends Model {
  static schema = {
    /**
     * @property id
     * The id of the group. This field is deprecated. Use entityUrn instead.
     */
    id: Model.STRING,

    /**
     * @property backendUrn
     * Backend urn representing the group. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.GroupUrn'),

    /**
     * @property group
     * Basic group information
     */
    group: MiniGroup,

    /**
     * @property open
     * Specifies whether the group is open or private
     */
    open: Model.BOOL,

    /**
     * @property summary
     * Summary of group
     */
    summary: AnnotatedText,

    /**
     * @property memberCount
     * Number of members in group
     */
    memberCount: Model.INT,

    /**
     * @property discussionActivity
     * Discussion activity within the group
     */
    discussionActivity: DiscussionActivityInfo,

    /**
     * @property membershipInfo
     * The viewer's membership information for the group. At this time it is only set if the viewer is a group member.
     */
    membershipInfo: GroupMembershipInfo,

    modelType: "search/search-group"
  }
}
