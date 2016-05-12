import Model from 'app/api/NotTerribleModel';
import MiniJob from "app/models/entities/shared/mini-job";
import MiniCompany from "app/models/entities/shared/mini-company";

export default class JobCard extends Model {
  static schema = {
    /**
     * @property job
     * The job information (title, location and company logo).
     */
    job: MiniJob,

    /**
     * @property company
     * The company that posted the job (company name and logo).
     */
    company: MiniCompany,

    /**
     * @property applicantInsightPercent
     * The applicant ranking percent about the job posting.
     */
    applicantInsightPercent: Model.INT,

    /**
     * @property applicantInsightTotal
     * The number of total applicants applying the job.
     */
    applicantInsightTotal: Model.INT,

    modelType: "premium/onboarding/job-card"
  }
}
