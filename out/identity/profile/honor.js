import Model from 'app/api/NotTerribleModel';
import NormHonor from "app/models/identity/profile/norm-honor";

export default class Honor extends Model {
  static schema = Object.assign({}, NormHonor.schema, {
    modelType: "identity/profile/honor"
  })
}
