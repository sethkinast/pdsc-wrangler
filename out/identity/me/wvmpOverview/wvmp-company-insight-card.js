import Model from 'app/api/NotTerribleModel';
import Insight from "app/models/identity/me/insight";
import MiniCompany from "app/models/entities/shared/mini-company";
import Card from "app/models/identity/me/card";
import WvmpMetadata from "app/models/identity/me/wvmp-metadata";

export default class WvmpCompanyInsightCard extends Model {
  static schema = {
    /**
     * @property numViews
     * Profile view count over the total time.
     */
    numViews: Model.INT,

    /**
     * @property insight
     * Insight about the company where viewers work at.
     */
    insight: Insight,

    /**
     * @property miniCompany
     * Mini Company info for the company where viewers work.
     */
    miniCompany: MiniCompany,

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

    modelType: "identity/me/wvmpOverview/wvmp-company-insight-card"
  }
}
