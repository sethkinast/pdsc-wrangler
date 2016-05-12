import Model from 'app/api/NotTerribleModel';
import MiniProfileWithDistance from "app/models/entities/shared/mini-profile-with-distance";
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class InCommonConnections extends Model {
  static schema = {
    /**
     * @property member
     * The basic information about the viewee.
     */
    member: MiniProfileWithDistance,

    /**
     * @property connections
     * A list of first-degree connections that the viewer and viewee share.
     */
    connections: MiniProfile,

    /**
     * @property total
     * The total number of connections in common.
     */
    total: Model.INT,

    modelType: "entities/incommon/in-common-connections"
  }
}
