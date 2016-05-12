import Model from 'app/api/NotTerribleModel';
import MeHeaderUrn from "app/models/common/me-header-urn";
import MiniProfile from "app/models/identity/shared/mini-profile";
import BackgroundImage from "app/models/identity/profile/background-image";
import SocialUpdateType from "app/models/identity/me/social-update-type";

export default class Header extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this header.
     */
    entityUrn: MeHeaderUrn,

    /**
     * @property miniProfile
     * Feed owner's mini profile.
     */
    miniProfile: MiniProfile,

    /**
     * @property backgroundImage
     * Feed owner's background image.
     */
    backgroundImage: BackgroundImage,

    /**
     * @property numProfileViews
     * Number of recent profile views this member received.
     */
    numProfileViews: Model.INT,

    /**
     * @property numLastUpdateViews
     * Number of views of the member's last update (post or share).
     */
    numLastUpdateViews: Model.INT,

    /**
     * @property lastUpdateType
     * Type of the member's last update (post or share).
     */
    lastUpdateType: SocialUpdateType,

    /**
     * @property numFollowers
     * Number of followers this member has.
     */
    numFollowers: Model.INT,

    /**
     * @property numActivities
     * Count of this member's recent activities.
     */
    numActivities: Model.INT,

    modelType: "identity/me/header"
  }
}
