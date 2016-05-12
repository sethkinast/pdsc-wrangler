import Model from 'app/api/NotTerribleModel';
import MiniCompany from "app/models/entities/shared/mini-company";
import FollowingInfo from "app/models/common/following-info";
import AnnotatedText from "app/models/feed/shared/annotated-text";

export default class RecommendedCompany extends Model {
  static schema = {
    /**
     * @property miniCompany
     * Mini profile for a company
     */
    miniCompany: MiniCompany,

    /**
     * @property followingInfo
     * Indicates whether the member is already following this company
     */
    followingInfo: FollowingInfo,

    /**
     * @property reason
     * Editorial reason for recommending this company
     */
    reason: AnnotatedText,

    modelType: "feed/packageRecommendations/recommended-company"
  }
}
