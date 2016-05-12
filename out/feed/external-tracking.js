import Model from 'app/api/NotTerribleModel';

export default class ExternalTracking extends Model {
  static schema = {
    /**
     * @property impressionUrls
     * impression tracking urls for this update.
     */
    impressionUrls: Model.STRING,

    /**
     * @property clickUrls
     * click tracking urls for this sponsored update.
     */
    clickUrls: Model.STRING,

    modelType: "feed/external-tracking"
  }
}
