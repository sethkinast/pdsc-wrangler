import Model from 'app/api/NotTerribleModel';
import MiniGroupUrn from "app/models/common/mini-group-urn";
import FollowingInfo from "app/models/common/following-info";

export default class UnfollowGroup extends Model {
  static schema = {
    /**
     * @property groupUrn
     * Group urn of the group that can be unfollowed
     */
    groupUrn: MiniGroupUrn,

    /**
     * @property displayName
     * Display name of the group
     */
    displayName: Model.STRING,

    /**
     * @property followingInfo
     * Information about the following relationship between the viewer and the group.
     */
    followingInfo: FollowingInfo,

    modelType: "feed/actions/unfollow-group"
  }
}
