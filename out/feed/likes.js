import Model from 'app/api/NotTerribleModel';
import Like from "app/models/feed/like";

export default class Likes extends Model {
  static schema = {
    /**
     * @property elements
     * A list of likes.
     */
    elements: Like,

    /**
     * @property paging
     * Pagination and collection infomation.
     */
    paging: Model.foreignUrn('com.linkedin.restli.common.CollectionMetadata'),

    modelType: "feed/likes"
  }
}
