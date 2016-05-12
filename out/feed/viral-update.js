import Model from 'app/api/NotTerribleModel';
import ControlActions from "app/models/feed/control-actions";
import SocialActor from "app/models/feed/social-actor";
import Update from "app/models/feed/update";
import ViralLikeType from "app/models/feed/viral-like-type";
import ViralCommentType from "app/models/feed/viral-comment-type";
import ViralLikeOnCommentType from "app/models/feed/viral-like-on-comment-type";
import ViralCommentOnCommentType from "app/models/feed/viral-comment-on-comment-type";
import TrackingData from "app/models/feed/tracking-data";

export default class ViralUpdate extends Model {
  static schema = Object.assign({}, ControlActions.schema, {
    /**
     * @property urn
     * Backend URN for this update.
     */
    urn: Model.STRING,

    /**
     * @property actor
     * The actor of the viral update.
     */
    actor: SocialActor,

    /**
     * @property originalUpdate
     * The update on which the viral action occurred.
     */
    originalUpdate: Update,

    /**
     * @property insight
     * The insight of the update.
     */
    insight: Model.STRING,

    /**
     * @property header
     * Header to display for this update (eg. X commented on this)
     */
    header: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    /**
     * @property viralType
     * Type of viral update
     */
    viralType: Model.oneOf(ViralLikeType, ViralCommentType, ViralLikeOnCommentType, ViralCommentOnCommentType),

    /**
     * @property trackingId
     * ***DEPRECATED*** a unique id which represents this particular instance of an entity, created when the entity is materialized
     */
    trackingId: Model.STRING,

    /**
     * @property tracking
     * ***DEPRECATED*** Tracking information to be used for sending Feed Tracking events : FeedImpressionEvent, FeedActionEvent.
     */
    tracking: TrackingData,

    modelType: "feed/viral-update"
  })
}
