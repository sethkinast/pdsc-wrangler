import Model from 'app/api/NotTerribleModel';
import AnnotatedText from "app/models/feed/shared/annotated-text";
import Image from "app/models/common/image";

export default class ShareImage extends Model {
  static schema = {
    /**
     * @property text
     * The share commentary
     */
    text: AnnotatedText,

    /**
     * @property image
     * Media Proxy'd image to be displayed on the feed.
     */
    image: Image,

    /**
     * @property originalImage
     * Original Image to be used for displaying in rich media viewer. Also MediaProxy's if possible.
     */
    originalImage: Image,

    /**
     * @property contentType
     * content type of the image (sharing backend needs this on create)
     */
    contentType: Model.STRING,

    /**
     * @property fileId
     * file id of the image (sharing backend needs this on create)
     */
    fileId: Model.STRING,

    modelType: "feed/share-image"
  }
}
