import Model from 'app/api/NotTerribleModel';
import PremiumProduct from "app/models/premium/premium-product";

export default class PremiumProducts extends Model {
  static schema = {
    /**
     * @property header
     * The reason to upgrade to Premium plan
     */
    header: Model.STRING,

    /**
     * @property footer
     * The reason to upgrade to Premium plan
     */
    footer: Model.STRING,

    /**
     * @property products
     * A list of products.
     */
    products: PremiumProduct,

    /**
     * @property warningText
     * A warning that will be shown to the member along with the products
     */
    warningText: Model.STRING,

    /**
     * @property recommendedProductIndex
     * The index of the recommend product
     */
    recommendedProductIndex: Model.INT,

    /**
     * @property promotionOffered
     * Whether or not promotion was offered to the member
     */
    promotionOffered: Model.BOOL,

    modelType: "premium/premium-products"
  }
}
