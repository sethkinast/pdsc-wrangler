import Model from 'app/api/NotTerribleModel';
import ShareText from "app/models/feed/share-text";
import ShareArticle from "app/models/feed/share-article";
import ShareDocument from "app/models/feed/share-document";
import ShareImage from "app/models/feed/share-image";
import ShareJob from "app/models/feed/share-job";
import ShareVideo from "app/models/feed/share-video";

export default class ShareUpdateContent extends Model {
  static schema = {
    /**
     * @property content
     * Union of possible shared content of the update. Ideally, we should reuse ShareType, but pegasus doesn't allow us to do so.
     */
    content: Model.oneOf(ShareText, ShareArticle, ShareDocument, ShareImage, ShareJob, ShareVideo),

    modelType: "feed/share-update-content"
  }
}
