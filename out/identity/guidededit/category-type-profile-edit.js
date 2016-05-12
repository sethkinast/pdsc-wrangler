import Model from 'app/api/NotTerribleModel';
import ProfileCategories from "app/models/identity/guidededit/profile-categories";

export default class CategoryTypeProfileEdit extends Model {
  static schema = {
    /**
     * @property profileCategory
     * The GE category: The section of the profile that is being altered. Clients should use this field to determine how to present the flow to the member.
     */
    profileCategory: ProfileCategories,

    /**
     * @property updateCategory
     * Whether this flow is an update flow or not. Clients should use this to determine between add or update flows.
     */
    updateCategory: Model.BOOL,

    /**
     * @property updateEntityUrn
     * URN that points to a profile entity that this task will update. This field will only be populated if this task is within an update flow.
     */
    updateEntityUrn: Model.STRING,

    /**
     * @property oneClick
     * If true, selecting this flow will be presented as a yes/no question that will be submitted instantly on yes. This can only be true if the tasks have provided some prefill data to submit
     */
    oneClick: Model.BOOL,

    modelType: "identity/guidededit/category-type-profile-edit"
  }
}
