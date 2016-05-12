import Model from 'app/api/NotTerribleModel';
import AnnotatedText from "app/models/feed/shared/annotated-text";

export default class ViralCommentType extends Model {
  static schema = {
    /**
     * @property comment
     * The commentary.
     */
    comment: AnnotatedText,

    modelType: "feed/viral-comment-type"
  }
}
