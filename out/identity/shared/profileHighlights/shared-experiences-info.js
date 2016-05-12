import Model from 'app/api/NotTerribleModel';
import SharedExperienceInfo from "app/models/identity/shared/profileHighlights/shared-experience-info";

export default class SharedExperiencesInfo extends Model {
  static schema = {
    /**
     * @property sharedExperiences
     * A list of shared experiences between the viewer and viewee
     */
    sharedExperiences: SharedExperienceInfo,

    modelType: "identity/shared/profileHighlights/shared-experiences-info"
  }
}
