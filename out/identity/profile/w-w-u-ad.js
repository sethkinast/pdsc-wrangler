import Model from 'app/api/NotTerribleModel';
import MiniCompany from "app/models/entities/shared/mini-company";

export default class WWUAd extends Model {
  static schema = {
    /**
     * @property company
     * The company to display on the WWU ad. When there isn't an ad to display, this will be missing.
     */
    company: MiniCompany,

    /**
     * @property internalClickTrackingUrls
     * List of urls used for internal(LinkedIn owned) click tracking
     */
    internalClickTrackingUrls: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property externalClickTrackingUrls
     * List of urls used for external (third-party non-Linkedin) click tracking
     */
    externalClickTrackingUrls: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property internalImpressionTrackingUrls
     * List of urls used for internal(LinkedIn owned) impression tracking
     */
    internalImpressionTrackingUrls: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property externalImpressionTrackingUrls
     * List of urls used for external impression tracking
     */
    externalImpressionTrackingUrls: Model.foreignUrn('com.linkedin.common.Url'),

    modelType: "identity/profile/w-w-u-ad"
  }
}
