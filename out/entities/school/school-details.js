import Model from 'app/api/NotTerribleModel';

export default class SchoolDetails extends Model {
  static schema = {
    /**
     * @property totalPopulation
     * Total count of all students and faculty.
     */
    totalPopulation: Model.INT,

    /**
     * @property homepageUrl
     * URL for this school's homepage.
     */
    homepageUrl: Model.foreignUrn('com.linkedin.common.Uri'),

    /**
     * @property emailAddress
     * School email address.
     */
    emailAddress: Model.foreignUrn('com.linkedin.common.EmailAddress'),

    /**
     * @property phoneNumber
     * School phone number.
     */
    phoneNumber: Model.foreignUrn('com.linkedin.common.PhoneNumber'),

    /**
     * @property schoolType
     * Will be either PUBLIC, PRIVATE, PROFIT.
     */
    schoolType: Model.STRING,

    /**
     * @property address
     * School location address.
     */
    address: Model.STRING,

    /**
     * @property yearLevel
     * Will be either UNDER_TWO_YEAR, TWO_TO_FOUR_YEAR, or FOUR_OR_MORE_YEAR.
     */
    yearLevel: Model.STRING,

    /**
     * @property graduationPercentage
     * Graduation rate.
     */
    graduationPercentage: Model.FLOAT,

    /**
     * @property inStateTuition
     * In-state tuition cost.
     */
    inStateTuition: Model.STRING,

    /**
     * @property outOfStateTuition
     * Out-of-state tuition cost.
     */
    outOfStateTuition: Model.STRING,

    modelType: "entities/school/school-details"
  }
}
