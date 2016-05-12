import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";
import MemberDistance from "app/models/common/member-distance";

export default class BrowsemapMiniProfile extends Model {
  static schema = {
    /**
     * @property miniProfile
     * MiniProfile of a person in the browsemap.
     */
    miniProfile: MiniProfile,

    /**
     * @property distance
     * The distance between the viewer and the person.
     */
    distance: MemberDistance,

    modelType: "identity/profile/browsemap-mini-profile"
  }
}
