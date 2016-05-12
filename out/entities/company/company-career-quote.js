import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class CompanyCareerQuote extends Model {
  static schema = {
    /**
     * @property member
     * MiniProfile of the employee of the company that said the quote.
     */
    member: MiniProfile,

    /**
     * @property quote
     * Quote of member.
     */
    quote: Model.STRING,

    modelType: "entities/company/company-career-quote"
  }
}
