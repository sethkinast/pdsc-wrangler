import Model from 'app/api/NotTerribleModel';
import ItemInfo from "app/models/entities/common/item-info";
import JobDescription from "app/models/entities/job/job-description";
import JobDetails from "app/models/entities/job/job-details";
import NextJobCollection from "app/models/entities/job/next-job-collection";
import SimilarJobTitlesEmployees from "app/models/entities/job/similar-job-titles-employees";
import SkillsAndExperience from "app/models/entities/job/skills-and-experience";
import Description from "app/models/entities/common/description";
import MiniProfilesCollection from "app/models/entities/common/mini-profiles-collection";
import BasicCompanyInfo from "app/models/entities/company/basic-company-info";
import InCommonCompany from "app/models/entities/incommon/in-common-company";
import InCommonPerson from "app/models/entities/incommon/in-common-person";
import InCommonSchool from "app/models/entities/incommon/in-common-school";
import JobPoster from "app/models/entities/job/job-poster";
import ApplicantRanking from "app/models/entities/job/analytics/applicant-ranking";
import CompanyGrowthInsights from "app/models/entities/job/analytics/company-growth-insights";
import EducationAnalytics from "app/models/entities/job/analytics/education-analytics";
import InflowCompanyRankingInsights from "app/models/entities/job/analytics/inflow-company-ranking-insights";
import SchoolRankingInsights from "app/models/entities/job/analytics/school-ranking-insights";
import SeniorityAnalytics from "app/models/entities/job/analytics/seniority-analytics";
import TopSkillsAnalytics from "app/models/entities/job/analytics/top-skills-analytics";
import JobCard from "app/models/premium/onboarding/job-card";

export default class JobItem extends Model {
  static schema = {
    /**
     * @property itemInfo
     * The basic information about a card.
     */
    itemInfo: ItemInfo,

    /**
     * @property item
     * The union of all the possible cards appearing on the job page.
     */
    item: Model.oneOf(JobDescription, JobDetails, NextJobCollection, SimilarJobTitlesEmployees, SkillsAndExperience, Description, MiniProfilesCollection, BasicCompanyInfo, InCommonCompany, InCommonPerson, InCommonSchool, JobPoster, ApplicantRanking, CompanyGrowthInsights, EducationAnalytics, InflowCompanyRankingInsights, SchoolRankingInsights, SeniorityAnalytics, TopSkillsAnalytics, JobCard),

    modelType: "entities/job/job-item"
  }
}
