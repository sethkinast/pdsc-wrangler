import Model from 'app/api/NotTerribleModel';
import ImageCropInfo from "app/models/identity/profile/image-crop-info";

export default class Picture extends Model {
  static schema = {
    /**
     * @property croppedImage
     * Id in Ambry of the cropped image. This should be used to display in most cases.
     */
    croppedImage: Model.STRING,

    /**
     * @property masterImage
     * Id in Ambry of the master image. This should only be used when viewing the full image (for example, clicking on the cropped image)
     */
    masterImage: Model.STRING,

    /**
     * @property cropInfo
     * Cropping information for this image.
     */
    cropInfo: ImageCropInfo,

    modelType: "identity/profile/picture"
  }
}
