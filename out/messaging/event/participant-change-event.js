import Model from 'app/api/NotTerribleModel';
import MessagingProfile from "app/models/messaging/messaging-profile";

export default class ParticipantChangeEvent extends Model {
  static schema = {
    /**
     * @property addedParticipants
     * Participants that have joined the conversation
     */
    addedParticipants: MessagingProfile,

    /**
     * @property removedParticipants
     * Participants that are being removed from the conversation
     */
    removedParticipants: MessagingProfile,

    modelType: "messaging/event/participant-change-event"
  }
}
