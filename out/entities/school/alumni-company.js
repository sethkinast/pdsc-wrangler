import Model from 'app/api/NotTerribleModel';
import MiniCompany from "app/models/entities/shared/mini-company";

export default class AlumniCompany extends Model {
  static schema = {
    /**
     * @property miniCompany
     * Mini company containing name and logo information.
     */
    miniCompany: MiniCompany,

    /**
     * @property alumniCount
     * Number of alumni of the school that work at this company.
     */
    alumniCount: Model.INT,

    /**
     * @property industry
     * The industry the company belongs to.
     */
    industry: Model.STRING,

    modelType: "entities/school/alumni-company"
  }
}
