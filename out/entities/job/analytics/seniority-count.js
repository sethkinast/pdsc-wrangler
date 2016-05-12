import Model from 'app/api/NotTerribleModel';

export default class SeniorityCount extends Model {
  static schema = {
    /**
     * @property seniority
     * Seniority as a string (e.g. Entry).
     */
    seniority: Model.STRING,

    /**
     * @property count
     * Number of applicants with this seniority.
     */
    count: Model.INT,

    /**
     * @property level
     * Integer that maps to the seniority name.
     */
    level: Model.INT,

    modelType: "entities/job/analytics/seniority-count"
  }
}
