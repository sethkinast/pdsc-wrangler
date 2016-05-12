import Model from 'app/api/NotTerribleModel';
import NormBasicLocation from "app/models/common/norm-basic-location";

export default class ProfileLocation extends Model {
  static schema = {
    /**
     * @property basicLocation
     * The basic location info containing country code and possibly postal code.
     */
    basicLocation: NormBasicLocation,

    /**
     * @property preferredGeoPlace
     * Holds the member's preference of profile top card displayed location. Can only either be a RegionUrn or a CityUrn. Because type urn is not yet supported in Restli, a generic Urn is used here instead of a union.
     */
    preferredGeoPlace: Model.STRING,

    modelType: "identity/profile/profile-location"
  }
}
