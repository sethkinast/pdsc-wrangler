import Model from 'app/api/NotTerribleModel';
import NextCompanyUrn from "app/models/common/next-company-urn";
import MiniCompany from "app/models/entities/shared/mini-company";

export default class NextCompany extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this NextCompany.
     */
    entityUrn: NextCompanyUrn,

    /**
     * @property miniCompany
     * Minimum information about the company.
     */
    miniCompany: MiniCompany,

    /**
     * @property location
     * The location of the company's headquarter.
     */
    location: Model.STRING,

    /**
     * @property jobsCount
     * This represents the number of matched jobs at this particular company.
     */
    jobsCount: Model.INT,

    modelType: "entities/company/next-company"
  }
}
