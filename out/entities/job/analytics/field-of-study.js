import Model from 'app/api/NotTerribleModel';

export default class FieldOfStudy extends Model {
  static schema = {
    /**
     * @property name
     * Field of study as a localized string (e.g. Computer Science).
     */
    name: Model.STRING,

    /**
     * @property count
     * Number of applicants who study this field.
     */
    count: Model.INT,

    modelType: "entities/job/analytics/field-of-study"
  }
}
