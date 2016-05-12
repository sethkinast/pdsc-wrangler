import Model from 'app/api/NotTerribleModel';
import ProfileViewsByTimePanel from "app/models/../../profile-views-by-time-panel";

export default class Panel extends Model {
  static schema = {
    /**
     * @property value
     * The actual panel, typed as a union of all the panel types.
     */
    value: ProfileViewsByTimePanel,

    modelType: "identity/me/panel"
  }
}
