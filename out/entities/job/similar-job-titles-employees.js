import Model from 'app/api/NotTerribleModel';
import MiniProfileWithDistance from "app/models/entities/shared/mini-profile-with-distance";

export default class SimilarJobTitlesEmployees extends Model {
  static schema = {
    /**
     * @property peopleWithDistance
     * A list of the second degree connections of a viewer who are employees with job titles similar to the job posting. TODO: replace this with the new array that Jian will be creating.
     */
    peopleWithDistance: MiniProfileWithDistance,

    /**
     * @property total
     * The total number of employees with similar job titles.
     */
    total: Model.INT,

    modelType: "entities/job/similar-job-titles-employees"
  }
}
