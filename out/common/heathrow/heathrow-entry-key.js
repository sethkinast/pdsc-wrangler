import Model from 'app/api/NotTerribleModel';
import UserActionType from "app/models/common/heathrow/user-action-type";
import Origin from "app/models/common/heathrow/origin";

export default class HeathrowEntryKey extends Model {
  static schema = {
    /**
     * @property userActionType
     * Type of users action, for example accepting an invitation.
     */
    userActionType: UserActionType,

    /**
     * @property origin
     * Origin of the users action, for example if the user accepting the invitation from Origin.PROFILE.
     */
    origin: Origin,

    /**
     * @property platform
     * Platform from where the request is made. This is needed to query LEGO to figure out the capping and invoke the offline relevance.
     */
    platform: Model.STRING,

    modelType: "common/heathrow/heathrow-entry-key"
  }
}
