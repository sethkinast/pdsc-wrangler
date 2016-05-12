import Model from 'app/api/NotTerribleModel';
import MiniSchool from "app/models/entities/shared/mini-school";
import FollowingInfo from "app/models/common/following-info";

export default class BasicSchoolInfo extends Model {
  static schema = {
    /**
     * @property miniSchool
     * Mini school containing name and logo information.
     */
    miniSchool: MiniSchool,

    /**
     * @property followingInfo
     * Indicates whether the member is already following this school.
     */
    followingInfo: FollowingInfo,

    /**
     * @property followerCount
     * TODO: Deprecated, followerCount has been moved into followingInfo. The total number of followers of this school.
     */
    followerCount: Model.INT,

    /**
     * @property location
     * Location of the school.
     */
    location: Model.STRING,

    modelType: "entities/school/basic-school-info"
  }
}
