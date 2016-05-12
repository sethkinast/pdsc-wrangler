import Model from 'app/api/NotTerribleModel';
import MessageCreate from "app/models/messaging/create/message-create";
import ParticipantChangeCreate from "app/models/messaging/create/participant-change-create";
import StickerCreate from "app/models/messaging/create/sticker-create";

export default class EventCreate extends Model {
  static schema = {
    /**
     * @property value
     * The actual create action, typed as a union of all the create actions
     */
    value: Model.oneOf(MessageCreate, ParticipantChangeCreate, StickerCreate),

    modelType: "messaging/create/event-create"
  }
}
