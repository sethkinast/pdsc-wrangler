import Model from 'app/api/NotTerribleModel';
import CoreProject from "app/models/identity/profile/core-project";
import NormContributor from "app/models/identity/profile/norm-contributor";

export default class NormProject extends Model {
  static schema = Object.assign({}, CoreProject.schema, {
    /**
     * @property members
     * List of members of this project, must include the profile owner.
     */
    members: NormContributor,

    modelType: "identity/profile/norm-project"
  })
}
