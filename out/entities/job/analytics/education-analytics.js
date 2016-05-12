import Model from 'app/api/NotTerribleModel';
import FieldOfStudy from "app/models/entities/job/analytics/field-of-study";
import DegreeCount from "app/models/entities/job/analytics/degree-count";

export default class EducationAnalytics extends Model {
  static schema = {
    /**
     * @property fieldsOfStudy
     * Fields of study of other applicants and number of applicants studying each field.
     */
    fieldsOfStudy: FieldOfStudy,

    /**
     * @property degrees
     * Degrees of other applicants and number of applicants with each degree.
     */
    degrees: DegreeCount,

    modelType: "entities/job/analytics/education-analytics"
  }
}
