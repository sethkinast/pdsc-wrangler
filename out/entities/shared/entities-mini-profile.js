import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";
import MemberDistance from "app/models/common/member-distance";

export default class EntitiesMiniProfile extends Model {
  static schema = {
    /**
     * @property miniProfile
     * mini profile of a member.
     */
    miniProfile: MiniProfile,

    /**
     * @property distance
     * The distance between the viewer and the person.
     */
    distance: MemberDistance,

    /**
     * @property headless
     * Flag to determine if the profile is headless. A member profile is marked as headless if it is out of network and has no shared groups. This field is populated when retrieving a profile using search APIs.
     */
    headless: Model.BOOL,

    modelType: "entities/shared/entities-mini-profile"
  }
}
