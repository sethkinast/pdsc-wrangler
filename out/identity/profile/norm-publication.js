import Model from 'app/api/NotTerribleModel';
import CorePublication from "app/models/identity/profile/core-publication";
import NormContributor from "app/models/identity/profile/norm-contributor";

export default class NormPublication extends Model {
  static schema = Object.assign({}, CorePublication.schema, {
    /**
     * @property authors
     * List of authors of this publication, must include the profile owner.
     */
    authors: NormContributor,

    modelType: "identity/profile/norm-publication"
  })
}
