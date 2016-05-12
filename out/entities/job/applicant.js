import Model from 'app/api/NotTerribleModel';
import MiniProfile from "app/models/identity/shared/mini-profile";

export default class Applicant extends Model {
  static schema = {
    /**
     * @property miniProfile
     * The miniProfile of the applicant.
     */
    miniProfile: MiniProfile,

    /**
     * @property location
     * The location of the applicant.
     */
    location: Model.STRING,

    /**
     * @property phoneNumber
     * The phone number of the applicant.
     */
    phoneNumber: Model.foreignUrn('com.linkedin.common.PhoneNumber'),

    /**
     * @property emailAddress
     * The primary confirmed email address of the applicant.
     */
    emailAddress: Model.foreignUrn('com.linkedin.common.EmailAddress'),

    /**
     * @property otherEmailAddresses
     * Other confirmed email addresses of the applicant.
     */
    otherEmailAddresses: Model.foreignUrn('com.linkedin.common.EmailAddress'),

    modelType: "entities/job/applicant"
  }
}
