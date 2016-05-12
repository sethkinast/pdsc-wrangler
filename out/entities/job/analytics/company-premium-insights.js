import Model from 'app/api/NotTerribleModel';
import CompanyPremiumInsightsUrn from "app/models/common/company-premium-insights-urn";
import SchoolRankingInsights from "app/models/entities/job/analytics/school-ranking-insights";
import InflowCompanyRankingInsights from "app/models/entities/job/analytics/inflow-company-ranking-insights";
import CompanyGrowthInsights from "app/models/entities/job/analytics/company-growth-insights";

export default class CompanyPremiumInsights extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this CompanyPremiumInsights.
     */
    entityUrn: CompanyPremiumInsightsUrn,

    /**
     * @property schoolRankingInsights
     * Ranks schools based on number of employees who are alumni of that school.
     */
    schoolRankingInsights: SchoolRankingInsights,

    /**
     * @property inflowCompanyRankingInsights
     * Ranks companies based on number of employees who were previously employed by that company.
     */
    inflowCompanyRankingInsights: InflowCompanyRankingInsights,

    /**
     * @property companyGrowthInsights
     * Provides data on tenure length and the company's growth over time.
     */
    companyGrowthInsights: CompanyGrowthInsights,

    modelType: "entities/job/analytics/company-premium-insights"
  }
}
