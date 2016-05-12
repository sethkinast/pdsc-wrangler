import Model from 'app/api/NotTerribleModel';

export default class DateRange extends Model {
  static schema = {
    /**
     * @property startDate
     * The start date of this time period, which should be required in all use cases except in NormEducation (IDY-7073).
     */
    startDate: Model.foreignUrn('com.linkedin.common.Date'),

    /**
     * @property endDate
     * The end date of this time period.
     */
    endDate: Model.foreignUrn('com.linkedin.common.Date'),

    modelType: "common/date-range"
  }
}
