import Model from 'app/api/NotTerribleModel';
import WvmpViewersCard from "app/models/../../wvmp-viewers-card";
import Base64EncodedTrackingId from "app/models/common/base64-encoded-tracking-id";
import WvmpCardUrn from "app/models/common/wvmp-card-urn";

export default class WvmpCard extends Model {
  static schema = {
    /**
     * @property value
     * The actual card, typed as a union of all the card types.
     */
    value: WvmpViewersCard,

    /**
     * @property trackingId
     * Unique tracking id for this instance of the card.
     */
    trackingId: Base64EncodedTrackingId,

    /**
     * @property entityUrn
     * Identifier for the card.
     */
    entityUrn: WvmpCardUrn,

    modelType: "identity/me/wvmpOverview/wvmp-card"
  }
}
