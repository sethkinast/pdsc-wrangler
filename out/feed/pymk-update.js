import Model from 'app/api/NotTerribleModel';
import PersonObject from "app/models/feed/person-object";

export default class PymkUpdate extends Model {
  static schema = {
    /**
     * @property actor
     * The member that the user may know and want to connect with
     */
    actor: PersonObject,

    modelType: "feed/pymk-update"
  }
}
