import Model from 'app/api/NotTerribleModel';
import ControlActions from "app/models/feed/control-actions";
import AnnotatedText from "app/models/feed/shared/annotated-text";
import SocialActor from "app/models/feed/social-actor";
import PropType from "app/models/relationships/shared/prop/prop-type";

export default class PropUpdate extends Model {
  static schema = Object.assign({}, ControlActions.schema, {
    /**
     * @property header
     * Header to display for this update on feed (eg. Congratulate X on Y)
     */
    header: AnnotatedText,

    /**
     * @property actor
     * The actor of the prop update.
     */
    actor: SocialActor,

    /**
     * @property text
     * Main message for the update.
     */
    text: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    /**
     * @property subtext
     * Secondary message for the update.
     */
    subtext: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    /**
     * @property type
     * Type of the prop update.
     */
    type: PropType,

    modelType: "feed/prop-update"
  })
}
