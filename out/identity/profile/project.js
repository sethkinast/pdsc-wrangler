import Model from 'app/api/NotTerribleModel';
import CoreProject from "app/models/identity/profile/core-project";
import Contributor from "app/models/identity/profile/contributor";

export default class Project extends Model {
  static schema = Object.assign({}, CoreProject.schema, {
    /**
     * @property members
     * List of members of this project, must include the profile owner.
     */
    members: Contributor,

    modelType: "identity/profile/project"
  })
}
