import Model from 'app/api/NotTerribleModel';
import ApplicantAnalyticsUrn from "app/models/common/applicant-analytics-urn";
import ApplicantRanking from "app/models/entities/job/analytics/applicant-ranking";
import SeniorityAnalytics from "app/models/entities/job/analytics/seniority-analytics";
import TopSkillsAnalytics from "app/models/entities/job/analytics/top-skills-analytics";
import EducationAnalytics from "app/models/entities/job/analytics/education-analytics";

export default class ApplicantAnalytics extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this ApplicantAnalytics.
     */
    entityUrn: ApplicantAnalyticsUrn,

    /**
     * @property applicantRanking
     * Ranking of the viewer relative to other applicants for a job posting.
     */
    applicantRanking: ApplicantRanking,

    /**
     * @property seniorityAnalytics
     * The seniorities of other applicants for the same job.
     */
    seniorityAnalytics: SeniorityAnalytics,

    /**
     * @property topSkillsAnalytics
     * Top skills shared among other applicants for the same job.
     */
    topSkillsAnalytics: TopSkillsAnalytics,

    /**
     * @property educationAnalytics
     * Education details for other applicants for the same job.
     */
    educationAnalytics: EducationAnalytics,

    modelType: "entities/job/analytics/applicant-analytics"
  }
}
