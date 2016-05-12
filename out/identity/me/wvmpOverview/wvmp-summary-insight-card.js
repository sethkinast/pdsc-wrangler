import Model from 'app/api/NotTerribleModel';
import Card from "app/models/identity/me/card";
import TimeFrame from "app/models/identity/me/wvmpOverview/time-frame";
import WvmpMetadata from "app/models/identity/me/wvmp-metadata";

export default class WvmpSummaryInsightCard extends Model {
  static schema = {
    /**
     * @property numViews
     * Profile view count over the total time.
     */
    numViews: Model.INT,

    /**
     * @property numViewsChangeInPercentage
     * Percentage of number of profile views change over the duration during which counting the total amount of people seeing the member's profile.
     */
    numViewsChangeInPercentage: Model.INT,

    /**
     * @property cards
     * Collection of all the various cards used for WVMP insight card
     */
    cards: Card,

    /**
     * @property timeFrame
     * Time frame of the profile views.
     */
    timeFrame: TimeFrame,

    /**
     * @property wvmpMetadata
     * Metadata about a collection of profile view cards.
     */
    wvmpMetadata: WvmpMetadata,

    modelType: "identity/me/wvmpOverview/wvmp-summary-insight-card"
  }
}
