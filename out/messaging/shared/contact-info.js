import Model from 'app/api/NotTerribleModel';

export default class ContactInfo extends Model {
  static schema = {
    /**
     * @property email
     * Email address
     */
    email: Model.foreignUrn('com.linkedin.common.EmailAddress'),

    /**
     * @property phoneNumber
     * Phone number
     */
    phoneNumber: Model.foreignUrn('com.linkedin.common.PhoneNumber'),

    modelType: "messaging/shared/contact-info"
  }
}
