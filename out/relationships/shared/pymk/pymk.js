import Model from 'app/api/NotTerribleModel';
import RelPymkUrn from "app/models/common/rel-pymk-urn";
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class Pymk extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier of this pymk
     */
    entityUrn: RelPymkUrn,

    /**
     * @property miniProfile
     * Mini profile data about the member
     */
    miniProfile: MiniProfile,

    /**
     * @property trackingId
     * Unique tracking code for this update.
     */
    trackingId: Model.STRING,

    modelType: "relationships/shared/pymk/pymk"
  }
}
