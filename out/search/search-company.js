import Model from 'app/api/NotTerribleModel';
import MiniCompany from "app/models/entities/shared/mini-company";
import FollowingInfo from "app/models/common/following-info";

export default class SearchCompany extends Model {
  static schema = {
    /**
     * @property id
     * The id of the company. This field will be deprecated. Use entityUrn in MiniCompany instead.
     */
    id: Model.STRING,

    /**
     * @property backendUrn
     * Backend urn representing the company. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.CompanyUrn'),

    /**
     * @property company
     * Basic company information
     */
    company: MiniCompany,

    /**
     * @property location
     * The location of the company's headquarters
     */
    location: Model.STRING,

    /**
     * @property industry
     * The industry of the company.
     */
    industry: Model.STRING,

    /**
     * @property size
     * The size of the company.
     */
    size: Model.STRING,

    /**
     * @property following
     * Indicates whether the member is already following this company.
     */
    following: FollowingInfo,

    modelType: "search/search-company"
  }
}
