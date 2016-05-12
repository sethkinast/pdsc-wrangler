import Model from 'app/api/NotTerribleModel';
import AnnotatedString from "app/models/feed/shared/annotated-string";

export default class AnnotatedText extends Model {
  static schema = {
    /**
     * @property values
     * Content of the annotated text.
     */
    values: AnnotatedString,

    modelType: "feed/shared/annotated-text"
  }
}
