import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";
import MemberDistance from "app/models/common/member-distance";

export default class EndorserMiniProfile extends Model {
  static schema = {
    /**
     * @property miniProfile
     * The MiniProfile.
     */
    miniProfile: MiniProfile,

    /**
     * @property distance
     * The viewer's distance to this endorser.
     */
    distance: MemberDistance,

    modelType: "identity/profile/endorser-mini-profile"
  }
}
