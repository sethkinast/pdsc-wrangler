import Model from 'app/api/NotTerribleModel';
import Comment from "app/models/feed/comment";
import Metadata from "app/models/feed/metadata";

export default class Comments extends Model {
  static schema = {
    /**
     * @property elements
     * A list of comments.
     */
    elements: Comment,

    /**
     * @property paging
     * Pagination and collection information.
     */
    paging: Model.foreignUrn('com.linkedin.restli.common.CollectionMetadata'),

    /**
     * @property metadata
     * Pagination and collection information.
     */
    metadata: Metadata,

    modelType: "feed/comments"
  }
}
