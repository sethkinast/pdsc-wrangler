import Model from 'app/api/NotTerribleModel';
import JobPremiumInsightsUrn from "app/models/common/job-premium-insights-urn";
import CompanyPremiumInsights from "app/models/entities/job/analytics/company-premium-insights";
import ApplicantAnalytics from "app/models/entities/job/analytics/applicant-analytics";

export default class JobPremiumInsights extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this JobPremiumInsights.
     */
    entityUrn: JobPremiumInsightsUrn,

    /**
     * @property premium
     * Whether the viewer is premium subscriber.
     */
    premium: Model.BOOL,

    /**
     * @property companyPremiumInsights
     * Premium insights for a company including school rankings, company rankings and company growth over time.
     */
    companyPremiumInsights: CompanyPremiumInsights,

    /**
     * @property applicantAnalytics
     * Premium insights on other applicants applying for the same job posting.
     */
    applicantAnalytics: ApplicantAnalytics,

    modelType: "entities/job/analytics/job-premium-insights"
  }
}
