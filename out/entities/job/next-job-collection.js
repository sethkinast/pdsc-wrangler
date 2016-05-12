import Model from 'app/api/NotTerribleModel';
import NextJob from "app/models/entities/job/next-job";
import PagingInfo from "app/models/entities/common/paging-info";

export default class NextJobCollection extends Model {
  static schema = {
    /**
     * @property items
     * A list of next jobs.
     */
    items: NextJob,

    /**
     * @property pagingInfo
     * The paging info for items.
     */
    pagingInfo: PagingInfo,

    modelType: "entities/job/next-job-collection"
  }
}
