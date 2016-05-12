import Model from 'app/api/NotTerribleModel';
import CompanyFollowingInfoUrn from "app/models/common/company-following-info-urn";

export default class CompanyFollowingInfo extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this CompanyFollowingInfo.
     */
    entityUrn: CompanyFollowingInfoUrn,

    /**
     * @property following
     * Indicates whether the member is already following this company
     */
    following: Model.BOOL,

    modelType: "entities/shared/company-following-info"
  }
}
