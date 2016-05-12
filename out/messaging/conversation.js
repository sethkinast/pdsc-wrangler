import Model from 'app/api/NotTerribleModel';
import ConversationUrn from "app/models/common/conversation-urn";
import MessagingProfile from "app/models/messaging/messaging-profile";
import Event from "app/models/messaging/event";

export default class Conversation extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this conversation
     */
    entityUrn: ConversationUrn,

    /**
     * @property participants
     * The participants in latest event in conversation minus current user
     */
    participants: MessagingProfile,

    /**
     * @property events
     * List of latest events in this conversation
     */
    events: Event,

    /**
     * @property read
     * Flag indicating whether thread is read or not
     */
    read: Model.BOOL,

    /**
     * @property muted
     * Muted flag denotes whether user receives notifications
     */
    muted: Model.BOOL,

    /**
     * @property unreadCount
     * Current count of unread messages in this conversation
     */
    unreadCount: Model.INT,

    /**
     * @property totalEventCount
     * Total number of events in this conversation (Note: Number includes unsupported message types as well)
     */
    totalEventCount: Model.INT,

    /**
     * @property name
     * Current name of the conversation as set by the participants
     */
    name: Model.STRING,

    modelType: "messaging/conversation"
  }
}
