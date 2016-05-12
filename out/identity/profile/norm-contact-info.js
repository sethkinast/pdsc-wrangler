import Model from 'app/api/NotTerribleModel';
import ContactInfo from "app/models/identity/profile/contact-info";

export default class NormContactInfo extends Model {
  static schema = Object.assign({}, ContactInfo.schema, {
    modelType: "identity/profile/norm-contact-info"
  })
}
