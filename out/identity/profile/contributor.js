import Model from 'app/api/NotTerribleModel';
import NormContributor from "app/models/identity/profile/norm-contributor";
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class Contributor extends Model {
  static schema = Object.assign({}, NormContributor.schema, {
    /**
     * @property member
     * MiniProfile for this contributor.
     */
    member: MiniProfile,

    modelType: "identity/profile/contributor"
  })
}
