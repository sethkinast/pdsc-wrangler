import Model from 'app/api/NotTerribleModel';
import MiniCompany from "app/models/entities/shared/mini-company";
import FollowingInfo from "app/models/common/following-info";

export default class BasicCompanyInfo extends Model {
  static schema = {
    /**
     * @property miniCompany
     * The mini company containing name and logo information.
     */
    miniCompany: MiniCompany,

    /**
     * @property headquarters
     * City of the company headquarters
     */
    headquarters: Model.STRING,

    /**
     * @property followingInfo
     * Indicates whether the member is already following this company.
     */
    followingInfo: FollowingInfo,

    /**
     * @property followerCount
     * TODO: Deprecated, followerCount has been moved into followingInfo. The total number of followers of this company.
     */
    followerCount: Model.INT,

    modelType: "entities/company/basic-company-info"
  }
}
