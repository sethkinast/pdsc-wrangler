import Model from 'app/api/NotTerribleModel';

export default class DegreeCount extends Model {
  static schema = {
    /**
     * @property degree
     * Degree as a localized string (e.g. Bachelor's Degree).
     */
    degree: Model.STRING,

    /**
     * @property count
     * Number of other applicants with this degree.
     */
    count: Model.INT,

    /**
     * @property percent
     * Percentage of applicants with this degree.
     */
    percent: Model.INT,

    /**
     * @property sharedDegree
     * Flag denoting whether or not the viewer's highest degree is this degree.
     */
    sharedDegree: Model.BOOL,

    modelType: "entities/job/analytics/degree-count"
  }
}
