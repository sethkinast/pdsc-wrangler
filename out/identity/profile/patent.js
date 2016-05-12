import Model from 'app/api/NotTerribleModel';
import CorePatent from "app/models/identity/profile/core-patent";
import Contributor from "app/models/identity/profile/contributor";

export default class Patent extends Model {
  static schema = Object.assign({}, CorePatent.schema, {
    /**
     * @property inventors
     * List of inventors of this patent, must include the profile owner.
     */
    inventors: Contributor,

    modelType: "identity/profile/patent"
  })
}
