import Model from 'app/api/NotTerribleModel';

export default class InviteeEmail extends Model {
  static schema = {
    /**
     * @property email
     * Invitee's email
     */
    email: Model.foreignUrn('com.linkedin.common.EmailAddress'),

    modelType: "growth/invitation/invitee-email"
  }
}
