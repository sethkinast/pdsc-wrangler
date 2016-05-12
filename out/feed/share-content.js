import Model from 'app/api/NotTerribleModel';
import AnnotatedText from "app/models/feed/shared/annotated-text";
import Image from "app/models/common/image";

export default class ShareContent extends Model {
  static schema = {
    /**
     * @property text
     * The share commentary
     */
    text: AnnotatedText,

    /**
     * @property image
     * Image of the document
     */
    image: Image,

    modelType: "feed/share-content"
  }
}
