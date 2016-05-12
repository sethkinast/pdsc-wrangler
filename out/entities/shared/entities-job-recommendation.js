import Model from 'app/api/NotTerribleModel';
import MiniJob from "app/models/entities/shared/mini-job";

export default class EntitiesJobRecommendation extends Model {
  static schema = {
    /**
     * @property createdAt
     * The created time of this job posting, in milliseconds since epoch.
     */
    createdAt: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property miniJob
     * MiniJob of this job posting.
     */
    miniJob: MiniJob,

    /**
     * @property jobUrl
     * URL for the job. To be used for re-sharing this Job.
     */
    jobUrl: Model.foreignUrn('com.linkedin.common.Url'),

    modelType: "entities/shared/entities-job-recommendation"
  }
}
