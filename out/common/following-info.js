import Model from 'app/api/NotTerribleModel';
import FollowingInfoUrn from "app/models/common/following-info-urn";

export default class FollowingInfo extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this FollowingInfo.
     */
    entityUrn: FollowingInfoUrn,

    /**
     * @property following
     * Indicates whether the viewer is already following this target.
     */
    following: Model.BOOL,

    /**
     * @property followerCount
     * The total number of followers of this target. (Note, some targets may not have this data, such as a 'member' target)
     */
    followerCount: Model.INT,

    modelType: "common/following-info"
  }
}
