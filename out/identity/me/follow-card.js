import Model from 'app/api/NotTerribleModel';
import ActorMiniProfile from "app/models/identity/me/actor-mini-profile";
import Occupation from "app/models/identity/me/occupation";

export default class FollowCard extends Model {
  static schema = {
    /**
     * @property publishedAt
     * Milliseconds since the epoch when this follow happened.
     */
    publishedAt: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property follower
     * Follower's profile information.
     */
    follower: ActorMiniProfile,

    /**
     * @property read
     * Whether this card has been read by the member.
     */
    read: Model.BOOL,

    /**
     * @property occupation
     * Follower's occupation.
     */
    occupation: Occupation,

    modelType: "identity/me/follow-card"
  }
}
