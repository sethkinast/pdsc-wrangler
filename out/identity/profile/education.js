import Model from 'app/api/NotTerribleModel';
import NormEducation from "app/models/identity/profile/norm-education";
import HonorUrn from "app/models/common/honor-urn";
import CourseUrn from "app/models/common/course-urn";
import MiniSchool from "app/models/entities/shared/mini-school";
import TestScoreUrn from "app/models/common/test-score-urn";
import ProjectUrn from "app/models/common/project-urn";
import RecommendationUrn from "app/models/common/recommendation-urn";

export default class Education extends Model {
  static schema = Object.assign({}, NormEducation.schema, {
    /**
     * @property honors
     * Awards earned for this education.
     */
    honors: HonorUrn,

    /**
     * @property courses
     * Awards earned for this education.
     */
    courses: CourseUrn,

    /**
     * @property school
     * The school from where the member received his or her education.
     */
    school: MiniSchool,

    /**
     * @property testScores
     * Awards earned for this education.
     */
    testScores: TestScoreUrn,

    /**
     * @property projects
     * Projects associated with the education.
     */
    projects: ProjectUrn,

    /**
     * @property recommendations
     * List of urns containing the endorsements received by this member for the given education.
     */
    recommendations: RecommendationUrn,

    modelType: "identity/profile/education"
  })
}
