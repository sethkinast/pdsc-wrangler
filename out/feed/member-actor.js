import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";
import FollowingInfo from "app/models/common/following-info";
import MemberDistance from "app/models/common/member-distance";

export default class MemberActor extends Model {
  static schema = {
    /**
     * @property urn
     * Backend URN for this member.
     */
    urn: Model.STRING,

    /**
     * @property miniProfile
     * Mini Profile for this user
     */
    miniProfile: MiniProfile,

    /**
     * @property followingInfo
     * Indicates whether the member is already following this member
     */
    followingInfo: FollowingInfo,

    /**
     * @property showFollowAction
     * Indicate whether or not to display the follow button
     */
    showFollowAction: Model.BOOL,

    /**
     * @property distance
     * Distance between the viewer and viewee. TODO: Make this required.
     */
    distance: MemberDistance,

    modelType: "feed/member-actor"
  }
}
