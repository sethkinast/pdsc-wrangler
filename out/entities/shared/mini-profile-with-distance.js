import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";
import MemberDistance from "app/models/common/member-distance";

export default class MiniProfileWithDistance extends Model {
  static schema = {
    /**
     * @property miniProfile
     * mini profile of a group member/owner/admin.
     */
    miniProfile: MiniProfile,

    /**
     * @property distance
     * The distance between the viewer and the person.
     */
    distance: MemberDistance,

    modelType: "entities/shared/mini-profile-with-distance"
  }
}
