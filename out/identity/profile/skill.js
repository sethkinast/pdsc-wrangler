import Model from 'app/api/NotTerribleModel';
import NormSkill from "app/models/identity/profile/norm-skill";
import MiniSkill from "app/models/entities/shared/mini-skill";

export default class Skill extends Model {
  static schema = Object.assign({}, NormSkill.schema, {
    /**
     * @property standardizedSkill
     * Standard Skill, if this skill has been chosen from the dropdown.
     */
    standardizedSkill: MiniSkill,

    modelType: "identity/profile/skill"
  })
}
