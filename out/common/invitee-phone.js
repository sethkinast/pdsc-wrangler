import Model from 'app/api/NotTerribleModel';

export default class InviteePhone extends Model {
  static schema = {
    /**
     * @property phoneNumber
     * Invitee's phone
     */
    phoneNumber: Model.foreignUrn('com.linkedin.common.PhoneNumber'),

    modelType: "common/invitee-phone"
  }
}
