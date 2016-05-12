import Model from 'app/api/NotTerribleModel';
import MiniSkill from "app/models/entities/shared/mini-skill";

export default class TopSkill extends Model {
  static schema = {
    /**
     * @property miniSkill
     * Mini skill containing skill information (e.g. name, id).
     */
    miniSkill: MiniSkill,

    /**
     * @property count
     * Number of applicants who have this skill.
     */
    count: Model.INT,

    /**
     * @property sharedSkill
     * Flag denoting whether or not the viewer also has this skill.
     */
    sharedSkill: Model.BOOL,

    modelType: "entities/job/analytics/top-skill"
  }
}
