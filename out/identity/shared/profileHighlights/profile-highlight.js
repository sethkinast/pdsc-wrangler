import Model from 'app/api/NotTerribleModel';
import SharedExperiencesInfo from "app/models/identity/shared/profileHighlights/shared-experiences-info";
import SharedEducationsInfo from "app/models/identity/shared/profileHighlights/shared-educations-info";
import SharedLocationInfo from "app/models/identity/shared/profileHighlights/shared-location-info";
import SharedConnectionsInfo from "app/models/identity/shared/profileHighlights/shared-connections-info";
import SharedGroupsInfo from "app/models/identity/shared/profileHighlights/shared-groups-info";

export default class ProfileHighlight extends Model {
  static schema = {
    /**
     * @property detail
     * More detailed information about the highlight
     */
    detail: Model.oneOf(SharedExperiencesInfo, SharedEducationsInfo, SharedLocationInfo, SharedConnectionsInfo, SharedGroupsInfo),

    modelType: "identity/shared/profileHighlights/profile-highlight"
  }
}
