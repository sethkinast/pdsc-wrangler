import Model from 'app/api/NotTerribleModel';
import EventCreate from "app/models/messaging/create/event-create";
import EventSubtype from "app/models/messaging/event/event-subtype";

export default class ConversationCreate extends Model {
  static schema = {
    /**
     * @property recipients
     * Recipients of this conversation message as NIID's
     */
    recipients: Model.STRING,

    /**
     * @property subject
     * Subject of the first event in this conversation. Should not be used except for InMail's.
     */
    subject: Model.STRING,

    /**
     * @property eventCreate
     * Event required for creating conversation
     */
    eventCreate: EventCreate,

    /**
     * @property subtype
     * Subtype of the event - in practice derived from the message type (ex. InMail, Group, etc)
     */
    subtype: EventSubtype,

    /**
     * @property name
     * Name of the conversation as set by the initial conversation creator
     */
    name: Model.STRING,

    modelType: "messaging/create/conversation-create"
  }
}
