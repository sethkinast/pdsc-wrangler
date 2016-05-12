import Model from 'app/api/NotTerribleModel';
import Suggestion from "app/models/identity/guidededit/suggestion";
import TaskNames from "app/models/identity/guidededit/task-names";

export default class SuggestedEditTaskInfo extends Model {
  static schema = {
    /**
     * @property suggestions
     * A list of suggestions which will be used in this task. This list should be used by the clients to construct the suggestions to display to the member.
     */
    suggestions: Suggestion,

    /**
     * @property taskName
     * An identifier which represents which task this is. Clients should use this field to determine all business logic for this task.
     */
    taskName: TaskNames,

    modelType: "identity/guidededit/suggested-edit-task-info"
  }
}
