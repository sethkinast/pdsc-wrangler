import Model from 'app/api/NotTerribleModel';

export default class Attachment extends Model {
  static schema = {
    /**
     * @property mediaId
     * Ambry ID
     */
    mediaId: Model.STRING,

    /**
     * @property visibleByMembers
     * Members allowed to see this attachment
     */
    visibleByMembers: Model.INT,

    /**
     * @property filename
     * Name of the file
     */
    filename: Model.STRING,

    /**
     * @property size
     * Size of the attachment in bytes
     */
    size: Model.INT,

    /**
     * @property type
     * Media Type (ex. pdf,jpeg,png,etc)
     */
    type: Model.STRING,

    /**
     * @property downloadUrl
     * URL to download attachment
     */
    downloadUrl: Model.STRING,

    modelType: "internal/messaging/attachment"
  }
}
