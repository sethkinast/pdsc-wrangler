import Model from 'app/api/NotTerribleModel';
import MiniSchoolUrn from "app/models/common/mini-school-urn";
import FollowingInfo from "app/models/common/following-info";

export default class UnfollowSchool extends Model {
  static schema = {
    /**
     * @property schoolUrn
     * school urn of the school that can be unfollowed
     */
    schoolUrn: MiniSchoolUrn,

    /**
     * @property displayName
     * Display name of the school
     */
    displayName: Model.STRING,

    /**
     * @property followingInfo
     * Information about the following relationship between the viewer and the school.
     */
    followingInfo: FollowingInfo,

    modelType: "feed/actions/unfollow-school"
  }
}
