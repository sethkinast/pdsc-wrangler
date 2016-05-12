import Model from 'app/api/NotTerribleModel';
import TaskNames from "app/models/identity/guidededit/task-names";

export default class CustomTaskInfo extends Model {
  static schema = {
    /**
     * @property taskName
     * An identifier which represents which task this is. Clients should use this field to determine all business logic for this task.
     */
    taskName: TaskNames,

    modelType: "identity/guidededit/custom-task-info"
  }
}
