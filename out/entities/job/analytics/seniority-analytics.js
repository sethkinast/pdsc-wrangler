import Model from 'app/api/NotTerribleModel';
import SeniorityCount from "app/models/entities/job/analytics/seniority-count";

export default class SeniorityAnalytics extends Model {
  static schema = {
    /**
     * @property seniorities
     * Seniorities of other applicants and number of applicants with each seniority.
     */
    seniorities: SeniorityCount,

    modelType: "entities/job/analytics/seniority-analytics"
  }
}
