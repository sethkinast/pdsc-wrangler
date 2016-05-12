import Model from 'app/api/NotTerribleModel';
import PremiumProductFamily from "app/models/premium/premium-product-family";
import PremiumFeature from "app/models/premium/premium-feature";
import PremiumAction from "app/models/premium/premium-action";
import PremiumFAQ from "app/models/premium/premium-f-a-q";
import PremiumPromotion from "app/models/premium/premium-promotion";

export default class PremiumProduct extends Model {
  static schema = {
    /**
     * @property header
     * The tag line for the product
     */
    header: Model.STRING,

    /**
     * @property productName
     * The name of the product
     */
    productName: Model.STRING,

    /**
     * @property productDesc
     * The description of the product
     */
    productDesc: Model.STRING,

    /**
     * @property productFamily
     * The family of the product. Onboarding differs from one product family to another
     */
    productFamily: PremiumProductFamily,

    /**
     * @property productCode
     * The code of the product, e.g., SubsJobSeeker
     */
    productCode: Model.STRING,

    /**
     * @property productId
     * The id of the product, e.g., 10003
     */
    productId: Model.STRING,

    /**
     * @property highlightedFeatures
     * A list of highlighted features. Every product will have a few important features which will be described succinctly or may be summaried by combining two or more features.
     */
    highlightedFeatures: PremiumFeature,

    /**
     * @property allFeatures
     * A list of features. Each element in this array will be just one feature and will be described in detail.
     */
    allFeatures: PremiumFeature,

    /**
     * @property actions
     * A list of actions.
     */
    actions: PremiumAction,

    /**
     * @property faqs
     * A list of faqs.
     */
    faqs: PremiumFAQ,

    /**
     * @property promotion
     * Promotion associated with this product
     */
    promotion: PremiumPromotion,

    modelType: "premium/premium-product"
  }
}
