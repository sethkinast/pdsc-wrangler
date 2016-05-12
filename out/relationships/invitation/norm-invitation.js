import Model from 'app/api/NotTerribleModel';

export default class NormInvitation extends Model {
  static schema = {
    /**
     * @property toMemberId
     * Profile id of invitation receiver
     */
    toMemberId: Model.STRING,

    /**
     * @property message
     * Invitation message
     */
    message: Model.STRING,

    modelType: "relationships/invitation/norm-invitation"
  }
}
