import Model from 'app/api/NotTerribleModel';
import MiniSchool from "app/models/entities/shared/mini-school";
import FollowingInfo from "app/models/common/following-info";

export default class TypeaheadSchool extends Model {
  static schema = {
    /**
     * @property id
     * The id of the school. This field is deprecated. Use entityUrn in MiniSchool instead.
     */
    id: Model.STRING,

    /**
     * @property backendUrn
     * Backend Urn for school. Contains school id. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.SchoolUrn'),

    /**
     * @property school
     * Basic school information.
     */
    school: MiniSchool,

    /**
     * @property following
     * Details about whether the viewer is following the school.
     */
    following: FollowingInfo,

    modelType: "typeahead/typeahead-school"
  }
}
