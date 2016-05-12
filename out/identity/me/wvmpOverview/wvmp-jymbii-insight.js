import Model from 'app/api/NotTerribleModel';
import MiniCompany from "app/models/entities/shared/mini-company";

export default class WvmpJymbiiInsight extends Model {
  static schema = {
    /**
     * @property miniCompany
     * Mini company info for the company which has open positions.
     */
    miniCompany: MiniCompany,

    modelType: "identity/me/wvmpOverview/wvmp-jymbii-insight"
  }
}
