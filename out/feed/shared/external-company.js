import Model from 'app/api/NotTerribleModel';

export default class ExternalCompany extends Model {
  static schema = {
    /**
     * @property companyName
     * Model for representing a Company for which we only know the name.
     */
    companyName: Model.STRING,

    modelType: "feed/shared/external-company"
  }
}
