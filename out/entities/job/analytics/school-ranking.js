import Model from 'app/api/NotTerribleModel';
import MiniSchool from "app/models/entities/shared/mini-school";

export default class SchoolRanking extends Model {
  static schema = {
    /**
     * @property miniSchool
     * Mini school containing school information (e.g. name, id, logo).
     */
    miniSchool: MiniSchool,

    /**
     * @property count
     * Number of alumni employed by this company.
     */
    count: Model.INT,

    /**
     * @property rank
     * Ranking of the school based on the number employees from this school.
     */
    rank: Model.INT,

    /**
     * @property viewerFromSchool
     * Flag denoting whether or not the viewer is an alumni or student attending this school.
     */
    viewerFromSchool: Model.BOOL,

    modelType: "entities/job/analytics/school-ranking"
  }
}
