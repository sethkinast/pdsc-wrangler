import Model from 'app/api/NotTerribleModel';
import SocialDetail from "app/models/feed/social-detail";
import AnnotatedText from "app/models/feed/shared/annotated-text";

export default class UpdateSocialContext extends Model {
  static schema = {
    /**
     * @property socialDetail
     * The social detail of the update.
     */
    socialDetail: SocialDetail,

    /**
     * @property insight
     * The insight of the update.
     */
    insight: AnnotatedText,

    modelType: "feed/update-social-context"
  }
}
