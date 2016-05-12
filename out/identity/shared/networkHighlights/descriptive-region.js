import Model from 'app/api/NotTerribleModel';
import EnrichedLocation from "app/models/common/enriched-location";
import HighlightsMiniProfile from "app/models/identity/shared/highlights-mini-profile";

export default class DescriptiveRegion extends Model {
  static schema = {
    /**
     * @property location
     * Brief information about the location.
     */
    location: EnrichedLocation,

    /**
     * @property locationName
     * The region name of the location.
     */
    locationName: Model.STRING,

    /**
     * @property numConnections
     * Number of connections who live in this location.
     */
    numConnections: Model.INT,

    /**
     * @property connections
     * A list of connections, upto a maximum of 10, who live in this location.
     */
    connections: HighlightsMiniProfile,

    modelType: "identity/shared/networkHighlights/descriptive-region"
  }
}
