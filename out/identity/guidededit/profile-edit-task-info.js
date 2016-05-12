import Model from 'app/api/NotTerribleModel';
import FormField from "app/models/identity/guidededit/form-field";

export default class ProfileEditTaskInfo extends Model {
  static schema = {
    /**
     * @property updateEntity
     * URN that points to a profile entity that this task will update. This field will only be populated if this task is within an update flow.
     */
    updateEntity: Model.STRING,

    /**
     * @property updateEntityUrn
     * URN that points to a profile entity that this task will update. This field will only be populated if this task is within an update flow.
     */
    updateEntityUrn: Model.STRING,

    /**
     * @property formFields
     * A list of form fields which will be edited in this task. This list should be used by the clients to construct the forms to display to the member.
     */
    formFields: FormField,

    modelType: "identity/guidededit/profile-edit-task-info"
  }
}
