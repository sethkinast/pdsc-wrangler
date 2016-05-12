import Model from 'app/api/NotTerribleModel';

export default class JobDetails extends Model {
  static schema = {
    /**
     * @property employmentStatus
     * The employment type for this job (e.g. full-time, part-time, internship, etc.).
     */
    employmentStatus: Model.STRING,

    /**
     * @property experience
     * The experience level for this job (e.g. entry level, director, etc.).
     */
    experience: Model.STRING,

    /**
     * @property jobFunctions
     * The duties specific to a job (e.g. Accounting, Marketing, Sales).
     */
    jobFunctions: Model.STRING,

    /**
     * @property industries
     * The related industries listed as part of this job positing.
     */
    industries: Model.STRING,

    /**
     * @property jobId
     * Identifier for this job.
     */
    jobId: Model.INT,

    modelType: "entities/job/job-details"
  }
}
