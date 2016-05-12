import Model from 'app/api/NotTerribleModel';
import MiniJob from "app/models/entities/shared/mini-job";

export default class SearchHistoryJob extends Model {
  static schema = {
    /**
     * @property job
     * Basic job information.
     */
    job: MiniJob,

    /**
     * @property backendUrn
     * Backend urn representing the job. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.JobUrn'),

    modelType: "search/search-history-job"
  }
}
