import Model from 'app/api/NotTerribleModel';
import MiniCompany from "app/models/entities/shared/mini-company";
import EmployeeCount from "app/models/entities/job/analytics/employee-count";

export default class CompanyGrowthInsights extends Model {
  static schema = {
    /**
     * @property miniCompany
     * The mini company containing name and logo information.
     */
    miniCompany: MiniCompany,

    /**
     * @property averageTenureYears
     * Average length of tenure in years for employees of this company.
     */
    averageTenureYears: Model.FLOAT,

    /**
     * @property medianTenureYears
     * Median length of tenure in years for employees of this company.
     */
    medianTenureYears: Model.FLOAT,

    /**
     * @property growth
     * The number of employee profiles on Linkedin over time.
     */
    growth: EmployeeCount,

    /**
     * @property companyGrowthPercent
     * The company size growth percent.
     */
    companyGrowthPercent: Model.INT,

    modelType: "entities/job/analytics/company-growth-insights"
  }
}
