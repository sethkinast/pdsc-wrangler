import Model from 'app/api/NotTerribleModel';
import RelConnectionUrn from "app/models/common/rel-connection-urn";
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class Connection extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier of this connection
     */
    entityUrn: RelConnectionUrn,

    /**
     * @property miniProfile
     * Mini profile data about a member.
     */
    miniProfile: MiniProfile,

    modelType: "relationships/shared/connection/connection"
  }
}
