import Model from 'app/api/NotTerribleModel';

export default class Connect extends Model {
  static schema = {
    /**
     * @property emailRequired
     * optional boolean value indicating that the invitee requires that the inviter knows their email address as a requirement to send an invite.
     */
    emailRequired: Model.BOOL,

    modelType: "identity/profile/actions/connect"
  }
}
