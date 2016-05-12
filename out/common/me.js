import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";
import PublicContactInfo from "app/models/identity/shared/public-contact-info";

export default class Me extends Model {
  static schema = {
    /**
     * @property plainId
     * The plain id of the logged-in member. This should not be used anymore other than just surface it for CS representatives or debugging purposes.
     */
    plainId: Model.INT,

    /**
     * @property miniProfile
     * The basic information about this logged in user.
     */
    miniProfile: MiniProfile,

    /**
     * @property publicContactInfo
     * The contact info of this logged in user that is visible to everyone on linkedin.
     */
    publicContactInfo: PublicContactInfo,

    /**
     * @property premiumSubscriber
     * The flag which identifies if the member is a premium subscriber. It's false for free members (non-subscribers).
     */
    premiumSubscriber: Model.BOOL,

    modelType: "common/me"
  }
}
