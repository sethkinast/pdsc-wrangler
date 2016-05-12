import Model from 'app/api/NotTerribleModel';

export default class EmployeeCountRange extends Model {
  static schema = {
    /**
     * @property start
     * Start of the range. It can equal to 0, in that case it means it's a single employee company.
     */
    start: Model.INT,

    /**
     * @property end
     * End of the range. When it's not set it should be interpreted as the max number of employees and the UI should say {START}+ employees
     */
    end: Model.INT,

    modelType: "identity/profile/employee-count-range"
  }
}
