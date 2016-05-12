import Model from 'app/api/NotTerribleModel';
import Base64EncodedTrackingId from "app/models/common/base64-encoded-tracking-id";
import SponsoredMetadata from "app/models/feed/sponsored-metadata";

export default class TrackingData extends Model {
  static schema = {
    /**
     * @property trackingId
     * Unique tracking code for this update.
     */
    trackingId: Base64EncodedTrackingId,

    /**
     * @property sponsoredTracking
     * Sponsored tracking metadata, required to accompany this entity in downstream applications.
     */
    sponsoredTracking: SponsoredMetadata,

    /**
     * @property requestId
     * unique requestId provided by uscp federator during a feed call.
     */
    requestId: Model.STRING,

    modelType: "feed/tracking-data"
  }
}
