import Model from 'app/api/NotTerribleModel';
import MiniSchool from "app/models/entities/shared/mini-school";
import OverlapInfo from "app/models/identity/shared/profileHighlights/overlap-info";

export default class SharedEducationInfo extends Model {
  static schema = {
    /**
     * @property school
     * Information about the shared school
     */
    school: MiniSchool,

    /**
     * @property overlapInfo
     * Information about the overlap (if any) between the viewer and viewee at this school
     */
    overlapInfo: OverlapInfo,

    modelType: "identity/shared/profileHighlights/shared-education-info"
  }
}
