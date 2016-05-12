import Model from 'app/api/NotTerribleModel';
import EndorsementStatus from "app/models/identity/me/endorsement-status";

export default class Endorsement extends Model {
  static schema = {
    /**
     * @property endorsementUrn
     * Urn of the endorsement.
     */
    endorsementUrn: Model.STRING,

    /**
     * @property skill
     * Skill that has been endorsed.
     */
    skill: Model.STRING,

    /**
     * @property status
     * The current status of the endorsement.
     */
    status: EndorsementStatus,

    modelType: "identity/me/endorsement"
  }
}
