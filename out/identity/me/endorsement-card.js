import Model from 'app/api/NotTerribleModel';
import ActorMiniProfile from "app/models/identity/me/actor-mini-profile";
import Endorsement from "app/models/identity/me/endorsement";
import Insight from "app/models/identity/me/insight";

export default class EndorsementCard extends Model {
  static schema = {
    /**
     * @property publishedAt
     * The timestamp in milliseconds of when this endorsement happened.
     */
    publishedAt: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property endorser
     * Endorser's basic profile with distance information.
     */
    endorser: ActorMiniProfile,

    /**
     * @property endorsements
     * The endorsements that are contained in this notification.
     */
    endorsements: Endorsement,

    /**
     * @property numEndorsements
     * Total number of endorsements in this card.
     */
    numEndorsements: Model.INT,

    /**
     * @property insight
     * Insight with this endorsement.
     */
    insight: Insight,

    /**
     * @property read
     * Whether this card has been read by the member.
     */
    read: Model.BOOL,

    modelType: "identity/me/endorsement-card"
  }
}
