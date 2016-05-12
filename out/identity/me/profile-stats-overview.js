import Model from 'app/api/NotTerribleModel';
import ProfileStatsOverviewUrn from "app/models/common/profile-stats-overview-urn";
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class ProfileStatsOverview extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this profile stats overview.
     */
    entityUrn: ProfileStatsOverviewUrn,

    /**
     * @property numProfileViews
     * Number of recent profile views this member received.
     */
    numProfileViews: Model.INT,

    /**
     * @property someViewers
     * Information about a subset of the profile viewers.
     */
    someViewers: MiniProfile,

    modelType: "identity/me/profile-stats-overview"
  }
}
