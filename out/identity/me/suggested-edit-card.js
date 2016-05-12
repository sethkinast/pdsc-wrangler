import Model from 'app/api/NotTerribleModel';
import Suggestion from "app/models/identity/guidededit/suggestion";

export default class SuggestedEditCard extends Model {
  static schema = {
    /**
     * @property publishedAt
     * The timestamp in milliseconds since epoch of when this notification happened.
     */
    publishedAt: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property read
     * Whether this card has been read by the member.
     */
    read: Model.BOOL,

    /**
     * @property suggestion
     * A suggestion provided by inferred profile
     */
    suggestion: Suggestion,

    modelType: "identity/me/suggested-edit-card"
  }
}
