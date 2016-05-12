import Model from 'app/api/NotTerribleModel';
import SnippetField from "app/models/search/snippet-field";
import AnnotatedText from "app/models/relationships/shared/annotation/annotated-text";

export default class Snippet extends Model {
  static schema = {
    /**
     * @property fieldType
     * Field of the entity for the snippet.
     */
    fieldType: SnippetField,

    /**
     * @property heading
     * Heading of snippet. This is usually metadata about the snippet body. For example if we match on the body of a profile position description, then the heading would be the position title. More concretely, for query "human interation" and position with title "designer" and position description "lead researcher on human computer interaction at company", we populate heading with "designer"
     */
    heading: AnnotatedText,

    /**
     * @property body
     * Body of snippet.
     */
    body: AnnotatedText,

    modelType: "search/snippet"
  }
}
