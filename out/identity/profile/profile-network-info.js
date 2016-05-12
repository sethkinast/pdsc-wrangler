import Model from 'app/api/NotTerribleModel';
import ProfileNetworkInfoUrn from "app/models/common/profile-network-info-urn";
import MemberDistance from "app/models/common/member-distance";
import FollowingInfo from "app/models/common/following-info";

export default class ProfileNetworkInfo extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this network info
     */
    entityUrn: ProfileNetworkInfoUrn,

    /**
     * @property distance
     * Distance between the viewer and the viewee.
     */
    distance: MemberDistance,

    /**
     * @property connectionsCount
     * Number of connections for the viewee, between 1 and 500. There is a cut-off at 500 and it should be shown to the user as 500+.
     */
    connectionsCount: Model.INT,

    /**
     * @property followingInfo
     * Indicates whether the member is currently following the viewee and how many followers the viewee has
     */
    followingInfo: FollowingInfo,

    /**
     * @property followersCount
     * Number of followers the viewee has.
     */
    followersCount: Model.INT,

    /**
     * @property following
     * Whether the viewer is following the viewee.
     */
    following: Model.BOOL,

    /**
     * @property followable
     * Whether the viewer can follow the viewee.
     */
    followable: Model.BOOL,

    modelType: "identity/profile/profile-network-info"
  }
}
