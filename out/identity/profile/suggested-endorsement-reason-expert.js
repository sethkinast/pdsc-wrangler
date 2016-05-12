import Model from 'app/api/NotTerribleModel';
import Highlight from "app/models/identity/shared/highlight";

export default class SuggestedEndorsementReasonExpert extends Model {
  static schema = {
    /**
     * @property highlight
     * Highlight about a viewed member's profile as related to the viewer.
     */
    highlight: Highlight,

    modelType: "identity/profile/suggested-endorsement-reason-expert"
  }
}
