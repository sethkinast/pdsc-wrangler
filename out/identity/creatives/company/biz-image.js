import Model from 'app/api/NotTerribleModel';
import BizCropInfo from "app/models/identity/creatives/company/biz-crop-info";

export default class BizImage extends Model {
  static schema = {
    /**
     * @property type
     * Type of the image.
     */
    type: Model.STRING,

    /**
     * @property originalMedia
     * Urn of the original (uncropped) image
     */
    originalMedia: Model.STRING,

    /**
     * @property croppedMedia
     * Urn of the cropped image
     */
    croppedMedia: Model.STRING,

    /**
     * @property cropInfo
     * Info on the associated cropped image.
     */
    cropInfo: BizCropInfo,

    modelType: "identity/creatives/company/biz-image"
  }
}
