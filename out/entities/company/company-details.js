import Model from 'app/api/NotTerribleModel';

export default class CompanyDetails extends Model {
  static schema = {
    /**
     * @property industries
     * Industries this company belongs to.
     */
    industries: Model.STRING,

    /**
     * @property websiteUrl
     * URL for this company's website.
     */
    websiteUrl: Model.foreignUrn('com.linkedin.common.Uri'),

    /**
     * @property employeeCountRange
     * Number of employees represented as preset ranges.
     */
    employeeCountRange: Model.STRING,

    /**
     * @property companyType
     * The type of company; e.g. PUBLIC_COMPANY, NON_PROFIT, etc.
     */
    companyType: Model.STRING,

    /**
     * @property specialties
     * Fields/Areas in which this company specializes in.
     */
    specialties: Model.STRING,

    /**
     * @property headquarters
     * City of the company headquarters
     */
    headquarters: Model.STRING,

    /**
     * @property foundedDate
     * TODO: Remove this field. Date the company was founded.
     */
    foundedDate: Model.foreignUrn('com.linkedin.common.Date'),

    /**
     * @property foundedOn
     * Date the company was founded.
     */
    foundedOn: Model.foreignUrn('com.linkedin.common.Date'),

    modelType: "entities/company/company-details"
  }
}
