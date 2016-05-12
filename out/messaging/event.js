import Model from 'app/api/NotTerribleModel';
import EventUrn from "app/models/common/event-urn";
import MessagingProfile from "app/models/messaging/messaging-profile";
import EventSubtype from "app/models/messaging/event/event-subtype";
import EventContent from "app/models/messaging/event/event-content";

export default class Event extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for this event
     */
    entityUrn: EventUrn,

    /**
     * @property createdAt
     * Time event was sent (milliseconds since epoch)
     */
    createdAt: Model.foreignUrn('com.linkedin.common.Time'),

    /**
     * @property from
     * Sender of the event
     */
    from: MessagingProfile,

    /**
     * @property subtype
     * Subtype of the event - in practice derived from the message type (ex. InMail, Group, etc)
     */
    subtype: EventSubtype,

    /**
     * @property eventContent
     * The actual event data
     */
    eventContent: EventContent,

    modelType: "messaging/event"
  }
}
