import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";
import SuggestedEndorsementReasonExpert from "app/models/identity/profile/suggested-endorsement-reason-expert";
import SuggestedEndorsementReasonStandard from "app/models/identity/profile/suggested-endorsement-reason-standard";

export default class SuggestedEndorsement extends Model {
  static schema = {
    /**
     * @property recipient
     * The recipient's MiniProfile
     */
    recipient: MiniProfile,

    /**
     * @property endorsedSkillName
     * Name of the endorsed skill
     */
    endorsedSkillName: Model.STRING,

    /**
     * @property signature
     * Signature for the suggestion. This is used for tracking the suggestion.
     */
    signature: Model.STRING,

    /**
     * @property reason
     * Reason why this SuggestedEndorsement is relevant.
     */
    reason: Model.oneOf(SuggestedEndorsementReasonExpert, SuggestedEndorsementReasonStandard),

    modelType: "identity/profile/suggested-endorsement"
  }
}
