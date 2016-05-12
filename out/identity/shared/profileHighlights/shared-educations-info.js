import Model from 'app/api/NotTerribleModel';
import SharedEducationInfo from "app/models/identity/shared/profileHighlights/shared-education-info";

export default class SharedEducationsInfo extends Model {
  static schema = {
    /**
     * @property sharedEducations
     * A list of shared educations between the viewer and viewee
     */
    sharedEducations: SharedEducationInfo,

    modelType: "identity/shared/profileHighlights/shared-educations-info"
  }
}
