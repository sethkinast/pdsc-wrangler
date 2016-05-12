import Model from 'app/api/NotTerribleModel';
import ShareArticle from "app/models/feed/share-article";
import ShareVideo from "app/models/feed/share-video";

export default class ArticleUpdate extends Model {
  static schema = {
    /**
     * @property content
     * Union of possible shared content of the update.
     */
    content: Model.oneOf(ShareArticle, ShareVideo),

    /**
     * @property createdTime
     * The created time of the update.
     */
    createdTime: Model.foreignUrn('com.linkedin.common.Time'),

    modelType: "feed/article-update"
  }
}
