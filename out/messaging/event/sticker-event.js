import Model from 'app/api/NotTerribleModel';
import Sticker from "app/models/messaging/event/message/sticker";
import GroupContent from "app/models/messaging/event/message/group-content";

export default class StickerEvent extends Model {
  static schema = {
    /**
     * @property sticker
     * The Sticker object within the sticker event.
     */
    sticker: Sticker,

    /**
     * @property customContent
     * Custom Content within a sticker event.
     */
    customContent: GroupContent,

    modelType: "messaging/event/sticker-event"
  }
}
