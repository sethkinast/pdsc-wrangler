import Model from 'app/api/NotTerribleModel';
import MiniProfileUrn from "app/models/common/mini-profile-urn";
import FollowingInfo from "app/models/common/following-info";

export default class UnfollowMember extends Model {
  static schema = {
    /**
     * @property profileUrn
     * profile urn of the profile that can be unfollowed
     */
    profileUrn: MiniProfileUrn,

    /**
     * @property displayName
     * Display name of the member
     */
    displayName: Model.STRING,

    /**
     * @property followingInfo
     * Information about the following relationship between the viewer and the member.
     */
    followingInfo: FollowingInfo,

    modelType: "feed/actions/unfollow-member"
  }
}
