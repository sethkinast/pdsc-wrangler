import Model from 'app/api/NotTerribleModel';
import RecommendationUrn from "app/models/common/recommendation-urn";
import MiniProfile from "app/models/identity/shared/mini-profile";
import RecommendationRelationship from "app/models/identity/profile/recommendation-relationship";
import RecommendationStatus from "app/models/identity/profile/recommendation-status";

export default class Recommendation extends Model {
  static schema = Object.assign({}, Model.foreignUrn(&#39;com.linkedin.common.ChangeTimeStamps&#39;).schema, {
    /**
     * @property entityUrn
     * Urn identifier for this recommendation.
     */
    entityUrn: RecommendationUrn,

    /**
     * @property recommender
     * Identity of the recommender.
     */
    recommender: MiniProfile,

    /**
     * @property recommenderEntity
     * Type of entity that is recommended for the recommender.
     */
    recommenderEntity: Model.STRING,

    /**
     * @property recommendee
     * Identity of the member who received the recommendation.
     */
    recommendee: MiniProfile,

    /**
     * @property recommendeeEntity
     * Type of entity that is recommended for the recommendee.
     */
    recommendeeEntity: Model.STRING,

    /**
     * @property relationship
     * Enum describing the relationship between the recommender and recommendee.
     */
    relationship: RecommendationRelationship,

    /**
     * @property status
     * Status of the recommendation. If the member is not viewing himself this status should always be visible.
     */
    status: RecommendationStatus,

    /**
     * @property recommendationText
     * Content of the recommendation, as written by the recommender.
     */
    recommendationText: Model.STRING,

    modelType: "identity/profile/recommendation"
  })
}
