import Model from 'app/api/NotTerribleModel';
import Position from "app/models/identity/profile/position";

export default class PositionView extends Model {
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
     * First 5 positions ordered by date in descending order.
     */
    elements: Position,

    modelType: "identity/profile/position-view"
  }
}
