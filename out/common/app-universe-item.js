import Model from 'app/api/NotTerribleModel';

export default class AppUniverseItem extends Model {
  static schema = {
    /**
     * @property appName
     * The name of the app
     */
    appName: Model.STRING,

    /**
     * @property tagline
     * A short sentence to describe and promote the app
     */
    tagline: Model.STRING,

    /**
     * @property storeUrl
     * The app store URL for this app
     */
    storeUrl: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property appUrl
     * The app URL for this app (i.e. the URL used for deeplinking)
     */
    appUrl: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property iconUrl
     * The URL of the app icon
     */
    iconUrl: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property trackingCode
     * The tracking code for this app
     */
    trackingCode: Model.STRING,

    /**
     * @property legoTrackingToken
     * The lego tracking token associated with this app widget
     */
    legoTrackingToken: Model.STRING,

    modelType: "common/app-universe-item"
  }
}
