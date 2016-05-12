import Model from 'app/api/NotTerribleModel';
import IMProvider from "app/models/identity/profile/i-m-provider";

export default class IM extends Model {
  static schema = {
    /**
     * @property id
     * Id handle.
     */
    id: Model.STRING,

    /**
     * @property provider
     * Category of InstantMessaging.
     */
    provider: IMProvider,

    modelType: "identity/profile/i-m"
  }
}
