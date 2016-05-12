import Model from 'app/api/NotTerribleModel';
import ActorMiniProfile from "app/models/identity/me/actor-mini-profile";
import SocialActivityCounts from "app/models/feed/shared/social-activity-counts";
import Image from "app/models/common/image";
import MiniGroup from "app/models/entities/shared/mini-group";

export default class SocialActivityCard extends Model {
  static schema = {
    /**
     * @property publishedAt
     * The timestamp in milliseconds since epoch of when this notification happened.
     */
    publishedAt: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property entity
     * URN of the share or post associated with this card.
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
     * @property actor
     * Profile of a commenter, liker, or mentioner to highlight.
     */
    actor: ActorMiniProfile,

    /**
     * @property totalSocialActivityCounts
     * Counts of total comments and likes on the underlying post or share.
     */
    totalSocialActivityCounts: SocialActivityCounts,

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
     * @property text
     * Text of the underlying share.
     */
    text: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    /**
     * @property image
     * Image attached to the post or the share.
     */
    image: Image,

    /**
     * @property title
     * Title describing the post or the share.
     */
    title: Model.STRING,

    /**
     * @property url
     * An external URL of the post or the share.
     */
    url: Model.foreignUrn('com.linkedin.common.Url'),

    /**
     * @property read
     * Whether this card has been read by the member.
     */
    read: Model.BOOL,

    /**
     * @property group
     * Minimal set of information including group id, name, and logo.
     */
    group: MiniGroup,

    /**
     * @property groupDiscussionUrl
     * FIXIT: this is a temporary field used by Voyager web as the click target for group discussion notification. REMOVE this once the group discussion detail page is ready on Voyager web
     */
    groupDiscussionUrl: Model.foreignUrn('com.linkedin.common.Url'),

    modelType: "identity/me/social-activity-card"
  }
}
