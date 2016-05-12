import Model from 'app/api/NotTerribleModel';
import Project from "app/models/identity/profile/project";

export default class ProjectView extends Model {
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
     * Ordered array of projects.
     */
    elements: Project,

    modelType: "identity/profile/project-view"
  }
}
