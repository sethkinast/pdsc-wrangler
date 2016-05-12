import Model from 'app/api/NotTerribleModel';
import ProfileActionsUrn from "app/models/common/profile-actions-urn";
import ProfileAction from "app/models/identity/profile/actions/profile-action";

export default class ProfileActions extends Model {
  static schema = {
    /**
     * @property entityUrn
     * This entity Urn is not meant for caching reason but to make the object and entity and thus editable.
     */
    entityUrn: ProfileActionsUrn,

    /**
     * @property primaryAction
     * The primary profile action.  It's optional because no primary will exist for self-view
     */
    primaryAction: ProfileAction,

    /**
     * @property secondaryAction
     * An optional secondary profile action
     */
    secondaryAction: ProfileAction,

    /**
     * @property overflowActions
     * A list of available overflow actions
     */
    overflowActions: ProfileAction,

    /**
     * @property actions
     * An ordered(by importance) list of available Profile Actions.
     */
    actions: ProfileAction,

    modelType: "identity/profile/actions/profile-actions"
  }
}
