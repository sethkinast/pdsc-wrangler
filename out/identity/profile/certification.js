import Model from 'app/api/NotTerribleModel';
import NormCertification from "app/models/identity/profile/norm-certification";
import MiniCompany from "app/models/entities/shared/mini-company";

export default class Certification extends Model {
  static schema = Object.assign({}, NormCertification.schema, {
    /**
     * @property company
     * User selected company associated with this certification, selected from the type-ahead.
     */
    company: MiniCompany,

    modelType: "identity/profile/certification"
  })
}
