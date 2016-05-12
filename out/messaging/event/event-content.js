import Model from 'app/api/NotTerribleModel';
import MessageEvent from "app/models/messaging/event/message-event";
import ParticipantChangeEvent from "app/models/messaging/event/participant-change-event";
import StickerEvent from "app/models/messaging/event/sticker-event";
import GenericMessageEvent from "app/models/messaging/event/generic-message-event";

export default Model.oneOf(MessageEvent, ParticipantChangeEvent, StickerEvent, GenericMessageEvent);
