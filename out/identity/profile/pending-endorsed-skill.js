import Model from 'app/api/NotTerribleModel';
import CoreSkill from "app/models/identity/profile/core-skill";
import Endorsement from "app/models/identity/profile/endorsement";

export default class PendingEndorsedSkill extends Model {
  static schema = {
    /**
     * @property skill
     * The skill being endorsed.
     */
    skill: CoreSkill,

    /**
     * @property endorsementCount
     * The number of endorsements for the given skill.
     */
    endorsementCount: Model.INT,

    /**
     * @property endorsements
     * An array of endorsements given to the owner of this skill
     */
    endorsements: Endorsement,

    modelType: "identity/profile/pending-endorsed-skill"
  }
}
