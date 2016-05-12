import Model from 'app/api/NotTerribleModel';
import CoreSkill from "app/models/identity/profile/core-skill";
import SkillUrn from "app/models/common/skill-urn";

export default class NormSkill extends Model {
  static schema = Object.assign({}, CoreSkill.schema, {
    /**
     * @property entityUrn
     * Identifier for this skill
     */
    entityUrn: SkillUrn,

    modelType: "identity/profile/norm-skill"
  })
}
