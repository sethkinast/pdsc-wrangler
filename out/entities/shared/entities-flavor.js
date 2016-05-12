import Model from 'app/api/NotTerribleModel';
import InNetworkReason from "app/models/entities/shared/in-network-reason";
import CompanyRecruitReason from "app/models/entities/shared/company-recruit-reason";
import SchoolRecruitReason from "app/models/entities/shared/school-recruit-reason";

export default class EntitiesFlavor extends Model {
  static schema = {
    /**
     * @property reason
     * The union of all the reasons for each flavor.
     */
    reason: Model.oneOf(InNetworkReason, CompanyRecruitReason, SchoolRecruitReason),

    modelType: "entities/shared/entities-flavor"
  }
}
