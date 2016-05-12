import Model from 'app/api/NotTerribleModel';

export default class InviteePhone extends Model {
  static schema = {
    /**
     * @property phoneNumber
     * Invitee's phone
     */
    phoneNumber: Model.foreignUrn('com.linkedin.common.PhoneNumber'),

    /**
     * @property firstName
     * First name of the contact to be invited.
     */
    firstName: Model.STRING,

    /**
     * @property lastName
     * Last name of the contact to be invited.
     */
    lastName: Model.STRING,

    modelType: "growth/invitation/invitee-phone"
  }
}
