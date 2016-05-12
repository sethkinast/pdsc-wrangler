import Model from 'app/api/NotTerribleModel';
import Duration from "app/models/common/duration";

export default class BoostPromotionalData extends Model {
  static schema = {
    /**
     * @property carrierName
     * Name of the carrier that is to be shown to the user
     */
    carrierName: Model.STRING,

    /**
     * @property formattedSubscriptionPrice
     * The formatted price string of the subscription if the promotion is not applied. e.g. 200 USD is represented as $200.
     */
    formattedSubscriptionPrice: Model.STRING,

    /**
     * @property subscriptionName
     * The name of the subscription plan the user is offered
     */
    subscriptionName: Model.STRING,

    /**
     * @property productId
     * The id of the product that is given as the promotion
     */
    productId: Model.INT,

    /**
     * @property duration
     * The duration of the promotional subscription.
     */
    duration: Duration,

    modelType: "premium/boost/boost-promotional-data"
  }
}
