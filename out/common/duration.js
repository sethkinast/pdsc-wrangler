import Model from 'app/api/NotTerribleModel';

export default class Duration extends Model {
  static schema = {
    /**
     * @property numDays
     * Number of days
     */
    numDays: Model.INT,

    /**
     * @property numMonths
     * Number of months
     */
    numMonths: Model.INT,

    /**
     * @property numYears
     * Number of years
     */
    numYears: Model.INT,

    modelType: "common/duration"
  }
}
