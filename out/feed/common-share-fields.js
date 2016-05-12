import Model from 'app/api/NotTerribleModel';
import ShareAudience from "app/models/feed/share-audience";

export default class CommonShareFields extends Model {
  static schema = {
    /**
     * @property shareAudience
     * The audience the share is visible to.
     */
    shareAudience: ShareAudience,

    modelType: "feed/common-share-fields"
  }
}
