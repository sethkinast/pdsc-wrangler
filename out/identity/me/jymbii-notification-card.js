import Model from 'app/api/NotTerribleModel';
import EntitiesJobRecommendation from "app/models/entities/shared/entities-job-recommendation";

export default class JymbiiNotificationCard extends Model {
  static schema = {
    /**
     * @property publishedAt
     * The timestamp in milliseconds of when this notification was published.
     */
    publishedAt: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property jobsCount
     * Number of JYMBII job recommendations.
     */
    jobsCount: Model.INT,

    /**
     * @property jobRecommendations
     * List of JYMBII job recommendations.
     */
    jobRecommendations: EntitiesJobRecommendation,

    /**
     * @property read
     * Whether this card has been read by the member.
     */
    read: Model.BOOL,

    modelType: "identity/me/jymbii-notification-card"
  }
}
