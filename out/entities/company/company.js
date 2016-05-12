import Model from 'app/api/NotTerribleModel';
import CompanyUrn from "app/models/common/company-urn";
import BasicCompanyInfo from "app/models/entities/company/basic-company-info";
import Image from "app/models/common/image";
import MiniCompany from "app/models/entities/shared/mini-company";
import CompanySections from "app/models/entities/company/company-sections";
import EntityInfo from "app/models/entities/common/entity-info";

export default class Company extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this company.
     */
    entityUrn: CompanyUrn,

    /**
     * @property basicCompanyInfo
     * All of the basic information to a company (e.g. name, logo, following).
     */
    basicCompanyInfo: BasicCompanyInfo,

    /**
     * @property heroImage
     * Hero image
     */
    heroImage: Image,

    /**
     * @property description
     * Description about the company
     */
    description: Model.STRING,

    /**
     * @property industries
     * Industries this company is a part of
     */
    industries: Model.STRING,

    /**
     * @property websiteUrl
     * URL for this company's website
     */
    websiteUrl: Model.foreignUrn('com.linkedin.common.Uri'),

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
     * @property emailDomains
     * Company-specific domains; e.g. gmail.com, linkedin.com
     */
    emailDomains: Model.STRING,

    /**
     * @property employeeCountRange
     * Number of employees represented as preset ranges
     */
    employeeCountRange: Model.STRING,

    /**
     * @property foundedDate
     * TODO: Remove field. Date the company was founded.
     */
    foundedDate: Model.foreignUrn('com.linkedin.common.Date'),

    /**
     * @property foundedOn
     * Date the company was founded.
     */
    foundedOn: Model.foreignUrn('com.linkedin.common.Date'),

    /**
     * @property showcases
     * List of showcase (brand) pages related to this company.
     */
    showcases: BasicCompanyInfo,

    /**
     * @property parentCompany
     * The parent company, if this is a showcase page.
     */
    parentCompany: MiniCompany,

    /**
     * @property sections
     * All the possible sections/tabs on a company page.
     */
    sections: CompanySections,

    /**
     * @property entityInfo
     * It has the specific information about this entity.
     */
    entityInfo: EntityInfo,

    /**
     * @property numberOfEmployees
     * The number of employees at the company on LinkedIn.
     */
    numberOfEmployees: Model.INT,

    /**
     * @property jobsCount
     * The number of jobs a company has on LinkedIn.
     */
    jobsCount: Model.INT,

    modelType: "entities/company/company"
  }
}
