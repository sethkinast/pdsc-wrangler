import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class ConnectionsInCommonInsight extends Model {
  static schema = {
    /**
     * @property miniProfile
     * Mini profile data about the other member.
     */
    miniProfile: MiniProfile,

    /**
     * @property numConnectionsInCommon
     * How many mutual connections the member has with the other member.
     */
    numConnectionsInCommon: Model.INT,

    modelType: "identity/me/connections-in-common-insight"
  }
}
