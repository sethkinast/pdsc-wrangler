import Model from 'app/api/NotTerribleModel';

export default class BizDescription extends Model {
  static schema = {
    /**
     * @property description
     * Description paragraph(s)
     */
    description: Model.STRING,

    /**
     * @property locale
     * Locale this description is meant for.
     */
    locale: Model.STRING,

    modelType: "identity/creatives/company/biz-description"
  }
}
