import Model from 'app/api/NotTerribleModel';
import MiniCompany from "app/models/entities/shared/mini-company";

export default class CompanyRanking extends Model {
  static schema = {
    /**
     * @property miniCompany
     * Mini company containing company information (e.g. name, id, logo).
     */
    miniCompany: MiniCompany,

    /**
     * @property count
     * Number of employees from this company.
     */
    count: Model.INT,

    /**
     * @property rank
     * Ranking of the company based on number of employees from the company.
     */
    rank: Model.INT,

    /**
     * @property viewerFromCompany
     * Flag denoting whether or not the viewer is employed by this company.
     */
    viewerFromCompany: Model.BOOL,

    modelType: "entities/job/analytics/company-ranking"
  }
}
