import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class PropBanner extends Model {
  static schema = {
    /**
     * @property targetMemberProfiles
     * List of mini-profiles to show in the banner
     */
    targetMemberProfiles: MiniProfile,

    modelType: "messaging/prop-banner"
  }
}
