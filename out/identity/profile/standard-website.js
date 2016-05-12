import Model from 'app/api/NotTerribleModel';
import WebsiteCategory from "app/models/identity/profile/website-category";

export default class StandardWebsite extends Model {
  static schema = {
    /**
     * @property category
     * Describes the type of website.
     */
    category: WebsiteCategory,

    modelType: "identity/profile/standard-website"
  }
}
