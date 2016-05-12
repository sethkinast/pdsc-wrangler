import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class FeaturedApplicantCard extends Model {
  static schema = {
    /**
     * @property profiles
     * A list of featured applicant profiles.
     */
    profiles: MiniProfile,

    /**
     * @property applicantInsightTotal
     * The number of total applicants applying the job.
     */
    applicantInsightTotal: Model.INT,

    modelType: "premium/onboarding/featured-applicant-card"
  }
}
