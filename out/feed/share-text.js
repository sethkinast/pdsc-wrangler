import Model from 'app/api/NotTerribleModel';
import AnnotatedText from "app/models/feed/shared/annotated-text";

export default class ShareText extends Model {
  static schema = {
    /**
     * @property text
     * The shared text.
     */
    text: AnnotatedText,

    modelType: "feed/share-text"
  }
}
