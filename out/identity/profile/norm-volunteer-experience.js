import Model from 'app/api/NotTerribleModel';
import VolunteerExperienceUrn from "app/models/common/volunteer-experience-urn";
import MiniCompanyUrn from "app/models/common/mini-company-urn";
import VolunteerCause from "app/models/identity/volunteer-cause";
import DateRange from "app/models/common/date-range";

export default class NormVolunteerExperience extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this volunteer experience
     */
    entityUrn: VolunteerExperienceUrn,

    /**
     * @property companyName
     * The name of the company where the volunteer experience took place.
     */
    companyName: Model.STRING,

    /**
     * @property companyUrn
     * URN of the company given by the user, as provided from the type-ahead.
     */
    companyUrn: MiniCompanyUrn,

    /**
     * @property role
     * Role of the member during the volunteer experience.
     */
    role: Model.STRING,

    /**
     * @property cause
     * Cause associated the volunteer experience.
     */
    cause: VolunteerCause,

    /**
     * @property timePeriod
     * The time period when this volunteer experience took place. This DateRange is meant for holding months and years only.
     */
    timePeriod: DateRange,

    /**
     * @property description
     * Description given by the member about his volunteer experience.
     */
    description: Model.STRING,

    modelType: "identity/profile/norm-volunteer-experience"
  }
}
