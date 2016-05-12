import Model from 'app/api/NotTerribleModel';
import MiniCompanyUrn from "app/models/common/mini-company-urn";
import FollowingInfo from "app/models/common/following-info";

export default class UnfollowCompany extends Model {
  static schema = {
    /**
     * @property companyUrn
     * Company urn of the company that can be unfollowed
     */
    companyUrn: MiniCompanyUrn,

    /**
     * @property displayName
     * Display name of the company
     */
    displayName: Model.STRING,

    /**
     * @property followingInfo
     * Information about the following relationship between the viewer and the company.
     */
    followingInfo: FollowingInfo,

    modelType: "feed/actions/unfollow-company"
  }
}
