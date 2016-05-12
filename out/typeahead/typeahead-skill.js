import Model from 'app/api/NotTerribleModel';
import MiniSkill from "app/models/entities/shared/mini-skill";

export default class TypeaheadSkill extends Model {
  static schema = {
    /**
     * @property skill
     * Basic skill information.
     */
    skill: MiniSkill,

    /**
     * @property backendUrn
     * Backend Urn for the skill. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.SkillUrn'),

    modelType: "typeahead/typeahead-skill"
  }
}
