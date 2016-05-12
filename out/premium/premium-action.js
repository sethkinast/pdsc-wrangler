import Model from 'app/api/NotTerribleModel';

export default class PremiumAction extends Model {
  static schema = {
    /**
     * @property text
     * The action text, e.g., Start your free month
     */
    text: Model.STRING,

    /**
     * @property subText
     * The action sub text, e.g., After your free trial, USD 29.99/month
     */
    subText: Model.STRING,

    /**
     * @property iOSProductIdentifier
     * The product Id for the product as defined in iTunes Connect, e.g., SubsJobSeeker_1M_AUTO
     */
    iOSProductIdentifier: Model.STRING,

    /**
     * @property priceId
     * The id of the plan price, e.g., 81020
     */
    priceId: Model.STRING,

    /**
     * @property promotionId
     * The id of the promotion, e.g., 61150145
     */
    promotionId: Model.STRING,

    /**
     * @property quote
     * The quote to create the cart for this action
     */
    quote: Model.STRING,

    /**
     * @property iOSQuote
     * The quote to complete iOS payment for this action
     */
    iOSQuote: Model.STRING,

    modelType: "premium/premium-action"
  }
}
