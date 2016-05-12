import Model from 'app/api/NotTerribleModel';
import StickerPackUrn from "app/models/common/sticker-pack-urn";
import Sticker from "app/models/messaging/event/message/sticker";

export default class StickerPack extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifier for the StickerPack.
     */
    entityUrn: StickerPackUrn,

    /**
     * @property name
     * The name of the StickerPack.
     */
    name: Model.STRING,

    /**
     * @property author
     * The author of the StickerPack.
     */
    author: Model.STRING,

    /**
     * @property hidden
     * Indicate whether this StickerPack is hidden (ex. if it's an easter egg).
     */
    hidden: Model.BOOL,

    /**
     * @property previewSticker
     * The Sticker to show up in preview.
     */
    previewSticker: Sticker,

    /**
     * @property modifiedAt
     * Last modified time for this StickerPack (milliseconds since epoch).
     */
    modifiedAt: Model.foreignUrn('com.linkedin.common.Time'),

    modelType: "messaging/event/message/sticker-pack"
  }
}
