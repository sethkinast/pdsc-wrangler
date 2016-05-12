import Model from 'app/api/NotTerribleModel';
import WebsiteCategory from "app/models/identity/profile/website-category";

export default class Website extends Model {
  static schema = {
    /**
     * @property category
     * Describes the type of website.
     */
    category: WebsiteCategory,

    /**
     * @property label
     * localized label user chose for a website in 'Other' category
     */
    label: Model.foreignUrn('com.linkedin.common.MultiLocaleString'),

    /**
     * @property localizedLabel
     * Localized version of field Label
     */
    localizedLabel: Model.STRING,

    /**
     * @property url
     * Localized URLs for a website
     */
    url: Model.foreignUrn('com.linkedin.common.MultiLocaleUrl'),

    /**
     * @property localizedUrl
     * Localized version of field Url
     */
    localizedUrl: Model.foreignUrn('com.linkedin.common.Url'),

    modelType: "identity/profile/website"
  }
}
