import Model from 'app/api/NotTerribleModel';

export default class InviteeProfile extends Model {
  static schema = {
    /**
     * @property profileId
     * Obfuscated member ID for a member.
     */
    profileId: Model.STRING,

    modelType: "common/invitee-profile"
  }
}
