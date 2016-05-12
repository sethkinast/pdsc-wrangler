import Model from 'app/api/NotTerribleModel';
import CorePatent from "app/models/identity/profile/core-patent";
import NormContributor from "app/models/identity/profile/norm-contributor";

export default class NormPatent extends Model {
  static schema = Object.assign({}, CorePatent.schema, {
    /**
     * @property inventors
     * List of inventors of this patent, must include the profile owner.
     */
    inventors: NormContributor,

    modelType: "identity/profile/norm-patent"
  })
}
