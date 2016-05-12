import Model from 'app/api/NotTerribleModel';
import MiniCompany from "app/models/entities/shared/mini-company";
import FollowingInfo from "app/models/common/following-info";

export default class TypeaheadCompany extends Model {
  static schema = {
    /**
     * @property id
     * The id of the company. This field is deprecated. Use entityUrn in MiniCompany instead.
     */
    id: Model.STRING,

    /**
     * @property backendUrn
     * Backend Urn for company. Contains company id. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.CompanyUrn'),

    /**
     * @property company
     * Basic company information
     */
    company: MiniCompany,

    /**
     * @property following
     * Details about whether the viewer is following the company.
     */
    following: FollowingInfo,

    /**
     * @property industryId
     * The id of the industry that this company is part of
     */
    industryId: Model.INT,

    modelType: "typeahead/typeahead-company"
  }
}
