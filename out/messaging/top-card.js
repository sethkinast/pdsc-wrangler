import Model from 'app/api/NotTerribleModel';
import MemberTopCard from "app/models/messaging/member-top-card";
import CompanyTopCard from "app/models/messaging/company-top-card";

export default class TopCard extends Model {
  static schema = {
    /**
     * @property value
     * Union of TopCard types
     */
    value: Model.oneOf(MemberTopCard, CompanyTopCard),

    modelType: "messaging/top-card"
  }
}
