import Model from 'app/api/NotTerribleModel';
import StickerUrn from "app/models/common/sticker-urn";
import MiniGroupUrn from "app/models/common/mini-group-urn";

export default class StickerCreate extends Model {
  static schema = {
    /**
     * @property stickerUrn
     * The entity urn of the sticker.
     */
    stickerUrn: StickerUrn,

    /**
     * @property customContent
     * Custom Content to send with the sticker event.
     */
    customContent: MiniGroupUrn,

    modelType: "messaging/create/sticker-create"
  }
}
