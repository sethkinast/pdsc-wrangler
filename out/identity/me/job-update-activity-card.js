import Model from 'app/api/NotTerribleModel';
import ActorMiniProfile from "app/models/identity/me/actor-mini-profile";
import SocialActivityCounts from "app/models/feed/shared/social-activity-counts";

export default class JobUpdateActivityCard extends Model {
  static schema = {
    /**
     * @property publishedAt
     * The timestamp in milliseconds since epoch of when this notification happened.
     */
    publishedAt: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property entity
     * URN of the job update associated with this card.
     */
    entity: Model.STRING,

    /**
     * @property headline
     * Localized headline of the card.
     */
    headline: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    /**
     * @property headlineV2
     * A second variant of the localized headline of the card. Please fallback to "headline" when this is empty.
     */
    headlineV2: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    /**
     * @property text
     * Localized description of the underlying job update.
     */
    text: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    /**
     * @property comment
     * Comment to display on the card.
     */
    comment: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    /**
     * @property commentUrn
     * URN of the comment that is displayed.
     */
    commentUrn: Model.STRING,

    /**
     * @property actor
     * Profile of a commenter or liker to highlight.
     */
    actor: ActorMiniProfile,

    /**
     * @property totalSocialActivityCounts
     * Counts of total comments and likes on the underlying job update.
     */
    totalSocialActivityCounts: SocialActivityCounts,

    /**
     * @property read
     * Whether this card has been read by the member.
     */
    read: Model.BOOL,

    modelType: "identity/me/job-update-activity-card"
  }
}
