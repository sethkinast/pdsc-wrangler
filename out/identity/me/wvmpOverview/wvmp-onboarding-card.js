import Model from 'app/api/NotTerribleModel';
import Card from "app/models/identity/me/card";
import WvmpMetadata from "app/models/identity/me/wvmp-metadata";

export default class WvmpOnboardingCard extends Model {
  static schema = {
    /**
     * @property legoTrackingToken
     * The Lego tracking token used to send Lego tracking events when this card is shown or interacted with.
     */
    legoTrackingToken: Model.STRING,

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

    modelType: "identity/me/wvmpOverview/wvmp-onboarding-card"
  }
}
