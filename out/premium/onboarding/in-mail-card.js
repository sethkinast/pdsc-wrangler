import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class InMailCard extends Model {
  static schema = {
    /**
     * @property memberProfile
     * The profile of a member to whom the buyer can send an inMail.
     */
    memberProfile: MiniProfile,

    modelType: "premium/onboarding/in-mail-card"
  }
}
