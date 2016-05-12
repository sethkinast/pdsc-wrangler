import Model from 'app/api/NotTerribleModel';
import SharedConnectionsInfoUrn from "app/models/common/shared-connections-info-urn";
import HighlightsMiniProfile from "app/models/identity/shared/highlights-mini-profile";

export default class SharedConnectionsInfo extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Entity urn representing the viewee.
     */
    entityUrn: SharedConnectionsInfoUrn,

    /**
     * @property sharedConnections
     * A list of shared connections between the viewer and viewee, upto a maximum of 20.
     */
    sharedConnections: HighlightsMiniProfile,

    /**
     * @property totalCount
     * Total number of shared connections between the viewer and viewee.
     */
    totalCount: Model.INT,

    modelType: "identity/shared/profileHighlights/shared-connections-info"
  }
}
