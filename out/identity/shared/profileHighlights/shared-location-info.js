import Model from 'app/api/NotTerribleModel';
import EnrichedLocation from "app/models/common/enriched-location";

export default class SharedLocationInfo extends Model {
  static schema = {
    /**
     * @property location
     * Shared location between the viewer and viewee
     */
    location: EnrichedLocation,

    /**
     * @property locationName
     * Shared location name between the viewer and viewee
     */
    locationName: Model.STRING,

    modelType: "identity/shared/profileHighlights/shared-location-info"
  }
}
