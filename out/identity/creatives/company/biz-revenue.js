import Model from 'app/api/NotTerribleModel';

export default class BizRevenue extends Model {
  static schema = {
    /**
     * @property amount
     * Revenue number
     */
    amount: Model.foreignUrn('com.linkedin.common.MoneyAmount'),

    /**
     * @property date
     * date revenue was released
     */
    date: Model.foreignUrn('com.linkedin.common.Date'),

    modelType: "identity/creatives/company/biz-revenue"
  }
}
