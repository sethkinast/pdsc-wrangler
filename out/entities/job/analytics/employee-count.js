import Model from 'app/api/NotTerribleModel';

export default class EmployeeCount extends Model {
  static schema = {
    /**
     * @property date
     * TODO: remove field. Date for this employee count record.
     */
    date: Model.foreignUrn('com.linkedin.common.Date'),

    /**
     * @property recordedOn
     * TODO: Make required. Date for this employee count record.
     */
    recordedOn: Model.foreignUrn('com.linkedin.common.Date'),

    /**
     * @property count
     * Number of employees at the company at a given time.
     */
    count: Model.INT,

    modelType: "entities/job/analytics/employee-count"
  }
}
