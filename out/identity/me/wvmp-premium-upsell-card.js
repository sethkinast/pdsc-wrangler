import Model from 'app/api/NotTerribleModel';
import WvmpPremiumUpsellType from "app/models/identity/me/wvmpOverview/wvmp-premium-upsell-type";

export default class WvmpPremiumUpsellCard extends Model {
  static schema = {
    /**
     * @property extraProfileViewers
     * How many extra profile viewer cards are available in WVMP list with premium subscription.
     */
    extraProfileViewers: Model.INT,

    /**
     * @property title
     * Title of premium upsell card.
     */
    title: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    /**
     * @property body
     * Text describing premium upsell card.
     */
    body: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    /**
     * @property cta
     * Text on the card's CTA button.
     */
    cta: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    /**
     * @property premiumUpsellType
     * Wvmp premium upsell type
     */
    premiumUpsellType: WvmpPremiumUpsellType,

    modelType: "identity/me/wvmp-premium-upsell-card"
  }
}
