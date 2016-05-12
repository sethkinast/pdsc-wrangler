import Model from 'app/api/NotTerribleModel';
import ProfileHighlight from "app/models/identity/shared/profileHighlights/profile-highlight";
import NetworkHighlight from "app/models/identity/shared/networkHighlights/network-highlight";
import Base64EncodedTrackingId from "app/models/common/base64-encoded-tracking-id";

export default class Highlight extends Model {
  static schema = {
    /**
     * @property detail
     * More detailed information about the highlight
     */
    detail: Model.oneOf(ProfileHighlight, NetworkHighlight),

    /**
     * @property highlightUrn
     * Highlight Urn returned by Feed backend which is used to resolve the highlight.
     */
    highlightUrn: Model.STRING,

    /**
     * @property trackingId
     * Unique TrackingId for this highlight returned by Feed - used for relevance tracking.
     */
    trackingId: Base64EncodedTrackingId,

    modelType: "identity/shared/highlight"
  }
}
