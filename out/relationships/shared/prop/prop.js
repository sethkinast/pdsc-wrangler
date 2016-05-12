import Model from 'app/api/NotTerribleModel';
import RelPropUrn from "app/models/common/rel-prop-urn";
import PropType from "app/models/relationships/shared/prop/prop-type";
import PropAction from "app/models/relationships/shared/prop/prop-action";
import MiniProfile from "app/models/identity/shared/mini-profile";
import PropDetail from "app/models/relationships/shared/prop/prop-detail";
import SocialActivityCounts from "app/models/feed/shared/social-activity-counts";

export default class Prop extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier of this prop
     */
    entityUrn: RelPropUrn,

    /**
     * @property trackingId
     * a unique id which represents this particular instance of an entity, created when the entity is materialized
     */
    trackingId: Model.STRING,

    /**
     * @property title
     * Title of the prop
     */
    title: Model.STRING,

    /**
     * @property displayMessages
     * Display messages for the prop
     */
    displayMessages: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    /**
     * @property propType
     * Prop type
     */
    propType: PropType,

    /**
     * @property actions
     * List of actions that user may take on the prop
     */
    actions: PropAction,

    /**
     * @property miniProfile
     * Mini profile data about the member. For calendar sync prop and invitation/aggregated_invitations prop, it will be null
     */
    miniProfile: MiniProfile,

    /**
     * @property seen
     * Indicates whether the viewer has seen this prop before or not
     */
    seen: Model.BOOL,

    /**
     * @property details
     * Additional details of prop
     */
    details: PropDetail,

    /**
     * @property socialActivityInfo
     * Counts of total comments, likes on this update, and is this update liked by the viewer. Applied for activities.
     */
    socialActivityInfo: SocialActivityCounts,

    modelType: "relationships/shared/prop/prop"
  }
}
