import Model from 'app/api/NotTerribleModel';
import MiniJob from "app/models/entities/shared/mini-job";

export default class SearchJob extends Model {
  static schema = {
    /**
     * @property id
     * The id of the job. This field will be deprecated. Use entityUrn in miniJob instead.
     */
    id: Model.STRING,

    /**
     * @property backendUrn
     * Backend urn representing the job. This should be used only for tracking.
     */
    backendUrn: Model.foreignUrn('com.linkedin.common.JobUrn'),

    /**
     * @property job
     * Basic job information
     */
    job: MiniJob,

    /**
     * @property companyName
     * Name of the company.
     */
    companyName: Model.STRING,

    modelType: "search/search-job"
  }
}
