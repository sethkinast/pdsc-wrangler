import Model from 'app/api/NotTerribleModel';
import EmployeeQuote from "app/models/entities/company/employee-quote";

export default class CareerEmployeeQuotes extends Model {
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
    quotes: EmployeeQuote,

    modelType: "entities/company/career-employee-quotes"
  }
}
