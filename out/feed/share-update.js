import Model from 'app/api/NotTerribleModel';
import ShareUpdateContent from "app/models/feed/share-update-content";
import CommonShareFields from "app/models/feed/common-share-fields";
import ControlActions from "app/models/feed/control-actions";
import SocialActor from "app/models/feed/social-actor";
import TrackingData from "app/models/feed/tracking-data";

export default class ShareUpdate extends Model {
  static schema = Object.assign({}, ShareUpdateContent.schema, CommonShareFields.schema, ControlActions.schema, {
    /**
     * @property urn
     * Backend URN for this update.
     */
    urn: Model.STRING,

    /**
     * @property actor
     * The actor of the share update.
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

    modelType: "feed/share-update"
  })
}
