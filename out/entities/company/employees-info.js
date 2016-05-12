import Model from 'app/api/NotTerribleModel';
import EmployeesInfoUrn from "app/models/common/employees-info-urn";
import MiniCompany from "app/models/entities/shared/mini-company";

export default class EmployeesInfo extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this EmployeesInfo.
     */
    entityUrn: EmployeesInfoUrn,

    /**
     * @property miniCompany
     * The mini company containing name and logo information.
     */
    miniCompany: MiniCompany,

    /**
     * @property numberOfEmployees
     * The number of employees at the company on LinkedIn.
     */
    numberOfEmployees: Model.INT,

    modelType: "entities/company/employees-info"
  }
}
