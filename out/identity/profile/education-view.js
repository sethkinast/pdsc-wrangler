import Model from 'app/api/NotTerribleModel';
import Education from "app/models/identity/profile/education";

export default class EducationView extends Model {
  static schema = {
    /**
     * @property profileId
     * Member's profile id. To allow clients to tell ember to look at this field for the id instead of autogenerating one.
     */
    profileId: Model.STRING,

    /**
     * @property paging
     * Pagination and collection information.
     */
    paging: Model.foreignUrn('com.linkedin.restli.common.CollectionMetadata'),

    /**
     * @property elements
     * Ordered array of positions.
     */
    elements: Education,

    modelType: "identity/profile/education-view"
  }
}
