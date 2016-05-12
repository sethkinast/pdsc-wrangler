import Model from 'app/api/NotTerribleModel';
import MiniSchool from "app/models/entities/shared/mini-school";
import FollowingInfo from "app/models/common/following-info";

export default class SearchSchool extends Model {
  static schema = {
    /**
     * @property id
     * The id of the school. This field is deprecated. Use entityUrn in miniSchool instead.
     */
    id: Model.STRING,

    /**
     * @property backendUrn
     * Backend urn representing the School. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.SchoolUrn'),

    /**
     * @property school
     * Basic school information
     */
    school: MiniSchool,

    /**
     * @property location
     * The location of the school
     */
    location: Model.STRING,

    /**
     * @property studentAndAlumniCount
     * Number of students and alumni on LinkedIn
     */
    studentAndAlumniCount: Model.INT,

    /**
     * @property following
     * Indicates whether the member is following this school
     */
    following: FollowingInfo,

    modelType: "search/search-school"
  }
}
