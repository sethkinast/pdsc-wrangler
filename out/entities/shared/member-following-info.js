import Model from 'app/api/NotTerribleModel';
import MemberFollowingInfoUrn from "app/models/common/member-following-info-urn";

export default class MemberFollowingInfo extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this MemberFollowingInfo.
     */
    entityUrn: MemberFollowingInfoUrn,

    /**
     * @property following
     * Indicates whether the member is already following this member.
     */
    following: Model.BOOL,

    modelType: "entities/shared/member-following-info"
  }
}
