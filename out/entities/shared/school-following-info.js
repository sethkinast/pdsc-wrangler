import Model from 'app/api/NotTerribleModel';
import SchoolFollowingInfoUrn from "app/models/common/school-following-info-urn";

export default class SchoolFollowingInfo extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this SchoolFollowingInfo.
     */
    entityUrn: SchoolFollowingInfoUrn,

    /**
     * @property following
     * Indicates whether the member is already following this school
     */
    following: Model.BOOL,

    modelType: "entities/shared/school-following-info"
  }
}
