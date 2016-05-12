import Model from 'app/api/NotTerribleModel';
import ShareUpdateContent from "app/models/feed/share-update-content";
import ControlActions from "app/models/feed/control-actions";
import ChannelActor from "app/models/feed/channel-actor";
import AnnotatedText from "app/models/feed/shared/annotated-text";
import Update from "app/models/feed/update";
import TrackingData from "app/models/feed/tracking-data";

export default class ChannelUpdate extends Model {
  static schema = Object.assign({}, ShareUpdateContent.schema, ControlActions.schema, {
    /**
     * @property urn
     * backend Urn for this update.
     */
    urn: Model.STRING,

    /**
     * @property actor
     * Channel that shared this update.
     */
    actor: ChannelActor,

    /**
     * @property header
     * Header to display for this update (eg. Trending in X)
     */
    header: AnnotatedText,

    /**
     * @property contentPool
     * Content pool this article belongs to from Pulse.
     */
    contentPool: AnnotatedText,

    /**
     * @property articleUpdate
     * Update types supported for a Channel Update
     */
    articleUpdate: Update,

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

    modelType: "feed/channel-update"
  })
}
