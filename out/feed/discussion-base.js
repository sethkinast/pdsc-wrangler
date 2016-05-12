import Model from 'app/api/NotTerribleModel';
import AnnotatedText from "app/models/feed/shared/annotated-text";

export default class DiscussionBase extends Model {
  static schema = {
    /**
     * @property title
     * Title of the discussion.
     */
    title: Model.STRING,

    /**
     * @property body
     * The text body of the discussion.
     */
    body: AnnotatedText,

    modelType: "feed/discussion-base"
  }
}
