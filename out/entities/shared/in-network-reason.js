import Model from 'app/api/NotTerribleModel';
import EntitiesMiniProfile from "app/models/entities/shared/entities-mini-profile";

export default class InNetworkReason extends Model {
  static schema = {
    /**
     * @property totalNumberOfConnections
     * Total number of first degree connections at this company (or the company that posted this jobPosting).
     */
    totalNumberOfConnections: Model.INT,

    /**
     * @property topConnections
     * Up to ten members that are first degree connections at this company (or the company that posted this jobPosting), ordered by highest connection strength first.
     */
    topConnections: EntitiesMiniProfile,

    modelType: "entities/shared/in-network-reason"
  }
}
