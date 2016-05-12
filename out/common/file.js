import Model from 'app/api/NotTerribleModel';
import MediaProxyImage from "app/models/common/media-proxy-image";

export default class File extends Model {
  static schema = {
    /**
     * @property id
     * Identified of this file - typically an Ambry ID
     */
    id: Model.STRING,

    /**
     * @property name
     * Display name of the attachment - may also include extension
     */
    name: Model.STRING,

    /**
     * @property byteSize
     * Size of attachment in bytes
     */
    byteSize: Model.INT,

    /**
     * @property mediaType
     * Media/Mime type of the file
     */
    mediaType: Model.foreignUrn('com.linkedin.common.MediaType'),

    /**
     * @property reference
     * Union of various ways to reference a File
     */
    reference: Model.oneOf(MediaProxyImage, Model.foreignUrn('com.linkedin.common.Url')),

    modelType: "common/file"
  }
}
