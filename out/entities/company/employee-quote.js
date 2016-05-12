import Model from 'app/api/NotTerribleModel';
import EntitiesMiniProfile from "app/models/entities/shared/entities-mini-profile";

export default class EmployeeQuote extends Model {
  static schema = {
    /**
     * @property member
     * EntitiesMiniProfile of the employee of the company that said the quote.
     */
    member: EntitiesMiniProfile,

    /**
     * @property quote
     * Quote of member.
     */
    quote: Model.STRING,

    modelType: "entities/company/employee-quote"
  }
}
