import Model from 'app/api/NotTerribleModel';
import CategoryNames from "app/models/identity/guidededit/category-names";
import CategoryTypeProfileEdit from "app/models/identity/guidededit/category-type-profile-edit";
import CategoryTypeCustom from "app/models/identity/guidededit/category-type-custom";
import GuidedEditTask from "app/models/identity/guidededit/guided-edit-task";

export default class GuidedEditCategory extends Model {
  static schema = {
    /**
     * @property id
     * An ID for this category
     */
    id: CategoryNames,

    /**
     * @property categoryType
     * The type of flow. This determines how the client should behave when the flow is selected as well as how the flow should be presented.
     */
    categoryType: Model.oneOf(CategoryTypeProfileEdit, CategoryTypeCustom),

    /**
     * @property tasks
     * The tasks that are a part of this flow. These tasks can be of several task types. All profile edit tasks must pertain to fields within this flow's section.
     */
    tasks: GuidedEditTask,

    modelType: "identity/guidededit/guided-edit-category"
  }
}
