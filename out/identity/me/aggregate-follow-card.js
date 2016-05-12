import Model from 'app/api/NotTerribleModel';
import ActorMiniProfile from "app/models/identity/me/actor-mini-profile";

export default class AggregateFollowCard extends Model {
  static schema = {
    /**
     * @property publishedAt
     * The timestamp in milliseconds of when the latest follow in this aggregation happened.
     */
    publishedAt: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property followers
     * Basic profiles with distance of the followers.
     */
    followers: ActorMiniProfile,

    /**
     * @property numFollowers
     * Number of followers in this aggregate card.
     */
    numFollowers: Model.INT,

    /**
     * @property read
     * Whether this card has been read by the member.
     */
    read: Model.BOOL,

    modelType: "identity/me/aggregate-follow-card"
  }
}
