import Model from 'app/api/NotTerribleModel';
import DiscussionUpdateContent from "app/models/feed/discussion-update-content";
import ControlActions from "app/models/feed/control-actions";
import DiscussionSource from "app/models/feed/discussion-source";
import SocialActor from "app/models/feed/social-actor";
import MiniGroup from "app/models/entities/shared/mini-group";
import TrackingData from "app/models/feed/tracking-data";

export default class DiscussionUpdate extends Model {
  static schema = Object.assign({}, DiscussionUpdateContent.schema, ControlActions.schema, {
    /**
     * @property id
     * ***DEPRECATED*** The type-specific id of the entity.
     */
    id: Model.STRING,

    /**
     * @property urn
     * Backend URN for this update.
     */
    urn: Model.STRING,

    /**
     * @property discussionSource
     * Where the discussion came from
     */
    discussionSource: DiscussionSource,

    /**
     * @property actor
     * The actor of the discussion update.
     */
    actor: SocialActor,

    /**
     * @property miniGroup
     * Mini Group to which this discussion update belongs.
     */
    miniGroup: MiniGroup,

    /**
     * @property featured
     * Whether this discussion is a featured discussion.
     */
    featured: Model.BOOL,

    /**
     * @property active
     * Whether this discussion is active and not closed.
     */
    active: Model.BOOL,

    /**
     * @property createdTime
     * The created time of the update.
     */
    createdTime: Model.foreignUrn('com.linkedin.common.Time'),

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

    modelType: "feed/discussion-update"
  })
}
