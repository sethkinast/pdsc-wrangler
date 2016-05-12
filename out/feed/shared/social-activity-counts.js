import Model from 'app/api/NotTerribleModel';
import SocialActivityCountsUrn from "app/models/common/social-activity-counts-urn";

export default class SocialActivityCounts extends Model {
  static schema = {
    /**
     * @property entityUrn
     * URN for these social activity counts.
     */
    entityUrn: SocialActivityCountsUrn,

    /**
     * @property numComments
     * Number of comments.
     */
    numComments: Model.INT,

    /**
     * @property numLikes
     * Number of likes.
     */
    numLikes: Model.INT,

    /**
     * @property liked
     * Is the update liked by viewer.
     */
    liked: Model.BOOL,

    modelType: "feed/shared/social-activity-counts"
  }
}
