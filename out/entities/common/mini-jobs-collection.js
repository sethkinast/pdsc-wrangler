import Model from 'app/api/NotTerribleModel';
import MiniJob from "app/models/entities/shared/mini-job";
import PagingInfo from "app/models/entities/common/paging-info";

export default class MiniJobsCollection extends Model {
  static schema = {
    /**
     * @property items
     * A list of mini jobs.
     */
    items: MiniJob,

    /**
     * @property pagingInfo
     * The paging info for items.
     */
    pagingInfo: PagingInfo,

    modelType: "entities/common/mini-jobs-collection"
  }
}
