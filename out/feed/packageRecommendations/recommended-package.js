import Model from 'app/api/NotTerribleModel';
import RecommendationType from "app/models/feed/packageRecommendations/recommendation-type";
import AnnotatedText from "app/models/feed/shared/annotated-text";
import RecommendedEntity from "app/models/feed/packageRecommendations/recommended-entity";

export default class RecommendedPackage extends Model {
  static schema = {
    /**
     * @property packageId
     * Id of a package used in tracking events to identify which packages user followed. Only exists for follow recommendations
     */
    packageId: Model.INT,

    /**
     * @property recommendationType
     * Type of the recommended package, follow or unfollow
     */
    recommendationType: RecommendationType,

    /**
     * @property reason
     * The reason for recommending this package. It exists in follow recommendations
     */
    reason: AnnotatedText,

    /**
     * @property secondaryReason
     * Secondary reason for recommending this package.
     */
    secondaryReason: AnnotatedText,

    /**
     * @property recommendedEntities
     * A list of recommended entities
     */
    recommendedEntities: RecommendedEntity,

    modelType: "feed/packageRecommendations/recommended-package"
  }
}
