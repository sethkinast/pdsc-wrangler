import Model from 'app/api/NotTerribleModel';
import CompanyRanking from "app/models/entities/job/analytics/company-ranking";

export default class InflowCompanyRankingInsights extends Model {
  static schema = {
    /**
     * @property rankings
     * Rankings of companies based on number of previous employees hired by this company.
     */
    rankings: CompanyRanking,

    modelType: "entities/job/analytics/inflow-company-ranking-insights"
  }
}
