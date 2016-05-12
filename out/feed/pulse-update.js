import Model from 'app/api/NotTerribleModel';
import ShareUpdateContent from "app/models/feed/share-update-content";
import UpdateSocialContext from "app/models/feed/update-social-context";
import ControlActions from "app/models/feed/control-actions";
import ChannelActor from "app/models/feed/channel-actor";
import AnnotatedText from "app/models/feed/shared/annotated-text";

export default class PulseUpdate extends Model {
  static schema = Object.assign({}, ShareUpdateContent.schema, UpdateSocialContext.schema, ControlActions.schema, {
    /**
     * @property urn
     * Backend URN for this update.
     */
    urn: Model.STRING,

    /**
     * @property actor
     * Channel that shared this update.
     */
    actor: ChannelActor,

    /**
     * @property header
     * Entire header to display for this update in the feed, ie Trending in X
     */
    header: AnnotatedText,

    /**
     * @property contentPool
     * Content pool this article belongs to from Pulse.
     */
    contentPool: AnnotatedText,

    /**
     * @property createdTime
     * The created time of the update.
     */
    createdTime: Model.foreignUrn('com.linkedin.common.Time'),

    modelType: "feed/pulse-update"
  })
}
