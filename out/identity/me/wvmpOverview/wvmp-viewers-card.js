import Model from 'app/api/NotTerribleModel';
import WvmpInsightCard from "app/models/identity/me/wvmpOverview/wvmp-insight-card";

export default class WvmpViewersCard extends Model {
  static schema = {
    /**
     * @property insightCards
     * Collection of all insight cards used in the WVMP viewers card.
     */
    insightCards: WvmpInsightCard,

    modelType: "identity/me/wvmpOverview/wvmp-viewers-card"
  }
}
