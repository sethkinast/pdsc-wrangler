import Model from 'app/api/NotTerribleModel';
import CourseUrn from "app/models/common/course-urn";

export default class NormCourse extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this course
     */
    entityUrn: CourseUrn,

    /**
     * @property name
     * Name of this course, as entered by the member.
     */
    name: Model.STRING,

    /**
     * @property number
     * Course number provided by the member.
     */
    number: Model.STRING,

    /**
     * @property occupation
     * Occupation held by the person when this course was taken.
     */
    occupation: Model.STRING,

    modelType: "identity/profile/norm-course"
  }
}
