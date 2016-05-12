import Model from 'app/api/NotTerribleModel';
import CorePublication from "app/models/identity/profile/core-publication";
import Contributor from "app/models/identity/profile/contributor";

export default class Publication extends Model {
  static schema = Object.assign({}, CorePublication.schema, {
    /**
     * @property authors
     * List of authors of this publication, must include the profile owner.
     */
    authors: Contributor,

    modelType: "identity/profile/publication"
  })
}
