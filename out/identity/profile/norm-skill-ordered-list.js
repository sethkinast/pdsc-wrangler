import Model from 'app/api/NotTerribleModel';
import NormSkill from "app/models/identity/profile/norm-skill";

export default class NormSkillOrderedList extends Model {
  static schema = {
    /**
     * @property normSkills
     * The array of all skills of a member.
     */
    normSkills: NormSkill,

    modelType: "identity/profile/norm-skill-ordered-list"
  }
}
