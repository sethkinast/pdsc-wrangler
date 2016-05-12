import Model from 'app/api/NotTerribleModel';
import StudentsAndAlumniCountUrn from "app/models/common/students-and-alumni-count-urn";

export default class StudentsAndAlumniCount extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this StudentsAndAlumniCount.
     */
    entityUrn: StudentsAndAlumniCountUrn,

    /**
     * @property count
     * The count of alumni and students at the school
     */
    count: Model.INT,

    modelType: "entities/school/students-and-alumni-count"
  }
}
