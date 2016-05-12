import Model from 'app/api/NotTerribleModel';

export default class Sticker extends Model {
  static schema = {
    /**
     * @property id
     * Identifies a Sticker in a particular StickerPack
     */
    id: Model.STRING,

    /**
     * @property url
     * Url where sticker is located
     */
    url: Model.STRING,

    modelType: "internal/messaging/sticker"
  }
}
