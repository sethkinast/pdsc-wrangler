import Model from 'app/api/NotTerribleModel';
import Insight from "app/models/identity/me/insight";
import Card from "app/models/identity/me/card";
import WvmpMetadata from "app/models/identity/me/wvmp-metadata";

export default class WvmpJobTitleInsightCard extends Model {
  static schema = {
    /**
     * @property numViews
     * Profile view count over the total time.
     */
    numViews: Model.INT,

    /**
     * @property viewerTitle
     * Title of the viewers.
     */
    viewerTitle: Model.STRING,

    /**
     * @property insight
     * Insight about viewers' job title.
     */
    insight: Insight,

    /**
     * @property cards
     * Collection of all the various cards used for WVMP insight card
     */
    cards: Card,

    /**
     * @property wvmpMetadata
     * Metadata about a collection of profile view cards.
     */
    wvmpMetadata: WvmpMetadata,

    modelType: "identity/me/wvmpOverview/wvmp-job-title-insight-card"
  }
}
