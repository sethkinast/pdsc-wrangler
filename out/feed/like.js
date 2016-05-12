import Model from 'app/api/NotTerribleModel';
import LikeUrn from "app/models/common/like-urn";
import SocialActor from "app/models/feed/social-actor";
import Insight from "app/models/feed/insight";

export default class Like extends Model {
  static schema = {
    /**
     * @property urn
     * Backend URN for this like.
     */
    urn: Model.STRING,

    /**
     * @property entityUrn
     * Voyager specific URN for this like.
     */
    entityUrn: LikeUrn,

    /**
     * @property actor
     * The actor of the like.
     */
    actor: SocialActor,

    /**
     * @property insight
     * Insight of how this liker is connected to the viewer.
     */
    insight: Insight,

    /**
     * @property threadId
     * The id of the parent thread this like belongs to
     */
    threadId: Model.STRING,

    modelType: "feed/like"
  }
}
