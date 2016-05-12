import Model from 'app/api/NotTerribleModel';
import MiniProfileWithDistance from "app/models/entities/shared/mini-profile-with-distance";
import MiniCompany from "app/models/entities/shared/mini-company";

export default class InCommonCompany extends Model {
  static schema = {
    /**
     * @property member
     * The basic information about the other member.
     */
    member: MiniProfileWithDistance,

    /**
     * @property companies
     * A list of shared companies between the viewer and other member.
     */
    companies: MiniCompany,

    /**
     * @property total
     * The total number of companies in common with the viewer.
     */
    total: Model.INT,

    modelType: "entities/incommon/in-common-company"
  }
}
