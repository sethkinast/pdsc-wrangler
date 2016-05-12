import Model from 'app/api/NotTerribleModel';
import Image from "app/models/common/image";

export default class PreviewImage extends Model {
  static schema = {
    /**
     * @property originalImage
     * Preview images for this url.
     */
    originalImage: Image,

    /**
     * @property mediaProxyImage
     * media Proxy image for preview.
     */
    mediaProxyImage: Image,

    modelType: "feed/urlpreview/preview-image"
  }
}
