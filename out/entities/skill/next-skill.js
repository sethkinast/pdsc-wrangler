import Model from 'app/api/NotTerribleModel';
import NextSkillUrn from "app/models/common/next-skill-urn";
import MiniSkill from "app/models/entities/shared/mini-skill";

export default class NextSkill extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this next skill.
     */
    entityUrn: NextSkillUrn,

    /**
     * @property miniSkill
     * Minimal set of information to display a skill, such as name.
     */
    miniSkill: MiniSkill,

    /**
     * @property memberCount
     * The number of members having this skill.
     */
    memberCount: Model.INT,

    modelType: "entities/skill/next-skill"
  }
}
