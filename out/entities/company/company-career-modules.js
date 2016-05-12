import Model from 'app/api/NotTerribleModel';
import CompanyCareerModuleTitle from "app/models/entities/company/company-career-module-title";
import CompanyCareerModuleQuotes from "app/models/entities/company/company-career-module-quotes";
import CompanyCareerModuleImage from "app/models/entities/company/company-career-module-image";
import CompanyCareerModuleBranding from "app/models/entities/company/company-career-module-branding";

export default class CompanyCareerModules extends Model {
  static schema = {
    /**
     * @property title
     * The title of the career section.
     */
    title: CompanyCareerModuleTitle,

    /**
     * @property quotes
     * Employees' quotes about the company.
     */
    quotes: CompanyCareerModuleQuotes,

    /**
     * @property image
     * The company career image.
     */
    image: CompanyCareerModuleImage,

    /**
     * @property brandings
     * An array of branding modules, each containing some information about the company.
     */
    brandings: CompanyCareerModuleBranding,

    modelType: "entities/company/company-career-modules"
  }
}
