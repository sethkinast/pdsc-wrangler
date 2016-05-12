import Model from 'app/api/NotTerribleModel';
import CollectionMetadata from "app/models/common/collection-metadata";

export default class Metadata extends Model {
  static schema = Object.assign({}, CollectionMetadata.schema, {
    /**
     * @property queryAfterTime
     * Fetch updates after this time, and it's Unix milliseconds.
     */
    queryAfterTime: Model.INT,

    /**
     * @property paginationToken
     * pagination token for this collection. Used for getting next pages for this collection. Will be populated by server whenever it is available or updated.
     */
    paginationToken: Model.STRING,

    /**
     * @property sort
     * Sort order of this collection response.
     */
    sort: Model.STRING,

    /**
     * @property newRelevanceFeed
     * Whether this is a new feed or not. This is set whenever we get a new feed from feed-mixer with start=0.
     */
    newRelevanceFeed: Model.BOOL,

    modelType: "feed/metadata"
  })
}
