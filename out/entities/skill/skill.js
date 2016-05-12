import Model from 'app/api/NotTerribleModel';
import MiniSkill from "app/models/entities/shared/mini-skill";

export default class Skill extends Model {
  static schema = {
    /**
     * @property miniSkill
     * Minimal set of information to display a skill, such as name.
     */
    miniSkill: MiniSkill,

    /**
     * @property description
     * Description about the skill.
     */
    description: Model.STRING,

    /**
     * @property memberCount
     * The number of members having this skill.
     */
    memberCount: Model.INT,

    /**
     * @property onProfile
     * This field indicates if this skill appears on the member's profile.
     */
    onProfile: Model.BOOL,

    modelType: "entities/skill/skill"
  }
}
