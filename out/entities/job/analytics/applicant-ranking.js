import Model from 'app/api/NotTerribleModel';

export default class ApplicantRanking extends Model {
  static schema = {
    /**
     * @property rank
     * Rank of this applicant compared to other applicants for a particular job posting.
     */
    rank: Model.INT,

    /**
     * @property percentileRank
     * Percentile rank of this applicant compared to other applicants for a particular job posting.
     */
    percentileRank: Model.INT,

    /**
     * @property numberOfApplicants
     * Total number of applicants for this job posting.
     */
    numberOfApplicants: Model.INT,

    modelType: "entities/job/analytics/applicant-ranking"
  }
}
