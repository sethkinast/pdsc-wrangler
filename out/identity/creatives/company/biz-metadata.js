import Model from 'app/api/NotTerribleModel';

export default class BizMetadata extends Model {
  static schema = {
    /**
     * @property salesForce
     * Company on salesforce
     */
    salesForce: Model.STRING,

    modelType: "identity/creatives/company/biz-metadata"
  }
}
