import Model from 'app/api/NotTerribleModel';
import NextSchoolUrn from "app/models/common/next-school-urn";
import MiniSchool from "app/models/entities/shared/mini-school";
import StudentsAndAlumniCount from "app/models/entities/school/students-and-alumni-count";

export default class NextSchool extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this NextSchool.
     */
    entityUrn: NextSchoolUrn,

    /**
     * @property miniSchool
     * Minimum information about the school.
     */
    miniSchool: MiniSchool,

    /**
     * @property location
     * The location of the school's main campus.
     */
    location: Model.STRING,

    /**
     * @property studentsAndAlumniCount
     * This represents the number of students and alumni of this school on Linkedin.
     */
    studentsAndAlumniCount: StudentsAndAlumniCount,

    /**
     * @property objectUrn
     * Pointer to the backend object underlying this NextSchool.
     */
    objectUrn: Model.STRING,

    modelType: "entities/school/next-school"
  }
}
