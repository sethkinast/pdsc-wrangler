import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";
import MemberDistance from "app/models/common/member-distance";

export default class HighlightsMiniProfile extends Model {
  static schema = {
    /**
     * @property miniProfile
     * Mini profile of member.
     */
    miniProfile: MiniProfile,

    /**
     * @property distance
     * The distance between the viewer and the person.
     */
    distance: MemberDistance,

    modelType: "identity/shared/highlights-mini-profile"
  }
}
