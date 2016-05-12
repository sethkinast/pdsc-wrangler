import Model from 'app/api/NotTerribleModel';

export default class BizName extends Model {
  static schema = {
    /**
     * @property active
     * whether this company name is still active
     */
    active: Model.BOOL,

    /**
     * @property name
     * name for the company
     */
    name: Model.STRING,

    /**
     * @property locale
     * locale of this name
     */
    locale: Model.STRING,

    /**
     * @property type
     * type of name
     */
    type: Model.STRING,

    modelType: "identity/creatives/company/biz-name"
  }
}
