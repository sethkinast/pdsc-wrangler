import Model from 'app/api/NotTerribleModel';
import SocialActor from "app/models/feed/social-actor";
import PersonObject from "app/models/feed/person-object";

export default class ConnectionUpdate extends Model {
  static schema = {
    /**
     * @property actor
     * The actor of the connection update, the member to which the logged-in member is guaranteed to be connected or following.
     */
    actor: SocialActor,

    /**
     * @property newConnection
     * The person the actor recently connected with
     */
    newConnection: PersonObject,

    modelType: "feed/connection-update"
  }
}
