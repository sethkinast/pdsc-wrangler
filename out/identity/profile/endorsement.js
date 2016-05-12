import Model from 'app/api/NotTerribleModel';
import EndorsementUrn from "app/models/common/endorsement-urn";
import EndorserMiniProfile from "app/models/identity/profile/endorser-mini-profile";

export default class Endorsement extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this endorsement
     */
    entityUrn: EndorsementUrn,

    /**
     * @property endorser
     * The profile of the endorser of this endorsement.
     */
    endorser: EndorserMiniProfile,

    /**
     * @property status
     * The status concerning the endorsement being displayed to the member.
     */
    status: Model.STRING,

    modelType: "identity/profile/endorsement"
  }
}
