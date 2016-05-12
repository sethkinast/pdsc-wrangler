import Model from 'app/api/NotTerribleModel';
import NormProfile from "app/models/identity/profile/norm-profile";
import VersionTag from "app/models/identity/profile/version-tag";
import State from "app/models/common/state";
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class Profile extends Model {
  static schema = Object.assign({}, NormProfile.schema, VersionTag.schema, {
    /**
     * @property state
     * State (one administrative level beneath country) of the profile location.
     */
    state: State,

    /**
     * @property locationName
     * Member's chosen location name to display on top card.
     */
    locationName: Model.STRING,

    /**
     * @property miniProfile
     * MiniProfile data about this member.
     */
    miniProfile: MiniProfile,

    modelType: "identity/profile/profile"
  })
}
