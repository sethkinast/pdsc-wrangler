import Model from 'app/api/NotTerribleModel';
import Skill from "app/models/identity/profile/skill";

export default class NormEndorsement extends Model {
  static schema = {
    /**
     * @property skill
     * The skill being endorsed.
     */
    skill: Skill,

    /**
     * @property endorserUrn
     * The URN of the endorser of this endorsement.
     */
    endorserUrn: Model.STRING,

    /**
     * @property endorseeUrn
     * The URN of the endorsee of this endorsement.
     */
    endorseeUrn: Model.STRING,

    /**
     * @property status
     * The status concerning the endorsement being written back to downstream services.
     */
    status: Model.STRING,

    modelType: "identity/profile/norm-endorsement"
  }
}
