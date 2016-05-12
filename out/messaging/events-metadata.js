import Model from 'app/api/NotTerribleModel';
import MessagingProfile from "app/models/messaging/messaging-profile";

export default class EventsMetadata extends Model {
  static schema = {
    /**
     * @property participants
     * The sender plus recipients of the latest event in conversation. Note, this is not necessarily the latest event returned in events list (ex. if pagination occurring).
     */
    participants: MessagingProfile,

    modelType: "messaging/events-metadata"
  }
}
