import Model from 'app/api/NotTerribleModel';
import AnnotatedText from "app/models/feed/shared/annotated-text";
import CompanyActor from "app/models/feed/company-actor";
import MiniJob from "app/models/entities/shared/mini-job";

export default class ShareJob extends Model {
  static schema = {
    /**
     * @property text
     * The share commentary
     */
    text: AnnotatedText,

    /**
     * @property companyActor
     * The company of the job share.
     */
    companyActor: CompanyActor,

    /**
     * @property miniJob
     * Mini Job of this job share.
     */
    miniJob: MiniJob,

    /**
     * @property companyName
     * The name of the company of the job share.
     */
    companyName: Model.STRING,

    /**
     * @property jobUrl
     * URL for the job. To be used for re-sharing this Job.
     */
    jobUrl: Model.foreignUrn('com.linkedin.common.Url'),

    modelType: "feed/share-job"
  }
}
