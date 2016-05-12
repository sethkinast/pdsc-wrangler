import Model from 'app/api/NotTerribleModel';
import CompanyCareerQuote from "app/models/entities/company/company-career-quote";

export default class CompanyCareerModuleQuotes extends Model {
  static schema = {
    /**
     * @property title
     * Title of module.
     */
    title: Model.STRING,

    /**
     * @property description
     * Optional text to precede list of quotes.
     */
    description: Model.STRING,

    /**
     * @property quotes
     * List of quotes and corresponding members.
     */
    quotes: CompanyCareerQuote,

    modelType: "entities/company/company-career-module-quotes"
  }
}
