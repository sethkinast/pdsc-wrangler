import Model from 'app/api/NotTerribleModel';
import CategoryNames from "app/models/identity/guidededit/category-names";

export default class CategoryTypeCustom extends Model {
  static schema = {
    /**
     * @property categoryName
     * The name of the flow/category. This is used to determine how the flow should be drawn and what should happen if its clicked.
     */
    categoryName: CategoryNames,

    modelType: "identity/guidededit/category-type-custom"
  }
}
