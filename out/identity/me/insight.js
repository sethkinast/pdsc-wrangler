import Model from 'app/api/NotTerribleModel';
import NetworkHighlight from "app/models/identity/shared/networkHighlights/network-highlight";
import WvmpJymbiiInsight from "app/models/identity/me/wvmpOverview/wvmp-jymbii-insight";
import ConnectionsInCommonInsight from "app/models/identity/me/connections-in-common-insight";
import Base64EncodedTrackingId from "app/models/common/base64-encoded-tracking-id";

export default class Insight extends Model {
  static schema = {
    /**
     * @property value
     * Union for all insights used on the Me project.
     */
    value: Model.oneOf(NetworkHighlight, WvmpJymbiiInsight, ConnectionsInCommonInsight),

    /**
     * @property objectUrn
     * Pointer to the backend object underlying this insight.
     */
    objectUrn: Model.STRING,

    /**
     * @property trackingId
     * Unique tracking id for this instance of the insight.
     */
    trackingId: Base64EncodedTrackingId,

    modelType: "identity/me/insight"
  }
}
