import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";
import FollowingInfo from "app/models/common/following-info";
import AnnotatedText from "app/models/feed/shared/annotated-text";

export default class RecommendedMember extends Model {
  static schema = {
    /**
     * @property miniProfile
     * Mini profile for this member
     */
    miniProfile: MiniProfile,

    /**
     * @property influencer
     * A boolean flag indicating if this member is an influencer
     */
    influencer: Model.BOOL,

    /**
     * @property followingInfo
     * Indicates whether the member is already following this member
     */
    followingInfo: FollowingInfo,

    /**
     * @property reason
     * Editorial reason for recommending this member
     */
    reason: AnnotatedText,

    modelType: "feed/packageRecommendations/recommended-member"
  }
}
