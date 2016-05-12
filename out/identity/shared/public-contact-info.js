import Model from 'app/api/NotTerribleModel';
import TwitterHandle from "app/models/identity/shared/twitter-handle";

export default class PublicContactInfo extends Model {
  static schema = {
    /**
     * @property twitterHandles
     * A list of Twitter handles
     */
    twitterHandles: TwitterHandle,

    modelType: "identity/shared/public-contact-info"
  }
}
