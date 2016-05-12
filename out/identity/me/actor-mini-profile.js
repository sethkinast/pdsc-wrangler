import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";
import MemberDistance from "app/models/common/member-distance";

export default class ActorMiniProfile extends Model {
  static schema = {
    /**
     * @property miniProfile
     * Mini profile data about a member.
     */
    miniProfile: MiniProfile,

    /**
     * @property distance
     * Distance between the viewer and viewee.
     */
    distance: MemberDistance,

    modelType: "identity/me/actor-mini-profile"
  }
}
