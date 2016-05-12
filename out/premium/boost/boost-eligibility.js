import Model from 'app/api/NotTerribleModel';
import BoostPromotionalData from "app/models/premium/boost/boost-promotional-data";

export default class BoostEligibility extends Model {
  static schema = {
    /**
     * @property userEligible
     * Flag that specifies if the user is eligible for boost promotion
     */
    userEligible: Model.BOOL,

    /**
     * @property promotionData
     * Promotion related details for the user
     */
    promotionData: BoostPromotionalData,

    modelType: "premium/boost/boost-eligibility"
  }
}
