import Model from 'app/api/NotTerribleModel';
import MiniSchool from "app/models/entities/shared/mini-school";

export default class SearchHistorySchool extends Model {
  static schema = {
    /**
     * @property backendUrn
     * Backend Urn for school. Contains school id. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.SchoolUrn'),

    /**
     * @property school
     * Basic school information.
     */
    school: MiniSchool,

    modelType: "search/search-history-school"
  }
}
