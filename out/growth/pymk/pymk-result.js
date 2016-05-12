import Model from 'app/api/NotTerribleModel';
import Trackable from "app/models/common/trackable";
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class PymkResult extends Model {
  static schema = Object.assign({}, Trackable.schema, {
    /**
     * @property miniProfile
     * The mini profile of the member.
     */
    miniProfile: MiniProfile,

    modelType: "growth/pymk/pymk-result"
  })
}
