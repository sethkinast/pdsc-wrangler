import Model from 'app/api/NotTerribleModel';
import TaskNames from "app/models/identity/guidededit/task-names";
import ProfileEditTaskInfo from "app/models/identity/guidededit/profile-edit-task-info";
import SimpleTaskInfo from "app/models/identity/guidededit/simple-task-info";
import CustomTaskInfo from "app/models/identity/guidededit/custom-task-info";
import SuggestedEditTaskInfo from "app/models/identity/guidededit/suggested-edit-task-info";

export default class GuidedEditTask extends Model {
  static schema = {
    /**
     * @property legoTrackingId
     * A tracking id used by lego to track widget impressions and actions.
     */
    legoTrackingId: Model.STRING,

    /**
     * @property required
     * Required tasks cannot be skipped. All required tasks must be completed before any submit to the backend is possible.
     */
    required: Model.BOOL,

    /**
     * @property counted
     * A flag indicating whether this task should be shown with the order number in the flow.
     */
    counted: Model.BOOL,

    /**
     * @property taskName
     * An identifier which represents which task this is. Clients should use this field to determine all business logic for this task.
     */
    taskName: TaskNames,

    /**
     * @property taskInfo
     * Information important to the task. Union of all task info types which contain varying pieces of information.
     */
    taskInfo: Model.oneOf(ProfileEditTaskInfo, SimpleTaskInfo, CustomTaskInfo, SuggestedEditTaskInfo),

    modelType: "identity/guidededit/guided-edit-task"
  }
}
