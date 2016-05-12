import Model from 'app/api/NotTerribleModel';
import CommonShareFields from "app/models/feed/common-share-fields";
import ControlActions from "app/models/feed/control-actions";
import AnnotatedText from "app/models/feed/shared/annotated-text";
import Update from "app/models/feed/update";
import SocialActor from "app/models/feed/social-actor";
import TrackingData from "app/models/feed/tracking-data";

export default class Reshare extends Model {
  static schema = Object.assign({}, CommonShareFields.schema, ControlActions.schema, {
    /**
     * @property urn
     * Backend URN for this update.
     */
    urn: Model.STRING,

    /**
     * @property text
     * The share commentary
     */
    text: AnnotatedText,

    /**
     * @property originalUpdate
     * the share that was reshared.
     */
    originalUpdate: Update,

    /**
     * @property actor
     * The resharer of the update.
     */
    actor: SocialActor,

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

    modelType: "feed/reshare"
  })
}
