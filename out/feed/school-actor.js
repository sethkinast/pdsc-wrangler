import Model from 'app/api/NotTerribleModel';
import MiniSchool from "app/models/entities/shared/mini-school";
import FollowingInfo from "app/models/common/following-info";

export default class SchoolActor extends Model {
  static schema = {
    /**
     * @property urn
     * Backend URN for this school.
     */
    urn: Model.STRING,

    /**
     * @property miniSchool
     * Mini School for this user
     */
    miniSchool: MiniSchool,

    /**
     * @property followingInfo
     * Indicates whether the member is already following this school.
     */
    followingInfo: FollowingInfo,

    /**
     * @property showFollowAction
     * Indicate whether or not to display the follow button
     */
    showFollowAction: Model.BOOL,

    modelType: "feed/school-actor"
  }
}
