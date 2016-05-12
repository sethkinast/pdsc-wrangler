import Model from 'app/api/NotTerribleModel';
import ExternalTracking from "app/models/feed/external-tracking";

export default class SponsoredMetadata extends Model {
  static schema = {
    /**
     * @property tscpUrl
     * trackingUrl for this update.
     */
    tscpUrl: Model.STRING,

    /**
     * @property displayFormat
     * display format provided by tscp.
     */
    displayFormat: Model.STRING,

    /**
     * @property externalTracking
     * External tracking for Ads.
     */
    externalTracking: ExternalTracking,

    /**
     * @property landingUrl
     * Landing page URL for this sponsored update if present.
     */
    landingUrl: Model.foreignUrn('com.linkedin.common.Url'),

    modelType: "feed/sponsored-metadata"
  }
}
