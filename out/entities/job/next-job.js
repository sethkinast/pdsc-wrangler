import Model from 'app/api/NotTerribleModel';
import NextJobUrn from "app/models/common/next-job-urn";
import MiniJob from "app/models/entities/shared/mini-job";

export default class NextJob extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this NextJob.
     */
    entityUrn: NextJobUrn,

    /**
     * @property miniJob
     * All of the basic information about a job (e.g. title, logo).
     */
    miniJob: MiniJob,

    /**
     * @property companyName
     * Localized name of the company that posted this job.
     */
    companyName: Model.STRING,

    /**
     * @property applicantCounts
     * This represents the number applicants for this particular job.
     */
    applicantCounts: Model.INT,

    modelType: "entities/job/next-job"
  }
}
