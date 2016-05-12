import Model from 'app/api/NotTerribleModel';
import ControlActions from "app/models/feed/control-actions";
import RecommendedEntity from "app/models/feed/packageRecommendations/recommended-entity";

export default class FollowRecommendationUpdate extends Model {
  static schema = Object.assign({}, ControlActions.schema, {
    /**
     * @property recommendation
     * The entity we are recommending the viewer follow
     */
    recommendation: RecommendedEntity,

    /**
     * @property recommendationText
     * Editorial reason for recommending this entity
     */
    recommendationText: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    modelType: "feed/follow-recommendation-update"
  })
}
