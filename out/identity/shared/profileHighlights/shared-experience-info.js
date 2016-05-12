import Model from 'app/api/NotTerribleModel';
import MiniCompany from "app/models/entities/shared/mini-company";
import OverlapInfo from "app/models/identity/shared/profileHighlights/overlap-info";

export default class SharedExperienceInfo extends Model {
  static schema = {
    /**
     * @property company
     * Basic information about the shared company
     */
    company: MiniCompany,

    /**
     * @property overlapInfo
     * Information about the overlap (if any) between the viewer and viewee at this school
     */
    overlapInfo: OverlapInfo,

    modelType: "identity/shared/profileHighlights/shared-experience-info"
  }
}
