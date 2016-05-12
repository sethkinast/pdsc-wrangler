import Model from 'app/api/NotTerribleModel';
import NormLanguage from "app/models/identity/profile/norm-language";

export default class Language extends Model {
  static schema = Object.assign({}, NormLanguage.schema, {
    modelType: "identity/profile/language"
  })
}
