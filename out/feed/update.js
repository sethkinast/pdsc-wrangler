import Model from 'app/api/NotTerribleModel';
import UpdateSocialContext from "app/models/feed/update-social-context";
import AggregatedFollowRecommendationUpdate from "app/models/feed/aggregated-follow-recommendation-update";
import AggregatedConnectionUpdate from "app/models/feed/aggregated-connection-update";
import AggregatedJymbiiUpdate from "app/models/feed/aggregated-jymbii-update";
import AggregatedPymkUpdate from "app/models/feed/aggregated-pymk-update";
import AggregatedShareContentUpdate from "app/models/feed/aggregated-share-content-update";
import ArticleUpdate from "app/models/feed/article-update";
import ChannelUpdate from "app/models/feed/channel-update";
import ConnectionUpdate from "app/models/feed/connection-update";
import CrossPromoUpdate from "app/models/feed/cross-promo-update";
import DiscussionUpdate from "app/models/feed/discussion-update";
import FollowRecommendationUpdate from "app/models/feed/follow-recommendation-update";
import JymbiiUpdate from "app/models/feed/shared/jymbii-update";
import MentionedInNewsUpdate from "app/models/feed/mentioned-in-news-update";
import PropUpdate from "app/models/feed/prop-update";
import PymkUpdate from "app/models/feed/pymk-update";
import Reshare from "app/models/feed/reshare";
import ShareUpdate from "app/models/feed/share-update";
import ViralUpdate from "app/models/feed/viral-update";
import FeedUpdateUrn from "app/models/common/feed-update-urn";
import TrackingData from "app/models/feed/tracking-data";
import Like from "app/models/feed/like";
import Comment from "app/models/feed/comment";

export default class Update extends Model {
  static schema = Object.assign({}, UpdateSocialContext.schema, {
    /**
     * @property value
     * A union of all possible updates.
     */
    value: Model.oneOf(AggregatedFollowRecommendationUpdate, AggregatedConnectionUpdate, AggregatedJymbiiUpdate, AggregatedPymkUpdate, AggregatedShareContentUpdate, ArticleUpdate, ChannelUpdate, ConnectionUpdate, CrossPromoUpdate, DiscussionUpdate, FollowRecommendationUpdate, JymbiiUpdate, MentionedInNewsUpdate, PropUpdate, PymkUpdate, Reshare, ShareUpdate, ViralUpdate),

    /**
     * @property id
     * ***DEPRECATED*** The type-specific id of the entity.
     */
    id: Model.STRING,

    /**
     * @property urn
     * backend URN for this update.
     */
    urn: Model.STRING,

    /**
     * @property entityUrn
     * Voyager specific URN for this update.
     */
    entityUrn: FeedUpdateUrn,

    /**
     * @property isSponsored
     * is this update a sponsored update.
     */
    isSponsored: Model.BOOL,

    /**
     * @property tracking
     * Tracking information to be used for sending Feed Tracking events : FeedImpressionEvent, FeedActionEvent. Is not set for aggregated updates.
     */
    tracking: TrackingData,

    /**
     * @property trackingId
     * ***DEPRECATED*** a unique id which represents this particular instance of an entity, created when the entity is materialized
     */
    trackingId: Model.STRING,

    /**
     * @property highlightedLikes
     * Highlighted likes for this update.
     */
    highlightedLikes: Like,

    /**
     * @property highlightedComments
     * Highlighted comments for this update.
     */
    highlightedComments: Comment,

    /**
     * @property permalink
     * Permalink to the desktop view of this update - used for external sharing
     */
    permalink: Model.foreignUrn('com.linkedin.common.Url'),

    modelType: "feed/update"
  })
}
