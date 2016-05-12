import Model from 'app/api/NotTerribleModel';
import Annotation from "app/models/relationships/shared/annotation/annotation";

export default class AnnotatedText extends Model {
  static schema = {
    /**
     * @property text
     * Plain text to be displayed
     */
    text: Model.STRING,

    /**
     * @property annotations
     * Annotations that needs to be applied to the text
     */
    annotations: Annotation,

    modelType: "relationships/shared/annotation/annotated-text"
  }
}
