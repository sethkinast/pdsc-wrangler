import Model from 'app/api/NotTerribleModel';

export default class ParticipantChangeCreate extends Model {
  static schema = {
    /**
     * @property addParticipants
     * Profile ids of members to add to conversation
     */
    addParticipants: Model.STRING,

    /**
     * @property showHistory
     * True to expose history of thread to added participants
     */
    showHistory: Model.BOOL,

    /**
     * @property removeParticipants
     * Profile ids of members to remove from the conversation
     */
    removeParticipants: Model.STRING,

    modelType: "messaging/create/participant-change-create"
  }
}
