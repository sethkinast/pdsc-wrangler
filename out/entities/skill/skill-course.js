import Model from 'app/api/NotTerribleModel';
import SkillCourseUrn from "app/models/common/skill-course-urn";
import CourseProvider from "app/models/entities/skill/course-provider";
import Image from "app/models/common/image";

export default class SkillCourse extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this skillCourse.
     */
    entityUrn: SkillCourseUrn,

    /**
     * @property title
     * The course title stored on the backend.
     */
    title: Model.STRING,

    /**
     * @property courseProvider
     * The provider of the course.
     */
    courseProvider: CourseProvider,

    /**
     * @property heroImage
     * The hero image for the course.
     */
    heroImage: Image,

    /**
     * @property website
     * URL for this course's website.
     */
    website: Model.foreignUrn('com.linkedin.common.Uri'),

    modelType: "entities/skill/skill-course"
  }
}
