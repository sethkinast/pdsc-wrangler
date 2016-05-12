import Model from 'app/api/NotTerribleModel';
import MemberActor from "app/models/feed/member-actor";
import InfluencerActor from "app/models/feed/influencer-actor";
import SharedConnectionsInfo from "app/models/identity/shared/profileHighlights/shared-connections-info";

export default class PersonObject extends Model {
  static schema = {
    /**
     * @property actor
     * A person on LinkedIn (member of influencer).
     */
    actor: Model.oneOf(MemberActor, InfluencerActor),

    /**
     * @property mutualConnections
     * Number of mutual connections (always returned unless backend call fails to resolve)
     */
    mutualConnections: SharedConnectionsInfo,

    modelType: "feed/person-object"
  }
}
