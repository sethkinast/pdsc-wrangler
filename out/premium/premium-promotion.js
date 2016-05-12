import Model from 'app/api/NotTerribleModel';

export default class PremiumPromotion extends Model {
  static schema = {
    /**
     * @property offer
     * The promotion offer. e.g. Enjoy 50% off for 2 months
     */
    offer: Model.STRING,

    /**
     * @property price
     * The price associated with the promotion e.g. $29.99 for 2 months
     */
    price: Model.STRING,

    modelType: "premium/premium-promotion"
  }
}
