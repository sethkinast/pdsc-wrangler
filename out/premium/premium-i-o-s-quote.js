import Model from 'app/api/NotTerribleModel';

export default class PremiumIOSQuote extends Model {
  static schema = {
    /**
     * @property verificationSignature
     * The verification signature that OMS requires to verify that the payment is for the specified price id
     */
    verificationSignature: Model.STRING,

    /**
     * @property priceId
     * The id of the plan that the member purchased. This id is defined in OMS
     */
    priceId: Model.INT,

    /**
     * @property _ed
     * The encrypted promotion id that was applied to the plan that the member purchased. The name of this field is per payment-frontend /purchase endpoint
     */
    _ed: Model.STRING,

    modelType: "premium/premium-i-o-s-quote"
  }
}
