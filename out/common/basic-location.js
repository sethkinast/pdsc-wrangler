import Model from 'app/api/NotTerribleModel';
import NormBasicLocation from "app/models/common/norm-basic-location";

export default class BasicLocation extends Model {
  static schema = Object.assign({}, NormBasicLocation.schema, {
    /**
     * @property countryName
     * The name of the member's country or district.
     */
    countryName: Model.STRING,

    modelType: "common/basic-location"
  })
}
