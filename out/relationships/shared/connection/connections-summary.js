import Model from 'app/api/NotTerribleModel';
import RelConnectionsSummaryUrn from "app/models/common/rel-connections-summary-urn";

export default class ConnectionsSummary extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier of this summary
     */
    entityUrn: RelConnectionsSummaryUrn,

    /**
     * @property numConnections
     * Number of connections
     */
    numConnections: Model.INT,

    modelType: "relationships/shared/connection/connections-summary"
  }
}
