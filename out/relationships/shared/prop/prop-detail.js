import Model from 'app/api/NotTerribleModel';
import InvitationInfo from "app/models/relationships/shared/prop/invitation-info";
import LegoTrackingInfo from "app/models/relationships/shared/prop/lego-tracking-info";
import SocialDetailInfo from "app/models/relationships/shared/prop/social-detail-info";

export default class PropDetail extends Model {
  static schema = {
    /**
     * @property detail
     * More types will be added to the union in future
     */
    detail: Model.oneOf(InvitationInfo, LegoTrackingInfo, SocialDetailInfo),

    modelType: "relationships/shared/prop/prop-detail"
  }
}
