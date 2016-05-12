import Model from 'app/api/NotTerribleModel';
import MiniCompany from "app/models/entities/shared/mini-company";
import FollowingInfo from "app/models/common/following-info";

export default class CompanyActor extends Model {
  static schema = {
    /**
     * @property urn
     * Backend URN for this company.
     */
    urn: Model.STRING,

    /**
     * @property miniCompany
     * Mini Company info for this company
     */
    miniCompany: MiniCompany,

    /**
     * @property followingInfo
     * Indicates whether the member is already following this company.
     */
    followingInfo: FollowingInfo,

    /**
     * @property showFollowAction
     * Indicate whether or not to display the follow button
     */
    showFollowAction: Model.BOOL,

    modelType: "feed/company-actor"
  }
}
