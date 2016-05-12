import Model from 'app/api/NotTerribleModel';
import EndorsedSkillUrn from "app/models/common/endorsed-skill-urn";
import Skill from "app/models/identity/profile/skill";
import Endorsement from "app/models/identity/profile/endorsement";

export default class EndorsedSkill extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this endorsed skill.
     */
    entityUrn: EndorsedSkillUrn,

    /**
     * @property skill
     * The skill being endorsed.
     */
    skill: Skill,

    /**
     * @property endorsementCount
     * The number of endorsements for the given skill.
     */
    endorsementCount: Model.INT,

    /**
     * @property endorsedByViewer
     * True if and only if the viewer endorsed the viewee for this skill.
     */
    endorsedByViewer: Model.BOOL,

    /**
     * @property endorsements
     * An array of endorsements given to the owner of this skill
     */
    endorsements: Endorsement,

    modelType: "identity/profile/endorsed-skill"
  }
}
