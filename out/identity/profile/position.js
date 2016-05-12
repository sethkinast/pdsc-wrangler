import Model from 'app/api/NotTerribleModel';
import NormPosition from "app/models/identity/profile/norm-position";
import PositionCompany from "app/models/identity/profile/position-company";
import ProjectUrn from "app/models/common/project-urn";
import OrganizationUrn from "app/models/common/organization-urn";
import HonorUrn from "app/models/common/honor-urn";
import CourseUrn from "app/models/common/course-urn";
import RecommendationUrn from "app/models/common/recommendation-urn";

export default class Position extends Model {
  static schema = Object.assign({}, NormPosition.schema, {
    /**
     * @property company
     * Company info if the position's company is a standardized one.
     */
    company: PositionCompany,

    /**
     * @property projects
     * Projects associated with the position.
     */
    projects: ProjectUrn,

    /**
     * @property organizations
     * Organizations associated with the position.
     */
    organizations: OrganizationUrn,

    /**
     * @property honors
     * Awards earned for this position.
     */
    honors: HonorUrn,

    /**
     * @property courses
     * Courses taken in relation with this position.
     */
    courses: CourseUrn,

    /**
     * @property recommendations
     * List of urns containing the endorsements received by this member for this position.
     */
    recommendations: RecommendationUrn,

    modelType: "identity/profile/position"
  })
}
