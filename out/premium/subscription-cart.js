import Model from 'app/api/NotTerribleModel';

export default class SubscriptionCart extends Model {
  static schema = {
    /**
     * @property cartId
     * OMS cart id that will be used for purchase purposes
     */
    cartId: Model.INT,

    modelType: "premium/subscription-cart"
  }
}
