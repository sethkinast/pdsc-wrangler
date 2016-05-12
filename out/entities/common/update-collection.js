import Model from 'app/api/NotTerribleModel';
import Update from "app/models/feed/update";
import PagingInfo from "app/models/entities/common/paging-info";
import Metadata from "app/models/feed/metadata";

export default class UpdateCollection extends Model {
  static schema = {
    /**
     * @property items
     * A list of feed updates.
     */
    items: Update,

    /**
     * @property pagingInfo
     * The paging info for items.
     */
    pagingInfo: PagingInfo,

    /**
     * @property metadata
     * Meta data for feed updates.
     */
    metadata: Metadata,

    modelType: "entities/common/update-collection"
  }
}
