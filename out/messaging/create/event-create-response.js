import Model from 'app/api/NotTerribleModel';
import ConversationUrn from "app/models/common/conversation-urn";
import EventUrn from "app/models/common/event-urn";

export default class EventCreateResponse extends Model {
  static schema = {
    /**
     * @property createdAt
     * Server Timestamp subject to slight change (milliseconds since epoch)
     */
    createdAt: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property conversationUrn
     * Identifier for conversation of created event
     */
    conversationUrn: ConversationUrn,

    /**
     * @property eventUrn
     * Identifier for created event
     */
    eventUrn: EventUrn,

    modelType: "messaging/create/event-create-response"
  }
}
