import Model from 'app/api/NotTerribleModel';
import TaskNames from "app/models/identity/guidededit/task-names";

export default class SimpleTaskInfo extends Model {
  static schema = {
    /**
     * @property simpleTaskType
     * The type of simple task.
     */
    simpleTaskType: Model.STRING,

    /**
     * @property taskName
     * An identifier which represents which task this is. Clients should use this field to determine how to render the task.
     */
    taskName: TaskNames,

    modelType: "identity/guidededit/simple-task-info"
  }
}
