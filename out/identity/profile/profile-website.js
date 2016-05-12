import Model from 'app/api/NotTerribleModel';
import StandardWebsite from "app/models/identity/profile/standard-website";
import CustomWebsite from "app/models/identity/profile/custom-website";

export default class ProfileWebsite extends Model {
  static schema = {
    /**
     * @property type
     * Union describing the type of website.
     */
    type: Model.oneOf(StandardWebsite, CustomWebsite),

    /**
     * @property url
     * Url target for that website.
     */
    url: Model.foreignUrn('com.linkedin.common.Url'),

    modelType: "identity/profile/profile-website"
  }
}
