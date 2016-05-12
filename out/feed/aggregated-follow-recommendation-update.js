import Model from 'app/api/NotTerribleModel';
import ControlActions from "app/models/feed/control-actions";
import Update from "app/models/feed/update";

export default class AggregatedFollowRecommendationUpdate extends Model {
  static schema = Object.assign({}, ControlActions.schema, {
    /**
     * @property followRecommendationUpdates
     * The list will only ever contain FollowRecommendationUpdate wrapped by Update.
     */
    followRecommendationUpdates: Update,

    /**
     * @property recommendationText
     * Editorial reason for recommending this entity
     */
    recommendationText: Model.foreignUrn('com.linkedin.pemberly.text.AttributedText'),

    modelType: "feed/aggregated-follow-recommendation-update"
  })
}
