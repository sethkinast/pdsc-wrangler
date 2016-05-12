import Model from 'app/api/NotTerribleModel';
import MiniCompany from "app/models/entities/shared/mini-company";
import EmployeeCountRange from "app/models/identity/profile/employee-count-range";

export default class PositionCompany extends Model {
  static schema = {
    /**
     * @property miniCompany
     * Information about the mini company inside this position
     */
    miniCompany: MiniCompany,

    /**
     * @property employeeCountRange
     * Range corresponding to the number of employees in this company.
     */
    employeeCountRange: EmployeeCountRange,

    /**
     * @property industries
     * Industries this company is a part of
     */
    industries: Model.STRING,

    modelType: "identity/profile/position-company"
  }
}
