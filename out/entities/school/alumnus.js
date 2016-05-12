import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";
import DateRange from "app/models/common/date-range";

export default class Alumnus extends Model {
  static schema = {
    /**
     * @property miniProfile
     * The mini profile of the alumnus.
     */
    miniProfile: MiniProfile,

    /**
     * @property degreeLevel
     * The degree level to which the ranking applies (e.g. Undergraduate, MBA, etc).
     */
    degreeLevel: Model.STRING,

    /**
     * @property fieldOfStudy
     * Field of study that the alumnus participated in at this school.
     */
    fieldOfStudy: Model.STRING,

    /**
     * @property startDate
     * TODO: remove field. DEPRECATED - The date the member started attending this school.
     */
    startDate: Model.foreignUrn('com.linkedin.common.Date'),

    /**
     * @property endDate
     * TODO: remove field. DEPRECATED - The date the member graduated from this school, or expected graduation date.
     */
    endDate: Model.foreignUrn('com.linkedin.common.Date'),

    /**
     * @property timePeriod
     * The time period during which this alumnus attended the school.
     */
    timePeriod: DateRange,

    /**
     * @property objectUrn
     * Pointer to the backend object underlying this Alumnus.
     */
    objectUrn: Model.STRING,

    modelType: "entities/school/alumnus"
  }
}
