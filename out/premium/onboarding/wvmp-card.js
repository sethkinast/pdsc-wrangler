import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class WvmpCard extends Model {
  static schema = {
    /**
     * @property profiles
     * A list of wvmp profiles.
     */
    profiles: MiniProfile,

    /**
     * @property wvmpTotal
     * The total amount of people viewing the member's profile in the last duration.
     */
    wvmpTotal: Model.INT,

    /**
     * @property wvmpDurationInDays
     * The duration during which counting the total amount of people seeing the member's profile.
     */
    wvmpDurationInDays: Model.INT,

    modelType: "premium/onboarding/wvmp-card"
  }
}
