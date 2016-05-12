import Model from 'app/api/NotTerribleModel';
import NormOrganization from "app/models/identity/profile/norm-organization";

export default class Organization extends Model {
  static schema = Object.assign({}, NormOrganization.schema, {
    modelType: "identity/profile/organization"
  })
}
