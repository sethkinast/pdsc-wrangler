import Model from 'app/api/NotTerribleModel';
import StickerUrn from "app/models/common/sticker-urn";
import Image from "app/models/common/image";

export default class Sticker extends Model {
  static schema = {
    /**
     * @property entityUrn
     * Identifies a Sticker in a particular StickerPack.
     */
    entityUrn: StickerUrn,

    /**
     * @property image
     * The actual image to present the sticker.
     */
    image: Image,

    modelType: "messaging/event/message/sticker"
  }
}
