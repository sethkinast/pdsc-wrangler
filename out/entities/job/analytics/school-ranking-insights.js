import Model from 'app/api/NotTerribleModel';
import SchoolRanking from "app/models/entities/job/analytics/school-ranking";

export default class SchoolRankingInsights extends Model {
  static schema = {
    /**
     * @property rankings
     * Ranking based on number of alumni employed by this company.
     */
    rankings: SchoolRanking,

    modelType: "entities/job/analytics/school-ranking-insights"
  }
}
