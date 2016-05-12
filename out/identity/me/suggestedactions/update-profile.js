import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class UpdateProfile extends Model {
  static schema = {
    /**
     * @property miniProfile
     * The basic profile information about the logged-in member.
     */
    miniProfile: MiniProfile,

    modelType: "identity/me/suggestedactions/update-profile"
  }
}
