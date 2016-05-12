import Model from 'app/api/NotTerribleModel';
import CompanyCareerSectionUrn from "app/models/common/company-career-section-urn";
import CompanyCareerModuleQuotes from "app/models/entities/company/company-career-module-quotes";
import CompanyCareerModuleBranding from "app/models/entities/company/company-career-module-branding";
import CompanyCareerModuleImage from "app/models/entities/company/company-career-module-image";
import CompanyCareerModuleTitle from "app/models/entities/company/company-career-module-title";
import CompanyCareerModules from "app/models/entities/company/company-career-modules";

export default class CompanyCareerSection extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this CompanyCareerSection.
     */
    entityUrn: CompanyCareerSectionUrn,

    /**
     * @property name
     * User-entered name of this section.
     */
    name: Model.STRING,

    /**
     * @property modules
     * TODO: Deprecated. An array containing various types, each of which is a piece of content for the page (e.g. some quotes).
     */
    modules: Model.oneOf(CompanyCareerModuleQuotes, CompanyCareerModuleBranding, CompanyCareerModuleImage, CompanyCareerModuleTitle),

    /**
     * @property moduleObjects
     * A model that contains different types of career related information of the company.
     */
    moduleObjects: CompanyCareerModules,

    modelType: "entities/company/company-career-section"
  }
}
