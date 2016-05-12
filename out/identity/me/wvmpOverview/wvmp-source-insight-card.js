import Model from 'app/api/NotTerribleModel';
import Insight from "app/models/identity/me/insight";
import Card from "app/models/identity/me/card";
import WvmpMetadata from "app/models/identity/me/wvmp-metadata";

export default class WvmpSourceInsightCard extends Model {
  static schema = {
    /**
     * @property numViews
     * Profile view count over the total time.
     */
    numViews: Model.INT,

    /**
     * @property referrer
     * Source of the profile view (localized).
     */
    referrer: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    /**
     * @property insight
     * Insight about how the viewers found viewee.
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

    modelType: "identity/me/wvmpOverview/wvmp-source-insight-card"
  }
}
