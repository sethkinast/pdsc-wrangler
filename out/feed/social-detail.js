import Model from 'app/api/NotTerribleModel';
import SocialDetailUrn from "app/models/common/social-detail-urn";
import SocialActivityCounts from "app/models/feed/shared/social-activity-counts";
import Likes from "app/models/feed/likes";
import Comments from "app/models/feed/comments";

export default class SocialDetail extends Model {
  static schema = {
    /**
     * @property urn
     * Thread URN for this social gestures collection.
     */
    urn: Model.STRING,

    /**
     * @property entityUrn
     * Voyager specific URN for this social detail.
     */
    entityUrn: SocialDetailUrn,

    /**
     * @property totalSocialActivityCounts
     * Counts of total comments and likes on this update.
     */
    totalSocialActivityCounts: SocialActivityCounts,

    /**
     * @property totalShares
     * Total share count.
     */
    totalShares: Model.INT,

    /**
     * @property liked
     * Is the update liked by viewer.
     */
    liked: Model.BOOL,

    /**
     * @property likes
     * The likes resource for fetching likes. This should include enough data for rendering the first page.
     */
    likes: Likes,

    /**
     * @property comments
     * The comments resource for fetching likes. This should include enough data for rendering the first page.
     */
    comments: Comments,

    /**
     * @property threadId
     * The id of the thread that the likes/comments/shares belong to
     */
    threadId: Model.STRING,

    modelType: "feed/social-detail"
  }
}
