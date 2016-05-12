import Model from 'app/api/NotTerribleModel';
import MiniSkillUrn from "app/models/common/mini-skill-urn";

export default class CoreSkill extends Model {
  static schema = {
    /**
     * @property standardizedSkillUrn
     * URN for this skill when it's standardized.
     */
    standardizedSkillUrn: MiniSkillUrn,

    /**
     * @property name
     * Name of the skill.
     */
    name: Model.STRING,

    modelType: "identity/profile/core-skill"
  }
}
