import Model from 'app/api/NotTerribleModel';
import DiscussionBase from "app/models/feed/discussion-base";
import DiscussionWithArticle from "app/models/feed/discussion-with-article";
import DiscussionWithImage from "app/models/feed/discussion-with-image";

export default class DiscussionUpdateContent extends Model {
  static schema = {
    /**
     * @property content
     * Union of possible discussion content of the update.
     */
    content: Model.oneOf(DiscussionBase, DiscussionWithArticle, DiscussionWithImage),

    modelType: "feed/discussion-update-content"
  }
}
